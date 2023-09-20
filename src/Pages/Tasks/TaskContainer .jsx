import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskQuestions from "./TaskQuestions";
import HtmlQuestions from "./HtmlQuestions";

const TaskContainer = () => {
  const [taskDetails, setTaskDetails] = useState(null);

  // Function to fetch task details from the backend
  const fetchTaskDetails = async (id) => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get(
        `${process.env.REACT_APP_SSMP_BACKEND_API}tasks/getAllTask/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setTaskDetails(response.data.data);
      } else {
        console.error("Failed to fetch task details");
      }
    } catch (error) {
      console.error("Error fetching task details:", error);
    }
  };

  useEffect(() => {
    // Assuming you have the task ID from somewhere (replace 'taskId' with the actual ID)
    const taskId = "your-task-id";
    fetchTaskDetails(taskId);
  }, []);

  return (
    <div>
      {taskDetails ? (
        <div>
          <TaskQuestions taskDetails={taskDetails} />
          <HtmlQuestions taskDetails={taskDetails} />
        </div>
      ) : (
        <div>Loading task details...</div>
      )}
    </div>
  );
};

export default TaskContainer;