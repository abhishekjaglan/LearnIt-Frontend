import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import UrlParsing from "../components/UrlParsing"
import WelcomeBar from "../components/WelcomeBar"

function Home() {
  return (
    <div>
        {/* Navbar */}
        <div>
            <NavBar/>
        </div>
        {/* Body below navbar */}
        <div className="flex flex-row">
            {/* SideBar */}
            <div className="w-[320px] min-h-screen">
                <SideBar/>
            </div>
            {/* URL Parsing Body */}
            <div className="flex flex-col flex-1 -ml-1">
                <WelcomeBar/>
                <div className="min-h-screen">
                  <UrlParsing/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home