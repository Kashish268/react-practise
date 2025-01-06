import * as React from 'react';
import MyButton  from './mybtn';
import Mylist from './mylist';
class Mycomponent extends React.Component {
    state={
        abc:"My Buttons",
        xyz: true,
        itms:["a","b","c","d","e"],
    };

    render(){
      const {abc,xyz,itms}=this.state;
      return(
        <div>
        <MyButton abc={abc} xyx={xyz}/>
        <Mylist itms={itms}/>
        </div>
      );  
    }
}
export default Mycomponent;