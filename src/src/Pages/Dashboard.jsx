import React from 'react'
import Homepage from '../Components/Homepage'
import Layout from '../Components/Layout'
import Sidebar from '../Components/Sidebar'


const Dashboard = () => {
  return (
    <div className=' flex'>
        <Sidebar/>
        <Homepage/>
    </div>
  )
}

export default Dashboard