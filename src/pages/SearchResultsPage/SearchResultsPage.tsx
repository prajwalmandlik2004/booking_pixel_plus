import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import { MapPin, Sliders, SlidersHorizontal, Map, Check } from 'lucide-react';
import './SearchResultsPage.css';

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const destination = searchParams.get('destination') || '';
  const checkIn = searchParams.get('checkIn') || '';
  const checkOut = searchParams.get('checkOut') || '';
  const adults = parseInt(searchParams.get('adults') || '2', 10);
  const children = parseInt(searchParams.get('children') || '0', 10);
  const rooms = parseInt(searchParams.get('rooms') || '1', 10);
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  
  // Format dates for display
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };
  
  // Sample properties data
  const properties = [
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
    },
    {
      id: '4',
      name: 'Grand Plaza Apartments',
      location: 'Downtown, New York',
      distance: '0.3 miles',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 8.7,
      reviewCount: 873,
      reviewText: 'Excellent',
      price: 179,
      taxesIncluded: true
    },
    {
      id: '5',
      name: 'Sunset Beach Resort',
      location: 'Coastal Area, Miami',
      distance: '2.1 miles',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 8.5,
      reviewCount: 1254,
      reviewText: 'Very Good',
      price: 329,
      discountPercentage: 20,
      taxesIncluded: false
    }
  ];
  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  const handleFilterSelect = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(e.target.value, 10);
    const newPriceRange = [...priceRange] as [number, number];
    newPriceRange[index] = value;
    setPriceRange(newPriceRange);
  };
  
  return (
    <div className="search-results-page">
      <div className="container">
        <div className="search-summary">
          <h1>{destination}: {properties.length} properties found</h1>
          <div className="search-dates">
            {checkIn && checkOut ? (
              <span>{formatDate(checkIn)} - {formatDate(checkOut)}: {adults} adults, {children} children, {rooms} room</span>
            ) : (
              <span>No dates selected</span>
            )}
          </div>
        </div>
        
        <div className="search-results-container">
          <div className={`filter-sidebar ${isFilterOpen ? 'open' : ''}`}>
            <div className="filter-header">
              <h2>Filter by:</h2>
              <button className="close-filter" onClick={toggleFilter}>×</button>
            </div>
            
            <div className="filter-section">
              <h3>Your budget (per night)</h3>
              <div className="price-inputs">
                <div className="price-field">
                  <label htmlFor="min-price">Min Price</label>
                  <div className="price-input-container">
                    <span className="currency-symbol">$</span>
                    <input
                      type="number"
                      id="min-price"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      min="0"
                      max={priceRange[1]}
                    />
                  </div>
                </div>
                
                <div className="price-field">
                  <label htmlFor="max-price">Max Price</label>
                  <div className="price-input-container">
                    <span className="currency-symbol">$</span>
                    <input
                      type="number"
                      id="max-price"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      min={priceRange[0]}
                    />
                  </div>
                </div>
              </div>
              
              <div className="range-slider">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="range-min"
                />
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="range-max"
                />
              </div>
            </div>
            
            <div className="filter-section">
              <h3>Property type</h3>
              <div className="filter-options">
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="hotels" 
                    checked={selectedFilters.includes('hotels')}
                    onChange={() => handleFilterSelect('hotels')}
                  />
                  <label htmlFor="hotels">Hotels</label>
                </div>
                
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="apartments" 
                    checked={selectedFilters.includes('apartments')}
                    onChange={() => handleFilterSelect('apartments')}
                  />
                  <label htmlFor="apartments">Apartments</label>
                </div>
                
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="resorts" 
                    checked={selectedFilters.includes('resorts')}
                    onChange={() => handleFilterSelect('resorts')}
                  />
                  <label htmlFor="resorts">Resorts</label>
                </div>
                
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="villas" 
                    checked={selectedFilters.includes('villas')}
                    onChange={() => handleFilterSelect('villas')}
                  />
                  <label htmlFor="villas">Villas</label>
                </div>
              </div>
            </div>
            
            <div className="filter-section">
              <h3>Star rating</h3>
              <div className="filter-options">
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="5-star" 
                    checked={selectedFilters.includes('5-star')}
                    onChange={() => handleFilterSelect('5-star')}
                  />
                  <label htmlFor="5-star">5 stars</label>
                </div>
                
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="4-star" 
                    checked={selectedFilters.includes('4-star')}
                    onChange={() => handleFilterSelect('4-star')}
                  />
                  <label htmlFor="4-star">4 stars</label>
                </div>
                
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="3-star" 
                    checked={selectedFilters.includes('3-star')}
                    onChange={() => handleFilterSelect('3-star')}
                  />
                  <label htmlFor="3-star">3 stars</label>
                </div>
                
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="2-star" 
                    checked={selectedFilters.includes('2-star')}
                    onChange={() => handleFilterSelect('2-star')}
                  />
                  <label htmlFor="2-star">2 stars</label>
                </div>
              </div>
            </div>
            
            <div className="filter-section">
              <h3>Facilities</h3>
              <div className="filter-options">
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="wifi" 
                    checked={selectedFilters.includes('wifi')}
                    onChange={() => handleFilterSelect('wifi')}
                  />
                  <label htmlFor="wifi">WiFi</label>
                </div>
                
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="parking" 
                    checked={selectedFilters.includes('parking')}
                    onChange={() => handleFilterSelect('parking')}
                  />
                  <label htmlFor="parking">Parking</label>
                </div>
                
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="pool" 
                    checked={selectedFilters.includes('pool')}
                    onChange={() => handleFilterSelect('pool')}
                  />
                  <label htmlFor="pool">Swimming pool</label>
                </div>
                
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="breakfast" 
                    checked={selectedFilters.includes('breakfast')}
                    onChange={() => handleFilterSelect('breakfast')}
                  />
                  <label htmlFor="breakfast">Breakfast included</label>
                </div>
                
                <div className="filter-option">
                  <input 
                    type="checkbox" 
                    id="ac" 
                    checked={selectedFilters.includes('ac')}
                    onChange={() => handleFilterSelect('ac')}
                  />
                  <label htmlFor="ac">Air conditioning</label>
                </div>
              </div>
            </div>
            
            <div className="filter-actions">
              <button className="clear-filters">Clear all filters</button>
              <button className="apply-filters">Show results</button>
            </div>
          </div>
          
          <div className="results-container">
            <div className="results-header">
              <button className="filter-toggle" onClick={toggleFilter}>
                <SlidersHorizontal size={18} />
                <span>Filter</span>
              </button>
              
              <div className="view-options">
                <button className="view-option active">
                  <Sliders size={18} />
                  <span>List view</span>
                </button>
                <button className="view-option">
                  <Map size={18} />
                  <span>Map view</span>
                </button>
              </div>
            </div>
            
            <div className="results-list">
              {properties.map(property => (
                <PropertyCard
                  key={property.id}
                  {...property}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;