import * as React from "react";

import { UserContext } from "./file1";

export function ProvideDetails(){
    const user = React.useContext(UserContext);

    return(
        <p>
            UserName : {user.name} <br>
            </br>

            Id : {user.id} 
        </p>
    );
}

export function Page1(){
    return(
        <div>
            <h1>Page 1</h1>
            <ProvideDetails />
        </div>
    );
}

export function Page2(){
    return(
        <div>
            <h1>Page 2</h1>
            <ProvideDetails />
        </div>
    );
}

export function Page3(){
    return(
        <div>
            <h1>Page 3</h1>
            <ProvideDetails />
        </div>
    );
}