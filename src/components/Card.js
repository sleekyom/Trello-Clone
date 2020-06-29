import React from 'react';
import './Card.css'; 

//Using destructuring
//Switched to functional component because Card is a dumb component
const Card = ({carditem}) => {
    return(
        <div className="card">
            {carditem.name}
        </div>
    )
}

export default Card
