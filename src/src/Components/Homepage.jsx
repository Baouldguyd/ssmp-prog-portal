import React from 'react'
import { FaVideoSlash } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import { TbCurrencyYen } from "react-icons/tb";
import { MdGraphicEq } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    
    <div>
      
      
        <div className=" mt-10 relative flex flex-row w-screen p-  ">
          <div className="ml-7">
             <h3 className="font-semibold text-base">Hi, Geezy</h3>
             <h1 className="text-3xl font-bold">Welcome to SAIL!</h1>
          </div>
          <div className="absolute top-36">
            <div>
              <div className="">
                <div className=" flex flex-wrap">
                  <div className=" ">
                  <Link to='/pending'>
                    <div className=" flex-col items-center hover:scale-110 duration-200 content-center cursor-pointer bg-white shadow-lg p-4 m-8 rounded-lg  h-32">
                      <span className="">
                        <FiUsers className="w-10 h-10 mt-7 bg-slate-100  text-blue-500 rounded-full p-2" />
                      </span>
                      <h1 className="font-extrabold text-xl text-slate-400 flex items-center ml-14 mt-[-4rem] ">
                        Pending Applicants
                      </h1>
                      <p className=" text-black text-2xl font-extrabold  ml-14 ">
                        13
                      </p>
                    </div>
                    </Link>

                    <Link to='/students'>
                    <div className=" hover:scale-110 duration-200 flex cursor-pointer w-80 bg-white shadow-lg p-4 m-8 rounded-lg">
                    <div className=" bg-slate-100 w-10 h-10 p-3 rounded-full text-3xl mt-7 ">
                        <FiUsers className=" text-blue-500 text-2xl mt-[-4px] ml-[-4px] " />
                      </div>
                      <h1 className=" text-2xl text-slate-400 font-extrabold flex items-center gap-2 mt-[-4rem] ml-3">
                        Enrolled Students
                      </h1>

                      <p className="  mt-9 text-2xl ml-[-4rem] font-extrabold">
                        230
                      </p>
                    </div>
                    </Link>

                    <Link to='/students'>
                    <div className=" hover:scale-110 duration-200 cursor-pointer w-80 bg-white shadow-lg p-4 m-8 rounded-lg">
                      <div className="bg-slate-100 w-11 h-11 p-2 rounded-full text-3xl mt-7">
                        <FiUsers className="  p-1 text-blue-500 " />
                      </div>
                      <h1 className=" font-extrabold text-slate-400 ml-16 flex items-center gap-5 mt-[-65px] text-2xl">
                        Active Students
                      </h1>
                      <p className="ml-16 text-2xl font-extrabold">230</p>
                    </div>
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Homepage;