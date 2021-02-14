import React, {useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar.js';
import Home from './components/Pages/Home/Home.js';
import Pets from './components/Pages/Pets/Pets.js';
import SingLogMain from './components/Pages/SingLogMain/SingLogMain.js';
import Firebase from './components/Firebase/Firebase.js';

function App() {
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
      Firebase.auth().signOut();
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
    {
      user ? (
        <Router>
          <Navbar user={user} handleLogout={handleLogout}/>
          <Switch>
            <Route  path="/" exact component = {Home}/>
            <Route  path="/pets" exact component = {Pets}/>
          </Switch>
      </Router>
      ) : (
        <Router>
          <Navbar user={user} handleLogout={handleLogout}/>
          <Switch>
            <Route  path="/" exact component = {Home}/>
            <Route  path="/pets" exact component = {Pets}/>
            <SingLogMain  path="/sign-up" exact component  = {SingLogMain} />
          </Switch>
      </Router>
      )
    }
    </>
  );
}

export default App;
