import { useNavigate } from "react-router-dom"

import { useAuth }
from "../context/AuthContext"

function Navbar() {

    const navigate = useNavigate()

    const { user, logout }
        = useAuth()

    const handleLogout = () => {

        logout()

        navigate("/")
    }

    return (

        <div>

            <h2>
                AI Career OS
            </h2>

            {
                user && (

                    <div>

                        <span>
                            {user.username}
                        </span>

                        <button
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                    </div>
                )
            }

        </div>
    )
}

export default Navbar