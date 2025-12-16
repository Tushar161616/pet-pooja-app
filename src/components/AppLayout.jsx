import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar2 from './Navbar2'

const AppLayout = () => {
  return (
    <div>
        <Navbar2 />
        <Outlet />
        <Footer />
    </div>
  )
}

export default AppLayout