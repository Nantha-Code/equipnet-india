import React from 'react'


function SearchBar() {
  return (
    <>
    <div className="search-box">
      <input placeholder="Search equipment, field, or institution..." />
      <button>Search</button>
    </div>
    </>
  );
}

export default SearchBar;