import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext, useusercontext } from '../context/UserContext'
const Nav = () => {
  const {user,setuser} = useusercontext;
  console.log(user)
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark justify-around">
        <NavLink to="/" className="navbar-brand">Home</NavLink>
 

    <NavLink to="/dashboard" className="navbar-brand">Dashboard</NavLink>

      </nav>
    </div>
  )
}

export default Nav
