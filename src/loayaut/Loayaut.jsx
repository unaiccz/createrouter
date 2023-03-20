import React from 'react'
import { Outlet } from 'react-router-dom'

const Loayaut = () => {
  return (
    <div>
      <p>public</p>
      <span>content</span>
      <hr />
      <Outlet/>
      <hr />
      <p>foot</p>
    </div>
  )
}

export default Loayaut
