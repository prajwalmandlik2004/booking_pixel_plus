import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="newsletter">
          <h3>Save time, save money!</h3>
          <p>Sign up and we'll send the best deals to you</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Your email address" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="links-column">
            <h4>Booking.com</h4>
            <ul>
              <li><Link to="#">Customer Service Help</Link></li>
              <li><Link to="#">Partner Help</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Sustainability</Link></li>
              <li><Link to="#">Press center</Link></li>
              <li><Link to="#">Safety Resource Center</Link></li>
              <li><Link to="#">Investor relations</Link></li>
              <li><Link to="#">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div className="links-column">
            <h4>Destinations</h4>
            <ul>
              <li><Link to="#">Countries</Link></li>
              <li><Link to="#">Regions</Link></li>
              <li><Link to="#">Cities</Link></li>
              <li><Link to="#">Districts</Link></li>
              <li><Link to="#">Airports</Link></li>
              <li><Link to="#">Hotels</Link></li>
              <li><Link to="#">Places of interest</Link></li>
            </ul>
          </div>
          
          <div className="links-column">
            <h4>Property Types</h4>
            <ul>
              <li><Link to="#">Hotels</Link></li>
              <li><Link to="#">Apartments</Link></li>
              <li><Link to="#">Resorts</Link></li>
              <li><Link to="#">Villas</Link></li>
              <li><Link to="#">Hostels</Link></li>
              <li><Link to="#">B&Bs</Link></li>
              <li><Link to="#">Guest houses</Link></li>
            </ul>
          </div>
          
          <div className="links-column">
            <h4>For Travelers</h4>
            <ul>
              <li><Link to="#">Coronavirus (COVID-19) FAQs</Link></li>
              <li><Link to="#">Reviews</Link></li>
              <li><Link to="#">Unpacked: Travel articles</Link></li>
              <li><Link to="#">Travel Communities</Link></li>
              <li><Link to="#">Seasonal and holiday deals</Link></li>
              <li><Link to="#">Traveler Review Awards</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>Copyright © 1996–2025 Booking.com™. All rights reserved.</p>
          <p>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;