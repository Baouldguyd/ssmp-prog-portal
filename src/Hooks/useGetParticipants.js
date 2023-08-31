import { useEffect, useCallback, useState } from "react";
import { BASE_URL } from "../constants/baseUrl";

const useGetParticipantInfo = () => {
  const [participantsInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = sessionStorage.getItem("token");
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N…jEyfQ.UqFgRsNuhAOA7j4D55bb4Iuj0sdVkEUpYeurdao9Nic'

  const getUserInfo = useCallback(async () => {
    setLoading(true);
    try {
      const request = await fetch("https://ssmp-api.onrender.com/api/v1/user/getAllUsers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await request.json();
      // console.log(response.data);
      setLoading(false);
      setUserInfo(response.data.totalParticipants);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [token]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);
  return { participantsInfo, loading };
};

export default useGetParticipantInfo;
