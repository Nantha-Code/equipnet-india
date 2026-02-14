import React from 'react'

function Dashboard() {
  return (
    <>
    <div className="dashboard-container">
        <h2>My Requests</h2>
        <div className="machine-container">
            <p>PCR machine | IIT Madras | Pending</p>
            <p>SEM | IISc | Approved</p>
        </div>
    </div>
    </>
  );
}

export default Dashboard;