import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskModal from "./TaskModal";
import { useParams } from "react-router-dom";
import { Input } from "antd";

const { TextArea } = Input

const TaskQuestions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editableIndex, setEditableIndex] = useState(null);
  const [editedDescription, setEditedDescription] = useState("");
  const [taskDetails, setTaskDetails] = useState([]);
  const { id } = useParams();

  // ... (other code)

  const handleEditQuestion = (index) => {
    if (taskDetails[index]) {
      setEditableIndex(index);
      setEditedDescription(taskDetails[index].taskDescription);
      setIsModalOpen(true);
    } else {
      console.error("Task description is not available for this task.");
    }
  };

  const handleSaveEdit = async (editedValue) => {
    try {
      // Add logic to save the edited description
      // You can use the editedValue parameter to access the edited content

      // Example:
      // const response = await axios.put(
      //   `${process.env.REACT_APP_SSMP_BACKEND_API}tasks/updateTask`,
      //   {
      //     taskId: selectedTask._id,
      //     updatedDescription: editedValue,
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      //     },
      //   }
      // );

      // Handle the response and update the taskDetails if needed

      setIsModalOpen(false); // Close the modal after saving
    } catch (error) {
      console.error("Error updating task description:", error);
    }
  };

  if (!taskDetails || taskDetails.length === 0) {
    return <div>Loading...</div>;
  }

  const selectedTask = taskDetails.find((taskItem) => taskItem._id === id);

  if (!selectedTask) {
    return <div>Task not found for ID: {id}</div>;
  }

  return (
    <div className="flex h-[100vh] w-screen">
      <div className="p-8 max-w-[80%]" style={{ backgroundColor: "#F4F7FE" }}>
        <div key={selectedTask._id} className="mb-8">
          <h2 className="text-2xl font-bold">
            Task Submission: {selectedTask.taskTitle}
          </h2>

          <div className="mt-4">
            <label className="block text-base font-bold text-gray-700">
              Task Question
            </label>
            <div>
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              <button
                onClick={() => handleEditQuestion(selectedTask._id)}
                style={{ backgroundColor: "yellow" }}
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
        selectedTask={selectedTask} // Pass selectedTask as a prop
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