// import { useEffect, useState } from "react";

// const useGetApprovedParticipantsInfo = () => {
//   const [approvedParticipantsInfo, setApprovedParticipantsInfo] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const token = sessionStorage.getItem("token");

//   const getApprovedParticipantsInfo = async () => {
//     setLoading(true);
//     try {
//       const request = await fetch(
//         "https://ssmp-api.onrender.com/api/v1/user/getAllApprovedParticipants",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       const response = await request.json();
//       setLoading(false);
//       setApprovedParticipantsInfo(response.data); // Assuming the API returns an array of approved participants
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getApprovedParticipantsInfo();
//   }, []);

//   return { approvedParticipantsInfo, loading };
// };

// export default useGetApprovedParticipantsInfo;

import { useEffect, useState } from "react";

const useGetApprovedParticipantInfo = () => {
  const [approvedParticipantsInfo, setApprovedParticipantsInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = sessionStorage.getItem("token");

  const getApprovedParticipantsInfo = async () => {
    setLoading(true);
    try {
      const request = await fetch(
        "https://ssmp-api.onrender.com/api/v1/user/getAllApprovedParticipants",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const response = await request.json();
      console.log("API Response:", response); // Log the API response
      setLoading(false);
      setApprovedParticipantsInfo(response.totalParticipants || []);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getApprovedParticipantsInfo();
  }, []);

  return { approvedParticipantsInfo, loading };
};

export default useGetApprovedParticipantInfo;
