import {useState} from "react"
import {NavLink} from "react-router-dom";
// import {
//     Card,
//     Typography,
//     List,
//     ListItem,
//     ListItemPrefix,
//     ListItemSuffix,
//     Chip,
//   } from "@material-tailwind/react";
//   import {
//     PresentationChartBarIcon,
//     ShoppingBagIcon,
//     UserCircleIcon,
//     Cog6ToothIcon,
//     InboxIcon,
//     PowerIcon,
 // } from "@heroicons/react/24/solid";
   
  export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(true);

    return (
    //    
    <>
    {showSidebar ? (
      <button
        className="flex text-4xl text-white items-center cursor-pointer fixed left-0 top-6 z-50"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        x
      </button>
    ) : (
      <svg
        onClick={() => setShowSidebar(!showSidebar)}
        className="fixed  z-30 flex items-center cursor-pointer left-0 top-6"
        fill="#2563EB"
        viewBox="0 0 100 80"
        width="40"
        height="40"
      >
        <rect width="100" height="10"></rect>
        <rect y="30" width="100" height="10"></rect>
        <rect y="60" width="100" height="10"></rect>
      </svg>
    )}

    <div
      className={`top-0 left-0 w-[20vw] bg-blue-900  p-10 pl-10 text-white fixed h-full z-40  ease-in-out duration-300 ${
        showSidebar ? "translate-x-0 " : "translate-x-full"
      }`}
      style={{ width: '20vw', left: 0, transition: 'ease-in-out duration-300', transform: showSidebar ? 'translateX(0)' : 'translateX(-100%)' }}
    >
      <h3 className="mt-12 mb-5 text-3xl font-semibold text-white">
        SkyLink
      </h3>
      <ul className="flex flex-col py-4">
      <li className="px-4 py-2 hover:bg-gray-200  text-2xl" style={{marginTop: "20px"}}>
        <NavLink to={`dashboard/products`} className="text-white-700 hover:text-gray-900 flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
        </svg>

          Products
        </NavLink>
      </li>
      <li className="px-4 py-2 hover:bg-gray-200  text-2xl" style={{marginTop: "20px"}}>
        <NavLink to={`dashboard/users`} className="text-white-700 hover:text-gray-900 flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>

          Users
        </NavLink>
      </li>
    </ul>

    </div>
  </>
    );
  }