import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskModal from "./TaskModal";
import { useParams } from "react-router-dom";
import { Input } from "antd";

const { TextArea } = Input;

const TaskQuestions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const { id } = useParams();
  const [editedDescription, setEditedDescription] = useState("");

  useEffect(() => {
    // Fetch task details when the component mounts
    const fetchTaskDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SSMP_BACKEND_API}tasks/getAllTask`, // Adjust the URL to match your API endpoint
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );

        // Filter tasks based on the id
        const filteredTask = response.data.data.find((task) => task._id === id);

        if (filteredTask) {
          setSelectedTask(filteredTask);
          setEditedDescription(filteredTask.taskDescription);
        } else {
          console.error("Task not found for ID:", id);
        }
      } catch (error) {
        console.error("Error fetching task details:", error.message);
      }
    };

    fetchTaskDetails(); // Call the function here
  }, [id]);

  const handleEditQuestion = () => {
    setIsModalOpen(true);
  };
  const handleSaveEdit = async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_SSMP_BACKEND_API}tasks/updateTask/:${selectedTask._id}`,
        {
          updatedDescription: editedDescription, // Send only the updated description
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
  
      // Handle the response if needed
  
      setIsModalOpen(false); // Close the modal after saving
    } catch (error) {
      console.error("Error updating task description:", error);
    }
  };
  

  if (!selectedTask) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-[100vh] w-screen">
      <div className="p-8 max-w-[80%]" style={{ backgroundColor: "#F4F7FE" }}>
        <div className="mb-8">
          <h2 className="text-2xl font-bold">
            Task Submission: {selectedTask.taskTitle}
          </h2>

          <div className="mt-4">
            <label className="block text-base font-bold text-gray-700">
              Task Question
            </label>
            <div>
              <TextArea
                cols={5}
                rows={4}
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              <button
                onClick={handleEditQuestion}
                className="bg-yellow-400 text-white mt-[1rem] rounded p-1"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onSaveEdit={handleSaveEdit}
        initialValue={editedDescription}
        selectedTask={selectedTask}
      />
    </div>
  );
};

export default TaskQuestions;






/*  const handleEditConfirmation = (index) => {
   setEditableIndex(index);
   setModalIsOpen(true);
 };
 const initialContent = (
   <p>
     Write a paragraph explaining the importance of <strong>HTML</strong> in web development.
     Use <em>italics</em> to emphasize key points and demonstrate <code>&lt;code&gt;</code> elements for code snippets.
   </p>
 );
 const [paragraphContent, setParagraphContent] = useState(initialContent);

 const taskQuestions = [
   {
     taskTitle: "Introduction to HTML",
     taskQuestion: paragraphContent,
     path: "/details",
   },
 ];
 const [editableQuestions, setEditableQuestions] = useState([
   ...taskQuestions,
 ]);

 return (
   <div className="flex h-[100vh] w-screen">
     <div className="p-8 max-w-[80%]" style={{ backgroundColor: "#F4F7FE" }}>
       {taskQuestions.map((taskItem, index) => (
         <div key={index} className="mb-8">
           <h2 className="text-2xl font-bold">
             Task Submission: {taskItem.taskTitle}
           </h2>

           <div className="mt-4">
             <label className="block text-base font-bold text-gray-700">
               Task Question
             </label>
             {editMode[index] ? (
               <textarea
                 value={editableQuestions[index].taskQuestion.props.children}
                 onChange={(e) => {
                   const editedQuestion = e.target.value;
                   handleQuestionEdit(index, editedQuestion);
                 }}
                 // Add necessary attributes and styling
               />
             ) : (
               <div className="mt-2 text-gray-700">
                 {taskItem.taskQuestion}
               </div>
             )}
           </div>

           <div className="mt-4">
             <label className="block text-base font-bold text-gray-700">
               Enter Answers Below
             </label>
             {editMode[index] ? (
               <textarea
                 value={editableQuestions[index].taskQuestion.props.children}
                 onChange={(e) => {
                   const editedQuestion = e.target.value;
                   handleQuestionEdit(index, editedQuestion);
                 }}
                 // Add necessary attributes and styling
               />
             ) : (
               <div className="mt-2 text-gray-700">
                 {initialContent.props.children[index]}
               </div>
             )}
           </div>

           <button
             type="button"
             onClick={() => handleEditConfirmation(index)}
             className="mt-4 px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 float-right"
           >
             Edit Question
           </button>

           {modalIsOpen[index] && (
             <div className="overlay" onClick={() => closeModal(index)} />
           )}

           {editableIndex !== null && (
             <TaskModal
               isOpen={modalIsOpen}
               onRequestClose={closeModal}
               onConfirm={() =>
                 handleQuestionEdit(taskQuestions[editableIndex].taskQuestion)
               }
             />
           )}
         </div>
       ))}
     </div>
   </div>
 );
};

export default TaskQuestions;
*/


/* 



import { useState, useEffect } from "react";
import axios from "axios";
import TaskModal from "./TaskModal";

const TaskQuestions = () => {
  const [taskQuestions, setTaskQuestions] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editableIndex, setEditableIndex] = useState(null);

  useEffect(() => {
    // Fetch task data from the backend API
    async function fetchTaskQuestions() {
      const token = sessionStorage.getItem("token");
      try {
        const response = await axios.get(
          process.env.REACT_APP_SSMP_BACKEND_API + "tasks/getAllTask",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              role: "ADMIN",
            },
          }
        );
        const fetchedData = response.data.data.getAllTask;
        setTaskQuestions(fetchedData);
      } catch (error) {
        console.error("Error fetching task questions:", error);
      }
    }

    fetchTaskQuestions();
  }, []);

  const handleEditQuestion = (index) => {
    setEditableIndex(index);
    setModalIsOpen(true);
  };

  const handleQuestionEdit = (editedQuestion) => {
    if (editableIndex !== null) {
      const updatedQuestions = [...taskQuestions];
      updatedQuestions[editableIndex].taskQuestion = editedQuestion;
      setTaskQuestions(updatedQuestions);
      closeModal();
    }
  };

  const closeModal = () => {
    setEditableIndex(null);
    setModalIsOpen(false);
  };

  return (
    <div className="flex h-[100vh] w-screen">
      <div className="p-8 max-w-[80%]" style={{ backgroundColor: "#F4F7FE" }}>
        {taskQuestions.map((taskItem, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold">
              Task Submission: {taskItem.taskTitle}
            </h2>

            <div className="mt-4">
              <label className="block text-base font-bold text-gray-700">
                Task Question
              </label>
              {editableIndex === index ? (
                <textarea
                  value={taskItem.taskQuestion}
                  onChange={(e) => {
                    const editedQuestion = e.target.value;
                    handleQuestionEdit(editedQuestion);
                  }}
                  // Add necessary attributes and styling
                />
              ) : (
                <div className="mt-2 text-gray-700">
                  {taskItem.taskQuestion}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => handleEditQuestion(index)}
              className="mt-4 px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 float-right"
            >
              Edit Question
            </button>
          </div>
        ))}

        {modalIsOpen && (
          <div className="overlay" onClick={closeModal} />
        )}

        {editableIndex !== null && (
          <TaskModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            onConfirm={() =>
              handleQuestionEdit(taskQuestions[editableIndex].taskQuestion)
            }
          />
        )}
      </div>
    </div>
  );
};

export default TaskQuestions;
 */