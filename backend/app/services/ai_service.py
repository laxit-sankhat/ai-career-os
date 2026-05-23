from openai import OpenAI
from dotenv import load_dotenv
import os

import json

load_dotenv()

client = OpenAI(
    base_url="https://integrate.api.nvidia.com/v1",
    api_key=os.getenv("NVIDIA_API_KEY")
)


def analyze_resume(resume_text):

    prompt = f"""
You are an ATS resume analysis system.

Analyze the provided software engineering resume carefully.

Return ONLY valid JSON.

The response must follow this EXACT structure:

{{
  "ats_score": 0,
  "skills": [],
  "strengths": [],
  "weaknesses": [],
  "career_suggestions": []
}}

Rules:
- ATS score must be integer between 0 and 100
- skills must contain technical skills only
- strengths must be concise
- weaknesses must be realistic and actionable
- career suggestions must match candidate profile
- return arrays for all list fields
- do not include markdown
- do not include explanations
- do not include extra text
- return ONLY valid JSON


Resume:
{resume_text}
"""

    completion = client.chat.completions.create(
        model="openai/gpt-oss-20b",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.3,
        top_p=1,
        max_tokens=1000
    )

    content = completion.choices[0].message.content

    return json.loads(content)