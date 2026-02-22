import React from 'react'
import "./Faq.css"

function Faq() {
  return (
    <>
    <div className="faq-main-container">
        <div className="tittle-1">

    <h1 className='tittle-h1'>FAQ – Frequently Asked Questions</h1>
<h2 className='tittle-h2'> What is this platform?</h2>
<p className='tittle-para'>This platform is a centralized system to discover, filter, and request access to research equipment available across institutions.
</p>
        </div>

<div className="tittle-2">

<h3 className='tittle-h3'>Who can use this platform?</h3>
<ul className='tittle-ul'>
    <li className='tittle-ul-li'>Students</li>
    <li className='tittle-ul-li'>Researchers</li>
    <li className='tittle-ul-li'>Faculty members</li>
    <li className='tittle-ul-li'>Access approval depends on the equipment-owning institution.</li>
    <li className='tittle-ul-li'>Industry collaborators (with institutional approval)</li>
</ul>
</div>

<div className="tittle-3">

<h3 className='tittle-h3'>How do I search for equipment?</h3>
<ul className='tittle-ul'>
    <p className='sub-para'>You can use filters such as:</p>
    <li className='tittle-ul-li'>Location</li>
    <li className='tittle-ul-li'>Equipment type (PCR, SEM, Spectrometer, etc.)</li>
    <li className='tittle-ul-li'>Price range</li>
    <li className='tittle-ul-li'>Availability status</li>
    <li className='tittle-ul-li'>Institution</li>
</ul>
</div>

<div className="tittle-4">

<h3 className='tittle-h3'>How do I request access to equipment?</h3>
<p className='tittle-para'>Click the Request Access button on the equipment card.</p>
<p className='tittle-para'>Fill the request form with your research purpose and required time.</p>
<p className='tittle-para'>The institution will review and approve or reject your request.</p>
</div>

<div className="tittle-5">

<h3 className='tittle-h3'> How long does approval take?</h3>
<p className='tittle-para'>Approval time depends on the institution.</p>
<p className='tittle-para'>Typical response time is 2–7 working days.</p>
</div>

<div className="tittle-6">

<h3 className='tittle-h3'> Is there a cost to use the equipment?</h3>
<p className='tittle-para'>Some equipment is free for academic use, others have usage charges.
The price is displayed in the equipment details.</p>
</div>

<div className="tittle-7">

<h3 className='tittle-h3'> What does equipment status mean?</h3>
<ul className='tittle-ul'>
    <li className='tittle-ul-li'>Available – Equipment is ready to be booked</li>
    <li className='tittle-ul-li'>Busy – Currently in use</li>
    <li className='tittle-ul-li'>Maintenance – Temporarily unavailable</li>
</ul>
</div>

<div className="tittle-8">

<h3 className='tittle-h3'> Is my data secure?</h3>
<p className='tittle-para'>Yes. We store data securely and do not sell or share personal information with third parties except when legally required.</p>

<div className="tittle-8i">

<h3 className='tittle-h3'>What if I face technical issues?</h3>
<p className='sub-para'>You can:</p>
<p className='tittle-para'>Submit a grievance through the Grievance page</p>
<p className='tittle-para'>Contact support via email or dashboard support section</p>
</div>

<div className="tittle-8ii">

<h3 className='tittle-h3'>Can I cancel a request?</h3>
<p className='tittle-para'>Yes, pending requests can be canceled from your dashboard.</p>
<p className='tittle-para'>Approved bookings must follow institution cancellation policies.</p>
</div>

<div className="tittle-8iii">

<h3 className='tittle-h3'>Who manages the equipment?</h3>
<p className='tittle-para'>Each institution manages its own equipment listings, approvals, and schedules.
This platform only acts as a discovery and request system.</p>
 </div>
</div>

    </div>
    </>
  );
}

export default Faq;