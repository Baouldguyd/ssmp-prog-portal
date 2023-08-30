import { useState } from "react";
import { Link } from "react-router-dom";



const HtmlQuestions = () => {
  const [tasks, setTasks] = useState([
    
      {
        id: 1,
        course: "HTML",
        taskTitle: "Introduction to HTML",
        taskPoints: 100,
        status: "Not Submitted",
        deadline: "2023-11-28",
        details: "View", path:"/details",
        
      },
      {
        id:2,
        course: "HTML",
        taskTitle: "Tags, Attribute and Elements",
        taskPoints: 100,
        status: "Submitted",
        deadline: "2023-11-15",
        details: "View", path: '/details'
      },
      {
        id:3,
        course: "HTML",
        taskTitle: "DocType Element",
        taskPoints: 100,
        status: "Submitted",
        deadline: "2023-10-07",
        details: "View", path: '/details'
      },
      {
        id:4,
        course: "HTML",
        taskTitle: "Lists and Links",
        taskPoints: 100,
        status: "Submitted",
        deadline: "2023-11-03",
        details: "View", path: '/details'
      },
      {
        id:5,
        course: "HTML",
        taskTitle: "Images and Table",
        taskPoints: 100,
        status: "Submitted",
        deadline: "2023-11-03",
        details: "View", path: '/details'
      },
      {
        id:6,
        course: "HTML",
        taskTitle: "HTML Best Practices",
        taskPoints: 100,
        status: "Submitted",
        deadline: "2023-11-03",
        details: "View", path: '/details'
      },
      {
        id:7,
        course: "HTML",
        taskTitle: "HTML Inline Styling",
        taskPoints: 100,
        status: "Submitted",
        deadline: "2023-11-03",
        details: "View", path: '/details'
      },
      {
        id:8,
        course: "HTML",
        taskTitle: "HTML Quotation",
        taskPoints: 100,
        status: "Submitted",
        deadline: "2023-11-03",
        details: "View", path: '/details'
      },
      {
        id:9,
        course: "HTML",
        taskTitle: "HTML Editors",
        taskPoints: 100,
        status: "Submitted",
        deadline: "2023-11-03",
        details: "View", path: '/details'
      },
      {
        id:10,
        course: "HTML",
        taskTitle: "HTML Responsive",
        taskPoints: 100,
        status: "Not Submitted",
        deadline: "2023-11-03",
        details: "View", path: '/details'
      },
      {
        id:11,
        course: "HTML",
        taskTitle: "HTML Semantics",
        taskPoints: 100,
        status: "Not Submitted",
        deadline: "2023-11-03",
        details: "View", path: '/details'
      },
      {
        id:12,
        course: "HTML",
        taskTitle: "HTML Styles",
        taskPoints: 100,
        status: "Not Submitted",
        deadline: "2023-11-03",
        details: "View", path: '/details'
      }
      
    
  ]);

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const addTask = (taskDetails) => {
    setTasks([...tasks, taskDetails]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const taskDetails = {
      course: formData.get("course"),
      taskTitle: formData.get("taskTitle"),
      taskPoints: parseInt(formData.get("taskPoints")),
      status: "Not Submitted",
      deadline: formData.get("deadline"),
      details: "View",
      path: "/details",
    };
    addTask(taskDetails);
    event.target.reset();
  };

  return (
    <div>
       <div className=" h-[4rem]">
       <form className=" text-blue-600" onSubmit={handleSubmit}>
        <label>Course:</label>
        <input className=" border-blue-500 border-2" type="text" name="course" required />
        <label>Task Title:</label>
        <input className=" border-blue-500 border-2" type="text" name="taskTitle" required />
        <label>Task Points:</label>
        <input className=" border-blue-500 border-2" type="number" name="taskPoints" required />
        <label>Deadline:</label>
        <input type="date" name="deadline" required />
        <button className=" bg-blue-500 px-2 rounded-md text-white" type="submit">Add Task</button>
      </form>
      </div>
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100 font-bold text-sm">
            <th className="py-2 px-4 ">Course</th>
            <th className="py-2 px-4">Task Title</th>
            <th className="py-2 px-4">Task Points</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Deadline</th>
            <th className="py-2 px-4">Details</th>
          </tr>
        </thead>
        <tbody className="">
          {tasks.map((task, index) => (
            <tr key={index} className='text-center cursor-pointer rounded-xl text-gray-500 text-sm'>
              <td className="py-2 px-4">{task.course}</td>
              <td className="py-2 px-4">{task.taskTitle}</td>
              <td className="py-2 px-4">{task.taskPoints}</td>
              <td className="py-2 px-4">{task.status}</td>
              <td className="py-2 px-4">{task.deadline}</td>
              <td className="py-2 px-4 hover:underline">
              <Link to= {task.path}>{task.details}</Link>
              </td>
              <td className="py-2 px-4 text-red-400">
                <button onClick={() => deleteTask(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HtmlQuestions;
