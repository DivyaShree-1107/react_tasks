import React, { Component } from 'react';

class State extends Component {
    state ={
        person:[{
            name:'Divya',
            age:65
        }]
    }
    render() {
        return (
            <div>
    <p>I am {this.state.person[0].name}</p>
            </div>
        );
    }
}

export default State;