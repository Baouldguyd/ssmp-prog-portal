import React from 'react'
import Approved from "../Participants/Approved"


const Students = () => {
  return (
    <div className=' flex gap-4'>
        <div>

          <div className=' mt-8'>
            <h1 className=' font-semibold text-xl '>
              Here are the details of students at SAIL
            </h1>
          </div>

          <div className=' mt-4 ml-4 block m-a'>
          <Approved/>
          </div>
        
        </div>
        
    </div>
  )
}

export default Students;