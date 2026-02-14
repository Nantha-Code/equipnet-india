import React from 'react'

function RequestForm() {
  return (
    <>
    <div className="form-main-container">
        <h2>Request Form</h2>
        <input type="text" placeholder='Purpose of Use'/>
        <input type="text" placeholder='Preferred Dates'/>
        <input type="text" placeholder='User Type '/>
        <input type="text" placeholder='Upload Proposal'/>
        <button>Submit Request</button>
    </div>
    </>
  );
}

export default RequestForm;