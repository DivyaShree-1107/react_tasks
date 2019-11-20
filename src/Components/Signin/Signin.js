import React, { Component } from 'react';
import divya from '../butterfly.jpeg';
import './Signin.css';
import { SocialIcon } from 'react-social-icons';



class Signin extends Component {
    render() {
        return (
            <div>
                    <h1 className="title_name">   Hai welcome to Signin page</h1>
                    <div className="full_body">
                        <div>
                        <img className="image_butter" src={divya}/>
                        </div>
                        <div>
                            <input className="input_content" type="phone" placeholder="Please enter a phone number"></input><br></br>
                            <input  className="input_content" type="password" placeholder="Password"></input><br></br>
                        </div>
                        <div>
                                    <input type="checkbox"></input>
                                    <label>Remember me?</label>
                                <label className="forgot">Forgot Password?</label>   <br></br>
                                <button className="button">Login</button>
                        </div>
                        <div className="last_div" >
                            <span className="last_content">Create a new Account</span><br></br>
                            <span  className="last_content_2">(Or)</span>
                            <div >
                            <SocialIcon className="icons" url="http://facebook.com/jaketrent" />
                            <SocialIcon url="http://twitter.com/jaketrent" />
                            <SocialIcon url="http://google.com/jaketrent" />
                        </div>
                        <div>
                        <a className="link" href="signup">Click here to SignUp</a>
                        </div>                   
                    </div>
            </div>
            </div>
        );
    }
}

export default Signin;