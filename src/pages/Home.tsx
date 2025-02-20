import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"

function Home() {
  return (
    <div>
        {/* Navbar */}
        <div>
            <NavBar/>
        </div>
        {/* Body below navbar */}
        <div className="flex">
            {/* SideBar */}
            <div>
                <SideBar/>
            </div>
            {/* URL Parsing Body */}
            <div>
              
            </div>
        </div>
    </div>
  )
}

export default Home