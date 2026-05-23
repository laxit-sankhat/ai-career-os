import { useState } from "react"

import Navbar from "../components/Navbar"

import { uploadResume } from "../services/resumeService"

function DashboardPage() {

    const [selectedFile, setSelectedFile]
        = useState(null)

    const [analysis, setAnalysis]
        = useState(null)

    const [loading, setLoading]
        = useState(false)

    const handleUpload = async () => {

        if (!selectedFile) {

            alert("Please select a PDF")

            return
        }

        try {

            setLoading(true)

            const response =
                await uploadResume(selectedFile)

            setAnalysis(response.analysis)

        } catch (error) {

            console.log(error)

            alert("Upload failed")

        } finally {

            setLoading(false)
        }
    }

    return (

        <div className="
            min-h-screen
            bg-[#0B1120]
            text-white
        ">

            <Navbar />

            <div className="
                max-w-6xl
                mx-auto
                px-6
                py-10
            ">

                <div className="mb-10">

                    <h1 className="
                        text-5xl
                        font-bold
                        mb-4
                    ">
                        AI Career OS
                    </h1>

                    <p className="
                        text-gray-400
                        text-lg
                    ">
                        Upload your resume and
                        get AI-powered career insights
                    </p>

                </div>

                <div className="
                    bg-[#111827]
                    border
                    border-gray-800
                    rounded-2xl
                    p-8
                    shadow-lg
                    mb-8
                ">

                    <h2 className="
                        text-2xl
                        font-semibold
                        mb-6
                    ">
                        Resume Upload
                    </h2>

                    <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) =>
                            setSelectedFile(
                                e.target.files[0]
                            )
                        }
                        className="
                            block
                            w-full
                            text-sm
                            text-gray-300
                            mb-6
                        "
                    />

                    <button
                        onClick={handleUpload}
                        className="
                            bg-blue-600
                            hover:bg-blue-700
                            transition
                            px-6
                            py-3
                            rounded-xl
                            font-medium
                        "
                    >
                        Upload Resume
                    </button>

                </div>

                {
                    loading && (

                        <div className="
                            bg-[#111827]
                            rounded-2xl
                            p-6
                            border
                            border-gray-800
                        ">

                            <h2 className="
                                text-xl
                                font-semibold
                            ">
                                Analyzing Resume...
                            </h2>

                        </div>
                    )
                }

                {
                    analysis && (

                        <div className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            gap-6
                        ">

                            <div className="
                                bg-[#111827]
                                rounded-2xl
                                p-6
                                border
                                border-gray-800
                            ">

                                <h2 className="
                                    text-2xl
                                    font-bold
                                    mb-4
                                ">
                                    ATS Score
                                </h2>

                                <div className="
                                    text-6xl
                                    font-bold
                                    text-blue-500
                                ">
                                    {analysis.ats_score}
                                </div>

                            </div>

                            <div className="
                                bg-[#111827]
                                rounded-2xl
                                p-6
                                border
                                border-gray-800
                            ">

                                <h2 className="
                                    text-2xl
                                    font-bold
                                    mb-4
                                ">
                                    Skills
                                </h2>

                                <div className="
                                    flex
                                    flex-wrap
                                    gap-2
                                ">

                                    {
                                        analysis.skills.map(
                                            (
                                                skill,
                                                index
                                            ) => (
                                                <span
                                                    key={index}
                                                    className="
                                                        bg-blue-600
                                                        px-3
                                                        py-1
                                                        rounded-full
                                                        text-sm
                                                    "
                                                >
                                                    {skill}
                                                </span>
                                            )
                                        )
                                    }

                                </div>

                            </div>

                            <div className="
                                bg-[#111827]
                                rounded-2xl
                                p-6
                                border
                                border-gray-800
                            ">

                                <h2 className="
                                    text-2xl
                                    font-bold
                                    mb-4
                                ">
                                    Strengths
                                </h2>

                                <ul className="
                                    space-y-3
                                    text-gray-300
                                ">

                                    {
                                        analysis.strengths.map(
                                            (
                                                strength,
                                                index
                                            ) => (
                                                <li key={index}>
                                                    • {strength}
                                                </li>
                                            )
                                        )
                                    }

                                </ul>

                            </div>

                            <div className="
                                bg-[#111827]
                                rounded-2xl
                                p-6
                                border
                                border-gray-800
                            ">

                                <h2 className="
                                    text-2xl
                                    font-bold
                                    mb-4
                                ">
                                    Weaknesses
                                </h2>

                                <ul className="
                                    space-y-3
                                    text-gray-300
                                ">

                                    {
                                        analysis.weaknesses.map(
                                            (
                                                weakness,
                                                index
                                            ) => (
                                                <li key={index}>
                                                    • {weakness}
                                                </li>
                                            )
                                        )
                                    }

                                </ul>

                            </div>

                            <div className="
                                bg-[#111827]
                                rounded-2xl
                                p-6
                                border
                                border-gray-800
                                md:col-span-2
                            ">

                                <h2 className="
                                    text-2xl
                                    font-bold
                                    mb-4
                                ">
                                    Career Suggestions
                                </h2>

                                <div className="
                                    flex
                                    flex-wrap
                                    gap-3
                                ">

                                    {
                                        analysis.career_suggestions.map(
                                            (
                                                suggestion,
                                                index
                                            ) => (
                                                <div
                                                    key={index}
                                                    className="
                                                        bg-[#1E293B]
                                                        border
                                                        border-gray-700
                                                        px-4
                                                        py-3
                                                        rounded-xl
                                                    "
                                                >
                                                    {suggestion}
                                                </div>
                                            )
                                        )
                                    }

                                </div>

                            </div>

                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default DashboardPage