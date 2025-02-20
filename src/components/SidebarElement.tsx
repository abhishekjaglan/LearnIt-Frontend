function SidebarElement({Icon, Text}:{Icon: string, Text: string}) {
  return (
    <div className="flex justify-start items-center space-x-10 mt-20 ml-10 ">
        <div className=' bg-black  w-fit'>
            <img src={Icon} className='w-5 h-5'/>
        </div>
        <p className="text-white font-bold text-2xl">{Text}</p>
    </div>
  )
}

export default SidebarElement