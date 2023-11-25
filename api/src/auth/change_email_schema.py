from pydantic import BaseModel, EmailStr


class ChangeEmailSchema(BaseModel):
    id: int
    new_email: EmailStr
