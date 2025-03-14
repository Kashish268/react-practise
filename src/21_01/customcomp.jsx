import { useState } from "react";
import UserComp1 from "./cleanup";

// Conditional rendering 
const ShowHideUser = ({ xyz })=>
    (xyz ? <UserComp1/>:null);

    function Conditional(){
        const[show, setShow] =  useState(false);
        return(
            <div>
                <button onClick={()=>setShow(!show)}>
                    {show?"Hide User":"Show User"}
                </button>
                <ShowHideUser xyz={show}/>
            </div>
        );
    }

export default Conditional;