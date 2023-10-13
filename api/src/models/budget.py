from api.src.models.category import ExpenseCategory
from datetime import date


class Budget:
    def __init__(self, user_id: int | None, cat: ExpenseCategory, renewal_date: date,
                 final_value: float,
                 actual_value: float = 0):
        self.__user_id = user_id
        self.__cat = cat
        self.renewal_date = renewal_date
        self.final_value = final_value
        self.actual_value = actual_value

    def deposit(self, value: float):
        self.actual_value += value
        return self

    def withdraw(self, value: float):
        self.actual_value -= value
        if self.actual_value < 0:
            self.actual_value = 0
        return self

    @property
    def user_id(self) -> int:
        return self.__user_id

    @property
    def progress(self) -> float:
        return self.actual_value/self.final_value

    @property
    def category(self) -> ExpenseCategory:
        return self.__cat
