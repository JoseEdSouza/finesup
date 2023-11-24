from api.src.auth.delete_account_schema import DeleteAccountSchema
from api.src.auth.login_schema import LoginSchema
from api.src.auth.change_password_schema import ChangePasswordSchema
from api.src.auth.change_email_schema import ChangeEmailSchema
from api.src.auth.signup_schema import SignupSchema
from api.src.models.user import User
from api.src.models.userDAO import UserDAOImp
from api.src.utils.singleton import Singleton
from api.src.utils.exceptions import AlreadyExistsError, NotFound


class UserController(metaclass=Singleton):

    def __init__(self):
        self._DAO = UserDAOImp()

    def sign(self, signup: SignupSchema):
        if self._DAO.get_by_email(signup.email) is None:
            return self._DAO.add(User(signup.name, signup.email, signup.password))
        raise AlreadyExistsError()

    def _check(self, email: str, password: str) -> bool:
        return self._DAO.check(email, password)

    def login(self, login: LoginSchema) -> bool:
        return self._check(login.email, login.password)

    def update_password(self, schema: ChangePasswordSchema):
        user = self._DAO.get(schema.id)
        if user is None:
            raise NotFound()
        return self._DAO.update(schema.id, User(user.name, user.email, schema.new_password))

    def update_email(self, schema: ChangeEmailSchema):
        user1 = self._DAO.get(schema.id)
        if user1 is None:
            raise NotFound()
        user2 = self._DAO.get_by_email(schema.new_email)

        if user2 is not None and user2.user_id != user1.user_id:
            raise AlreadyExistsError()

        return self._DAO.update(schema.id, User(user1.name, schema.new_email, user1.password))

    def delete(self, schema: DeleteAccountSchema):
        if self._DAO.get(schema.id) is None:
            raise NotFound()

        pass
