from pydantic import BaseModel
from typing import Optional
from api.src.utils.route_meta import RouteMeta
from api.src.models.userDAO import UserDAOImp


class UserRoute(metaclass=RouteMeta):
    class User(BaseModel):
        user_id: Optional[int]
        name: str
        email: str
        password: Optional[str]

    DAO = UserDAOImp()
    Model = User
    Key = ('id',)
