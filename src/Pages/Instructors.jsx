import React from 'react'

import Sidebar from '../Components/Sidebar';
import InstructorsListApp from './InstructorsList';

const Instructors = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className=' mt-8 ml-4'>
        <h1 className=' font-semibold text-2xl'>Instructor</h1>

        <div className=' mt-8 ml-4'>
          <InstructorsListApp/>
        </div>

        </div>
    </div>
  )
}

export default Instructors;