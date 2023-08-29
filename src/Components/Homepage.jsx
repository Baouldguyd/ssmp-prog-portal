import React from 'react'
import { FaVideoSlash } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import { TbCurrencyYen } from "react-icons/tb";
import { MdGraphicEq } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { Link } from 'react-router-dom';
import "../App.css"

const Homepage = () => {
  return (
    <div className=" mt-10 relative flex flex-row w-screen h-screen  ">
      <div className="absolute top-36">
        <div className=" mt-16">
          <div className=" flex flex-wrap">
            <div className=" ml-14 flex gap-5 mt-[-10rem] ">
              <Link to="/pending">
                <div className=" border-t-8 border-blue-500 w-[22rem] h-[10rem] flex-col items-center hover:scale-110 duration-200 content-center cursor-pointer bg-slate-50 shadow-lg p-4 m-8 rounded-lg">
                  <span className="">
                    <FiUsers className="w-12 border-4 border-blue-500 h-12 mt-8 ml-[-10px] bg-slate-100  text-blue-500 rounded-full p-2" />
                  </span>
                  <h1 className="font-extrabold text-2xl text-slate-500 flex items-center ml-10 mt-[-5.5rem] ">
                    Enrolled Students
                  </h1>
                  <p className=" text-black text-4xl font-extrabold  ml-14 mt-4 ">
                    1,300
                  </p>
                </div>
              </Link>
              <Link to="/pending">
                <div className=" border-t-8 border-blue-500 w-[22rem] h-[10rem] flex-col items-center hover:scale-110 duration-200 content-center cursor-pointer bg-slate-50 shadow-lg p-4 m-8 rounded-lg">
                  <span className="">
                    <FiUsers className="w-12 border-4 border-blue-500 h-12 mt-8 ml-[-10px] bg-slate-100  text-blue-500 rounded-full p-2" />
                  </span>
                  <h1 className="font-extrabold text-2xl text-slate-500 flex items-center ml-10 mt-[-5.5rem] ">
                    Approved Applicants
                  </h1>
                  <p className=" text-black text-4xl font-extrabold  ml-14 mt-4 ">
                    1,300
                  </p>
                </div>
              </Link>
              <Link to="/pending">
                <div className=" border-t-8 border-blue-500 w-[22rem] h-[10rem] flex-col items-center hover:scale-110 duration-200 content-center cursor-pointer bg-slate-50 shadow-lg p-4 m-8 rounded-lg">
                  <span className="">
                    <FiUsers className="w-12 border-4 border-blue-500 h-12 mt-8 ml-[-10px] bg-slate-100  text-blue-500 rounded-full p-2" />
                  </span>
                  <h1 className="font-extrabold text-2xl text-slate-500 flex items-center ml-10 mt-[-5.5rem] ">
                    Pending Applicants
                  </h1>
                  <p className=" text-black text-4xl font-extrabold  ml-14 mt-4 ">
                    1,300
                  </p>
                </div>
              </Link>
              <Link to="/pending">
                <div className=" border-t-8 border-blue-500 w-[22rem] h-[10rem] flex-col items-center hover:scale-110 duration-200 content-center cursor-pointer bg-slate-50 shadow-lg p-4 m-8 rounded-lg">
                  <span className="">
                    <FiUsers className="w-12 border-4 border-blue-500 h-12 mt-8 ml-[-10px] bg-slate-100  text-blue-500 rounded-full p-2" />
                  </span>
                  <h1 className="font-extrabold text-2xl text-slate-500 flex items-center ml-10 mt-[-5.5rem] ">
                    Rejected Applicants
                  </h1>
                  <p className=" text-black text-4xl font-extrabold  ml-14 mt-4 ">
                    1,300
                  </p>
                </div>
              </Link>
            </div>
          </div>
          {/* big cards */}
          <div className="flex">
            <div className=" ml-20 bg-slate-50 shadow-lg h-[30rem] w-[55rem] border-l-8 border-blue-500 rounded-lg mt-20 hover:scale-110 duration-200 ">
              <h1 className=" text-3xl p-5 font-extrabold ">Tasks</h1>
            </div>
            <div className=" ml-20 bg-slate-50 shadow-lg h-[30rem] w-[45rem] border-l-8 border-blue-500 rounded-lg mt-20 hover:scale-110 duration-200 ">
              <h1 className=" text-3xl p-5 font-extrabold ">Schedules</h1>
            </div>
          </div>
          <hr className=" mt-14" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;