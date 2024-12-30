import * as React from "react";
class InputTest extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter your name" /><br /><br />
                <input type="checkbox" />
                <label>Male</label><br /><br />
                <input type="radio" />
                <label>Female</label><br /><br />
                <input type="color" />
                <label>  Color</label><br /><br />
                <input type="file" /><br /><br />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}
export default InputTest;