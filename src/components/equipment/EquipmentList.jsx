import React from 'react'
import Navbar from '../common/Navbar';
import SearchBar from '../common/SearchBar';
import "./EquipmentList.css"
import { useNavigate } from "react-router-dom";
import { EquipmentData } from '../data/EquipmentData';

function EquipmentList() {
return(
<>
{EquipmentData.map(({name, description, institution, location, availabilityStatus, usageType, image}) => ( 
<ListExpress
  key={name}
  name={name}
  description={description}
  institution={institution}
  location={location}
  availabilityStatus={availabilityStatus}
  usageType={usageType}
  image={image}

  />
))}
</>

);


function ListExpress({image, name, description, institution, location, availabilityStatus, usageType}){
  const navigate = useNavigate();
return (
    <>
    <div className="equipmentlist-container">
        <div className="cards-grid" >
          <div className="machine-img">
          <img src={image} alt="machine-image" onClick={() => navigate("equipmentcard")} />
          </div>
          <ul onClick={() => navigate("equipmentcard")}>
            <li>Name: {name}</li>
            <li>Description: {description}</li>
            <li>Institution: {institution}</li>
            <li>Location: {location}</li>
            <li>Status: {availabilityStatus}</li>
            <li>Type: {usageType}</li>
         </ul>
      <button className='request-access-btn' onClick={() => navigate("requestform")}>View Details</button>  
      </div>
    </div>
    </>
  );
 }
}

export default EquipmentList;