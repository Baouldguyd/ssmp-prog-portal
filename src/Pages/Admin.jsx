
import React from 'react'

import Profile from './Profile/Profile';


const Admin = () => {
  return (
    <div className=' flex'>
        <div>
            <h1 className=' font-semibold text-center text-2xl mt-[2rem]'>Your Profile</h1>

            <div>
              <Profile/>
            </div>
        </div>
    </div>
  )
}

export default Admin;