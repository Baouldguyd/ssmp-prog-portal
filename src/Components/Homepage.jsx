import React from "react";
import { Card, Col, Row,} from "antd";
import { FaVideoSlash } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import Greetings from "./Greetings";
import { Link, useOutletContext } from "react-router-dom";
import "../App.css";
import { Calendar } from "antd";



const Homepage = () => {
  return (
    <div className={`relative pt-10 flex flex-row`}>
      {/* Greeting */}
      <div className="ml-20">
        <Greetings />
      </div>

      {/* <div>
        <div className="">
          <input
            type="text"
            placeholder="Search"
            className=" p-5 ml-[95rem] w-[15rem] h-[2rem] border border-b-blue-500 border-b-4 shadow-lg rounded-lg "
          />
        </div>
      </div> */}

      {/* DASH-BOARD */}
      <div className="absolute top-44">
        <div className=" mt-16">
          <div className=" flex flex-wrap">
            <div className=" ml-14 flex gap-5 mt-[-10rem] ">
              {/* CARDS */}
              <div className=" flex flex-wrap gap-20  mb-10">
                <Card
                  className=" border-t-8 border-blue-500 rounded-lg shadow-lg hover:scale-110 duration-200 cursor-pointer"
                  style={{ width: 350 }}
                >
                  <span className="">
                    <FiUsers className="w-12 border-4 border-blue-500 h-12 mt-2 ml-[-10px] bg-slate-100  text-blue-500 rounded-full p-2" />
                  </span>
                  <h1 className="font-extrabold text-2xl text-blue-500 flex items-center ml-10 mt-[-5rem] ">
                    Total Participants
                  </h1>
                  <p className=" text-slate-500 text-4xl font-extrabold  ml-14 mt-1 ">
                    1,300
                  </p>
                </Card>

                <Card
                  className="border-t-8 border-green-500 shadow-lg hover:scale-110 duration-200 cursor-pointer"
                  style={{ width: 350 }}
                >
                  <span className="">
                    <FiUsers className="w-12 border-4 border-green-500 h-12 mt-2 ml-[-10px] bg-slate-100  text-green-500 rounded-full p-2" />
                  </span>
                  <p className="font-extrabold text-2xl text-green-500 flex items-center ml-10 mt-[-5rem] ">
                    Approved Applicants
                  </p>
                  <p className=" text-slate-500 text-4xl font-extrabold  ml-14 mt-1 ">
                    ....
                  </p>
                </Card>

                <Card
                  className="border-t-8 border-orange-500 shadow-lg hover:scale-110 duration-200 cursor-pointer"
                  style={{ width: 350 }}
                >
                  <span className="">
                    <FiUsers className="w-12 border-4 border-orange-500 h-12 mt-2 ml-[-10px] bg-slate-100  text-orange-500 rounded-full p-2" />
                  </span>
                  <h1 className="font-extrabold text-2xl text-orange-500 flex items-center ml-10 mt-[-5rem]">
                    Pending Applicants
                  </h1>
                  <p className=" text-slate-500 text-4xl font-extrabold  ml-14 mt-1 ">
                    ....
                  </p>
                </Card>

                <Card
                  className="border-t-8 border-red-500 shadow-lg hover:scale-110 duration-200 cursor-pointer"
                  style={{ gap: 30, width: 350 }}
                >
                  <span>
                    <FiUsers className="w-12 border-4 border-red-500 h-12 mt-2 ml-[-10px] bg-slate-100  text-red-500 rounded-full p-2" />
                  </span>
                  <h1 className="font-extrabold text-2xl text-red-500 flex items-center ml-10 mt-[-5rem] ">
                    Rejected Applicants
                  </h1>
                  <p className=" text-slate-500 text-4xl font-extrabold  ml-14 mt-1 ">
                    ....
                  </p>
                </Card>
              </div>
            </div>
          </div>

          {/* big cards */}
          <div className=" ml-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="">
              <Calendar
                className=" border-l-8 border-black  border rounded-lg p-5"
              />
            </div>
            <div className="border-l-8 rounded-lg border-black p-5">Reschedule</div>
          </div>

          <hr className=" mt-14" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
// border-l-8 border-blue-500