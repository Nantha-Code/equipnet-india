import React from 'react'
import "./Home.css"
import Footer from './Footer';

function Home() {
  return (

    <div>
        <header>
            <nav>
                <ul>
                    <li>Equipment</li>
                    <li>Register</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
            <div className="hero-section">
                <h2>Discover & Access Research Equipment Across India</h2>
                <div className="search-box">
                <input placeholder="Search equipment..." />
                 <button>Search</button>
                 </div>
            <div className="stats-section">
                <h3>Speciality</h3>
                <ul>
                    <li>✔ 1000+ Equipment</li>
                    <li>✔ 300+ Institutions</li>
                    <li>✔ Pan-India Access</li>
                </ul>
            </div>
            <div className="working-method-container">
                <h4>Search → Request → Use with Support</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus error id esse aut reiciendis facilis sequi nemo ut officiis fuga dolorem dolor perspiciatis sapiente quidem est, similique consectetur ipsa molestias nihil temporibus, iure, nostrum saepe commodi ipsum. Quas in magnam omnis doloribus enim delectus, voluptate magni et sapiente eius facilis?</p>
            </div>
            <div className="testimonials">
                <h2>Testimonials</h2>
                <p>The statement from the distiguished scientists on setting up of the national portal Equipnet</p>
                <div className="image-text">
                    <img src="https://i.pinimg.com/736x/6a/f4/05/6af4058c61a136bcf1d4d794ae1ac5dc.jpg" alt="awarded persons"/>               
                </div>
                <div className="image-text">
                    <img src="https://i.pinimg.com/736x/62/41/b2/6241b26e6cf04e873795ec6cfe40df8c.jpg" alt="awarded persons"/>               
                </div>
                <div className="image-text">
                    <img src="https://i.pinimg.com/736x/76/21/c4/7621c4aba8d16065242494ca15c7f1e9.jpg" alt="awarded persons"/>               
                </div>

            </div>
    </div>
            <Footer/>
 </div>
  );
}

export default Home;