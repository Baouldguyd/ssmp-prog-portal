import React, { useState } from "react";
import TaskModal from "./TaskModal";

const TaskQuestions = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [answers, setAnswers] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here, e.g., send answers to the server
    console.log("Answers submitted:", answers);
  };

  const taskQuestions = [
    {
      taskTitle: "Introduction to HTML",
      taskQuestion: (
        <div>
          <p>
            Write a paragraph explaining the importance of <strong>HTML</strong>{" "}
            in web development. Use <em>italics</em> to emphasize key points and
            demonstrate <code>&lt;code&gt;</code> elements for code snippets.
          </p> <br />
          <p>
            How would you create an <u>underlined</u> text? Explain using HTML
            tags.
          </p>
        </div>
      ),
      path: "/details"
    },
  ];

  return (
    <div className="flex h-[100vh] w-screen">
      
      <div className="p-8 max-w-[80%]" style={{ backgroundColor: "#F4F7FE" }}>
        {taskQuestions.map((taskItem, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold">Task Submission: {taskItem.taskTitle}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block text-base font-bold text-gray-700">
                  Task Question
                </label>
                <div className="mt-2 text-gray-700">{taskItem.taskQuestion}</div>
              </div>

              <div className="mt-4">
                <label className="block text-base font-bold text-gray-700">
                  Enter Answers Below
                </label>
                <textarea
                  name={`answer${index}`} // Use a unique name for each answer
                  value={answers[`answer${index}`] || ""}
                  onChange={handleInputChange}
                  className="block w-full mt-1 p-4 text-base font-semibold border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="4"
                />
              </div>

              <button
                type="submit"
                onClick={openModal}
                className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 float-right"
              >
                Submit
              </button>
              {setModalIsOpen && <div className="overlay" onClick={closeModal}/>}
              <TaskModal isOpen={modalIsOpen} onRequestClose={closeModal}/>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskQuestions;
