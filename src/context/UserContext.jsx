import { createContext, useContext } from "react";
import React, { useState } from 'react';

export const UserContext = createContext();
const UserProvider = ({children}) => {

    const [user, setUser] = useState(true);
    return (


        <UserContext.Provider value={{user, setUser}}>
{children}
        </UserContext.Provider>
    )
}
export default UserProvider
export const useusercontext =() => useContext(UserContext);