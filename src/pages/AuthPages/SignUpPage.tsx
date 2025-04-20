import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Facebook, CheckSquare } from 'lucide-react';
import './AuthPages.css';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Registration logic would go here
    console.log('Register with:', { name, email, password, agreeToTerms });
  };
  
  return (
    <div className="auth-page">
      <div className="container">
        <div className="auth-container">
          <div className="auth-card">
            <h1>Create an account</h1>
            
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Full name</label>
                <div className="input-with-icon">
                  <User size={16} className="input-icon" />
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="input-group">
                <label htmlFor="email">Email address</label>
                <div className="input-with-icon">
                  <Mail size={16} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <div className="input-with-icon">
                  <Lock size={16} className="input-icon" />
                  <input
                    type="password"
                    id="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="password-requirements">
                  <p>Your password must include:</p>
                  <ul>
                    <li>At least 8 characters</li>
                    <li>At least one number</li>
                    <li>At least one uppercase letter</li>
                  </ul>
                </div>
              </div>
              
              <div className="terms-agreement">
                <input
                  type="checkbox"
                  id="agree-terms"
                  checked={agreeToTerms}
                  onChange={() => setAgreeToTerms(!agreeToTerms)}
                  required
                />
                <label htmlFor="agree-terms">
                  I agree to Booking.com's <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link>
                </label>
              </div>
              
              <button 
                type="submit" 
                className="auth-button"
                disabled={!agreeToTerms}
              >
                Create account
              </button>
            </form>
            
            <div className="separator">
              <span>or</span>
            </div>
            
            <button className="social-auth-button facebook">
              <Facebook size={16} />
              <span>Sign up with Facebook</span>
            </button>
            
            <button className="social-auth-button google">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
                <path d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z" fill="#FF3D00"/>
                <path d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.001 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z" fill="#4CAF50"/>
                <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
              </svg>
              <span>Sign up with Google</span>
            </button>
            
            <div className="auth-footer">
              <p>Already have an account? <Link to="/signin">Sign in</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;