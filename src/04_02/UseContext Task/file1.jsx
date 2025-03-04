// Create 3 stage from with the following elements
// 1 page : Ask user to enter Principal(10000)
// 2 page : Ask user to enter rate of interest(7)
// 3 page : Ask user to enter Duration(1)
// 4 page : show total amount including interest.


import * as React from "react";

export const interestContext = React.createContext();



export function UserProvider({children}){
    const [principal, setPrincipal] = React.useState("");
    const [rate, setRate] = React.useState("");
    const [duration, setDuration] = React.useState("");

        return( 
        <interestContext.Provider value={{principal,rate,duration,setPrincipal,setDuration,setRate}}>
            {children}
        </interestContext.Provider>
        );
}