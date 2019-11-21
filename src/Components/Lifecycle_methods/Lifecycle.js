import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props){
        super(props);
        debugger;
        console.log('Hai');
    }
    componentWillMount(){
        debugger;
        console.log('Hello');
    }
    componentDidMount() {
        debugger;
        console.log('Namaste');
    }
    render() {
        return (
            <div>
                <h1>Greetings</h1>
            </div>
        );
    }
}

export default Lifecycle;