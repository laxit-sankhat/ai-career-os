import { useNavigate } from "react-router-dom"

function Navbar() {

    const navigate = useNavigate()

    const handleLogout = () => {

        localStorage.removeItem("token")

        navigate("/")
    }

    return (

        <nav className="
            flex
            justify-between
            items-center
            px-8
            py-5
            border-b
            border-gray-800
            bg-[#0F172A]
        ">

            <h1 className="
                text-2xl
                font-bold
                text-white
            ">
                AI Career OS
            </h1>

            <button
                onClick={handleLogout}
                className="
                    bg-red-600
                    hover:bg-red-700
                    transition
                    px-5
                    py-2
                    rounded-xl
                    text-white
                "
            >
                Logout
            </button>

        </nav>
    )
}

export default Navbar