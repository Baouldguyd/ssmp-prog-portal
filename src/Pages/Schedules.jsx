import React from 'react'
import Sidebar from '../Components/Sidebar';
import TaskLists from '../Components/TaskLists';



const Schedules = () => {
  return (
    <div className='flex'>
        <hr className=' bg-black' />
          <TaskLists />

    </div>
  )
}

export default Schedules;