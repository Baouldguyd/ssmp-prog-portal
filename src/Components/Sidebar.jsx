import { Link } from "react-router-dom";
import { useState } from "react";
import { BsArrowLeftShort, BsChevronDown, BsSearch } from "react-icons/bs";
import { AiOutlineSlack } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import LogOutModal from './LogOutModal';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [showLogOutModal, setShowLogOutModal] = useState(false); // State to control logout modal

  const handleLogout = () => {
    setShowLogOutModal(true); // Open the logout modal
  };

 

  const Menus = [
    { title: "Dashboard", to : '/dashboard' },
    { title: "Instructors", to: '/instructors' },
    { title: "Tasks", to: '/tasks' },
    { title: "Pending Applicants", spacing: true, to: '/pending' },
   

    {
      
       title: 'Enrolled Students', to : '/students',
       
  
      
    },

    { title: 'Schedules', to:'/schedules'},
    { title: "Upload Events", to : '/upload' },
    
    { title: "Admin Profile", spacing: true, to : '/admin' },
    { title: "Create Admin", to: '/signup' },
    { title: "LogOut",  onClick:handleLogout },
  ];
  return (
    <div className=" h-screen flex bg-slate-50">
        <div
        className={`bg-transparent mt-5 border-1 shadow-lg side-bar h-[80rem] p-5 pt-[rem] ${
          open ? "w-72" : "w-24"
        } duration-300   `}
      >
        <BsArrowLeftShort
          className={` bg-white text-slate-400 text-3xl rounded-full absolute -right-4 top-9 border border-blue-100 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className=" ml-2 p-1 inline-flex ">
          <AiOutlineSlack
            className={` bg-blue-500 text-white text-4xl rounded cursor-pointer block float-left duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-blue-500  origin-left font-bold text-2xl ml-2 duration-300 ${
              !open && "scale-0"
            }`}
          >
            Administrator
          </h1>
        </div>





        <ul className="pt-20 ml-2">
          {Menus.map((menu, index) => (
            <div key={index}>
              <li
                key={index}
                className={`text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-500 hover:text-white rounded-md duration-300 ${
                  menu.spacing ? "mt-9" : "mt-2"
                } mt-2 `}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                {menu.to ? (
                <Link key={index} to={menu.to}>
                  <span
                    className={`text-base font-medium flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                </Link>
              ) : (
                <span
                className={`text-base font-medium flex-1 duration-200 ${
                  !open && "hidden"
                }`}
                onClick={menu.onClick}
              >
                {menu.title}
              </span>
            )}
                {menu.submenu && (
                  <BsChevronDown
                    className={`${submenuOpen && "rotate-180"} text-white font-extrabold`}
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  />
                )}
              </li>

              {menu.submenu && submenuOpen && open && (
                <ul>
                {menu.submenuItems.map((submenuItem, index) => (
                  <li
                    key={index}
                    className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-8 hover:bg-blue-500 rounded-md"
                  >
                    {submenuItem.to ? (
                      <Link key={index} to={submenuItem.to}>{submenuItem.title}</Link>
                    ) : (
                      submenuItem.title
                    )}
                  </li>
                ))}
              </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="h-screen flex bg-slate-50">
      {/* ... (rest of your code) */}
      
    </div>
    {showLogOutModal && ( // Render LogOutModal based on showLogOutModal state
        <LogOutModal
        isOpen={showLogOutModal}
          onRequestClose={() => setShowLogOutModal(false)}
          /* Add any additional props you need for your LogOutModal component */
        />
      )}
    </div>
    
  )
}

export default Sidebar