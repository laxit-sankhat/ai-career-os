import { useEffect, useState } from "react"

import { Navigate } from "react-router-dom"

import { getCurrentUser } from "../services/authService"

function ProtectedRoute({ children }) {

    const [isAuthenticated, setIsAuthenticated] =
        useState(null)

    useEffect(() => {

        verifyUser()

    }, [])

    const verifyUser = async () => {

        try {

            await getCurrentUser()

            setIsAuthenticated(true)

        } catch (error) {

            localStorage.removeItem("token")

            setIsAuthenticated(false)
        }
    }

    if (isAuthenticated === null) {

        return <h1>Loading...</h1>
    }

    if (!isAuthenticated) {

        return <Navigate to="/" />
    }

    return children
}

export default ProtectedRoute