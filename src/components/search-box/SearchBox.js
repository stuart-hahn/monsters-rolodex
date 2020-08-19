import React from 'react';
import './search-box.styles.css'

const SearchBox = ({ placeholder, value, handleChange }) => {
  return (
    <input className='search' placeholder={placeholder} type='search' value={value} onChange={handleChange} />
  );
}

export default SearchBox;
