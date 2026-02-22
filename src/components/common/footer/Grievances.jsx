import React from 'react'
import "./Grievances.css"

function Grievances() {
  return (
    <>
    <div className="grievance-main-container">
<h1 className='grievance-tittle'>Grievances Page <span className='tittle-span'>(User Complaints & Support)</span></h1>
<h2 className='subtopic-grievance'> Grievances Redressal Policy</h2>
<p className='para'>
    Equipment India Platform is committed to providing transparent and reliable access to research equipment. If you face any issues, we encourage you to raise a grievance so we can resolve it quickly.

</p>

<h2 className='subtopic-grievance'> What You Can Complain About</h2>
<ul className='grievance-ul'>
    <li className='grievance-ul-li'>Equipment booking issues</li>
    <li className='grievance-ul-li'>Incorrect equipment information</li>
    <li className='grievance-ul-li'>Access denial or delays</li>
    <li className='grievance-ul-li'>Technical platform errors</li>
    <li className='grievance-ul-li'>Misuse of platform or policy violations</li>
</ul>

<h2 className='subtopic-grievance'> How to Submit a Grievance</h2>
<ul className='grievance-ul'>
    <li className='grievance-ul-li'>You can submit a grievance through:</li>
    <li className='grievance-ul-li'>The Grievance Form on the platform</li>
    <li className='grievance-ul-li'>Email: support@equipmentindia.com</li>
    <li>Contact Dashboard → Support Section</li>
</ul>
<h2 className='subtopic-grievance'> Resolution Timeline</h2>

<ul className='grievance-ul'>
    <li className='grievance-ul-li'>Initial acknowledgment: Within 48 hours</li>
    <li className='grievance-ul-li'>Final resolution: Within 7–15 working days</li>
</ul>
<h2 className='subtopic-grievance'> Grievance Officer</h2>

<div className="grievance-officer-box">
  <p><strong>Name:</strong> Platform Support Team</p>
  <p><strong>Email:</strong> grievances@equipmentindia.com</p>
</div>
    </div>
    </>
  );
}

export default Grievances;