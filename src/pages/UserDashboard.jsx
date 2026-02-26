import { useEffect, useState } from "react";
import "./UserDashboard.css";

function UserDashboard() {

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,] = useState(null);

  const API = "https://6971eb5e32c6bacb12c50344.mockapi.io/api/v1/Requests";

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        const userRequests = data.filter(r => r.user === "NK");
        setRequests(userRequests);
        setLoading(false);
      })
      .catch(setError => {
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  const total = requests.length;
  const approved = requests.filter(r => r.status === "Approved").length;
  const rejected = requests.filter(r => r.status === "Rejected").length;
  const pending = requests.filter(r => r.status === "Pending").length;

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div className="dashboard-container">

      <h2>My Dashboard</h2>

      <div className="summary-cards">
        <div className="card total">Total: {total}</div>
        <div className="card approved">Approved: {approved}</div>
        <div className="card pending">Pending: {pending}</div>
        <div className="card rejected">Rejected: {rejected}</div>
      </div>

      <table>
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
              <td className={`status ${req.status.toLowerCase()}`}>
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