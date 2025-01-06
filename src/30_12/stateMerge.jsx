import * as React from 'react';

class StateMerge extends React.Component {
    state={
        first:"loading.....",
        second:"loading...",
        third:"loading.......",
        four:"loading.......",
        cmpMess:"loading done",    
    };

    //change the valur of variable 

    constructor(){
        super();
        
        setTimeout(()=>{
            this.setState({first: "done"});
        }, 2000);

        setTimeout(()=>{
            this.setState({second: "done"});
        }, 4000);

        setTimeout(()=>{
            this.setState({third: "done"});
        }, 6000);

        setTimeout(()=>{
            this.setState((state)=>({
                ...state,
                /*expansion : which is remove like if we want to 
                change variable value like in tradtion we change 
                state['first']=done
                but by using expansion we can just use by first=done
                so basically it removes bracket and all 

                */

                first: state.cmpMess,
                second: state.cmpMess,
                third: state.cmpMess,
                four:state.cmpMess,
            }));
        }, 8000);
    }

    render(){
        return(
            <div>
        <ul>
{Object.keys(this.state).filter((keys)=> keys!== "cmpMess").map((keys)=>(
    <li key ={keys}>
        <strong>{keys}</strong>: {this.state[keys]}
    </li>// {this.state[key]}:print value of key
))}
        </ul>
        </div>
            );
    }
}

export default StateMerge;

//react is a scripting language you can write html and react code both like php 