from abc import ABC
from datetime import date
from pydantic import BaseModel


class Transaction(ABC, BaseModel):
    id: int | None
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
