from abc import ABC
from dataclasses import dataclass


@dataclass(frozen=True)
class Category(ABC):
    id: int
    name: str


class ExpenseCategory(Category):
    pass


class RevenueCategory(Category):
    pass
