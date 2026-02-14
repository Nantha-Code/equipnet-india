import React from 'react'

function AddEquipment() {
  return (
    <>
    <div className="add-equipment-container">
        <h2>Add Equipment</h2>
        <input type="text"placeholder='Name' />
        <input type="text" placeholder='Category'/>
        <input type="text" placeholder='Institution'/>
        <input type="text" placeholder='Location'/>
        <input type="text" placeholder='Availability'/>
        <input type="text" placeholder='Description'/>
        <button>Save Equipment</button>
    </div>
    </>
  );
}

export default AddEquipment;