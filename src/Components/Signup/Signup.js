import React, { Component } from 'react';
import './Signup.css'

class Signup extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Hai Welcome to SignUp Page</h1>
                </div>
                <div  className="sign_body">
                    <h5>SignUp Form</h5>
                    <form>
                        <textarea rows="2" cols="50"  >First Name"></textarea><br></br>
                        <input type="text" placeholder="Last Name"></input><br></br>
                        <input type="email" placeholder="mail@example.com"></input><br></br>
                        <input type="phone" placeholder="Please enter a phone number"></input><br></br>
                        <input type="password" placeholder="Password"></input><br></br>
                        <input type="password" placeholder="Confirm Password"></input><br></br>
                        <input type="checkbox"></input>
                        <label>I agree to <b>terms</b> and <b>Privacy</b> Policy</label><br></br>
                        <button>Sign up</button>
                    </form>
                </div>
                <div>
                    <a href="./signin" >Click here to navigate to SignIn page</a>
                </div>
            </div>
        );
    }
}

export default Signup;