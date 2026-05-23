import os

from fastapi import APIRouter, UploadFile, File

from app.services.resume_service import (
    extract_text_from_pdf
)

from app.services.ai_service import analyze_resume

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)

UPLOAD_FOLDER = "app/uploads"

@router.post("/upload")
async def upload_resume(
    file: UploadFile = File(...)
):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:

        content = await file.read()

        buffer.write(content)

    extracted_text = extract_text_from_pdf(
        file_path
    )

    analysis = analyze_resume(extracted_text)

    return {
        "filename": file.filename,
        "analysis": analysis
    }