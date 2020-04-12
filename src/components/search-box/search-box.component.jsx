import React from 'react';
import './search-box.styles.css';

//Destructuring all the objects in a prop;
export const SearchBox = ({placeholder, handleChange}) => {
    return(
        <input className='search' type='search' placeholder={placeholder} 
        onChange={handleChange}/>
    );
};