from pydantic import BaseModel
from typing import Optional
from api.src.utils.route_meta import RouteMeta
from api.src.models.boxDAO import BoxDAOImp


class BoxRoute(metaclass=RouteMeta):
    class Box(BaseModel):
        user_id: Optional[int]
        name: str
        description: str
        final_value: float
        actual_value: float = 0
        concluded: bool = False

    DAO = BoxDAOImp()
    Model = Box
    Key = ('user_id', 'name')
