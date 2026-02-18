import React from 'react'

function Faq() {
  return (
    <>
    <div className="faq-main-container">
    <h1>📘 FAQ – Frequently Asked Questions</h1>
<h2>❓ What is this platform?</h2>
<p>This platform is a centralized system to discover, filter, and request access to research equipment available across institutions.
</p>

<h3>🧪 Who can use this platform?</h3>
<ul>
    <li>Students</li>
    <li>Researchers</li>
    <li>Faculty members</li>
    <li>Access approval depends on the equipment-owning institution.</li>
    <li>Industry collaborators (with institutional approval)</li>
</ul>

<h3>🔍 How do I search for equipment?</h3>
<ul>
    <p>You can use filters such as:</p>
    <li>Location</li>
    <li>Equipment type (PCR, SEM, Spectrometer, etc.)</li>
    <li>Price range</li>
    <li>Availability status</li>
    <li>Institution</li>
</ul>
<h3>📝 How do I request access to equipment?</h3>
<p>Click the Request Access button on the equipment card.
</p>
<p>Fill the request form with your research purpose and required time.</p>
<p>The institution will review and approve or reject your request.</p>
<h3>⏳ How long does approval take?</h3>
<p>Approval time depends on the institution.</p>
<p>Typical response time is 2–7 working days.</p>

<h3>💰 Is there a cost to use the equipment?</h3>
<p>Some equipment is free for academic use, others have usage charges.
The price is displayed in the equipment details.</p>

<h3>⚠️ What does equipment status mean?</h3>
<ul>
    <li>Available – Equipment is ready to be booked</li>
    <li>Busy – Currently in use</li>
    <li>Maintenance – Temporarily unavailable</li>
</ul>


<h3>🔐 Is my data secure?</h3>
<p>Yes. We store data securely and do not sell or share personal information with third parties except when legally required.</p>

<h3>🧑‍💻 What if I face technical issues?</h3>
<p>You can:</p>
<p>Submit a grievance through the Grievance page</p>
<p>Contact support via email or dashboard support section</p>


<h3>🚫 Can I cancel a request?</h3>
<p>Yes, pending requests can be canceled from your dashboard.</p>
<p>Approved bookings must follow institution cancellation policies.</p>

<h3>🏛️ Who manages the equipment?</h3>
<p>Each institution manages its own equipment listings, approvals, and schedules.
This platform only acts as a discovery and request system.</p>

    </div>
    </>
  );
}

export default Faq;