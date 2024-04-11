import React from 'react'
import Sidebar from "../component/sidebar/Sidebar"
import "./home.scss"
import Dashboard from '../component/Dashboard'

const Home = () => {
  return (
    <div className='home'>
            <Sidebar/>
            <Dashboard/>
        <div className="body">
        </div>

    </div>
  )
}

export default Home