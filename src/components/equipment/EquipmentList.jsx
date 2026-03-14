import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EquipmentList.css";
import { API } from "../../global"; 

function EquipmentList() {
  const [equipment, setEquipment] = useState([]);
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setEquipment(data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <>
    <input 
    className="searchbar"
    type="text"
    placeholder="Filter by Name" 
    value={search}
    onChange={
    (event)=>setSearch(event.target.value)}
    />
    <div className="equipmentlist-page">
      <h2 className="page-title">Available Equipment</h2>
      
      <div className="cards-grid">
        {equipment.filter((eqp)=>eqp.name.toLowerCase().includes(search.toLowerCase())).map((item) => (
          <ListExpress key={item.id} {...item} />
        ))}
      </div>
    </div>
    </>
  );

}

function ListExpress({ id, image, name, institution, location, availabilityStatus }) {
  const navigate = useNavigate();

  const statusClass = availabilityStatus ? availabilityStatus.toLowerCase().replace(/\s/g, '-') : 'unknown';

  return (
    <div className="card"> 
      <div className="machine-img" onClick={() => navigate(`/equipment/${id}`)}>
        <img src={image} alt={name} />
      </div>

      <div className="equipment-info" onClick={() => navigate(`/equipment/${id}`)}>
        <h3 className="equipment-name">{name}</h3>
        <p className="equipment-detail"> {institution}</p>
        <p className="equipment-detail"> {location}</p>
        <span className={`status-badge ${statusClass}`}>
          {availabilityStatus || "Status Unknown"}
        </span>
      </div>

      <button className="view-btn" onClick={() => navigate(`/equipment/${id}`)}>
        View Details
      </button>
    </div>
  );
}

export default EquipmentList;