import * as React from 'react';
class Component2 extends React.Component {
    render() {
        return (
            <div>
                <h1>Good Morning, User</h1>
                <p>
                Welcome to your React application.
                </p>
            </div>
        );
    }
}
class Component1 extends React.Component {
    render() {
        return (
            <div>
                <Component2 />
                <p>
                This is the first component.
                </p>
                <button>Click!</button>
            </div>
        );
    }
}
export default Component1;