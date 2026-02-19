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
            <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M500.8 766.4c8 4.8 11.2 14.4 6.4 22.4s-14.4 11.2-22.4 6.4l-176-96c-8-4.8-11.2-14.4-6.4-22.4 4.8-8 14.4-11.2 22.4-6.4l176 96z" fill="#050D42"></path><path d="M652.8 460.8v-32c57.6 0 86.4 89.6 64 188.8-22.4 96-134.4 179.2-224 179.2v-32c75.2 0 174.4-73.6 192-155.2 19.2-81.6-3.2-148.8-32-148.8zM316.8 908.8h352c9.6 0 16 6.4 16 16s-6.4 16-16 16h-352c-9.6 0-16-6.4-16-16s6.4-16 16-16z" fill="#050D42"></path><path d="M652.8 94.4c46.4 27.2 62.4 84.8 35.2 131.2L528 502.4l-166.4-96 160-276.8c25.6-46.4 84.8-60.8 131.2-35.2z" fill="#2F4BFF"></path><path d="M336 428.8c-9.6-6.4-14.4-17.6-11.2-24s16-9.6 27.2-3.2l184 107.2c9.6 6.4 14.4 17.6 11.2 24-4.8 8-16 9.6-27.2 3.2L336 428.8z" fill="#050D42"></path><path d="M358.4 443.2l139.2 80-24 41.6c-4.8 8-14.4 9.6-22.4 6.4l-110.4-64c-8-4.8-9.6-14.4-6.4-22.4l24-41.6z" fill="#2F4BFF"></path><path d="M652.8 444.8m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z" fill="#2F4BFF"></path><path d="M476.8 828.8v96h32v-96z" fill="#050D42"></path><path d="M492.8 780.8m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#2F4BFF"></path></g></svg>
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