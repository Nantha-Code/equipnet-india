import React from 'react'
import "./TermsOfUse.css"

function TermsOfUse() {
  return (
    <>

    <div className="terms-main-container">
        <h2 className='tittle-h2'>Terms of Use</h2>

<div className="tittle-1">
<p className='tittle-para'>By using Equipment India, you agree to the following terms.</p>
<h3 className='tittle-h3'>👤 User Responsibilities</h3>
<ul className='tittle-ul'>
    <li className='tittle-ul-list'>Provide accurate and truthful information </li>
    
    <li className='tittle-ul-list'>Use equipment for academic or approved research purposes</li>
    
    <li className='tittle-ul-list'>Do not misuse, damage, or illegally access facilities</li>

    <li className='tittle-ul-list'>Respect institution policies</li>
</ul>
</div>

<div className="tittle-2">
<h3 className='tittle-h3'> Institution Responsibilities</h3>
<ul className='tittle-ul'>
    <li className='tittle-ul-list'>Provide correct equipment details</li>
    <li className='tittle-ul-list'>Manage booking approvals</li>
    <li className='tittle-ul-list'>Ensure equipment safety and availability</li>
</ul>
</div>

<div className="tittle-3">

<h3 className='tittle-h3'>Prohibited Activities</h3>
<ul className='tittle-ul'>
    <li className='tittle-ul-list'>Fake booking requests</li>
    <li className='tittle-ul-list'>Data scraping or hacking attempts</li>
    <li className='tittle-ul-list'>Commercial misuse without permission</li>
    <li className='tittle-ul-list'>Violating institutional or government rules</li>
</ul>
</div>

<div className="tittle-4">

<h3 className='tittle-h3'>Disclaimer</h3>

<p className='tittle-para'>
    Equipment India is a discovery and request platform. Actual equipment access depends on institution approval. We are not responsible for equipment downtime or research outcomes.

</p>
</div>
    </div>
    </>
  );
}

export default TermsOfUse;