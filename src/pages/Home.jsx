import React from 'react'
import "./Home.css"
import Footer from './Footer';

function Home() {
  return (
<>
<div className="hero">
  <div className="hero-content">
    
    <div className="srh-section">
    <h1>India’s National Research Equipment Discovery Platform</h1>


    <div className="search-box">
      <input placeholder="Search equipment, field, or institution..." />
      <button>Search</button>
    </div>

    <p> Discover and request access to world-class government-funded scientific infrastructure.
    </p>

    </div>

    <div className="stats">
      <div className="stat-card">
        <ul>
            <h3>1.Inter-institution collaboration count</h3>
            <li>✔ 1000+ Instruments</li>
            <li>✔ 300+ Institutions</li>
            <li>✔ Pan-India Access</li>
        </ul>
        </div>

        <div className="stat-card">
        <ul>
            <h3>2.Total Registered Equipment</h3>
            <li>✔ 12,480+ Instruments Listed</li>
            <li>✔ Across universities, research labs</li>
            <li>✔ government institutes</li>
        </ul>
        </div>

        <div className="stat-card">
        <ul> <h3>3.Active Research Institutions</h3>
            <li>✔ 1,230+ Institutions Onboarded</li>
            <li>✔ Including IITs, NITs, central universities</li>
            <li>✔ private R&D labs</li>
        </ul>
        </div>

        <div className="stat-card">
        <ul> <h3>4. Successful Equipment Bookings</h3>
            <li>✔ 58,900+ Reservations Processed</li>
            <li>✔ Researchers accessing shared infrastructure nationwide.</li>
            <li>✔ Pan-India Access</li>
        </ul>
        </div>

        
    </div>
  </div>

  {/* <div className="hero-3d">
    <div className="blob blob1"></div>
    <div className="blob blob2"></div>
    <div className="glass-card">
      <h3>SEM • IIT Madras</h3>
      <p>Status: Available</p>
    </div>
  </div>*/}


 </div>
  <Footer/> 
</> 
  );
}

export default Home;