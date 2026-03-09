import React from 'react';
import './SearchBar.css'; // Make sure to import the CSS!

function SearchBar() {
  return (
    <div className="search-box">
      <input 
        type="text"
        className="search-input"
        placeholder="Search equipment, field, or institution..." 
      />
      <button className="search-btn">Search</button>
    </div>
  );
}

export default SearchBar;