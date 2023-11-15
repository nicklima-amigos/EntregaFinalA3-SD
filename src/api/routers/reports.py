import os
import shutil

from fastapi import APIRouter, Depends, HTTPException, Request
from fastapi.responses import FileResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from jinja2 import Template
from weasyprint import HTML
from dependencies import get_reports_service

from service.reports import ReportService

templates = Jinja2Templates(directory="templates")

reports_router = APIRouter(prefix="/reports", tags=["reports"])


@reports_router.get("/")
def find(service: ReportService = Depends(get_reports_service)):
    return service.create_report("report", "index.j2", {"whatever": "foo"})
