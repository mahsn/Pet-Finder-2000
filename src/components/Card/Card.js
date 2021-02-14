import React from 'react';
import CardItem from '../CardItem/CardItem.js'
import './Cards.css';

function Card() {
    return (
        <div className="assessment-cards">
            <div className="assessment-cards-container">
                <div className="assesment-cards-wrapper">
                    <ul className="assessment-cards-items">
                    < CardItem  
                            src="images/image-1.jpg"
                            title="Explore the hidden life your pets"
                            label="Secret"
                            type = "Aussiedoodle"
                            description="The Aussiedoodle is a mixed breed dog"
                            path="/pets"
                        />
                          < CardItem  
                            src="images/image-2.jpg"
                            title="Cute life"
                            label="Cute"
                            type = "LaPerm Cat"
                            description="Distinguished by her curly, rippled coat and people-oriented personality, the LaPerm is calm and friendly, yet at other times energetic and inquisitive."
                            path="/pets"
                        />
                          < CardItem  
                            src="images/image-3.jpg"
                            title="Adventure Together"
                            label="Adventure"
                            type = "Afador"
                            description="The Afador is a mixed breed dog–a cross between the Afghan Hound and Labrador Retriever dog breeds. "
                            path="/pets"
                        />
                          < CardItem  
                            src="images/image-4.jpg"
                            title="Love Pets"
                            label="Love"
                            type = "Appenzeller Sennenhunde"
                            description="The Appenzeller Sennenhunde originated as an all-around farm dog breed, who stayed busy herding the livestock, guarding the farm, and pulling carts in their native Switzerland. "
                            path="/pets"
                        />
                          < CardItem  
                            src="images/image-5.jpg"
                            text="Funny Moments together"
                            label="Game"
                            type = "Australian Shepherd"
                            description="Despite their name, the Australian Shepherd dog breed originated in the western United States, not Australia, around the time of the Gold Rush in the 1840s."
                            path="/pets"
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Card
