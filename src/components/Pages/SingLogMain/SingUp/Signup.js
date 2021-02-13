import React from 'react';
import { Button } from '../../../Button/Button.js';
import Footer from '../../../Footer/Footer.js';
import "./Signup.scss"

function Signup(props) {
    return (
        <> 
          <div className="signup-container" ref={props.containerRef}>
            <div className="content">
                    <div className="image">
                        <img src="images/login.png" alt="loginImg"/>
                    </div>
                    <div className="signup-form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                    </div>
                </div>
                <Button  buttonStyle="assessment-btn-outline">Sign Up</Button>
            </div>
            <Footer/>
        </>
    )
}

export default Signup
