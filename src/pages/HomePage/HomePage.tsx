import React, { useState } from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import SmartTravelCompanion from '../../components/SmartTravelCompanion/SmartTravelCompanion';
import { MapPin, Bed, Trophy, Sparkles } from 'lucide-react';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [destination, setDestination] = useState('');
  
  // Sample data for popular destinations
  const popularDestinations = [
    {
      id: '1',
      name: 'New York',
      image: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      propertyCount: 12350
    },
    {
      id: '2',
      name: 'Paris',
      image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      propertyCount: 9876
    },
    {
      id: '3',
      name: 'London',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      propertyCount: 11234
    },
    {
      id: '4',
      name: 'Tokyo',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      propertyCount: 8765
    },
  ];
  
  // Sample data for featured properties
  const featuredProperties = [
    {
      id: '1',
      name: 'Luxury Plaza Hotel',
      location: 'Manhattan, New York',
      distance: '0.8 miles',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 9.2,
      reviewCount: 1432,
      reviewText: 'Exceptional',
      price: 299,
      discountPercentage: 15,
      taxesIncluded: true
    },
    {
      id: '2',
      name: 'Riverside Boutique Hotel',
      location: 'Paris Center, Paris',
      distance: '0.5 miles',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 8.9,
      reviewCount: 964,
      reviewText: 'Excellent',
      price: 189,
      taxesIncluded: true
    },
    {
      id: '3',
      name: 'Royal Garden Inn',
      location: 'Westminster, London',
      distance: '1.2 miles',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 9.1,
      reviewCount: 2143,
      reviewText: 'Exceptional',
      price: 249,
      discountPercentage: 10,
      taxesIncluded: false
    }
  ];
  
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Find your next stay</h1>
            <p className="hero-subtitle">Search deals on hotels, homes, and much more...</p>
            
            <SearchBox />
          </div>
        </div>
      </div>
      
      <div className="container">
        <section className="offers-section">
          <div className="section-header">
            <h2>Offers</h2>
            <p>Promotions, deals, and special offers for you</p>
          </div>
          
          <div className="offers-grid">
            <div className="offer-card">
              <div className="offer-content">
                <h3>Fly away to your dream vacation</h3>
                <p>Get inspired – compare and book flights with flexibility</p>
                <button className="offer-button">Search flights</button>
              </div>
              <div className="offer-image">
                <img src="https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Airplane wing" />
              </div>
            </div>
            
            <div className="offer-card">
              <div className="offer-content">
                <h3>Save 15% with Late Escape Deals</h3>
                <p>Travel before June 30, 2025 to save</p>
                <button className="offer-button">Find Late Escape Deals</button>
              </div>
              <div className="offer-image">
                <img src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Beach resort" />
              </div>
            </div>
          </div>
        </section>
        
        <section className="trending-destinations">
          <div className="section-header">
            <h2>Trending destinations</h2>
            <p>Most popular choices for travelers from United States</p>
          </div>
          
          <div className="destinations-grid">
            {popularDestinations.map(destination => (
              <DestinationCard
                key={destination.id}
                id={destination.id}
                name={destination.name}
                image={destination.image}
                propertyCount={destination.propertyCount}
              />
            ))}
          </div>
        </section>
        
        <section className="browse-by-property">
          <div className="section-header">
            <h2>Browse by property type</h2>
          </div>
          
          <div className="property-types-grid">
            <div className="property-type-card">
              <div className="property-type-image">
                <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hotels" />
              </div>
              <h3>Hotels</h3>
              <p>856,744 hotels</p>
            </div>
            
            <div className="property-type-card">
              <div className="property-type-image">
                <img src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Apartments" />
              </div>
              <h3>Apartments</h3>
              <p>756,333 apartments</p>
            </div>
            
            <div className="property-type-card">
              <div className="property-type-image">
                <img src="https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Resorts" />
              </div>
              <h3>Resorts</h3>
              <p>45,721 resorts</p>
            </div>
            
            <div className="property-type-card">
              <div className="property-type-image">
                <img src="https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Villas" />
              </div>
              <h3>Villas</h3>
              <p>327,666 villas</p>
            </div>
          </div>
        </section>
        
        <section className="featured-properties">
          <div className="section-header">
            <h2>Homes guests love</h2>
          </div>
          
          <div className="featured-properties-list">
            {featuredProperties.map(property => (
              <PropertyCard
                key={property.id}
                {...property}
              />
            ))}
          </div>
        </section>
        
        <section className="travel-inspiration">
          <div className="section-header">
            <h2>Get inspiration for your next trip</h2>
          </div>
          
          <SmartTravelCompanion destination="London" />
        </section>
        
        <section className="app-promo">
          <div className="app-promo-content">
            <h2>Take Booking.com with you</h2>
            <p>Save time with our mobile app – get paperless confirmation, make changes wherever you are, and more.</p>
            <div className="qr-box">
              <div className="qr-image"></div>
              <p>Scan the QR code or <a href="#">send yourself a link</a> to download</p>
            </div>
          </div>
          <div className="app-promo-image">
            <img src="https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Mobile app" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;