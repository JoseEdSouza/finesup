from api.src.models.category import ExpenseCategory
from datetime import date


class Budget:
    def __init__(self, _id: int | None, user_id: int | None, cat: ExpenseCategory, renewal_date: date,
                 final_value: float,
                 actual_value: float = 0):
        self._id = _id
        self.user_id = user_id
        self.cat = cat
        self.renewal_date = renewal_date
        self.final_value = final_value
        self.actual_value = actual_value

    @property
    def id(self):
        return self._id

    def deposit(self, value: float):
        self.actual_value += value
        # todo implement DAO

    def withdraw(self, value: float):
        self.actual_value -= value
        if self.actual_value < 0:
            self.actual_value = 0
        # todo implement DAO
