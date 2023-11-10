from abc import ABC
from pydantic import BaseModel


class Category(ABC, BaseModel):
    id: int | None
    name: str


class ExpenseCategory(Category):
    pass


class RevenueCategory(Category):
    pass
