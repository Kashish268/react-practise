import * as React from "react";
import { useState, useEffect } from "react";

function displayData(){

    return(
        <div>
            Name : 
            Gender :
            Email :
            Match that played :
            State :
            DOB :
        </div>
    );
}

function submitData(){

}

function FetchData(){
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [match, setMatch] = useState("");
    const [state, setState] = useState("");
    const [DOB, setDOB] = useState("");
 
    
    return(
        <div>
            <form action="submitData">
                <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} /><br></br>
                <input type="radio" placeholder="Gender" value={gender} onChange={(e)=>setGender(e.target.value)} />Male
                <input type="radio" placeholder="Gender" value={gender} onChange={(e)=>setGender(e.target.value)} />Female
<br></br>
                <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br></br>
                <input type="checkbox" placeholder="Match Played" value={match} onChange={(e)=>setMatch(e.target.value)} />ODI
                <input type="checkbox" placeholder="Match Played" value={match} onChange={(e)=>setMatch(e.target.value)} />TEST
                <input type="checkbox" placeholder="Match Played" value={match} onChange={(e)=>setMatch(e.target.value)} />T20
<br></br>
                <input type="text" placeholder="State" value={state} onChange={(e)=>setState(e.target.value)} />
                <input type="text" placeholder="DOB" value={DOB} onChange={(e)=>setDOB(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

