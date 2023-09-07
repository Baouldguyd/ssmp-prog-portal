import React, { useState, useEffect } from "react";
import { Table, Spin, Popconfirm } from "antd";
import axios from "axios";
import { BsThreeDots } from "react-icons/bs";

const EventSchedules = () => {
  const [eventDatas, seteventDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    axios
    .get("https://ssmp-api.onrender.com/api/v1/events/getAllEvents", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        seteventDatas(response.data.data);
        setLoading(false);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching approved participants:", error);
        setLoading(false);
      });
  }, []);



  const apideleteUrl = 'https://ssmp-api.onrender.com/api/v1/events/deleteEvent/'
  const newToken = sessionStorage.getItem("token");

  const handleDelete = async (eventId) => {
    
    
    try {
      const responseEvents = await axios.delete(
        apideleteUrl + eventId,
        {
          headers: {
            Authorization: `Bearer ${newToken}`,
            "Content-Type" : "application/json"
          },
        }
      );

      window.alert(responseEvents.data.responseMessage)

      console.log(`Event with ID ${eventId} has been deleted.`);
      // Check if the request was successful
      if (responseEvents.status === 200) {
        console.log(`Event with ID ${eventId} has been deleted.`);
      } else {
        console.error(`Failed to delete Event with ID ${eventId}.`);
      }
    } catch (error) {
      console.error('Error deleting Event:', error);
    }
  };

  const userData = 
  eventDatas?.map((eventData, index) => ({
    key: eventData._id, // Use the correct property that uniquely identifies a eventData
    sn: index + 1,
    eventName: eventData.eventName,
    eventDate: eventData.eventDate,
    speaker: eventData.speaker,
    
    
  }));

  const columns = [
    {
      title: "S/N",
      dataIndex: "sn",
      key: "sn",
    },
    {
      title: "Event Title",
      dataIndex: "eventName",
      key: "eventName",
    },
    {
      title: "Event Date",
      dataIndex: "eventDate",
      key: "eventDate",
    },
    {
      title: "Speaker",
      dataIndex: "speaker",
      key: "speaker",
    },
    {
      title: "Action",
      dataIndex: "operation",
      
      render: (_, record) =>
        userData.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a className="border p-3 rounded-lg">Delete</a>
          </Popconfirm>
        ) : null,
    },
    
  ];

  

  return (
    <Spin spinning={loading}>
      <div className="overflow-x-auto ">
        <Table columns={columns} dataSource={userData} />
      </div>
    </Spin>
  );
};

export default EventSchedules;
