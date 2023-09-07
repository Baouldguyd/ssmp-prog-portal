import { useEffect, useCallback, useState } from "react";


const useGetUserInfo = () => {
  const [userInfo, setUserInfo] = useState({});
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  const getUserInfo = useCallback(async () => {
    setLoading(true);
    try {
      const request = await fetch(process.env.REACT_APP_SSMP_BACKEND_API +`user/getUserInfo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await request.json();
      // console.log(response.data);
      setUserInfo(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);
  return { userInfo, loading };
};

export default useGetUserInfo;
