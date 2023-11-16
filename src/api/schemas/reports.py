from io import BytesIO
from typing import TypedDict


class ReportResponseConfig(TypedDict):
    content: BytesIO
    media_type: str
    headers: dict[str, str]
