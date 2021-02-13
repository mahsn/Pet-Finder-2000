import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css';

const BTNSTYLES = ['assessment-btn-primary', 'assessment-btn-outline'];
const BTNSIZES  = ['assessment-btn-medium', 'assessment-btn-large'];

export const  Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const btnStyle = BTNSTYLES.includes(buttonStyle) ? buttonStyle : BTNSTYLES[0];
    const btnSize = BTNSIZES.includes(buttonSize) ? buttonSize : BTNSIZES[0];

    return (
        <Link to="/sign-up" className="assessment-btn-mobile">
            <button 
                className={`btn ${btnStyle} ${btnSize}`} 
                onClick={onClick} 
                type={type}
            > 
                {children} 
            </button>
        </Link>
    )
}
