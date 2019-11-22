import React, { Component } from 'react';
import User from './User';

class Users extends Component {
  state={
    person:[{name:"Trishika", age:"1"},
            {name:"Madhu", age:"2"},
            {name:"Divya", age:"3"},
            {name:"Deepa", age:"4"},
            {name:"Raghu", age:"5"}]
  } ;
  toChangeAge = () =>{
    const newState  = this.state.person.map((user) => {
      const tempUser = user;
      tempUser.age -=10;
      return tempUser;
    })
    this.setState({
      newState
    });
  }
  
  
  render() {
         return (
            <div>
              <button onMouseOver={this.toChangeAge}>Click me!</button>
              {
                this.state.Setstate.map((user)=> {
                  return < User age = {user.age} name = {user.name}></User>
                })
              }
                
            </div>
        );
    }
}

export default Users;