import React, { Component } from 'react';
import './Signup.css'

class Signup extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="main_title">Hai Welcome to SignUp Page</h1>
                </div>
                <div  className="sign_body">
                    <h2 className="title">SignUp Form</h2>
                    <form >
                        <input className="form_content"  type="text" placeholder="First Name"></input><br></br>
                        <input className="form_content" type="text" placeholder="Last Name"></input><br></br>
                        <input className="form_content" type="email" placeholder="mail@example.com"></input><br></br>
                        <input  className="form_content" type="phone" placeholder="Please enter a phone number"></input><br></br>
                        <input className="form_content" type="password" placeholder="Password"></input><br></br>
                        <input className="form_content_last" type="password" placeholder="Confirm Password"></input><br></br>
                        <input type="checkbox"></input>
                        <label className="agree_line">I agree to <b>terms</b> and <b>Privacy</b> Policy</label><br></br>
                        <button className="button">Sign up</button>
                    </form>
                    <div>
                    <a className="link" href="./signin" >Click here SignIn </a>
                    </div>
                </div>
           </div>
        );
    }
}

export default Signup;