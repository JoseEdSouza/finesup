from datetime import datetime
from pydantic import BaseModel
from typing import Optional
from api.src.utils.route_meta import RouteMeta
from api.src.models.fixed_transactionDAO import FixedExpenseDAOImp, FixedRevenueDAOImp
from api.src.models.categoryDAO import ExpenseCategory, RevenueCategory
from api.src.utils.frequency import Frequency


class FixedExpenseRoute(metaclass=RouteMeta):
    class FixedExpenseTransaction(BaseModel):
        id: Optional[int] | None
        user_id: int
        name: str
        description: str
        value: float
        cat: int
        purchase_date: float
        limit_date: datetime
        frequency: int

    DAO = FixedExpenseDAOImp()
    Model = FixedExpenseTransaction
    Key = ('id',)


class FixedRevenueRoute(metaclass=RouteMeta):
    class FixedRevenueTransaction(BaseModel):
        id: Optional[int]
        user_id: int
        name: str
        description: str
        value: float
        cat: int
        purchase_date: datetime
        limit_date: datetime
        frequency: int

    DAO = FixedRevenueDAOImp()
    Model = FixedRevenueTransaction
    Key = ('id',)
