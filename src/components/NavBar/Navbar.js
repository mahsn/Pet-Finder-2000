import React, {useState, useEffect}  from 'react'
import {Link} from 'react-router-dom';
import { Button } from '../Button/Button.js';
import './Navbar.css'
import '../../App.css';
import Firebase from '../Firebase/Firebase.js';

function Navbar(props) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClickButton = () => setClick(!click);
    const closeMobileBarMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else  {
            setButton(true);
        }
    }
    useEffect(() => {
        showButton();
    }, []);
    
    
    window.addEventListener('resize', showButton);
    return (
        <>
         <nav className="assessment-navbar">
            <div className="assessment-navbar-container">
                <Link to="/" className="essessment-navbar-logo" onClick={closeMobileBarMenu} >
                 <h6>Pet&Finder</h6> <i className="far fa-island-tropical"></i>
                </Link>
                <div className="assessment-menu-icon" onClick={handleClickButton}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                </div>
                <ul className={click ? "assessment-nav-menu active" : "assessment-nav-menu"}>
                    <li className="assessment-nav-item">
                        <Link to="/pets" className="assessment-nav-links" onClick={closeMobileBarMenu}>
                            Pets
                        </Link>
                    </li>
                    <li className="assessment-nav-item">
                        <Link to="/sign-up" className="assessment-nav-links-mobile" onClick={closeMobileBarMenu}>
                            Sign Up
                        </Link>
                    </li>
                    {
                        props.user ? (
                            <li className="assessment-nav-item">
                                <Link to="/advertisiment" className="assessment-nav-links" onClick={closeMobileBarMenu}>
                                    Advertisement
                                </Link>
                            </li>
                        ): (
                            null
                        )
                    }
                   
                </ul>
                {
                    props.user ? (
                            button && <Button  onClick={props.handleLogout} buttonStyle="assessment-btn-outline">Sign out</Button>    
                    ): (
                        button && <Button buttonStyle="assessment-btn-outline">Sign Up</Button>      
                    )
                   
                }

            </div>
        </nav>   
        </>
    )
}

export default Navbar
