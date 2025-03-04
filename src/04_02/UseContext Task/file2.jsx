import * as React from "react";

import { interestContext, UserProvider } from "./file1";

export function Principal(){
    const { principal, next } = React.useContext(interestContext);
    return (
        <div>
            <UserProvider>
            <input type="text" placeholder="Enter Principal" value={principal}/>
            <button onClick={next}>next</button>
            </UserProvider>
        </div>
    )
};

export function Rate(){
    const { rate, next } = React.useContext(interestContext);
    return (
        <div>
            <UserProvider>
            <input type="text" placeholder="Enter Rate" value={rate}/>
            <button onClick={next}>next</button>
            </UserProvider>
        </div>
    )
}

export function Time(){
    const { time, next } = React.useContext(interestContext);
    return (
        <div>
            <UserProvider>
            <input type="text" placeholder="Enter Time" value={time}/>
            <button onClick={next}>Calculate</button>
            </UserProvider>
        </div>
    )
}

export const Result = () => {
    const { principal, rate, duration } = React.useContext(interestContext);
    const Ins =  (principal * rate * duration) / 100;
    return (
        <div>
            <UserProvider>
            <h3>Simple Interest: {Ins}</h3>
            </UserProvider>
        </div>
    );
  };