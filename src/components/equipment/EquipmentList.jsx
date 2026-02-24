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


function ListExpress({ id, image, name, institution, location, availabilityStatus, }) {

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
          <li> {name}</li>
          <li> {institution}</li>
          <li> {location}</li>
          <li className={`status-badge ${availabilityStatus.toLowerCase().replace(/\s/g, '-')}`}>{availabilityStatus}</li>
        </ul>

      </div>
    </div>
  );
}

export default EquipmentList;