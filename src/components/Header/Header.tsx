import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Bed, Car, PlaneTakeoff, Compass, Menu, X } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isHomePage ? 'home-header' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <Link to="/" className="logo">
              Booking.com
            </Link>
          </div>

          <div className="header-right">
            <div className="currency-selector">
              <button className="currency-button">USD</button>
            </div>
            
            <div className="auth-buttons">
              <Link to="/signin" className="auth-button signin">
                Sign in
              </Link>
              <Link to="/signup" className="auth-button register">
                Register
              </Link>
            </div>
            
            <div className="list-property">
              <Link to="/list-property" className="list-property-button">
                List your property
              </Link>
            </div>

            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <nav className={`nav-tabs ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul className="tabs-list">
            <li className="tab active">
              <Bed size={16} />
              <span>Stays</span>
            </li>
            <li className="tab">
              <PlaneTakeoff size={16} />
              <span>Flights</span>
            </li>
            <li className="tab">
              <Car size={16} />
              <span>Car rentals</span>
            </li>
            <li className="tab">
              <Compass size={16} />
              <span>Attractions</span>
            </li>
            <li className="tab">
              <Car size={16} />
              <span>Airport taxis</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;