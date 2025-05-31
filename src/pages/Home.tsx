import NavBarMain from "../components/legacy/NavBarMain"
import SideBar from "../components/legacy/SideBar"
import UrlParsing from "../components/legacy/UrlParsing"
import WelcomeBar from "../components/legacy/WelcomeBar"

function Home() {
  return (
    <div >
        {/* Navbar */}
        <div className=" w-full">
            <NavBarMain/>
        </div>
        {/* Body below navbar */}
        <div className="flex flex-row">
            {/* SideBar */}
            <div className="w-[320px] min-h-screen">
                <SideBar/>
            </div>
            {/* URL Parsing Body */}
            <div className="flex flex-col flex-1 -ml-1">
                <div className="rounded-lg bg-white">
                  <WelcomeBar/> 
                </div>
                <div className="min-h-screen rounded-lg bg-white">
                  <UrlParsing/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home