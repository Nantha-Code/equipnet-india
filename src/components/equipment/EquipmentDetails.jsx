import React from 'react'

function EquipmentDetails() {
    
  return (
    <>
    <div className="equipment-details-container">
        <div className="name-container">
            <img src="" alt="" />
            <h2>Name:</h2>
        </div>
        <div className="details-container">
            <ul>
                <li>Description</li>
                <li>Institution</li>
                <li>Location</li>
                <li>Availability</li>
                <li>Usage Type</li>
            </ul>
        </div>
        <button>Request Access Button</button>
    </div>
    </>
  );
}

export default EquipmentDetails;