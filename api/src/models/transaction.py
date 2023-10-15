from abc import ABC, abstractmethod
from datetime import datetime
from api.src.models.category import Category, ExpenseCategory, RevenueCategory


class Transaction(ABC):
    @abstractmethod
    def __init__(self, t_id: int, user_id: int, name: str, description: str, value: float,
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

    def __init__(self, t_id: int, user_id: int, name: str, description: str, value: float,
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

    def __str__(self) -> str:
        return f'''Expense(ID: {self._id}, Name: {self.name}, Description: {self.description}, Value: {self.value}
            ,Purchase Date: {self.purchase_date}, User ID: {self.user_id} Category ID: {self.cat.id})'''


class Revenue(Transaction):
    def __init__(self, t_id: int, user_id: int, name: str, description: str, value: float,
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

    def __str__(self) -> str:
        return f'''Revenue(ID: {self._id}, Name: {self.name}, Description: {self.description}, Value: {self.value},
             Purchase Date: {self.purchase_date}, User ID: {self.user_id} Categorie ID: {self.cat.id})'''
