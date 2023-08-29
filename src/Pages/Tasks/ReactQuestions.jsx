import React from 'react'
import { Link } from 'react-router-dom';
import TaskQuestions from "./TaskQuestions";


const ReactQuestions = () => {
    const tasks = [
        {
          course: "React",
          taskTitle: "Introduction to HTML",
          taskPoints: 100,
          status: "Not Submitted",
          deadline: "2023-11-28",
          details: "View", path:"/details"
        },
        {
          course: "React",
          taskTitle: "Tags, Attribute and Elements",
          taskPoints: 100,
          status: "Submitted",
          deadline: "2023-11-15",
          details: "View", path: '/details'
        },
        {
          course: "React",
          taskTitle: "DocType Element",
          taskPoints: 100,
          status: "Submitted",
          deadline: "2023-10-07",
          details: "View", path: '/details'
        },
        {
          course: "React",
          taskTitle: "Lists and Links",
          taskPoints: 100,
          status: "Submitted",
          deadline: "2023-11-03",
          details: "View", path: '/details'
        },
        {
          course: "React",
          taskTitle: "Images and Table",
          taskPoints: 100,
          status: "Submitted",
          deadline: "2023-11-03",
          details: "View", path: '/details'
        },
        {
          course: "React",
          taskTitle: "HTML Best Practices",
          taskPoints: 100,
          status: "Submitted",
          deadline: "2023-11-03",
          details: "View", path: '/details'
        },
        {
          course: "React",
          taskTitle: "HTML Best Practices",
          taskPoints: 100,
          status: "Submitted",
          deadline: "2023-11-03",
          details: "View", path: '/details'
        },
        {
          course: "React",
          taskTitle: "HTML Best Practices",
          taskPoints: 100,
          status: "Submitted",
          deadline: "2023-11-03",
          details: "View", path: '/details'
        },
        {
          course: "React",
          taskTitle: "HTML Best Practices",
          taskPoints: 100,
          status: "Submitted",
          deadline: "2023-11-03",
          details: "View", path: '/details'
        },
        {
          course: "React",
          taskTitle: "HTML Best Practices",
          taskPoints: 100,
          status: "Not Submitted",
          deadline: "2023-11-03",
          details: "View", path: '/details'
        },
        {
          course: "React",
          taskTitle: "HTML Best Practices",
          taskPoints: 100,
          status: "Not Submitted",
          deadline: "2023-11-03",
          details: "View", path: '/details'
        },
        {
          course: "React",
          taskTitle: "HTML Best Practices",
          taskPoints: 100,
          status: "Not Submitted",
          deadline: "2023-11-03",
          details: "View", path: '/details'
        },
        
      ];
    
      return (
        <div>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
  )
}

export default ReactQuestions