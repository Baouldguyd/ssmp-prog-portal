import { useState, useEffect } from "react";
import { Table, Spin } from "antd";
import axios from "axios";


const Approved = () => {
  const [ParticipantsInfo, setParticipantsInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    axios
      .get("https://ssmp-api.onrender.com/api/v1/user/getAllUsers", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setParticipantsInfo(response.data.data.totalParticipants);
        setLoading(false);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching participants:", error);
        setLoading(false);
      });
  }, []);

  const apiUrl = 'https://ssmp-api.onrender.com/api/v1/user/approvePendingParticipants/';
  
  const newToken = sessionStorage.getItem('token')

  const handleApproveStudents = async (studentId) => {
    console.log(newToken);
    
    try {
      const responseStudents = await axios.put(
        apiUrl + studentId,
        {
          // Include the additional data inside the request body
          approvalStatus: 'APPROVED',
          startDate: '2023-08-01',
          endDate: '2024-02-01',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${newToken}`,
          },
        }
      );

      window.alert(responseStudents.data.responseMessage)

      console.log(`Student with ID ${studentId} has been approved.`);
      // Check if the request was successful
      if (responseStudents.status === 200) {
        console.log(`Student with ID ${studentId} has been approved.`);
      } else {
        console.error(`Failed to approve student with ID ${studentId}.`);
      }
    } catch (error) {
      console.error('Error approving student:', error);
    }
  };

  const handleDisapproveStudents = async (studentId) => {
    console.log(newToken);
    
    try {
      const responseStudents = await axios.put(
        apiUrl + studentId,
        {
          // Include the additional data inside the request body
          approvalStatus: 'DISAPPROVED',
          startDate: '2023-08-01',
          endDate: '2024-02-01',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${newToken}`,
          },
        }
      );

      window.alert(responseStudents.data.responseMessage)

      console.log(`Student with ID ${studentId} has been approved.`);
      // Check if the request was successful
      if (responseStudents.status === 200) {
        console.log(`Student with ID ${studentId} has been approved.`);
      } else {
        console.error(`Failed to approve student with ID ${studentId}.`);
      }
    } catch (error) {
      console.error('Error approving student:', error);
    }
  };


  const columns = [
    {
      title: "S/N",
      dataIndex: "sn",
      key: "sn",
    },

    {
      title: "First-Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last-Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Programme",
      dataIndex: "programme",
      key: "programme",
    },

    {
      title: "operation",
      dataIndex: "operation",
      
      render: () =>
        {
          <div>
            <button
            onClick={
              handleApproveStudents
            }
            >
            Approve
          </button>
          <button onClick={
            handleDisapproveStudents
          }>
            DisApprove
          </button>
          </div>

        }
    },


  ];
console.log(ParticipantsInfo);
  const data = ParticipantsInfo?.map((participant, index) => {
    return {
      key: participant.id,
      sn: index + 1,
      firstName: participant.firstName,
      lastName: participant.lastName,
      email: participant.email,
      programme: participant.programme,
    };
  });

  return (
    <Spin spinning={loading}>
      <div className="overflow-x-auto">
        <Table columns={columns} dataSource={data} />
      </div>
    </Spin>
  );
};

export default Approved;
