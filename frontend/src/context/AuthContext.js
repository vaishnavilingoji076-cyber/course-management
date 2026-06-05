import { createContext, useState} from "react";

export const AuthContext= createContext();

function AuthProvider({ children}){
    const [user, setUser]=useState(null);

    const login=(data)=>{
        localStorage.setItem("token",data.token);
        setUser(data.user);
    };
    const logout=()=>{
        localStorage.removeItem("token");
        setUser(null);
    };

    return(
        <AuthContext.AuthProvider
        value={{
            user,
            login,
            logout,
        }}
        >{children}

        </AuthContext.AuthProvider>
    );
}

export default AuthProvider;