import React, { Component } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FacebookLoginIcon  } from '@fortawesome/react-fontawesome';
// import { FacebookLoginButton } from "react-social-login-buttons";
// import { TwitterLoginButton } from "react-social-login-buttons";


class Signin extends Component {
    render() {
        return (
            <div>
                <h1>   Hai welcome to Signin page</h1>
                <div>
                <img src="https://www.google.com/search?q=images&sxsrf=ACYBGNRrsMJ5EQqPpakehR65Drl_8vWDOQ:1574161251256&tbm=isch&source=iu&ictx=1&fir=CJwabmfmxl2ySM%253A%252CpFs_4Fcq5AgpmM%252C_&vet=1&usg=AI4_-kSU-9KpsNOfqStD6gh2hIt498Asbg&sa=X&ved=2ahUKEwiY38zRj_blAhV_63MBHZ_HAOsQ9QEwAHoECAgQMQ#imgrc=CJwabmfmxl2ySM:" alt="invalid" ></img>
                </div>
                <div>
                    <input type="phone" placeholder="Please enter a phone number"></input><br></br>
                    <input type="password" placeholder="Password"></input><br></br>
                </div>
                <div>
                    <table>
                        <tr>
                            <td><input type="checkbox"></input>
                            <label>Remember me?</label>
                            </td>
                            <td>
                             <label>Forgot Password?</label>   
                            </td>
                        </tr>
                        <tr>
                            <button colspan="2">Login</button>
                        </tr>
                    </table>
                </div>
                <div>
                    Create a new Account<br></br>
                    Or
                    <div>
                    {/* <FacebookLoginIcon />
                    <TwitterLoginButton /> */}
                    
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Signin;