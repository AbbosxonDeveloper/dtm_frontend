import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('token');
    const [faculties, setFaculties] = useState(null)
    let [block1 , setBlock1] = useState(null)
    let [block2 , setBlock2] = useState(null)
    
    return (
        <AuthContext.Provider value={{ block1 , setBlock1 , block2 , setBlock2, token, faculties, setFaculties }}>{children}</AuthContext.Provider>
    )
}