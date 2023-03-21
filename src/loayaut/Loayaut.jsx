import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const Loayaut = () => {
  return (
    <div>
   <Nav/>
   <br />
      <Outlet/>

    </div>
  )
}

export default Loayaut
