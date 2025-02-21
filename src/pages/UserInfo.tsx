import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"

function UserInfo() {
  return (
    <div>
      <div className="bg-black">
        {/* Navbar */}
        <div className="rounded-lg">
            <NavBar/>
        </div>
        {/* Body below navbar */}
        <div className="flex flex-row">
            {/* SideBar */}
            <div className="w-[320px] min-h-screen">
                <SideBar/>
            </div>
            {/* UserInfo Body */}
            <div className="">
              {/* TODO: Make width take screen completly thats left of it */}
              <div className="bg-white w-screen h-full">

              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo