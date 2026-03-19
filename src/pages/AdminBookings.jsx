// import { useEffect, useState } from "react";
// import { API_1 } from "../global";
// import "./AdminBookings.css";

// export function AdminBookings() {
//   const [Bookings, setBookings] = useState([]);

//   useEffect(() => {
//     fetch(`${API_1}/api/bookings`)
//       .then(res => res.json())
//       .then(data => setBookings(data));
//   }, []);

//   const updateStatus = async (id, status) => {
//     await fetch(`${API_1}/api/bookings/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ status })
//     });

//     setBookings(prev =>
//       prev.map(Bookings => Bookings.id === id ? { ...Bookings, status } : Bookings)
//     );
//   };

//   return (
//     <div className="main-container">
//       <h2>Admin Booking Requests</h2>

//       {Bookings.map(Booking => (
//         <div key={Bookings.id} className="booking-card">
//           <h3>{Bookings.equipmentName}</h3>
//           <p>{Bookings.startDate} → {Bookings.endDate}</p>
//           <p>{Bookings.userRole}</p>
//           <p>Status: {Bookings.status}</p>

//           <button onClick={() => updateStatus(Bookings.id, "APPROVED")}>
//             Approve
//           </button>

//           <button onClick={() => updateStatus(Bookings.id, "REJECTED")}>
//             Reject
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }















// // import { useEffect, useState } from "react";
// // import { BookingPage } from "./BookingPage";

// // export function AdminBookings(){

// // const [bookings,setBookings] = useState([]);

// // useEffect(()=>{

// // fetch("https://6971eb5e32c6bacb12c50344.mockapi.io/api/v1/movies/bookings")
// // .then(res=>res.json())
// // .then(data=>setBookings(data));

// // },[]);

// // const approveBooking = async(id)=>{

// // await fetch(`https://6971eb5e32c6bacb12c50344.mockapi.io/api/v1/movies/bookings/${id}`,{
// // method:"PUT",
// // headers:{
// // "Content-Type":"application/json"
// // },
// // body:JSON.stringify({status:"APPROVED"})
// // });

// // setBookings(prev =>
// // prev.map(b => b.id===id ? {...b,status:"APPROVED"} : b)
// // );

// // };

// // const rejectBooking = async(id)=>{

// // await fetch(`https://6971eb5e32c6bacb12c50344.mockapi.io/api/v1/movies${id}`,{
// // method:"PUT",
// // headers:{
// // "Content-Type":"application/json"
// // },
// // body:JSON.stringify({status:"REJECTED"})
// // });

// // setBookings(prev =>
// // prev.map(b => b.id===id ? {...b,status:"REJECTED"} : b)
// // );

// // };

// // return(

// // <div className="main-container">

// // <h2 className="main-tittle">Admin Booking Requests</h2>

// // {bookings.map(b=>(
// // <div key={BookingPage.id} className="booking-card">

// // <h3 className="name">{b.equipmentName}</h3>

// // <p className="start-end-dates">{b.startDate} → {b.endDate}</p>

// // <p className="user-role">{b.role}</p>

// // <p className="booking-status">Status: {b.status}</p>

// // <div className="action-buttons">

// // <button className="approve-button" onClick={()=>approveBooking(b.id)}>
// // Approve
// // </button>

// // <button className="reject-button" onClick={()=>rejectBooking(b.id)}>
// // Reject
// // </button>
// // </div>

// // </div>
// // ))}

// // </div>

// // );

// // }