import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaShieldAlt, FaHandshake, FaLeaf, FaWhatsapp, FaHome, FaChartLine, FaKey, FaEnvelope } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css';
import Image1 from '../assets/Image1.jpg';
import Image2 from '../assets/Image2.jpg';
import Image3 from '../assets/Image3.jpg';
import property1 from '../assets/property1.webp';
import property2 from '../assets/property2.jpg';
import property3 from '../assets/property3.jpg';

const HomePage = () => {
  const handleBookNow = () => {
    const phone = '1234567890';
    const message = 'Hi, I am interested in booking an appointment.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setNewsletterEmail(''); 
  };



  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="home-page">
      <section className="carousel-section">
        <Slider {...settings}>
          <div><img src={Image1} alt="Slide 1" className="carousel-image" /></div>
          <div><img src={Image2} alt="Slide 2" className="carousel-image" /></div>
          <div><img src={Image3} alt="Slide 3" className="carousel-image" /></div>
        </Slider>
      </section>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Find Your Dream Property Today</h1>
          <p>Explore trusted listings, expert guidance, and a seamless buying experience.</p>
          <a href="/projects" className="our-projects-button">Browse Projects</a>
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card"><FaHome /><h3>Buy Property</h3></div>
          <div className="service-card"><FaKey /><h3>Sell Property</h3></div>
          <div className="service-card"><FaChartLine /><h3>Investment Advice</h3></div>
          <div className="service-card"><FaHandshake /><h3>Consulting</h3></div>
        </div>
      </section>

      <section className="featured-properties">
        <h2>Featured Listings</h2>
        <div className="property-cards">
          {[property1, property2, property3].map((img, idx) => (
            <div className="property-card" key={idx}>
              <img src={img} alt={`Property ${idx}`} />
              <h3>Modern 3BHK Villa</h3>
              <p>Spacious villa located in a prime area with all amenities.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat"><h2>500+</h2><p>Happy Clients</p></div>
          <div className="stat"><h2>25+</h2><p>Projects Delivered</p></div>
          <div className="stat"><h2>10+</h2><p>Years of Trust</p></div>
        </div>
      </section>

      <section className="appointment-section">
        <h2>Book an Appointment</h2>
        <p>Talk with our experts and explore tailored solutions for you.</p>
        <button onClick={handleBookNow} className="book-appointment-button">
          <FaWhatsapp className="icon" /> Book Now via WhatsApp
        </button>
      </section>

      <section className="promise-section">
        <h2>Our Promise</h2>
        <div className="promise-cards">
          <div className="promise-card">
            <FaShieldAlt className="icon" />
            <h3>Secure Deals</h3>
            <p>End-to-end secure and verified transactions.</p>
          </div>
          <div className="promise-card">
            <FaHandshake className="icon" />
            <h3>Trustworthy Agents</h3>
            <p>Work only with certified professionals.</p>
          </div>
          <div className="promise-card">
            <FaLeaf className="icon" />
            <h3>Eco-Friendly Options</h3>
            <p>Choose from a range of green properties.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <h2>Client Testimonial</h2>
        <div className="testimonial-card">
          <p>"Global Habitat made our home-buying journey smooth and joyful. Excellent service and support!"</p>
          <h4>— Neha Raj</h4>
        </div>
      </section>

      <section className="newsletter-section">
        <h2>Stay Updated</h2>
        <p>Get the latest property news and offers straight to your inbox.</p>
        <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            required
          />
          <button type="submit"><FaEnvelope /> Subscribe</button>
        </form>
      </section>

    </div>
  );
};

export default HomePage;
