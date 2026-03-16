import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../global";
import { useNavigate } from "react-router-dom";
import "./EquipmentDetails.css";

function EquipmentDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);

  useEffect(() => {
    async function fetchEquipment() {
      const res = await fetch(`${API}/${id}`);
      const data = await res.json();
      setEquipment(data);
    }

    fetchEquipment();
  }, [id]);

  if (!equipment) return <p>Loading...</p>;

  return (
    <>
    <div className="e-main-container">
      <h1 className="e-name">{equipment.name}</h1>
    <div className="details-page">
      <div className="e-img">
      <img src={equipment.image} alt="equipment-phtoto" className="e-photo"/>
      </div>
      <div className="e-details">
      <p className="e-description"><span>Description:</span>{equipment.description}</p>
      <p className="e-intitution"><span>Institution:</span>{equipment.institution}</p>
      <p className="e-location"><span>Location:</span>{equipment.location}</p>
      <p className="e-status"><span>Availabilitystatus</span>{equipment.availabilityStatus}</p>
      <p className="e-type"><span>Usagetype:</span>{equipment.usageType}</p>
      <p className="price"><span>Price: ₹</span>{equipment.price}</p>
      </div>
    </div>
      <button 
        className="booking-btn" 
        disabled={equipment.availabilityStatus !== "AVAILABLE"}
        onClick={() => navigate(`/booking/${equipment.id}`)}
        >
        {equipment.availabilityStatus === "AVAILABLE" ? "Book now" : "Unavailable"}
      </button>
    </div>
    </>
  );
}

export default EquipmentDetails;








