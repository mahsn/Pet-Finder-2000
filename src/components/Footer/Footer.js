import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from '../Button/Button.js';
import './Footer.css';

function Footer() {
    return (
        <div className="assessment-footer-conteiner">
            <section className="assessment-footer-subscription">
                <p className="assessment-footer-subscription-heading">
                    Join the Newsletter to find your best friends 
                </p>
                <p className="assessment-footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="assessment-input-areas">
                    <form action="" className="assessment-footer-email-form">
                        <input type="email" name="email" className="assessment-footer-input" placeholder="Your email" />
                        <Button buttonStyle="assessment-btn-outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="assessment-footer-links">
                <div className="assessment-footer-link-wrapper">
                    <div className="assessment-footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className="assessment-social-media">
                <div className="assessment-social-media-wrap">
                    <div className="assessment-footer-logo">
                    <Link to="/" className="assessment-social-logo">
                            <p>Pet&Finder</p><i className="fab fa-typo3" />
                        </Link>
                    </div>
                    <small className="assessment-website-rights">
                        Pet&Finder 2021
                    </small>
                    <div className="assessment-social-icons">
                        <Link className="assessment-social-icon-link facebook" 
                        to="/"
                        target="_blank"
                        arial-label="Facebook"
                        >
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link className="assessment-social-icon-link instagram" 
                        to="/"
                        target="_blank"
                        arial-label="Instagram"
                        >
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link className="assessment-social-icon-link twitter" 
                        to="/"
                        target="_blank"
                        arial-label="Twitter"
                        >
                            <i className="fab fa-twitter" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
