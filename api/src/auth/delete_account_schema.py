from pydantic import BaseModel


class DeleteAccountSchema(BaseModel):
    id: int
