import * as React from "react";
// 1.Implement Countdown timer with useeffect

function Countdown(){
    const[min, setMin]= React.useState(2);
    const[sec, setSec]= React.useState(10);

    React.useEffect(()=>{
        const timer= setInterval(()=>{
            if(sec===0){
                if(min===0){
                    clearInterval(timer);
                }else{
                    setMin(min-1);
                    setSec(60);
                }
            }else{
                setSec(sec-1);
            }
        }, 1000);
        return ()=> clearInterval(timer);
    }, [min, sec]);

    return (
        <div>
            <table border={2}>
                <tr>
                    <td>
                        Minutes
                    </td>
                    <td>
                        Second
                    </td>

                </tr>
                <tr>
                    <td>
                        {min}
                    </td>
                    <td>
                        {sec}
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Countdown;