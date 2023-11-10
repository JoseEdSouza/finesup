from pydantic import BaseModel
from typing import Optional


class Box(BaseModel):
    user_id: Optional[int]
    name: str
    description: str
    final_value: float
    actual_value: float = 0
    concluded: bool = False
