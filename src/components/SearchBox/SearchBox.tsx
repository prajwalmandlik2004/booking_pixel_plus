import React, { useState } from 'react';
import { Search, Calendar, User, MapPin } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './SearchBox.css';
import { useNavigate } from 'react-router-dom';

const SearchBox: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [isGuestSelectorOpen, setIsGuestSelectorOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the dates for the URL
    const checkInFormatted = checkInDate ? checkInDate.toISOString().split('T')[0] : '';
    const checkOutFormatted = checkOutDate ? checkOutDate.toISOString().split('T')[0] : '';
    
    // Create search params
    const searchParams = new URLSearchParams({
      destination,
      checkIn: checkInFormatted,
      checkOut: checkOutFormatted,
      adults: adults.toString(),
      children: children.toString(),
      rooms: rooms.toString()
    });
    
    // Navigate to search results with query parameters
    navigate(`/search?${searchParams.toString()}`);
  };

  const incrementGuests = (type: 'adults' | 'children' | 'rooms') => {
    if (type === 'adults') {
      setAdults(prev => prev + 1);
    } else if (type === 'children') {
      setChildren(prev => prev + 1);
    } else if (type === 'rooms') {
      setRooms(prev => prev + 1);
    }
  };

  const decrementGuests = (type: 'adults' | 'children' | 'rooms') => {
    if (type === 'adults' && adults > 1) {
      setAdults(prev => prev - 1);
    } else if (type === 'children' && children > 0) {
      setChildren(prev => prev - 1);
    } else if (type === 'rooms' && rooms > 1) {
      setRooms(prev => prev - 1);
    }
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSearch}>
        <div className="search-inputs">
          <div className="search-input destination">
            <MapPin size={18} className="input-icon" />
            <input
              type="text"
              placeholder="Where are you going?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </div>
          
          <div className="search-input date">
            <Calendar size={18} className="input-icon" />
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              selectsStart
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={new Date()}
              placeholderText="Check-in date"
              className="date-input"
              required
            />
          </div>
          
          <div className="search-input date">
            <Calendar size={18} className="input-icon" />
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              selectsEnd
              startDate={checkInDate}
              endDate={checkOutDate}
              minDate={checkInDate || new Date()}
              placeholderText="Check-out date"
              className="date-input"
              required
            />
          </div>
          
          <div className="search-input guests">
            <User size={18} className="input-icon" />
            <div 
              className="guests-display" 
              onClick={() => setIsGuestSelectorOpen(!isGuestSelectorOpen)}
            >
              <span>{adults} adults · {children} children · {rooms} room</span>
            </div>
            
            {isGuestSelectorOpen && (
              <div className="guest-selector">
                <div className="guest-option">
                  <span>Adults</span>
                  <div className="counter">
                    <button 
                      type="button" 
                      onClick={() => decrementGuests('adults')}
                      disabled={adults <= 1}
                    >
                      -
                    </button>
                    <span>{adults}</span>
                    <button 
                      type="button" 
                      onClick={() => incrementGuests('adults')}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="guest-option">
                  <span>Children</span>
                  <div className="counter">
                    <button 
                      type="button" 
                      onClick={() => decrementGuests('children')}
                      disabled={children <= 0}
                    >
                      -
                    </button>
                    <span>{children}</span>
                    <button 
                      type="button" 
                      onClick={() => incrementGuests('children')}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="guest-option">
                  <span>Rooms</span>
                  <div className="counter">
                    <button 
                      type="button" 
                      onClick={() => decrementGuests('rooms')}
                      disabled={rooms <= 1}
                    >
                      -
                    </button>
                    <span>{rooms}</span>
                    <button 
                      type="button" 
                      onClick={() => incrementGuests('rooms')}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <button 
                  type="button" 
                  className="done-button"
                  onClick={() => setIsGuestSelectorOpen(false)}
                >
                  Done
                </button>
              </div>
            )}
          </div>
          
          <button type="submit" className="search-button">
            <Search size={18} />
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;