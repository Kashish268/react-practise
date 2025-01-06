import { useState } from "react";

function Setexam2(){
    // global variable name and setname
    const [name, setName] = useState("Kashish");

    return (
        <div>
            Name varible value : {name}
        <br></br><br></br>
        On chnage : 
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        // here in inpit type text pass value name
        // in arrow function e means event handler that change current value pass in setstate
        // now in global setName assign this value on Name and chnage it.
    );
}

export default Setexam2;