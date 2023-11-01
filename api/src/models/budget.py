from datetime import date
from api.src.models.category import ExpenseCategory


class Budget:
    def __init__(self, user_id: int | None, cat: int, renewal_date: date,
                 final_value: float,
                 actual_value: float = 0):
        self._user_id = user_id
        self._cat = cat
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
        return self._user_id

    @property
    def category(self) -> int:
        return self._cat

    @property
    def progress(self) -> float:
        return self.actual_value / self.final_value

    def __str__(self) -> str:
        return f'Budget(User ID: {self.user_id}, Category: {self.category}, Renewal Date: {self.renewal_date}' \
               f', Final Value: {self.final_value}, Actual Value: {self.actual_value})'
