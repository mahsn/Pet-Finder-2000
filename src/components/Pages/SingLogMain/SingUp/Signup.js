import React,{useState, useEffect} from 'react';
import { Button } from '../../../Button/Button.js';
import Footer from '../../../Footer/Footer.js';
import "./Signup.scss"
import Firebase from '../../../Firebase/Firebase.js';

function Signup(props) {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setUser("");
        setEmail("");
        setPassword("");
    }

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    }

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
          <div className="signup-container" ref={props.containerRef}>
            <div className="content">
                    <div className="image">
                        <img src="images/login.png" alt="loginImg"/>
                    </div>
                    <div className="signup-form">
                        {/* <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text"
                             name="username" 
                             value={user.value}
                             onChange={e => setUser(e.target.value)}
                             placeholder="username"/>
                        </div> */}
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
                            <p className="error-msg">{passwordError}</p>
                        </div>
                    </div>
                </div>
                
                <Button onClick={handleSingup} buttonStyle="assessment-btn-outline">Sign Up</Button>
                     
            </div>
            <Footer/>
        </>
    )
}

export default Signup
