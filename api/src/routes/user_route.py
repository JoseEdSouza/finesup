from fastapi import APIRouter

from api.src.auth.auth import Auth
from api.src.auth.login_schema import LoginSchema
from api.src.auth.signup_schema import SignupSchema
from api.src.utils.route_meta import RouteMeta
from api.src.models.userDAO import UserDAOImp
from api.src.models.user import User


class UserRoute(metaclass=RouteMeta):
    DAO = UserDAOImp()
    Model = User
    Key = ('id',)


class LoginRoute:
    router = APIRouter()

    @staticmethod
    @router.get('user/signup')
    def signup(signup: SignupSchema):
        user = User(signup.name, signup.email, signup.password)
        return Auth.sign(user.email)

    @staticmethod
    @router.get('user/login')
    def login(login: LoginSchema):
        pass
