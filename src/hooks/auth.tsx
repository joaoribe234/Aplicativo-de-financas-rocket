import React, { createContext, ReactNode, useContext} from "react";

interface AuthProviderProps { 
    children: ReactNode;
}

interface User {
    id: string;
    name: string;
    email: string;
    photo?: string;
}

    interface IAuthContextData {
     user: User;
 }

export const AuthContext = createContext({} as IAuthContextData);
export function AuthProvider({ children } : AuthProviderProps  ){
    const user = { 
        id:'180210654',
        name:'Joao Vitor',
        email:'joa@gmail.com'
     }
    return(
     <AuthContext.Provider value={{user}} >
       { children }
    </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
}
