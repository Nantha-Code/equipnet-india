import React from 'react'
import { useNavigate } from 'react-router';

function EquipmentCard() {
  const navigate = useNavigate();
  return (
    <>
    <div className="equipment-card">
      <div className="card-details">
        <h2>name: IIT Madras, Chennai</h2>
      < h2>department:Microbiology</h2>
    
      </div>
    </div>
    <button className='view-details' onClick={() =>navigate("Equipmentdetails")}></button>
    </>
  );
}

export default EquipmentCard;