// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { API } from "../../global";
// import "./EquipmentDetails.css";

// function EquipmentDetails() {

//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [equipment, setEquipment] = useState(null);
// // const [Loading, setLoading] = useState();
//   useEffect(() => {
//     fetch(`${API}/${id}`)
//       .then(res => res.json())
//       .then(data => setEquipment(data))
//       .catch(err => console.error(err));
//   }, [id]);
// // useEffect(() => {
// //   fetch(`${API}/${id}`)
// //     .then(res => {
// //       if(!res.ok){
// //         throw new Error("Equipment not found")
// //       }
// //       return res.json()
// //     })
// //     .then(data => {
// //       setEquipment(data)
// //       setLoading(false)
// //     })
// //     .catch(err => {
// //       console.error(err)
// //       setLoading(false)
// //     })
// // }, [id])
//   if (!equipment) return <p>Loading...</p>;

//   return (
//     <div className="equipment-detail-container">

//       <button className="back-btn" onClick={() => navigate(-1)}>
//         ⬅ Back
//       </button>

//       {/* <img
//         className="equipment-img"
//         src={equipment.imagUrl}
//         alt={equipment.name}
//       /> */}
//       {equipment.image && (
//   <img
//     className="equipment-img"
//     src={equipment.image}
//     alt={equipment.name}
//   />
// )}

//       <h2 className="equipment-name">{equipment.name}</h2>

//       <p className="equipment-para">
//         <strong>Description:</strong> {equipment.description}
//       </p>

//       <p className="equipment-para">
//         <strong>Institution:</strong> {equipment.institution}
//       </p>

//       <p className="equipment-para">
//         <strong>Location:</strong> {equipment.location}
//       </p>

//       <p className="equipment-para">
//         <strong>Status:</strong> {equipment.availabilityStatus}
//       </p>

//       <p className="equipment-para">
//         <strong>Usage Type:</strong> {equipment.usageType}
//       </p>

//       <button
//         className="register-btn"
//         onClick={() => navigate("/register")}
//       >
//         Register to Rent
//       </button>

//     </div>
//   );
// }

// export default EquipmentDetails;