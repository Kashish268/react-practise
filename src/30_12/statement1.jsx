import * as React from 'react';

class Statement1 extends React.Component {
    state={
        first:true,
        second:30,
        third:"Kashish",
        four:"blue",
        fifth:"green",
        six:"white",
        seven:0,
    };

    //change the valur of variable 

    constructor(){
        super();
        setInterval(()=>{
            this.setState({first:false,
                second : 28,
                third: "Ms.Koshiya",
                fouth : "#eca1a6",
                four:"#eea29a",
                fifth:"#feb236",
                six:"#034f84",
                seven:50,
            });
        }, 3000);    
    }

    render(){
        const{first,second,third,four,fifth,six,seven}=this.state;
        return(
        <div style={{backgroundColor: six , padding:seven}}>
            <button disabled={!first}>Button</button>
            <p>
               <h2> Wecolme to React Statement!! I am <b style={{color: four}}>{third}</b></h2>
            </p>
<p> 
   <h3> My roll no is: <b style={{color: fifth}}>{second}</b></h3>
</p>
        </div>
        );
    }
}

export default Statement1;