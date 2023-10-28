from pydantic import BaseModel
from datetime import datetime


class ClientBase(BaseModel):
    name: str


class CreateClient(ClientBase):
    pass


class UpdateClient(ClientBase):
    pass


class Client(ClientBase):
    id: int
    created_at: datetime
