import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      {/* Navbar */}
    <Navbar></Navbar>
    {/* <h1>Hello</h1> */}
      <Outlet></Outlet>

      {/* footer */}
    </div>
  )
}

export default Main
