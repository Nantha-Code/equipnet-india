import { useEffect, useState } from "react";

export function AdminBookings(){

const [bookings,setBookings] = useState([]);

useEffect(()=>{

fetch("https://your-api.com/bookings")
.then(res=>res.json())
.then(data=>setBookings(data));

},[]);

const approveBooking = async(id)=>{

await fetch(`https://your-api.com/bookings/${id}`,{
method:"PUT",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({status:"APPROVED"})
});

setBookings(prev =>
prev.map(b => b.id===id ? {...b,status:"APPROVED"} : b)
);

};

const rejectBooking = async(id)=>{

await fetch(`https://your-api.com/bookings/${id}`,{
method:"PUT",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({status:"REJECTED"})
});

setBookings(prev =>
prev.map(b => b.id===id ? {...b,status:"REJECTED"} : b)
);

};

return(

<div>

<h2>Admin Booking Requests</h2>

{bookings.map(b=>(
<div key={b.id} className="booking-card">

<h3>{b.equipmentName}</h3>

<p>{b.startDate} → {b.endDate}</p>

<p>{b.role}</p>

<p>Status: {b.status}</p>

<button onClick={()=>approveBooking(b.id)}>
Approve
</button>

<button onClick={()=>rejectBooking(b.id)}>
Reject
</button>

</div>
))}

</div>

);

}