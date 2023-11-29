from pydantic import BaseModel


class ChangeNameSchema(BaseModel):
    id: int
    new_name: str
    password: str
