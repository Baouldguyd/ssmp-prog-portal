import React from 'react'
import Sidebar from '../Components/Sidebar'
import Participants from '../Participants/Participants'

const PendingApplicants = () => {
  return (
    <div className=' flex'>
        <Sidebar/>

        <div className=' p-20 mt-[2rem]'>
            <h1  className='font-semibold text-2xl'>Pending Applicants</h1>

            <div className=' mt-[2rem]'>
            <Participants/>
            </div>
        
        </div>

    </div>
  )
}

export default PendingApplicants