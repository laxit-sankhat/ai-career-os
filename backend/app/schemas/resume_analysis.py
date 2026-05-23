from pydantic import BaseModel, Field
from typing import List


class ResumeAnalysis(BaseModel):
    ats_score: int = Field(ge=0, le=100)

    candidate_level: str

    summary: str

    strengths: List[str]

    weaknesses: List[str]

    recommended_roles: List[str]

    missing_skills: List[str]

    improvement_suggestions: List[str]