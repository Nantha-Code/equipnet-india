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
    <div className="about-container">
        <h2>About Us</h2>
        <p>
            The I-STEM Web Portal: a National Portal that is the gateway for researchers to locate the specific facility(ies) they need for their R&D work and identify the one that is either located closest to them or available the soonest.</p>
            <a href="">know more</a>
    </div>
    <div className="small-stats-container">

            <h2>Statistics of Researchers, Equipment, Institution</h2>

        <div className="stats-box">
            <img src="" alt="" />
            <h2>30704+</h2>
            <p>Equipment Listed</p>
        </div>
        <div className="stats-box">
            <img src="" alt="" />
            <h2>3763+</h2>
            <p>Institute Listed</p>
        </div>
        <div className="stats-box">
            <img src="" alt="" />
            <h2>54607+</h2>
            <p>Researchers</p>
        </div>
        <div className="stats-box">
            <img src="" alt="" />
            <h2>82360+</h2>
            <p>Facility Booking Record (FBR)</p>
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