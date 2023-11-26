from abc import ABC
from pydantic import BaseModel
from typing import Optional


class Category(ABC, BaseModel):
    id: Optional[int]
    name: str


class ExpenseCategory(Category):
    pass


class RevenueCategory(Category):
    pass
