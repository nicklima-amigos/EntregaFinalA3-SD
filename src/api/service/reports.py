from io import BytesIO
from typing import Any

from jinja2 import Template
from fastapi.templating import Jinja2Templates
from weasyprint import HTML

from schemas import ReportResponseConfig


class ReportService:
    __templates = Jinja2Templates(directory="templates")

    def create_report(
        self,
        report_name: str,
        template_name: str,
        context: dict[str, Any],
    ):
        content: Template = self.__templates.get_template(template_name)

        with open("./static/style.css") as style:
            html_content = content.render(style=style.read(), **context)

        pdf_file = BytesIO()
        HTML(string=html_content).write_pdf(target=pdf_file)
        pdf_file.seek(0)
        return ReportResponseConfig(
            content=pdf_file,
            media_type="application/pdf",
            headers={"Content-Disposition": f"attachment; filename={report_name}.pdf"},
        )

    def render_template(self, template_name: str, context: dict[str, Any]):
        return self.__templates.TemplateResponse(template_name, context)
