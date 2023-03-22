import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useuser } from '../context/UserContext';


const Home = () => {
  const { user, setuser } = useuser();
  const navigate = useNavigate();
  const Login = () => {
    setuser(true);
    navigate('/dashboard');
  }
  return (
    <div>
      <h1>HOME</h1>
      <br />
      <hr />
      <button onClick={Login} className="btn btn-dark">log-in</button>
    </div>
  )
}

export default Home
