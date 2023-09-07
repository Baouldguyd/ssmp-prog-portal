import React from 'react'
import EventSchedules from '../Components/EventSchedules';



const Schedules = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <hr className=' bg-black' />
          <EventSchedules/>

    </div>
  )
}

export default Schedules;