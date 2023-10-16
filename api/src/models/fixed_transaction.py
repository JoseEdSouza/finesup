from abc import ABC, abstractmethod
from datetime import datetime
from api.src.utils.frequency import Frequency
from api.src.models.category import Category, ExpenseCategory, RevenueCategory


class FixedTransaction(ABC):
    pass
