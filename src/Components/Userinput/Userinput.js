import React, { Component } from 'react';
import Useroutput from '../../Container/Useroutput/Useroutput';

class Userinput extends Component {
    state={
        person:[{name:"Trishika", age:"1"},{name:"Madhu", age:"2"}],
        person1:[{name:'divya1', age:"2"},{name:'kavya1', age:'3'},{name:'bavya', age:"4"}],
    }
    myFunction=()=>{
        this.setState({
            person:[{name:"Trishika Gowda", age:"11"},{name:"Madhu D", age:"22"}],
            person1:[{name:"Divya2", age:"11"},{name:"Kavya2", age:"22"},{name:"Bavya2", age:"11"}]
        });
        

    }

    render() {
       
        return (
            <div>
                <input type="text" ></input><br></br>
                <button onClick={this.myFunction}>click on me!</button>
                <p>I am a {this.state.person[0].name} and I am {this.state.person[0].age} year old</p>
                <p>I am a {this.state.person[1].name} and I am {this.state.person[1].age} year old</p>
                <Useroutput name={this.state.person1[0].name} age={this.state.person1[0].age}></Useroutput>
                <Useroutput name={this.state.person1[1].name} age={this.state.person1[1].age}></Useroutput>
                <Useroutput name={this.state.person1[2].name} age={this.state.person1[2].age}></Useroutput>
      
            </div>
        );
    }
}

export default Userinput;