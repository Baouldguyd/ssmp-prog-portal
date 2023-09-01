import React from 'react'
import Sidebar from '../Components/Sidebar'
import Participants from '../Participants/Participants'

const PendingApplicants = () => {
  return (
    <div className=' flex '>
        <Sidebar/>

        <div className=' p-10 w-[100%]'>
            <h1  className='font-semibold text-2xl'> All Applicants </h1>

            <div className=' mt-[2rem] border '>
            <Participants/>
            </div>
        
        </div>

    </div>
  )
}

export default PendingApplicants