from dataclasses import dataclass
from typing import Optional


@dataclass
class User:
    name: str
    email: str
    password: str
    user_id: Optional[int] = 0
