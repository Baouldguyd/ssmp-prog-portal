import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsArrowLeftShort, BsChevronDown, BsSearch } from "react-icons/bs";
import { AiOutlineSlack } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";

const Sidebar = ({open, setOpen}) => {
  
  const [submenuOpen, setsubmenuOpen] = useState(false);

 

  const Menus = [
    { title: "Dashboard", to : '/dashboard' },
    { title: "Instructors", to: '/instructors' },
    { title: "Applicants", spacing: true, to: '/pending' },
   

    {
      
       title: 'Enrolled Students', to : '/students',
       
  
      
    },

    { title: 'Task', to:'/schedules'},
    { title: "Upload Events", to : '/upload' },
    
    { title: "Admin Profile", spacing: true, to : '/admin' },
    { title: "Setting", to: '/settings' },
  ];
  return (
    <div className=" fixed h-screen flex bg-slate-50 z-50">
      <div
        className={`bg-transparent mt-5 border-1 shadow-lg side-bar h-[80rem] p-5 pt-[rem] ${
          open ? "w-72" : "w-24"
        } duration-300  `}
      >
        <BsArrowLeftShort
          className={` bg-white text-slate-400 text-3xl rounded-full absolute -right-4 top-3 border border-blue-100 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="p-1 inline-flex ">
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

        <ul className="pt-20">
          {Menus.map((menu, index) => (
            <Link>
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
                  <Link to={menu.to}>
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
                  >
                    {menu.title}
                  </span>
                )}
                {menu.submenu && (
                  <BsChevronDown
                    className={`${
                      submenuOpen && "rotate-180"
                    } text-white font-extrabold`}
                    onClick={() => setsubmenuOpen(!submenuOpen)}
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
                        <Link to={submenuItem.to}>{submenuItem.title}</Link>
                      ) : (
                        submenuItem.title
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar