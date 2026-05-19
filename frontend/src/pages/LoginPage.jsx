import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { loginUser } from "../services/authService"

function LoginPage() {

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLogin = async (e) => {

        e.preventDefault()

        console.log(email)
        console.log(password)

        try {

            const response = await loginUser({
                email,
                password
            })

            localStorage.setItem(
                "token",
                response.access_token
            )

            alert("Login successful")

            navigate("/dashboard")

        } catch (error) {

            console.log(error)

            alert("Login failed")
        }
    }

    return (

        <div>

            <h1>Login Page</h1>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>
    )
}

export default LoginPage