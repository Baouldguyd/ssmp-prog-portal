import React from 'react'
import Sidebar from '../Components/Sidebar';
import Participants from '../Participants/Participants';


const Students = () => {
  return (
    <div className=' flex gap-4'>
        <Sidebar/>
        <div>

          <div className=' mt-8'>
            <h1 className=' font-semibold text-xl '>
              Here are the details of students at SAIL
            </h1>
          </div>

          <div className=' mt-4 ml-4 block m-a'>
          <Participants/>
          </div>
        
        </div>
        
    </div>
  )
}

export default Students;