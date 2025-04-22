import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section company-info">
          <h4>Global Habitat</h4>
          <p>2nd Floor, Onyx, Golf Link Rd,<br />Chevayoor, Kozhikode, Kerala 673017</p>
          <p>&#9990; +91 99468 30300 | +91 95009 03100</p>
          <p>✉ helpdesk.calicut@globalhabitat.co.in</p>
        </div>

        <div className="footer-section hours">
          <h4>Working Hours</h4>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p>Sat: 10:00 AM - 4:00 PM</p>
          <p>Sun: Closed</p>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a><br />
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a><br />
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Global Habitat. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
