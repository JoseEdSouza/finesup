from api.src.auth.delete_account_schema import DeleteAccountSchema
from api.src.auth.login_schema import LoginSchema
from api.src.auth.change_password_schema import ChangePasswordSchema
from api.src.auth.change_email_schema import ChangeEmailSchema
from api.src.auth.signup_schema import SignupSchema
from api.src.models.user import User
from api.src.models.userDAO import UserDAOImp
from api.src.utils.singleton import Singleton
from api.src.utils.exceptions import AlreadyExistsError, NotFoundError


class UserController(metaclass=Singleton):

    def __init__(self):
        self._DAO = UserDAOImp()

    def signup(self, schema: SignupSchema):
        if self._DAO.get_by_email(schema.email) is None:
            return self._DAO.add(User(schema.name, schema.email, schema.password))
        raise AlreadyExistsError()

    def signin(self, schema: LoginSchema):
        if self._check(schema):
            return self._DAO.get_by_email(schema.email)
        raise NotFoundError()

    def _check(self, schema: LoginSchema) -> bool:
        return self._DAO.check(schema.email, schema.password)

    def update_password(self, schema: ChangePasswordSchema):
        user = self._DAO.get(schema.id)
        if user is None:
            raise NotFoundError()
        return self._DAO.update(schema.id, User(user.name, user.email, schema.new_password))

    def update_email(self, schema: ChangeEmailSchema):
        user1 = self._DAO.get(schema.id)
        if user1 is None:
            raise NotFoundError()
        user2 = self._DAO.get_by_email(schema.new_email)

        if user2 is not None and user2.user_id != user1.user_id:
            raise AlreadyExistsError()

        return self._DAO.update(schema.id, User(user1.name, schema.new_email, user1.password))

    def delete(self, schema: DeleteAccountSchema):
        if self._DAO.get(schema.id) is None:
            raise NotFoundError()
        return self._DAO.remove(schema.id)
