from pydantic import BaseModel
from typing import Optional
from api.src.utils.route_meta import RouteMeta
from api.src.models.userDAO import UserDAOImp
from api.src.db.database import Database


class UserRoute(metaclass=RouteMeta):
    class User(BaseModel):
        _user_id: Optional[int]
        name: str
        email: str
        password: Optional[str]

    DAO = UserDAOImp(Database())
    Model = User
    Key = ('id',)