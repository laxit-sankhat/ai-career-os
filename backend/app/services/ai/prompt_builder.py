from app.schemas.resume_analysis import ResumeAnalysis


def build_resume_analysis_prompt(resume_text: str) -> str:

    prompt = f"""
You are an expert ATS resume analyzer and career evaluation assistant.

Analyze the provided resume carefully and return a structured evaluation.

IMPORTANT RULES:
- Return ONLY valid JSON.
- Do NOT include markdown.
- Do NOT include explanations outside JSON.
- Keep responses concise and professional.
- ATS score must be between 0 and 100.
- candidate_level must be one of:
  Beginner, Intermediate, Advanced

Required JSON Structure:
{{
    "ats_score": int,
    "candidate_level": str,
    "summary": str,
    "strengths": [str],
    "weaknesses": [str],
    "recommended_roles": [str],
    "missing_skills": [str],
    "improvement_suggestions": [str]
}}

Resume Content:
{resume_text}
"""

    return prompt