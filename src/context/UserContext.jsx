import { createContext } from "react";
import React, { useState } from 'react';

export const UserContext = createContext(false);
const UserProvider = ({children}) => {

    const [user, setUser] = useState(false);
    return (


        <UserContext.Provider value={{user, setUser}}>
{children}
        </UserContext.Provider>
    )
}
export default UserProvider