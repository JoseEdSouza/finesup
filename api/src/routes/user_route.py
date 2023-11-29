from fastapi import APIRouter, HTTPException, Depends, Header
from api.src.auth.auth import Auth
from api.src.auth.bearer import Bearer
from api.src.auth.change_email_schema import ChangeEmailSchema
from api.src.auth.change_name_schema import ChangeNameSchema
from api.src.auth.change_password_schema import ChangePasswordSchema
from api.src.auth.delete_account_schema import DeleteAccountSchema
from api.src.auth.login_schema import LoginSchema
from api.src.auth.signup_schema import SignupSchema
from api.src.controllers.userController import UserController
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
        return Auth.sign(user.user_id, user.email, user.name, signup.password)

    @staticmethod
    @router.post('/api/user/login', response_model=Auth.AuthResponse)
    def login(login: LoginSchema):
        try:
            user = UserRoute.controller.signin(login)
        except NotFoundError:
            raise HTTPException(404, 'Not Found')
        return Auth.sign(user.user_id, user.email, user.name, login.password)

    @staticmethod
    @router.put('/api/user/update_password', dependencies=[Depends(Bearer())])
    def change_password(schema: ChangePasswordSchema, authorization: str = Header(None)):
        try:
            token = authorization.split(" ")[1]
            payload = Auth.decode(token)
            if payload is None:
                raise HTTPException(status_code=401, detail="Unauthorized token")
            schema.id = payload['user_id']
            user_updated = UserRoute.controller.update_password(schema)
        except NotFoundError:
            raise HTTPException(404, 'Not Found')
        return Auth.sign(user_updated.user_id, user_updated.email, user_updated.name, schema.new_password)

    @staticmethod
    @router.put('/api/user/update_email', dependencies=[Depends(Bearer())])
    def change_email(email_schema: ChangeEmailSchema, authorization: str = Header(None)):
        try:
            token = authorization.split(" ")[1]
            payload = Auth.decode(token)
            if payload is None:
                raise HTTPException(status_code=401, detail="Unauthorized token")
            email_schema.id = payload['user_id']
            user_updated = UserRoute.controller.update_email(email_schema)
        except NotFoundError:
            raise HTTPException(404, 'Not found')
        except AlreadyExistsError:
            raise HTTPException(409, 'Already Exists')
        return Auth.sign(user_updated.user_id, user_updated.email, user_updated.name, email_schema.password)

    @staticmethod
    @router.delete('/api/user/delete', dependencies=[Depends(Bearer())])
    def delete_account(account: DeleteAccountSchema, authorization: str = Header(None)):
        token = authorization.split(" ")[1]
        payload = Auth.decode(token)
        if payload is None:
            raise HTTPException(status_code=401, detail="Unauthorized token")
        if payload['user_id'] != account.id:
            raise HTTPException(404, "User_id do not match")
        return UserRoute.controller.delete(account)

    @staticmethod
    @router.put('/api/user/update_name', dependencies=[Depends(Bearer())])
    def change_name(account: ChangeNameSchema, authorization: str = Header(None)):
        try:
            token = authorization.split(" ")[1]
            payload = Auth.decode(token)
            if payload is None:
                raise HTTPException(status_code=401, detail="Unauthorized token")
            account.id = payload['user_id']
            user_new_name = UserRoute.controller.update_name(account)
        except NotFoundError:
            raise HTTPException(404, 'Not found')
        return Auth.sign(user_new_name.user_id, user_new_name.email, user_new_name.name, account.password)
