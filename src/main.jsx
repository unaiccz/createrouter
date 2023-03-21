import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './router'
import './index.css'
import UserProvider from './context/UserContext'
 // routerprovider
 import { RouterProvider } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
    //strict mode
    <React.StrictMode>
        <UserProvider>
        <RouterProvider  router={router}/>
        </UserProvider>
    </React.StrictMode>
)
