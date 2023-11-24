from fastapi import APIRouter, HTTPException
from api.src.auth.auth import Auth
from api.src.auth.login_schema import LoginSchema
from api.src.auth.signup_schema import SignupSchema
from api.src.controllers.userController import UserController
from api.src.utils.route_meta import RouteMeta
from api.src.models.userDAO import UserDAOImp
from api.src.models.user import User
from api.src.utils.exceptions import AlreadyExistsError, NotFoundError


class UserRoute:
    router = APIRouter()
    controller = UserController()

    @staticmethod
    @router.post('user/signup')
    def signup(signup: SignupSchema):
        try:
            user = UserRoute.controller.signup(signup)
        except AlreadyExistsError:
            raise HTTPException(403, 'Already Exists')
        return Auth.sign(user.id, user.email)

    @staticmethod
    @router.get('user/login')
    def login(login: LoginSchema):
        try:
            user = UserRoute.controller.signin(login)
        except NotFoundError:
            raise HTTPException(404, 'Not Found')
        return Auth.sign(user.id, user.email)
