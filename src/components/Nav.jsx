import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useuser } from '../context/UserContext'
const Nav = () => {
const {user, setuser} = useuser()
const navigate = useNavigate()
const Out = () => {
  setuser(false);
  navigate('/')
}
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <NavLink to="/" className="navbar-brand">Home</NavLink>
 

{

  user &&     (
<>
<NavLink onClick={Out} className="navbar-brand">Log-Out</NavLink>
  <NavLink to="/dashboard" className="navbar-brand">Dashboard</NavLink>
</>
  )
}

      </nav>
    </div>
  )
}

export default Nav

