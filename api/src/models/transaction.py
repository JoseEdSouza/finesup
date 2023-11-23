from abc import ABC
from datetime import date
from pydantic import BaseModel
from typing import Optional


class Transaction(ABC, BaseModel):
    id: Optional[int]
    user_id: int
    name: str
    description: str
    value: float
    purchase_date: date
    cat: int


class Expense(Transaction):
    pass


class Revenue(Transaction):
    pass
