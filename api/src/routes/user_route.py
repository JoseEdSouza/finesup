from fastapi import APIRouter, HTTPException, Body
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
    @router.post('/api/user/signup', response_model=Auth.AuthResponse)
    def signup(signup: SignupSchema):
        try:
            user = UserRoute.controller.signup(signup)
        except AlreadyExistsError:
            raise HTTPException(403, 'Already Exists')
        return Auth.sign(user.user_id, user.email, user.name)

    @staticmethod
    @router.post('/api/user/login', response_model=Auth.AuthResponse)
    def login(login: LoginSchema):
        try:
            user = UserRoute.controller.signin(login)
        except NotFoundError:
            raise HTTPException(404, 'Not Found')
        return Auth.sign(user.user_id, user.email, user.name)
