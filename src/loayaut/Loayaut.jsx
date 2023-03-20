import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const Loayaut = () => {
  return (
    <div>
   <Nav/>
      <span>content</span>
      <hr />
      <Outlet/>
      <hr />
      <p>foot</p>
    </div>
  )
}

export default Loayaut
