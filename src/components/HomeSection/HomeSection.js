import React from 'react'
import { Button } from '../Button/Button.js';
import '../../App.css';
import '../HomeSection/HomeSection.css'

function HomeSection() {
    return (
        <div className="assessment-home-container">
             <video src="videos/video-pet-login.mp4" autoPlay loop muted/>
             <h1>MEET YOUR BEST FRIEND</h1>
             <div className="assessment-home-btns">
                <Button className="btns" buttonStyle="assessment-btn-outline"
                    buttonSize="assessment-btn-large"    
                > 
                    GET STARTED
                </Button>
                {/* <Button className="btns" 
                    buttonStyle="assessment-btn-primary" 
                    buttonSize="assessment-btn-large">
                        WATCH EPIC MOMENTS <i className="far fa-play-circle"/>
                </Button> */}
             </div> 
        </div>
    )
}

export default HomeSection
