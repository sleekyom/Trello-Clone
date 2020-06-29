import React from 'react';
import Card from './Card';
import './List.css';

//Using destructuring
//Switched to functional component because List is a dumb component
const List = ({listdata}) => {
    return(
        <div className="list">
            {listdata.name}
            {listdata.cards.map(card => {
               return <Card carditem={card} />
            })}
        </div>
    )
}

export default List
