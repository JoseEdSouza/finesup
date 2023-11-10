from datetime import date
from pydantic import BaseModel
from typing import Optional


class Budget(BaseModel):
    user_id: Optional[int]
    cat: int
    renewal_date: date
    final_value: float
    actual_value: float
