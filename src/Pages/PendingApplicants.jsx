import React from 'react'
import Participants from '../Participants/Participants'
import ApplicantsListApp from './ApplicantsList'

const PendingApplicants = () => {
  return (
    <div className=' flex'>

        <div className=' p-20 mt-[2rem] w-[100%]'>
            <h1  className='font-semibold text-2xl'>Pending Applicants</h1>

            <div className=' mt-[2rem] border '>
            <Participants/>
            </div>
        
        </div>

    </div>
  )
}

export default PendingApplicants