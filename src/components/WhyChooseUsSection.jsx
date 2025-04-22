import React from 'react';
import {FaShieldAlt, FaHandshake, FaLeaf, FaUsers, FaBuilding, FaThumbsUp,} from 'react-icons/fa';
import './WhyChooseUsSection.css';

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us-section">
      <h2>Why Choose Us</h2>
      <p className="why-choose-us-intro">
        We're more than just a real estate platform. We're your trusted partner for finding and investing in the right property. Here's why people choose us:
      </p>

      <div className="why-choose-us-cards">
        <div className="why-choose-us-card">
          <FaShieldAlt className="icon" />
          <h3>Secure Deals</h3>
          <p>End-to-end secure and verified transactions.</p>
        </div>

        <div className="why-choose-us-card">
          <FaHandshake className="icon" />
          <h3>Trustworthy Agents</h3>
          <p>Work only with certified professionals.</p>
        </div>

        <div className="why-choose-us-card">
          <FaLeaf className="icon" />
          <h3>Eco-Friendly Options</h3>
          <p>Choose from a range of green properties.</p>
        </div>

        <div className="why-choose-us-card">
          <FaUsers className="icon" />
          <h3>Customer-Centric Support</h3>
          <p>Dedicated guidance from inquiry to ownership.</p>
        </div>

        <div className="why-choose-us-card">
          <FaBuilding className="icon" />
          <h3>Wide Property Network</h3>
          <p>Access properties across key cities and suburbs.</p>
        </div>

        <div className="why-choose-us-card">
          <FaThumbsUp className="icon" />
          <h3>Trusted by Many</h3>
          <p>Backed by thousands of happy homeowners and investors.</p>
        </div>
      </div>

      <div className="why-choose-us-cta">
        <p>Ready to find your dream property?</p>
        <a href="/projects" className="cta-button">Explore Our Projects</a>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
