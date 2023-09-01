import image from "../Profile/profile-image.avif";
import axios from "axios";
import { useState, useEffect } from "react";

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null); // State to hold user profile data

  const token = sessionStorage.getItem('token')

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("https://ssmp-api.onrender.com/api/v1/user/getUserProfileInfo", {
          headers: {
            Authorization: `Bearer ${token}`, // Assuming userInfo contains the token
            "Content-Type": "application/json",
          },
        });

        setUserProfile(response.data.data);
        console.log(response.data.data); // Set user profile data in state
      } catch (error) {
        console.error("An error occurred while fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [token]);



  return (
    
      <div className="  mx-9  m-3 flex gap-[4rem]">
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            src={image}
            alt=""
            className="h-[14rem] w-[14rem] p-5 rounded-md"
          />
        <hr className="w-auto mt-[12px]" />
          <h2 className=" bg-slate-100 p-4 rounded-md font-semibold">
            {userProfile?.firstName + " " + userProfile?.lastName}
            <span> - {userProfile?.role}</span>
          </h2>
  
         </div>
        <div className="grid gap-4 mt-8 ">
          <div className="grid grid-cols-[1fr_1fr] h-[4rem] bg-slate-100 p-4 rounded-md font-medium">
            <p className="">Full name : </p>
            <p>{userProfile?.firstName + " " + userProfile?.lastName}</p>
          </div>
          <div className="grid grid-cols-[1fr_1fr] h-[4rem] bg-slate-100 p-4 rounded-md font-medium">
            <p className="">Email : </p>
            <p>{userProfile?.email}</p>
          </div>
          {userProfile?.sex && (
            <div className="grid grid-cols-[1fr_1fr] h-[4rem] bg-slate-100 p-4 rounded-md font-medium">
              <p className="">Gender : </p>
              <p>{userProfile?.sex}</p>
            </div>
          )}
          {userProfile?.lga && (
            <div className="grid grid-cols-[10rem_10rem]">
              <p className="">Local Govt. Area : </p>
              <p>{userProfile?.lga}</p>
            </div>
          )}
          {userProfile?.programme && (
            <div className="grid grid-cols-[10rem_10rem]">
              <p className="">Programme : </p>
              <p>{userProfile?.programme}</p>
            </div>
          )}
          {userProfile?.occupation && (
            <div className="grid grid-cols-[10rem_10rem]">
              <p className="">Occupation : </p>
              <p>{userProfile?.occupation}</p>
            </div>
          )}
          {userProfile?.techStack && (
            <div className="grid grid-cols-[10rem_10rem]">
              <p className="">Tech Stack : </p>
              <p>{userProfile?.techStack?.toUpperCase()}</p>
            </div>
          )}
        </div>
      </div>
  
  );
};

export default Profile;
