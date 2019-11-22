import React, { Component } from 'react';
import math from './math';

class maths extends Component {

  state = {
    Users: [
        {  num: 20 },
        ],
    Users1: [
        {  num: 30 },
      
    ],
    Users2: [
        {  num: 40 },
            
        ]
    }

    toAdd = () => {
        const newState = this.state.Users.map((User) => {
            const tempUser = User;
            tempUser.num += 5;
            return tempUser;
        })
        this.setState({ newState });
    }

    toSub = () => {
     
        
        const newState1 = this.state.Users1.map((User1) => {
          // if(this.state.Users1.num>0){  
          const tempUser1 = User1;
            tempUser1.num -=5; 
            return tempUser1;
          
        });
        this.setState({ newState1 });
      
    }


    toMul = () => {
        const newState2 = this.state.Users2.map((User2) => {
            const tempUser2 = User2;
            tempUser2.num *= 5;
            return tempUser2;
        })
        this.setState({ newState2 });
    }
render() {
    return (
        <div>
            <div>
                <button onClick={this.toAdd}>Addition</button>
                <br />
                {
                    this.state.Users.map((User) => (
                        <div> Addition Total={User.num}</div>
                    ))
                }
            </div>
            <div>

            <button onClick={this.toSub}>Subtraction</button>
            <br />
            {
            this.state.Users1.map((User1) => (
                <div> Subtraction Total={User1.num}</div>
            ))
            }
            </div>


            <div>
            <button onClick={this.toMul}>Multiply</button>
            <br />
            {
            this.state.Users2.map((User2) => (
                <div> Multiplication Total={User2.num}</div>
            ))
            }
            </div>
        </div>
       )
      }
    }


    
    
export default maths;