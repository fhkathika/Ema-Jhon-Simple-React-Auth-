import React, { createContext } from 'react';
import useFirebase from '../hooks/userFirebase';

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const allContext=useFirebase()
    // const {children}=props
    return (
        //value na dile context api kaj korbe na..tai value dite hobe
        <AuthContext.Provider value={allContext}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;