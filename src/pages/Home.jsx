import React from 'react'
import "./Home.css"
import Footer from '../components/common/footer/Footer';
import About from './About';
import SearchBar from '../components/common/SearchBar';
import Navbar from '../components/common/Navbar';
import { useNavigate } from 'react-router';

function Home() {
    const navigate = useNavigate();
  return (
<>
<div className="bg">
   <Navbar/>
<div className="hero">
  <div className="hero-content">
    
    <div className="srh-section">
    <h1>India’s National Research Equipment Discovery Platform</h1>

   <SearchBar/>
   <button className="hero-cta" onClick={() => navigate("equipmentlist")}>Explore Equipment</button>
    <p> Discover and request access to world-class government-funded scientific infrastructure.
    </p>

    </div>

    <div className="stats">
      <div className="stat-card">
        <ul>
            <h3>Inter-institution collaboration count</h3>
            <li><span className='tick'>✔</span> 1000+ Instruments</li>
            <li><span className='tick'>✔</span> 300+ Institutions</li>
            <li><span className='tick'>✔</span> Pan-India Access</li>
        </ul>
        </div>

        <div className="stat-card">
        <ul>
            <h3>Total Registered Equipment</h3>
            <li><span className='tick'>✔</span> 12,480+ Instruments Listed</li>
            <li><span className='tick'>✔</span> Across universities, research labs</li>
            <li><span className='tick'>✔</span> government institutes</li>
        </ul>
        </div>

        <div className="stat-card">
        <ul> <h3>Active Research Institutions</h3>
            <li><span className='tick'>✔</span> 1,230+ Institutions Onboarded</li>
            <li><span className='tick'>✔</span> Including IITs, NITs, central universities</li>
            <li><span className='tick'>✔</span> private R&D labs</li>
        </ul>
        </div>

        <div className="stat-card">
        <ul> <h3>Successful Equipment Bookings</h3>
            <li><span className='tick'>✔</span> 58,900+ Reservations Processed</li>
            <li><span className='tick'>✔</span> Researchers accessing shared infrastructure nationwide.</li>
            <li><span className='tick'>✔</span> Pan-India Access</li>
        </ul>
        </div>

        
    </div>
    <div className="featured-instruments">
        <h2>Featured Instruments</h2>
        <div className="instrument">
            <ul>
            <li>Name: PCR Machine </li>
            <li>Location: IIT Madras</li>
            </ul>
        </div>

        <div className="instrument">
            <ul>
            <li>Name: SEM </li>
            <li>Location: IISc</li>
            </ul>
        </div>

        <div className="instrument">
            <ul>
            <li>Name: NGS Sequencer </li>
            <li>Location: NIT Trichy</li>
            </ul>
        </div>

        <div className="instrument">
            <ul>
            <li>Name: Mass Spectrometer</li>
            <li>Location: Pune</li>
            </ul>
        </div>
    </div>
  </div>
</div>
  <Footer/> 
</div>
</> 
  );
}

export default Home;