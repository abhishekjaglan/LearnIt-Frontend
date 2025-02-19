function SideBar() {
  return (
    // Div wrapping the side bar
    <div className="p-1 bg-black">
        {/* Main div for sidebar */}
        <div className="flex-col space-y-20 w-sm bg-black fixed h-full border-2 border-white rounded-lg">
          <div className="flex justify-start items-baseline space-x-2 bg-black mt-20 ml-10">
            <img src="../assets/information.png" alt="user info" />
            <p className="text-white font-bold text-2xl">User Info</p>
          </div>
          <div className="flex justify-start items-baseline space-x-2 bg-black ml-10">
            <img src="../assets/logout.png" alt="user info" />
            <p className="text-white font-bold text-2xl">LogOut</p>
          </div>  
        </div>
    </div>
  )
}

export default SideBar
