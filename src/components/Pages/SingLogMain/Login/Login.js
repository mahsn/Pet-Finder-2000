import React from 'react'
import { Button } from '../../../Button/Button.js';
import Footer from '../../../Footer/Footer.js';
import "./Login.scss"

export default function Login(props) {
    return (
        <>
        <div className="login-container" ref={props.containerRef}>
            <div className="content">
                <div className="image">
                    <img src="images/login.png" alt="loginImg"/>
                </div>
                <div className="login-form">
                    <div className="form-group">
                        <label htmlFor="usernme">Username</label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                </div>
            </div>
            <Button  buttonStyle="assessment-btn-outline">Login</Button>
        </div>
        <Footer/>
       </> 
    )
}
