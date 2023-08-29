import React from 'react'
import Sidebar from '../Components/Sidebar'
import ApplicantsListApp from './ApplicantsList'

const PendingApplicants = () => {
  return (
    <div className=' flex'>
        <Sidebar/>

        <div className=' p-20 mt-[2rem]'>
            <h1  className='font-semibold text-2xl'>Pending Applicants</h1>

            <div className=' mt-[2rem]'>
            <ApplicantsListApp/>
            </div>
        
        </div>

    </div>
  )
}

export default PendingApplicants