from api.src.auth.signup_schema import SignupSchema
from api.src.models.user import User
from api.src.models.userDAO import UserDAOImp
from api.src.utils.singleton import Singleton


class UserController(metaclass=Singleton):

    def __init__(self):
        self._DAO = UserDAOImp()

    # faz o sign addicionar o usuário se n existir e retornar o model introduzido no bd.
    def sign(self, signup: SignupSchema):
       if self._DAO.add(User(signup.name,signup.email,signup.password)):
       return

    def _exists(self, email: str, password: str) -> bool:
        return self._DAO.check(email, password)
