import * as React from "react";

function FunComp1(){
    const[name]=React.useState("Kashish");
    return <h1>Hello, {name}</h1>;
}
export default FunComp1;