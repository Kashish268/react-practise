import * as React from "react"

// from React import UseContext

export const UserContext = React.createContext();

function FetchUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({name : "Kashish Koshiya", id :"22SOECE11031"})
        },10000)
    });
}

// to provide values in store for more see diagram in doc

export function UserProvider({children}){
    const [user, setUser] = React.useState({
        name  :"loading.......",
        id    :"loading......."
    });

    React.useEffect(()=>{
        FetchUser().then((data)=>setUser(data));
    }, []);
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}