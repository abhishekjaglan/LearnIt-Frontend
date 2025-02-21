import hamburgerIcon from '../assets/hamburger.svg'
import UserInfoIcon from '../assets/user-16.png'
import logOutIcon from '../assets/logout.png'
import SidebarElement from './SidebarElement'

// TODO: Create Cpmponent for sidebar element

function SideBar() {
  return (
    // Div wrapping the side bar
    <div className="p-3 pt-2 bg-black w-[316px] h-full ">
        {/* Main div for sidebar */}
        <div className="flex-col space-y-20 bg-black h-full border-2 border-white rounded-lg">
          {/* hamnburger Icon */}
          <div className="flex justify-start bg-black mt-5 ml-10 w-fit rounded-lg hover:border-white hover:border-2 hover:rounded-lg">
            <img src={hamburgerIcon} alt="hamburger" className='w-auto h-10 p-1' />
          </div>
          {/* Sidebar element - userinfo */}
          <SidebarElement Icon={UserInfoIcon} Text='User Info'/>
          {/* Sidebar element - logout */}
          <SidebarElement Icon={logOutIcon} Text='LogOut'/>
        </div>
    </div>
  )
}

export default SideBar
