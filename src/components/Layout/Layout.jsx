import React from 'react'
import Home from '../Pages/Home/Home'
import {  Routes, Route } from "react-router-dom";
import Booking from '../Pages/Booking/Booking';
import Admin from '../Pages/Admin/Admin';

const Layout = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/booking' element={<Booking />} />
      <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  )
}

export default Layout