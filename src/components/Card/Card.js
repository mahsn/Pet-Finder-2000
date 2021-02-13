import React from 'react';
import CardItem from '../CardItem/CardItem.js'
import './Cards.css';

function Card() {
    return (
        <div className="assessment-cards">
            <h1>Check out these EPIC Moments</h1>
            <div className="assessment-cards-container">
                <div className="assesment-cards-wrapper">
                    <ul className="assessment-cards-items">
                    < CardItem  
                            src="images/image-1.jpg"
                            text="Explore the hidden life your pets"
                            label="Secret"
                            path="/pets"
                        />
                          < CardItem  
                            src="images/image-2.jpg"
                            text="Cute life"
                            label="Cute"
                            path="/pets"
                        />
                          < CardItem  
                            src="images/image-3.jpg"
                            text="Adventure Together"
                            label="Adventure"
                            path="/pets"
                        />
                          < CardItem  
                            src="images/image-4.jpg"
                            text="Love Pets"
                            label="Love"
                            path="/pets"
                        />
                          < CardItem  
                            src="images/image-5.jpg"
                            text="Funny Moments together"
                            label="Game"
                            path="/pets"
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Card
