from pydantic import BaseModel, EmailStr


class SignupSchema(BaseModel):
    name: str
    email: EmailStr
    password: str

