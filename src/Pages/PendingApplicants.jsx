import React from 'react'
<<<<<<< HEAD

import ApplicantsListApp from './ApplicantsList'

const PendingApplicants = () => {
  return (
    <div className=' flex'>
=======
import Sidebar from '../Components/Sidebar'
import Participants from '../Participants/Participants'

const PendingApplicants = () => {
  return (
    <div className=' flex '>
        <Sidebar/>
>>>>>>> d52fe4e52e8c8f24acecb1db3b4edfbe1e41afb5

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