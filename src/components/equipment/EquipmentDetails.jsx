import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EquipmentDetails.css";

function EquipmentDetails() {

  const { id } = useParams(); // <-- from URL
  const navigate = useNavigate();
  const [equipment, setEquipment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://6971eb5e32c6bacb12c50344.mockapi.io/api/v1/EquipmentData/${id}`)
      .then(res => res.json())
      .then(data => {
        setEquipment(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!equipment) return <p>Equipment not found</p>;

  return (
    <div className="equipment-detail-container">

      <button onClick={() => navigate(-1)}>⬅</button>

      <img src={equipment.image} alt={equipment.name} />

      <h2>{equipment.name}</h2>

      <p><strong>Description:</strong> {equipment.description}</p>
      <p><strong>Institution:</strong> {equipment.institution}</p>
      <p><strong>Location:</strong> {equipment.location}</p>
      <p><strong>Status:</strong> {equipment.availabilityStatus}</p>
      <p><strong>Usage Type:</strong> {equipment.usageType}</p>

    </div>
  );
}

export default EquipmentDetails;