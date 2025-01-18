import*as React from 'react';

function fetchUserData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({x:"Kashish" , y : 30});
        }, 5000);
    });
}

function ApiSimulation(){
    const[name, SetName]= React.useState("Loading...");
    const[roll, SetRoll]= React.useState("loading...");

    React.useEffect(()=>{
        fetchUserData().then((abc)=>{
            SetName(abc.x);
            SetRoll(abc.y);
        });
    });

    return(
        <div>
        User : {name}<br></br>
        Roll No : {roll}
               </div>
    );
}
export default ApiSimulation;

// 1.Implement Countdown timer with useeffect
