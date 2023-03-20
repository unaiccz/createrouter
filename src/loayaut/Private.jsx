import React from 'react'
import { Outlet } from 'react-router-dom'

const Private = () => {
  return (
    <div>
      <h2>private</h2>
      <hr />
      <Outlet/>
      <hr />
      <p>foot</p>
    </div>
  )
}

export default Private
