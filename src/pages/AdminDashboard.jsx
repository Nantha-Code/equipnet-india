import React from 'react'

function AdminDashboard() {
  return (
    <>
    <div className="admin-dashboard">
        <h2>Admin Dashboard</h2>
        <div className="equipment-input-container">
            <input type="text" placeholder='Add Equipment'/>
            <input type="text" placeholder='View Requests'/>
        </div>
        <div className="request-table">
            <h3>Request Table:</h3>
            <p>User | Equipment | Purpose | Action
              Approve | Reject
            </p>
        </div>
    </div>
    </>
  );
}

export default AdminDashboard;