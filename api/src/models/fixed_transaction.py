from abc import ABC, abstractmethod
from datetime import datetime
from dataclasses import dataclass
from api.src.utils.frequency import Frequency
from api.src.models.category import Category, ExpenseCategory, RevenueCategory


@dataclass(init=False)
class FixedTransaction(ABC):
    _id: int | None
    user_id: int
    name: str
    description: str
    value: float
    cat: Category
    purchase_date: datetime
    limit_date: datetime
    frequency: Frequency

    @abstractmethod
    def __init__(self, ft_id: int | None, user_id: int, name: str, description: str, value: float, cat: Category,
                 purchase_date: datetime, limit_date: datetime, frequency: Frequency):
        pass

    @property
    @abstractmethod
    def id(self) -> int:
        pass

    @property
    @abstractmethod
    def user_id(self) -> int:
        pass


class FixedExpense(FixedTransaction):

    def __init__(self, ft_id: int | None, user_id: int, name: str, description: str, value: float, cat: ExpenseCategory,
                 purchase_date: datetime, limit_date: datetime, frequency: Frequency):
        self._id = ft_id
        self._user_id = user_id
        self.name = name
        self.description = description
        self.value = value
        self.cat = cat
        self.purchase_date = purchase_date
        self.limit_date = limit_date
        self.frequency = frequency

    @property
    def id(self) -> int:
        return self._id

    @property
    def user_id(self) -> int:
        return self._user_id


class FixedRevenue(FixedTransaction):

    def __init__(self, ft_id: int | None, user_id: int, name: str, description: str, value: float, cat: RevenueCategory,
                 purchase_date: datetime, limit_date: datetime, frequency: Frequency):
        self._id = ft_id
        self._user_id = user_id
        self.name = name
        self.description = description
        self.value = value
        self.cat = cat
        self.purchase_date = purchase_date
        self.limit_date = limit_date
        self.frequency = frequency

    @property
    def id(self) -> int:
        return self._id

    @property
    def user_id(self) -> int:
        return self._user_id
