import { Link } from "react-router-dom"

function SidebarElement({Icon, Text, LinkTo}:{Icon: string, Text: string, LinkTo: string}) {
  return (
    <div>
        <Link to={LinkTo}>
            <div className="flex justify-start items-center mt-20 ml-10 space-x-5">
                <div className=' bg-black  w-fit'>
                    <img src={Icon} className='w-5 h-5'/>
                </div>
                <p className="text-white font-bold text-2xl  hover:text-black hover:bg-white rounded-4xl px-4">{Text}</p>
            </div>
        </Link>
    </div>
  )
}

export default SidebarElement