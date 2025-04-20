import React, { useState } from 'react';
import { 
  Calendar, Clock, Map, Compass, Coffee, UtensilsCrossed, 
  ShoppingBag, Train, Bus, Car, Umbrella, Edit, Share 
} from 'lucide-react';
import './SmartTravelCompanion.css';

interface TripDay {
  day: number;
  activities: {
    type: 'attraction' | 'food' | 'shopping' | 'transport';
    time: string;
    title: string;
    description: string;
    location?: string;
  }[];
}

interface SmartTravelCompanionProps {
  destination: string;
  startDate?: Date | null;
  endDate?: Date | null;
}

const SmartTravelCompanion: React.FC<SmartTravelCompanionProps> = ({
  destination,
  startDate,
  endDate,
}) => {
  const [activeTab, setActiveTab] = useState<'3day' | '5day'>('3day');
  const [expandedDays, setExpandedDays] = useState<number[]>([1]);
  const [notes, setNotes] = useState<string>('');
  
  // Mock data for the suggested itinerary
  const threeDayPlan: TripDay[] = [
    {
      day: 1,
      activities: [
        {
          type: 'attraction',
          time: '09:00',
          title: 'City Tour',
          description: 'Start with a guided city tour to get oriented with the main attractions.',
          location: 'Downtown'
        },
        {
          type: 'food',
          time: '12:30',
          title: 'Local Cuisine Lunch',
          description: 'Try authentic local dishes at a popular restaurant.',
          location: 'Central Market'
        },
        {
          type: 'attraction',
          time: '14:30',
          title: 'Museum Visit',
          description: 'Explore the city\'s history and culture at the main museum.',
          location: 'Arts District'
        },
        {
          type: 'food',
          time: '19:00',
          title: 'Dinner with a View',
          description: 'Enjoy dinner at a restaurant with panoramic city views.',
          location: 'Skyline Tower'
        }
      ]
    },
    {
      day: 2,
      activities: [
        {
          type: 'attraction',
          time: '10:00',
          title: 'Historical Sites',
          description: 'Visit the historical landmarks and monuments.',
          location: 'Old Town'
        },
        {
          type: 'food',
          time: '13:00',
          title: 'Street Food Experience',
          description: 'Sample various street food options from local vendors.',
          location: 'Food Street'
        },
        {
          type: 'shopping',
          time: '15:00',
          title: 'Local Markets',
          description: 'Browse through local markets for souvenirs and crafts.',
          location: 'Artisan Quarter'
        },
        {
          type: 'food',
          time: '20:00',
          title: 'Fine Dining',
          description: 'Experience upscale dining with local specialties.',
          location: 'Culinary District'
        }
      ]
    },
    {
      day: 3,
      activities: [
        {
          type: 'attraction',
          time: '09:30',
          title: 'Nature Exploration',
          description: 'Visit nearby natural attractions like parks or beaches.',
          location: 'City Outskirts'
        },
        {
          type: 'food',
          time: '13:30',
          title: 'Picnic Lunch',
          description: 'Enjoy a relaxing picnic at a scenic spot.',
          location: 'City Park'
        },
        {
          type: 'transport',
          time: '15:30',
          title: 'Scenic Drive',
          description: 'Take a scenic drive around the city\'s outskirts.',
          location: 'Coastal Road'
        },
        {
          type: 'food',
          time: '19:30',
          title: 'Farewell Dinner',
          description: 'Have a memorable farewell dinner at a recommended restaurant.',
          location: 'Harbor District'
        }
      ]
    }
  ];
  
  const fiveDayPlan: TripDay[] = [
    ...threeDayPlan,
    {
      day: 4,
      activities: [
        {
          type: 'attraction',
          time: '10:00',
          title: 'Cultural Experience',
          description: 'Participate in a local cultural activity or workshop.',
          location: 'Cultural Center'
        },
        {
          type: 'food',
          time: '13:00',
          title: 'Cooking Class',
          description: 'Learn to cook local dishes in a hands-on cooking class.',
          location: 'Culinary School'
        },
        {
          type: 'attraction',
          time: '16:00',
          title: 'Sunset Viewpoint',
          description: 'Visit a famous spot to enjoy the sunset views.',
          location: 'Hilltop Lookout'
        },
        {
          type: 'food',
          time: '20:00',
          title: 'Evening Entertainment',
          description: 'Enjoy local entertainment with dinner and drinks.',
          location: 'Entertainment District'
        }
      ]
    },
    {
      day: 5,
      activities: [
        {
          type: 'shopping',
          time: '10:30',
          title: 'Souvenir Shopping',
          description: 'Final shopping for souvenirs and local products.',
          location: 'Main Shopping Street'
        },
        {
          type: 'food',
          time: '13:30',
          title: 'Brunch',
          description: 'Have a leisurely brunch at a popular café.',
          location: 'Trendy Neighborhood'
        },
        {
          type: 'attraction',
          time: '15:30',
          title: 'Relaxation Time',
          description: 'Relax at a spa or lounge before departure.',
          location: 'Wellness Center'
        },
        {
          type: 'transport',
          time: '18:00',
          title: 'Departure Preparation',
          description: 'Return to accommodation and prepare for departure.',
          location: 'Hotel'
        }
      ]
    }
  ];
  
  const activePlan = activeTab === '3day' ? threeDayPlan : fiveDayPlan;
  
  const toggleDay = (day: number) => {
    if (expandedDays.includes(day)) {
      setExpandedDays(expandedDays.filter(d => d !== day));
    } else {
      setExpandedDays([...expandedDays, day]);
    }
  };
  
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'attraction':
        return <Compass size={18} />;
      case 'food':
        return <UtensilsCrossed size={18} />;
      case 'shopping':
        return <ShoppingBag size={18} />;
      case 'transport':
        return <Car size={18} />;
      default:
        return <Compass size={18} />;
    }
  };
  
  // Format dates for display
  const formatDateRange = () => {
    if (!startDate || !endDate) return 'Select dates to see a customized plan';
    
    const start = startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const end = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return `${start} - ${end}`;
  };
  
  return (
    <div className="smart-travel-companion">
      <div className="companion-header">
        <div className="header-content">
          <h2>Smart Travel Companion</h2>
          <p className="subtitle">Personalized suggestions for your trip to {destination}</p>
          
          <div className="trip-dates">
            <Calendar size={16} />
            <span>{formatDateRange()}</span>
          </div>
          
          <div className="weather-forecast">
            <Umbrella size={16} />
            <span>Pleasant weather expected during your stay, avg. 22°C (72°F)</span>
          </div>
        </div>
      </div>
      
      <div className="tab-selector">
        <button 
          className={`tab-button ${activeTab === '3day' ? 'active' : ''}`}
          onClick={() => setActiveTab('3day')}
        >
          3-Day Itinerary
        </button>
        <button 
          className={`tab-button ${activeTab === '5day' ? 'active' : ''}`}
          onClick={() => setActiveTab('5day')}
        >
          5-Day Itinerary
        </button>
      </div>
      
      <div className="trip-content">
        <div className="itinerary-section">
          {activePlan.map((day) => (
            <div key={day.day} className="day-container">
              <div 
                className="day-header"
                onClick={() => toggleDay(day.day)}
              >
                <h3>Day {day.day}</h3>
                <span className={`expand-icon ${expandedDays.includes(day.day) ? 'expanded' : ''}`}>
                  +
                </span>
              </div>
              
              {expandedDays.includes(day.day) && (
                <div className="day-activities">
                  {day.activities.map((activity, index) => (
                    <div key={index} className="activity-item">
                      <div className="activity-time">
                        <Clock size={16} />
                        <span>{activity.time}</span>
                      </div>
                      
                      <div className="activity-content">
                        <div className="activity-icon">
                          {getActivityIcon(activity.type)}
                        </div>
                        
                        <div className="activity-details">
                          <h4>{activity.title}</h4>
                          <p>{activity.description}</p>
                          
                          {activity.location && (
                            <div className="activity-location">
                              <Map size={14} />
                              <span>{activity.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="additional-info">
          <div className="transport-options">
            <h3>Local Transport Options</h3>
            <div className="transport-items">
              <div className="transport-item">
                <Train size={20} />
                <div>
                  <h4>Metro System</h4>
                  <p>Efficient metro connecting major attractions</p>
                </div>
              </div>
              
              <div className="transport-item">
                <Bus size={20} />
                <div>
                  <h4>City Buses</h4>
                  <p>Extensive bus network throughout the city</p>
                </div>
              </div>
              
              <div className="transport-item">
                <Car size={20} />
                <div>
                  <h4>Taxi/Rideshare</h4>
                  <p>Readily available throughout the city</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="trip-notes">
            <div className="notes-header">
              <h3>My Trip Notes</h3>
              <Edit size={16} />
            </div>
            <textarea 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add your personal notes here..."
            ></textarea>
          </div>
        </div>
      </div>
      
      <div className="share-trip">
        <button className="share-button">
          <Share size={16} />
          <span>Share Trip Plan</span>
        </button>
      </div>
    </div>
  );
};

export default SmartTravelCompanion;