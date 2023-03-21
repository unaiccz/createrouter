import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const Private = () => {
  return (
    <div>
      <hr />
      <Outlet/>
      <hr />
    </div>
  )
}

export default Private
