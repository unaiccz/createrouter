import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useuser } from '../context/UserContext'
const Nav = () => {
const {user, setuser} = useuser()
console.log(useuser())
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <NavLink to="/" className="navbar-brand">Home</NavLink>
 

    <NavLink to="/dashboard" className="navbar-brand">Dashboard</NavLink>

      </nav>
    </div>
  )
}

export default Nav
