import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EquipmentList.css";

function EquipmentList() {

  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    fetch("https://6971eb5e32c6bacb12c50344.mockapi.io/api/v1/EquipmentData")
      .then(res => res.json())
      .then(data => setEquipment(data))
      .catch(err => console.error("API Error:", err));
  }, []);

  return (
    <>
      {equipment.map((item) => (
        <ListExpress key={item.id} {...item} />
      ))}
    </>
  );
}


function ListExpress({ id, image, name, description, institution, location, availabilityStatus, usageType }) {

  const navigate = useNavigate();

  return (
    <div className="equipmentlist-container">
      <div className="cards-grid">

        <div className="machine-img">
          <img
            src={image}
            alt={name}
            onClick={() => navigate(`/equipment/${id}`)}
          />
        </div>

        <ul onClick={() => navigate(`/equipment/${id}`)}>
          <li>Name: {name}</li>
          <li>Description: {description}</li>
          <li>Institution: {institution}</li>
          <li>Location: {location}</li>
          <li>Status: {availabilityStatus}</li>
          <li>Type: {usageType}</li>
        </ul>

      </div>
    </div>
  );
}

export default EquipmentList;








































// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./EquipmentList.css";

// function EquipmentList() {

// const [Equipment, setEquipment] = useState(null);

// const EquipmentData = () => {
//   fetch(`https://6971eb5e32c6bacb12c50344.mockapi.io/api/v1/EquipmentData${id}`,{
//   })
//     .then((res) => res.json())
//     .then((data) => setEquipment(data));
// };


// return(
// <>

// {Equipment.map(({name, description, institution, location, availabilityStatus, usageType, image}) => ( 
// <ListExpress
//   key={name}
//   name={name}
//   description={description}
//   institution={institution}
//   location={location}
//   availabilityStatus={availabilityStatus}
//   usageType={usageType}
//   image={image}

//   />
// ))}
// </>

// );


// function ListExpress({image, name, description, institution, location, availabilityStatus, usageType}){
//   const navigate = useNavigate();
// return (
//     <>
//     <div className="equipmentlist-container">
//         <div className="cards-grid" >
//           <div className="machine-img">
//           <img src={image} alt="machine-image" onClick={() => navigate("equipmentcard")} />
//           </div>
//           <ul onClick={() => navigate("equipmentcard")}>
//             <li>Name: {name}</li>
//             <li>Description: {description}</li>
//             <li>Institution: {institution}</li>
//             <li>Location: {location}</li>
//             <li>Status: {availabilityStatus}</li>
//             <li>Type: {usageType}</li>
//          </ul>
//       <button className='request-access-btn' onClick={() => navigate("requestform")}>View Details</button>  
//       </div>
//     </div>
//     </>
//   );
//  }
// }

// export default EquipmentList;