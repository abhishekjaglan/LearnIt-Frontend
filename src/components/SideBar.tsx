// import hamburgerIcon from '../assets/hamburger.svg'
// import UserInfoIcon from '../assets/user-16.png'
// import logOutIcon from '../assets/logout.png'
// import SidebarElement from './SidebarElement'

// // TODO: Create Cpmponent for sidebar element

// function SideBar() {
//   return (
//     // Div wrapping the side bar
//     <div className="p-3 pt-2 bg-black w-[316px] h-full ">
//         {/* Main div for sidebar */}
//         <div className="flex-col space-y-20 bg-black h-full border-2 border-white rounded-lg">
//           {/* hamnburger Icon */}
//           <div className="flex justify-start bg-black mt-5 ml-10 w-fit rounded-lg hover:border-white hover:border-2 hover:rounded-lg">
//             <img src={hamburgerIcon} alt="hamburger" className='w-auto h-10 p-1' />
//           </div>
//           {/* Sidebar element - userinfo */}
//           <SidebarElement Icon={UserInfoIcon} Text='User Info' LinkTo='/userinfo'/>
//           {/* Sidebar element - logout */}
//           <SidebarElement Icon={logOutIcon} Text='LogOut' LinkTo='landingpage'/>
//         </div>
//     </div>
//   )
// }

// export default SideBar
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

export default function SideBar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-2 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          E-Commerce
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
