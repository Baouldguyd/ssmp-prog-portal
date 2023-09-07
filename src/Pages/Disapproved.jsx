import React from 'react'
import Rejected from "../Participants/Rejected";


const Students = () => {
  return (
    <div className=' flex gap-4'>
        <div>

          <div className=' mt-8'>
            <h1 className=' font-semibold text-xl pl-[1rem]'>
              Rejected Students
            </h1>
          </div>

          <div className=' mt-4 ml-4 block m-a'>
          <Rejected />
          </div>
        
        </div>
        
    </div>
  )
}

export default Students;