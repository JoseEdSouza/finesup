from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional
from api.src.models.userDAO import UserDAO, UserDAOImp
from api.src.db.database import Database


# user_dao: UserDAO = UserDAOImp(Database())
# user_router = APIRouter()
#
#
# @user_router.get('/user/{user_id}')
# def get_user(user_id: int):
#     return user_dao.get(user_id)
#
#
# @user_router.post('/user/add')
# def add_user(user):
#     ret = user_dao.add(user)
#     print('ok' if ret else 'not ok')
#     return user


class Route:
    class User(BaseModel):
        _user_id: Optional[int]
        name: str
        email: str
        password: Optional[str]
        __key = ('id','name')

    router = APIRouter()
    _DAO = UserDAOImp(Database())

    @staticmethod
    @router.get('/user/{user_id}')
    async def get_user(user_id: int):
        return Route._DAO.get(user_id)

    @staticmethod
    @router.post('/user/add')
    async def post_add_user(user: User):
        Route._DAO.add(user)
        return user

    @staticmethod
    @router.post('/user/update/{user_id}')
    async def post_update_user(user_id: int, user: User):
        Route._DAO.update(user_id, user)
        return user

