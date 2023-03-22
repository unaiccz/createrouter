import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import React, { useState, useEffect } from 'react';
import { useuser } from '../context/UserContext';
import {Navigate } from 'react-router-dom';


const Private = () => {
  const {user} = useuser();

  return (
    <div>
      <hr />
      {user ? <Outlet/> : <Navigate to="/" />}
      <hr />
    </div>
  )
}

export default Private
