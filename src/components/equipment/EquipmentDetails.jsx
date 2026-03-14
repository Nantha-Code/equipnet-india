import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../global";
import "./EquipmentDetails.css";

function EquipmentDetails() {
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
    <div className="details-page">
      <h1>{equipment.name}</h1>
      <p>{equipment.description}</p>
      <p className="price">Price: ₹{equipment.price}</p>
    </div>
  );
}

export default EquipmentDetails;


















// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { API } from "../../global";

// function EquipmentDetails() {
//   const { id } = useParams();
//   const [equipment, setEquipment] = useState(null);

//   useEffect(() => {
//     async function fetchEquipment() {
//       const res = await fetch(`${API}/${id}`);
//       const data = await res.json();
//       setEquipment(data);
//     }

//     fetchEquipment();
//   }, [id]);

//   if (!equipment) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>{equipment.name}</h1>
//       <p>{equipment.description}</p>
//       <p>Price: {equipment.price}</p>
//     </div>
//   );
// }

// export default EquipmentDetails;