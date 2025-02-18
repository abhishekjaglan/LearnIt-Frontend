import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className="bg-black p-1">
        {/* Navbar body */}
        <div className="flex justify-between items-baseline bg-black border-2 border-white rounded-lg">
            {/* Icon Section */}
            <div className="flex justify-start items-baseline pl-20 py-5 space-x-5">
                <div className="font-bold text-white text-7xl hover:bg-white hover:text-black rounded-lg">
                    <Link to={"/home"}>WeLearn</Link>
                </div>
                <div className="font-bold text-white text-lg">
                    AI
                </div>
            </div>
            {/* User Section */}
            <div className="flex justify-end">
                <div className="text-white text-3xl font-black text-right pr-20">
                    {/* TODO: Dynamic User Value */}
                    AJ
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar