import React from 'react'
<<<<<<< HEAD
import Participants from '../Participants/Participants';
=======
import Sidebar from '../Components/Sidebar';

import Approved from '../Participants/Approved';
>>>>>>> d52fe4e52e8c8f24acecb1db3b4edfbe1e41afb5


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