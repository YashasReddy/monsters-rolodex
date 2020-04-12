import React from 'react';
import './card.styles.css';

const Card = (props) => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.name}?set=set2&size=180x180`} alt="monsters"/>
        <h3>{props.monster.name}</h3>
        <p>{props.monster.email}</p>
    </div>
);

export default Card;