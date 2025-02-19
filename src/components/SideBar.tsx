import hamburgerIcon from '../assets/hamburger.svg'
import UserInfoIcon from '../assets/user-16.png'
import logOutIcon from '../assets/logout.png'

function SideBar() {
  return (
    // Div wrapping the side bar
    <div className="p-1 bg-black w-fit h-full fixed rounded-r-lg">
        {/* Main div for sidebar */}
        <div className="flex-col space-y-20 w-xs bg-black h-full border-2 border-white rounded-lg">
          {/* Sidebar element - userinfo */}
          <div className="flex justify-start bg-black mt-5 ml-10 w-fit rounded-lg hover:border-white hover:border-2 hover:rounded-lg">
            <img src={hamburgerIcon} alt="hamburger" className='w-auto h-10' />
          </div>
          <div className="flex justify-start items-baseline space-x-10 mt-20 ml-10 ">
            <div className=' bg-black  w-fit'>
              <img src={UserInfoIcon} className='w-10 h-10'/>
            </div>
            <p className="text-white font-bold text-2xl">User Info</p>
          </div>
          {/* Sidebar element - logout */}
          <div className="flex justify-start items-center space-x-10 bg-black ml-10">
            <div className=' bg-black  w-fit '>
            <img src={logOutIcon} className='w-10 h-10'/>
            </div>
            <p className="text-white font-bold text-2xl">LogOut</p>
          </div>  
        </div>
    </div>
  )
}

export default SideBar

// function SideBar() {
//   return (
//     // Outer wrapper div - using fit-content to match inner div size
//     <div className="fixed h-full p-1 bg-black w-fit">
//         {/* Main sidebar div */}
//         <div className="flex-col w-64 bg-black h-[calc(100vh-8px)] border-2 border-white rounded-lg outline outline-2 outline-black outline-offset-2">
//           {/* Sidebar content container */}
//           <div className="flex flex-col space-y-20 p-10">
//             {/* Sidebar element - userinfo */}
//             <div className="flex items-center space-x-2">
//               <img src="../assets/information.png" alt="user info" />
//               <p className="text-white font-bold text-2xl">User Info</p>
//             </div>
//             {/* Sidebar element - logout */}
//             <div className="flex items-center space-x-2">
//               <img src="../assets/logout.png" alt="user info" />
//               <p className="text-white font-bold text-2xl">LogOut</p>
//             </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default SideBar