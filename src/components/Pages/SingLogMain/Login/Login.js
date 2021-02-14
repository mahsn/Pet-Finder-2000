import React, {useState, useEffect } from 'react'
import { Button } from '../../../Button/Button.js';
import Footer from '../../../Footer/Footer.js';
import "./Login.scss"
import Firebase from '../../../Firebase/Firebase.js';
import { Redirect } from 'react-router-dom';

export default function Login(props) {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    }

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    }

    const handleLogin = () => {
        clearErrors();
        Firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => {
                switch (error.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(error.message);
                    case  "auth/wrong-password":
                        setPasswordError(error.message);
                        break;
                }
            });
    };

    
    const handleSingup = () => {
        clearErrors();
        Firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => {
                switch (error.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(error.message);
                    case  "auth/weak-password":
                        setPasswordError(error.message);
                        break;
                }
            });
    };

    const handleLogout = () => {
        Firebase.auth.signOut();
    };

    const authListener = () => {
        Firebase
        .auth()
        .onAuthStateChanged(user => {
            if(user) {
                clearInputs();
                setUser(user);
            }else {
                setUser("");
            }
        })
    }

    useEffect(() => {
        authListener();
    }, []);


    return (
        <>
        <div className="login-container" ref={props.containerRef}>
            <div className="content">
                <div className="image">
                    <img src="images/login.png" alt="loginImg"/>
                </div>
                <div className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            name="email" 
                            placeholder="email" required/>
                            <p className="error-msg">{emailError}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            name="password" 
                            placeholder="password" required/>
                            <p className="error-msg">{passwordError.trim(10)}</p>
                    </div>
                </div>
            </div>
            <Button 
            onClick={handleLogin} 
            buttonStyle="assessment-btn-outline">Sing In</Button>
                
        </div>
        <Footer/>
       </> 
    )
}
