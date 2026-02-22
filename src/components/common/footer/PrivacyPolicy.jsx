import React from 'react'

function PrivacyPolicy() {
  return (
    <>
    <div className="policy-main-container">
       <h1 className='tittle'> Privacy Policy</h1>
  <p className='para'>Your privacy is important to us. This Privacy Policy explains how Equipment India collects, uses, and protects your data.
</p>

<div className="tittle-1">
<h2 className='tittle-h2'> Data We Collect</h2>
<ul className='ul-list'>
<li className='list'>Name, email, institution details</li>
<li className='list'>Equipment booking requests</li>
<li className='list'>Usage logs and activity data</li>
<li className='list'>Technical data like IP address and browser type</li>
</ul>
</div>

<div className="tittle-2">
<h2 className='tittle-h2'>How We Use Your Data</h2>
<ul className='ul-list'>
<li className='list'>To process equipment access requests</li>
<li className='list'>To improve platform performance</li>
<li className='list'>To communicate updates and notifications</li>
<li className='list'>For security and fraud prevention</li>
</ul>
</div>

<div className="tittle-3">
<h2 className='tittle-h2'>Data Protection</h2>
  <p className='para'>
      We use secure authentication and encrypted storage methods to protect user data. We do not sell or share personal data with third parties without consent, except when required by law.
  </p>
<h3 className='tittle-h3'> Your Rights</h3>
<p className='para'>
  <a href="">View and update your data</a>
  <a href="">Request data deletion</a>
  <a href="">Withdraw consent</a>
</p>
</div>

    </div>
    </>
  );
}

export default PrivacyPolicy;