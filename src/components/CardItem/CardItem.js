import React from 'react'
import { Link } from 'react-router-dom';
import '../Card/Cards.css';

function CardItem(props) {
    return (
        <>
            <li className="assessment-card-item">
                <Link className="assessment-card-item-link" to={props.path}>
                    <figure className="assessment-card-item-pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Travel" className="assessment-card-item-img"/>
                    </figure>
                    <div className="assessment-card-item-info">
                        <ul className="assessment-card-item-text">
                            <li><span>Title:</span> { props.title}</li>
                            <li><span>Type:</span> { props.type}</li>
                            <li><span> Description:</span> { props.description} </li>
                        </ul>
                    </div>
                </Link>
            </li>   
        </>
    )
}

export default CardItem
