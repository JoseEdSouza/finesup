from abc import ABC
from dataclasses import dataclass


@dataclass(frozen=True)
class Category(ABC):
    id: int | None
    name: str


class ExpenseCategory(Category):
    pass


class RevenueCategory(Category):
    pass
