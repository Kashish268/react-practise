import { useEffect, useState } from "react";
import {Promise} from "bluebird";

function fetchUserData(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve({
                id : 1,
                name : "Kashish"
            });
        },3000);
    });
}

function UserComp1(){
    const [id , setId] = useState("loading...");
    const [name, setName] = useState("loading...");

    useEffect(()=>{
        // intializing
        const Promise = fetchUserData().then((user)=>{
            setId(user.id);
            setName(user.name);
        });

        // cancletion

        return()=>{
            Promise.cancel();
        }

    }
);

return( 
<div>
    Id : {id}
    <br/>
    Name : {name}
</div>
);
}

export default UserComp1;