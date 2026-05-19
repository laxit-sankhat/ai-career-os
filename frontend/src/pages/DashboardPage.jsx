import { useAuth }
from "../context/AuthContext"

import Navbar
from "../components/Navbar"

function DashboardPage() {

    const { user } = useAuth()

    return (

        <div>

            <Navbar />

            <h1>Dashboard Page</h1>

            {
                user && (

                    <div>

                        <h2>
                            Welcome {user.username}
                        </h2>

                        <p>
                            {user.email}
                        </p>

                    </div>
                )
            }

        </div>
    )
}

export default DashboardPage