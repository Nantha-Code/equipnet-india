import { useEffect, useState } from "react";
import "./UserDashboard.css"

function UserDashboard() {

  const [requests, setRequests] = useState([]);
  const API = "https://6971eb5e32c6bacb12c50344.mockapi.io/api/v1/Requests";

  // AUTO REFRESH every 3 seconds
  useEffect(() => {
    const fetchRequests = () => {
      fetch(API)
        .then(res => res.json())
        .then(data => setRequests(data.filter(r => r.user === "NK")));
    };

    fetchRequests(); // first load
    const interval = setInterval(fetchRequests, 3000); // poll

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <h2>My Requests (Live Status)</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Equipment</th>
            <th>Institution</th>
            <th>Purpose</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {requests.map(req => (
            <tr key={req.id}>
              <td>{req.equipment}</td>
              <td>{req.institution}</td>
              <td>{req.purpose}</td>
              <td style={{ 
                color: req.status === "Approved" ? "green" : 
                       req.status === "Rejected" ? "red" : "orange"
              }}>
                {req.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default UserDashboard;