from abc import ABC
from datetime import date
from pydantic import BaseModel
from typing import Optional
from api.src.utils.frequency import Frequency


class FixedTransaction(ABC, BaseModel):
    id: Optional[int]
    user_id: int
    name: str
    description: str
    value: float
    cat: int
    purchase_date: date
    limit_date: date
    frequency: Frequency


class FixedExpense(FixedTransaction):
    pass


class FixedRevenue(FixedTransaction):
    pass
