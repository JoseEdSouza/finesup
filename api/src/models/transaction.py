from abc import ABC, abstractmethod
from dataclasses import dataclass
from datetime import datetime
from api.src.models.category import Category, ExpenseCategory, RevenueCategory


@dataclass
class Transaction(ABC):
    _id: int | None
    user_id: int
    name: str
    description: str
    value: float
    purchase_date: datetime
    cat: Category

    @abstractmethod
    def __init__(self, t_id: int | None, user_id: int, name: str, description: str, value: float,
                 purchase_date: datetime, cat: Category):
        pass

    @property
    @abstractmethod
    def id(self) -> int:
        pass

    @property
    @abstractmethod
    def user_id(self) -> int:
        pass


class Expense(Transaction):

    def __init__(self, t_id: int | None, user_id: int, name: str, description: str, value: float,
                 purchase_date: datetime, cat: ExpenseCategory):
        self._id = t_id
        self._user_id = user_id
        self.name = name
        self.description = description
        self.value = value
        self.purchase_date = purchase_date
        self.cat = cat

    @property
    def id(self) -> int:
        return self._id

    @property
    def user_id(self) -> int:
        return self._user_id


class Revenue(Transaction):
    def __init__(self, t_id: int | None, user_id: int, name: str, description: str, value: float,
                 purchase_date: datetime, cat: RevenueCategory):
        self._id = t_id
        self._user_id = user_id
        self.name = name
        self.description = description
        self.value = value
        self.purchase_date = purchase_date
        self.cat = cat

    @property
    def id(self) -> int:
        return self._id

    @property
    def user_id(self) -> int:
        return self._user_id
