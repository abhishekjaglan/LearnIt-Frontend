import NavBarMain from "../components/NavBarMain"
import SideBar from "../components/SideBar"
import UrlParsing from "../components/UrlParsing"
import WelcomeBar from "../components/WelcomeBar"

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