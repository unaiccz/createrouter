import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
const Nav = () => {
    console.log(useContext(UserContext))
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark justify-around">
        <NavLink to="/" className="navbar-brand">Home</NavLink>
 className="navbar-brand"      <NavLink to="/dashboard" className="navbar-brand">Dashboard</NavLink>
      </nav>
    </div>
  )
}

export default Nav
