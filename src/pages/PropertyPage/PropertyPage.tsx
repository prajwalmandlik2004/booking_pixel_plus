import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  MapPin, Star, Check, Coffee, Wifi, Car, Snowflake, 
  Bath, Heart, Share, Flag, ArrowLeft, ArrowRight 
} from 'lucide-react';
import './PropertyPage.css';

const PropertyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  
  // Sample property data
  const property = {
    id: id || '1',
    name: 'Luxury Plaza Hotel',
    location: 'Manhattan, New York',
    rating: 9.2,
    reviewCount: 1432,
    reviewText: 'Exceptional',
    description: 'Located in the heart of Manhattan, this luxury hotel offers stylish accommodations with city views. It features a rooftop terrace, indoor pool, and an on-site restaurant. Times Square is just a 10-minute walk away.',
    images: [
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    facilities: [
      { name: 'Free WiFi', icon: <Wifi size={16} /> },
      { name: 'Parking', icon: <Car size={16} /> },
      { name: 'Air conditioning', icon: <Snowflake size={16} /> },
      { name: 'Breakfast', icon: <Coffee size={16} /> },
      { name: 'Private bathroom', icon: <Bath size={16} /> }
    ],
    rooms: [
      {
        id: 'r1',
        name: 'Deluxe King Room',
        sleeps: 2,
        size: 30,
        beds: '1 king bed',
        price: 299,
        discountPercentage: 15,
        taxesIncluded: true,
        freeCancellation: true,
        breakfastIncluded: true,
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 'r2',
        name: 'Premium Double Room',
        sleeps: 4,
        size: 40,
        beds: '2 queen beds',
        price: 349,
        discountPercentage: 0,
        taxesIncluded: true,
        freeCancellation: true,
        breakfastIncluded: true,
        image: 'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        id: 'r3',
        name: 'Executive Suite',
        sleeps: 2,
        size: 55,
        beds: '1 king bed',
        price: 499,
        discountPercentage: 10,
        taxesIncluded: true,
        freeCancellation: true,
        breakfastIncluded: true,
        image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ],
    nearbyAttractions: [
      { name: 'Times Square', distance: '0.8 miles' },
      { name: 'Central Park', distance: '1.2 miles' },
      { name: 'Empire State Building', distance: '0.5 miles' },
      { name: 'Broadway Theater District', distance: '0.7 miles' }
    ]
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };
  
  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  
  const getRatingColor = (rating: number) => {
    if (rating >= 9) return '#005f00';
    if (rating >= 8) return '#008009';
    if (rating >= 7) return '#6b8e23';
    if (rating >= 6) return '#ffa500';
    return '#ff0000';
  };
  
  const ratingColor = getRatingColor(property.rating);
  const selectedRoom = property.rooms[selectedRoomIndex];
  const discountedPrice = selectedRoom.discountPercentage
    ? selectedRoom.price * (1 - selectedRoom.discountPercentage / 100)
    : selectedRoom.price;
  
  return (
    <div className="property-page">
      <div className="container">
        <div className="property-header">
          <div className="property-title">
            <h1>{property.name}</h1>
            <div className="property-location">
              <MapPin size={16} />
              <span>{property.location}</span>
            </div>
          </div>
          
          <div className="property-actions">
            <button className="action-button">
              <Heart size={16} />
              <span>Save</span>
            </button>
            <button className="action-button">
              <Share size={16} />
              <span>Share</span>
            </button>
            <button className="action-button">
              <Flag size={16} />
              <span>Report</span>
            </button>
          </div>
        </div>
        
        <div className="property-gallery">
          <div className="main-image">
            <img src={property.images[currentImageIndex]} alt={property.name} />
            <button className="gallery-nav prev" onClick={prevImage}>
              <ArrowLeft size={24} />
            </button>
            <button className="gallery-nav next" onClick={nextImage}>
              <ArrowRight size={24} />
            </button>
          </div>
          
          <div className="thumbnail-grid">
            {property.images.map((image, index) => (
              <div 
                key={index}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => selectImage(index)}
              >
                <img src={image} alt={`${property.name} - ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="property-content">
          <div className="property-main">
            <div className="property-description">
              <div className="section-header">
                <h2>About this property</h2>
                <div className="rating-container">
                  <div className="rating" style={{ backgroundColor: ratingColor }}>
                    <span>{property.rating}</span>
                  </div>
                  <div className="review-info">
                    <span className="review-text">{property.reviewText}</span>
                    <span className="review-count">{property.reviewCount} reviews</span>
                  </div>
                </div>
              </div>
              
              <p>{property.description}</p>
              
              <div className="facilities-section">
                <h3>Most popular facilities</h3>
                <div className="facilities-grid">
                  {property.facilities.map((facility, index) => (
                    <div key={index} className="facility-item">
                      {facility.icon}
                      <span>{facility.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="nearby-attractions">
              <h3>What's nearby</h3>
              <ul className="attractions-list">
                {property.nearbyAttractions.map((attraction, index) => (
                  <li key={index} className="attraction-item">
                    <span className="attraction-name">{attraction.name}</span>
                    <span className="attraction-distance">{attraction.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="available-rooms">
              <h2>Available rooms</h2>
              
              <div className="rooms-list">
                {property.rooms.map((room, index) => (
                  <div 
                    key={room.id} 
                    className={`room-card ${index === selectedRoomIndex ? 'selected' : ''}`}
                    onClick={() => setSelectedRoomIndex(index)}
                  >
                    <div className="room-image">
                      <img src={room.image} alt={room.name} />
                    </div>
                    
                    <div className="room-details">
                      <h3 className="room-name">{room.name}</h3>
                      
                      <div className="room-specs">
                        <div className="room-spec">
                          <span className="spec-label">Room size:</span>
                          <span className="spec-value">{room.size} m²</span>
                        </div>
                        <div className="room-spec">
                          <span className="spec-label">Sleeps:</span>
                          <span className="spec-value">{room.sleeps} people</span>
                        </div>
                        <div className="room-spec">
                          <span className="spec-label">Beds:</span>
                          <span className="spec-value">{room.beds}</span>
                        </div>
                      </div>
                      
                      <div className="room-features">
                        {room.freeCancellation && (
                          <div className="room-feature">
                            <Check size={16} color="#008009" />
                            <span>Free cancellation</span>
                          </div>
                        )}
                        {room.breakfastIncluded && (
                          <div className="room-feature">
                            <Check size={16} color="#008009" />
                            <span>Breakfast included</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="room-price">
                      {room.discountPercentage > 0 && (
                        <div className="original-price">
                          ${room.price.toFixed(0)}
                        </div>
                      )}
                      <div className="current-price">
                        <span className="price-value">
                          ${(room.price * (1 - (room.discountPercentage || 0) / 100)).toFixed(0)}
                        </span>
                        <span className="tax-info">
                          {room.taxesIncluded ? 'includes taxes and fees' : 'excludes taxes and fees'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="booking-sidebar">
            <div className="booking-card">
              <div className="booking-card-header">
                <h3>Price for your dates</h3>
                <div className="selected-dates">
                  <span>June 15 - 20, 2025</span>
                  <span>5 nights, 2 adults</span>
                </div>
              </div>
              
              <div className="selected-room-preview">
                <h4>{selectedRoom.name}</h4>
                <div className="room-features-mini">
                  {selectedRoom.freeCancellation && (
                    <div className="room-feature">
                      <Check size={14} color="#008009" />
                      <span>Free cancellation</span>
                    </div>
                  )}
                  {selectedRoom.breakfastIncluded && (
                    <div className="room-feature">
                      <Check size={14} color="#008009" />
                      <span>Breakfast included</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="price-breakdown">
                <div className="price-row">
                  <span>5 nights</span>
                  <span>${(discountedPrice * 5).toFixed(0)}</span>
                </div>
                
                <div className="price-row taxes">
                  <span>Taxes and fees</span>
                  <span>{selectedRoom.taxesIncluded ? 'Included' : '$85'}</span>
                </div>
                
                <div className="price-row total">
                  <span>Total</span>
                  <span>
                    ${selectedRoom.taxesIncluded 
                      ? (discountedPrice * 5).toFixed(0) 
                      : ((discountedPrice * 5) + 85).toFixed(0)}
                  </span>
                </div>
              </div>
              
              <button className="book-now-button">
                I'll reserve
              </button>
              
              <p className="no-charge-info">
                You'll be charged a deposit of ${(discountedPrice * 0.15).toFixed(0)} to confirm your booking. The remaining amount will be charged at the property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;