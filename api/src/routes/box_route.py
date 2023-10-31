from pydantic import BaseModel
from typing import Optional
from api.src.utils.route_meta import RouteMeta
from api.src.models.boxDAO import BoxDAOImp
from api.src.db.database import Database


class BoxRoute(metaclass=RouteMeta):
    class Box(BaseModel):
        _user_id: Optional[int]
        name: str
        description: str
        final_value: float
        actual_value: float = 0
        concluded: bool = False

    DAO = BoxDAOImp(Database())
    Model = Box
    Key = ('user_id', 'name')