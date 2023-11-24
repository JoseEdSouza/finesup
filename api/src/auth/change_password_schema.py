from pydantic import BaseModel


class ChangePasswordSchema(BaseModel):
    id: int
    new_password: str
