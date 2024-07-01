import React, {useEffect, useState} from "react";
import { Card, Col, Row,} from "antd";
// import { FaVideoSlash } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
// import { BsArrowRightShort } from "react-icons/bs";
// import { TbCurrencyYen } from "react-icons/tb";
// import { MdGraphicEq } from "react-icons/md";
// import { BiSearch } from "react-icons/bi";
// import { MdOutlineLibraryBooks } from "react-icons/md";
import { Link } from "react-router-dom";
import "../App.css";
import { Calendar } from "antd";
import axios from "axios";
import Schedules from '../Pages/Schedules';
import Greetings from './Greetings'




const Homepage = () => {


// approved students
  const [approvedParticipantsInfo, setApprovedParticipantsInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const token = sessionStorage.getItem("token");
  
      axios
        .get("https://ssmp-api.onrender.com/api/v1/user/getAllApprovedParticipants", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((approvedResponse) => {
          setApprovedParticipantsInfo(approvedResponse.data.data.totalParticipants);
          
  
          setLoading(false);
          console.log(approvedResponse.data.data.totalParticipants.length);
          
          document.getElementById('approved').textContent = approvedResponse.data.data.totalParticipants.length
          document.getElementById('approvedUsers').textContent = approvedResponse.data.data.totalParticipants.length
       
        })
        .catch((error) => {
          console.error("Error fetching approved participants:", error);
          setLoading(false);
        });
    }, []);


// pending students

  const [ParticipantsInfo, setParticipantsInfo] = useState([]);
  const [userloading, setUserLoading] = useState(true);
 
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    console.log(token);

    axios
      .get("https://ssmp-api.onrender.com/api/v1/user/getAllUsers", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((totalResponse) => {
        setParticipantsInfo(totalResponse.data.data.totalParticipants);
        setLoading(false);
        console.log(totalResponse.data.data.totalParticipants.length);

         document.getElementById('total').textContent = totalResponse.data.data.totalParticipants.length
      })
      .catch((error) => {
        console.error("Error fetching approved participants:", error);
        setLoading(false);
      });
  }, []);


  //disapproved students
  const [rejectedparticipantsInfo, setRejectedParticipantsInfo] = useState([]);
  const [rejectuserloading, setRejectUserLoading] = useState(true);
  useEffect(() => {
    const token = sessionStorage.getItem("token");

    axios
      .get("https://ssmp-api.onrender.com/api/v1/user/getAllDisapprovedParticipants", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((rejectedResponse) => {
        setRejectedParticipantsInfo(rejectedResponse.data.data.totalParticipants);
        

        setLoading(false);
        console.log(rejectedResponse.data.data.totalParticipants.length);
        
        document.getElementById('disapproved').textContent = rejectedResponse.data.data.totalParticipants.length
     
      })
      .catch((error) => {
        console.error("Error fetching approved participants:", error);
        setLoading(false);
      });
  }, []);




  return (
    <div className={`relative pt-10 flex flex-row`}>
      {/* Greeting */}
      <div className="ml-20">
        <Greetings />
      </div>
 
      <div className="absolute top-44">
        <div className=" mt-16">
          <div className=" flex flex-wrap">
            <div className=" ml-14 flex gap-5 mt-[-10rem] ">
              <Card>
              
                
                <div className=" border-t-8 border-blue-500  w-[22rem] h-[10rem] flex-col items-center hover:scale-110 duration-200 content-center cursor-pointer shadow-lg p-4 m-8 rounded-lg">
                  <span className="">
                    <FiUsers className="w-12 border-4 border-blue-500 h-12 mt-8 ml-[-10px] bg-slate-100  text-blue-500 rounded-full p-2" />
                  </span>

                  <Link to='/students'>
                  <h1 className="font-extrabold text-2xl text-blue-500 flex items-center ml-10 mt-[-5rem] ">
                    Total Participants
                  </h1>
                  <p id="approved" className=" text-slate-500 text-4xl font-extrabold  ml-14 mt-1 ">
                    
                  </p>
                  </Link>
                  </div>
                 

                </Card>

                <Card
                  className="border-t-8 border-green-500 shadow-lg hover:scale-110 duration-200 cursor-pointer"
                  style={{ width: 350 }}
                >
                  <span className="">
                    <FiUsers className="w-12 border-4 border-green-500 h-12 mt-8 ml-[-10px] bg-slate-100  text-green-500 rounded-full p-2" />
                  </span>
                  <Link to='/students'>
                  
                  <p className="font-extrabold text-2xl text-green-500 flex items-center ml-10 mt-[-5rem] ">
                    <h1>
                    Approved Applicants
                  </h1>
                  </p>
                  
                  <p id="approvedUsers" className=" text-slate-500 text-4xl font-extrabold  ml-14 mt-1 " >
                  
                  </p>
                  </Link>
                </Card>

                <Card
                  className="border-t-8 border-orange-500 shadow-lg hover:scale-110 duration-200 cursor-pointer"
                  style={{ width: 350 }}
                >
                  <span className="">
                    <FiUsers className="w-12 border-4 border-orange-500 h-12 mt-8 ml-[-10px] bg-slate-100  text-orange-500 rounded-full p-2" />
                  </span>
                  <Link to='/pending'>
                  <h1 className="font-extrabold text-2xl text-orange-500 flex items-center ml-10 mt-[-5rem]">
                    Pending Applicants
                  </h1>
                  <p id="total" className=" text-slate-500 text-4xl font-extrabold  ml-14 mt-1 ">
                    
                  </p>
                  </Link>
                </Card>

                <Card
                  className="border-t-8 border-red-500 shadow-lg hover:scale-110 duration-200 cursor-pointer"
                  style={{ gap: 30, width: 350 }}
                >
                  <span>
                    <FiUsers className="w-12 border-4 border-red-500 h-12 mt-2 ml-[-10px] bg-slate-100  text-red-500 rounded-full p-2" />
                  </span>
                  <Link to='/disapproved'>
                  
                  <h1 className="font-extrabold text-2xl text-red-500 flex items-center ml-10 mt-[-5rem] ">
                    Rejected Applicants
                  </h1>
                  <p id='disapproved' className=" text-slate-500 text-4xl font-extrabold  ml-14 mt-1 ">
                  
                  </p>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
          {/* big cards */}
          <div className="flex">
            <div className=" overflow-auto  ml-20 bg-slate-50 shadow-lg h-[30rem] w-[100%] border-l-8 border-blue-500 rounded-lg mt-20 hover:scale-100 duration-200 ">
              <Calendar className=" w-[100%]" />
            </div>
            
            <div className="border-l-8 rounded-lg border-black p-5">
              <Schedules/>
            </div>
          </div>
          <hr className=" mt-14" />
        </div>
      </div>
    
  );
};

export default Homepage;
