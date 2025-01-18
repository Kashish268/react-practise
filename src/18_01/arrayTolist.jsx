import * as React from "react";

// 2.pass array of strings as araguments convert array to unorderd list

function ArrTolist() {
    const arr = ['apple', 'banana', 'cherry', 'date'];

    return (
        <ul>
            {arr.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}


   


export default ArrTolist;