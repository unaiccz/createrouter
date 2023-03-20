import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const Private = () => {
  return (
    <div>
      <h2>private</h2>
      <hr />
      <Outlet/>
      <hr />
    </div>
  )
}

export default Private
