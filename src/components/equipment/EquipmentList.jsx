import React from 'react'
import Navbar from '../common/Navbar';
import SearchBar from '../common/SearchBar';

function EquipmentList() {
  return (
    <>
    <Navbar/>
    <SearchBar/>
    <div className="left-sidebar">
        <h3>Category</h3>
        <h3>Location</h3>
        <h3>Institution Type</h3>
    </div>
    <div className="cards-grid">
        
    </div>
    </>
  );
}

export default EquipmentList;