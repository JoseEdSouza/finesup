from datetime import datetime
from pydantic import BaseModel
from typing import Optional
from api.src.utils.route_meta import RouteMeta
from api.src.models.transactionDAO import ExpenseDAOImp, RevenueDAOImp
from api.src.models.categoryDAO import ExpenseCategory, RevenueCategory


class ExpenseRoute(metaclass=RouteMeta):
    class ExpenseTransaction(BaseModel):
        id: Optional[int]
        user_id: int
        name: str
        description: str
        value: float
        purchase_date: datetime
        cat: int

    DAO = ExpenseDAOImp()
    Model = ExpenseTransaction
    Key = ('id',)


class RevenueRoute(metaclass=RouteMeta):
    class RevenueTransaction(BaseModel):
        id: Optional[int]
        user_id: int
        name: str
        description: str
        value: float
        purchase_date: float
        cat: int

    DAO = RevenueDAOImp()
    Model = RevenueTransaction
    Key = ('id',)
