import { createContext } from "react";
import React, { useState } from 'react';
import { useContext } from 'react';
export const UserContext = createContext(false);
const UserProvider = ({children}) => {
const [user, setuser] = useState(false);
    return (
        <UserContext.Provider value={{user, setuser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;
export const useuser = () => useContext(UserContext);
