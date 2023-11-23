from datetime import date
from pydantic import BaseModel


class Budget(BaseModel):
    user_id: int
    category: int
    renewal_date: date
    final_value: float
    actual_value: float
