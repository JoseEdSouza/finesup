from pydantic import BaseModel


class Box(BaseModel):
    user_id: int
    name: str
    description: str
    final_value: float
    actual_value: float = 0
    concluded: bool = False
