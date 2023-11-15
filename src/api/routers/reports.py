import os
import shutil

from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse
from fastapi.templating import Jinja2Templates
from dependencies import get_reports_service

from service.reports import ReportService

templates = Jinja2Templates(directory="templates")

reports_router = APIRouter(prefix="/reports", tags=["reports"])


@reports_router.get("/")
def find(service: ReportService = Depends(get_reports_service)):
    file_response_data = service.create_report(
        "report", "index.j2", {"whatever": "foo"}
    )
    return StreamingResponse(**file_response_data)
