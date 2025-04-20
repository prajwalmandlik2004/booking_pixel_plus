import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import './PropertyCard.css';

export interface PropertyCardProps {
  id: string;
  name: string;
  location: string;
  distance: string;
  image: string;
  rating: number;
  reviewCount: number;
  reviewText: string;
  price: number;
  discountPercentage?: number;
  taxesIncluded: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  name,
  location,
  distance,
  image,
  rating,
  reviewCount,
  reviewText,
  price,
  discountPercentage,
  taxesIncluded,
}) => {
  const getRatingColor = (rating: number) => {
    if (rating >= 9) return '#005f00';
    if (rating >= 8) return '#008009';
    if (rating >= 7) return '#6b8e23';
    if (rating >= 6) return '#ffa500';
    return '#ff0000';
  };

  const ratingColor = getRatingColor(rating);
  const discountedPrice = discountPercentage
    ? price * (1 - discountPercentage / 100)
    : price;

  return (
    <div className="property-card">
      <div className="property-image">
        <img src={image} alt={name} />
      </div>
      
      <div className="property-info">
        <div className="property-details">
          <div className="property-header">
            <h3 className="property-name">
              <Link to={`/property/${id}`}>{name}</Link>
            </h3>
            <div className="rating-container">
              <div className="rating" style={{ backgroundColor: ratingColor }}>
                <span>{rating}</span>
              </div>
              <div className="review-info">
                <span className="review-text">{reviewText}</span>
                <span className="review-count">{reviewCount} reviews</span>
              </div>
            </div>
          </div>
          
          <div className="property-location">
            <Link to="#" className="location-link">{location}</Link>
            <span className="distance">Show on map • {distance} from center</span>
          </div>
          
          {discountPercentage && (
            <div className="discount-badge">
              Limited-time deal
            </div>
          )}
        </div>
        
        <div className="property-price">
          {discountPercentage && (
            <div className="original-price">
              ${price.toFixed(0)}
            </div>
          )}
          <div className="current-price">
            <span className="price-value">${discountedPrice.toFixed(0)}</span>
            <span className="tax-info">
              {taxesIncluded ? 'includes taxes and fees' : 'excludes taxes and fees'}
            </span>
          </div>
          <Link to={`/property/${id}`} className="view-deal">
            See availability
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;