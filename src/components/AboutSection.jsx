import React from 'react';
import { FaBuilding, FaUsers, FaLightbulb, FaPhoneAlt } from 'react-icons/fa';
import './AboutSection.css'; 
import Male from '../assets/Male.png';
import Female from '../assets/Female.png';

const AboutSection = () => {
  return (
    <div className="about-page">
      
      <section className="about-hero-section">
        <div className="about-hero-content">
          <h1>About Global Habitat</h1>
          <p>We are committed to transforming the way you experience real estate.</p>
        </div>
      </section>

      <section className="mission-vision-section">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>To provide seamless, secure, and eco-friendly real estate experiences through innovation and trust.</p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>To become the most trusted name in property consulting and investment across the country.</p>
        </div>
      </section>

      <section className="why-us-section">
        <h2>Why Choose Us</h2>
        <div className="why-us-cards">
          <div className="why-us-card">
            <FaBuilding className="icon" />
            <h3>Prime Locations</h3>
            <p>Properties in the most sought-after and accessible locations.</p>
          </div>
          <div className="why-us-card">
            <FaUsers className="icon" />
            <h3>Diverse Options</h3>
            <p>A wide range of apartments, houses, and commercial spaces.</p>
          </div>
          <div className="why-us-card">
            <FaLightbulb className="icon" />
            <h3>Investment Value</h3>
            <p>High appreciation potential and strong return on investment.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={Male} alt="Founder" />
            <h4>Rahul Mehta</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src={Female} alt="Sales Head" />
            <h4>Priya Sharma</h4>
            <p>Head of Sales</p>
          </div>
          <div className="team-member">
            <img src={Male} alt="Advisor" />
            <h4>Vikram Joshi</h4>
            <p>Real Estate Advisor</p>
          </div>
        </div>
      </section>

      <section className="contact-cta-section">
        <h2>Let's Connect</h2>
        <p>Have questions or want to start your property journey? Reach out to us!</p>
        <a href="/contact" className="contact-button">
          <FaPhoneAlt className="icon" /> Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutSection;
