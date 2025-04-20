import React from 'react';
import { Link } from 'react-router-dom';
import './DestinationCard.css';

export interface DestinationCardProps {
  id: string;
  name: string;
  image: string;
  propertyCount: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  id,
  name,
  image,
  propertyCount,
}) => {
  return (
    <Link to={`/search?destination=${name}`} className="destination-card">
      <div className="destination-image">
        <img src={image} alt={name} />
      </div>
      <div className="destination-info">
        <h3 className="destination-name">{name}</h3>
        <p className="destination-property-count">{propertyCount.toLocaleString()} properties</p>
      </div>
    </Link>
  );
};

export default DestinationCard;