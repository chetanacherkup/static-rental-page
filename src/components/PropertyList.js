import React, { useState } from 'react';
import './PropertyList.css';

const PropertyList = () => {
  const [property] = useState({
    id:1,
    title: '3 BHK Flat for Sale in Narsingi',
    location: 'Rajapushpa Provincia, Ring Road, Hyderabad',
    postedOn: '2024-08-01',
    possessionDate: '2024-10-04',
    price: '₹ 1.9 Crores',
    emi: '₹ 2.1 Lakhs/M',
    area: '1,715 sq.ft',
    views: 'Unique Views',
    shortlists: 'Shortlists',
    contacted: 'Contacted',
    images: ['/narsingiproperties.jpg', '/narsingiproperties.jpg'], // Example paths
    bedrooms: 3,
    bathrooms: 3,
    balcony: 1,
    name: 'Rajapushpa Provincia',
    type: 'Apartment',
    powerBackup: 'Yes',
    parking: 'Bike & Car',
  });

  // Optional states for button actions
  const [isContacted, setIsContacted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isShared, setIsShared] = useState(false);

  const handleContact = () => setIsContacted(true);
  const handleCalendar = () => setShowCalendar(true);
  const handleMessage = () => setShowMessage(true);
  const handleShare = () => setIsShared(true);

  return (
    <div className="property-detail-container">
      {/* Left Section */}
    
      <div className="left-section">
        <div className="for-sale">
          <img src="/icons/icons8-house-48.png" alt="For Sale Icon" />
          <p>For Sale</p>
        </div>

        <div className="property-images">
          {property.images.map((img, index) => (
            <img src={img} alt={`Property ${index + 1}`} className="small-image" key={index} />
          ))}
        </div>
      </div>

      {/* Middle Section */}
      
      <div className="main-container">
        <h1 className="property-title">{property.title}</h1>
        <p className="property-location">{property.location}</p>

        <div className="property-image-section">
          <p className="trending">Trending</p>
          <img src={property.images[0]} alt="Main Property" className="card-image" />

          <div className="top-icons">
            <img src="/location.png" alt="Location Icon" />
            <img src="/heart.png" alt="Heart Icon" />
          </div>
        </div>
      </div>

      

      {/* Right Section */}

      <div className="property-card">
        <div className="first-row">
          <button className="contact-btn" onClick={handleContact}>
            <img src="/icons/icons8-call-100.png" alt="Phone Icon" className="icon" /> 
            <p>Contact Owner</p>
          </button>
          <button className="icon-btn" onClick={handleCalendar}>
            <img src="/icons/icons8-business-64.png" alt="Calendar Icon" className="icon" />
          </button>
          <button className="icon-btn" onClick={handleMessage}>
            <img src="/icons/icons8-message-50.png" alt="Message Icon" className="icon" /> 
          </button>
          <button className="icon-btn" onClick={handleShare}>
            <img src="/icons/icons8-forward-arrow-50.png" alt="Share Icon" className="icon" />
          </button>
        </div>

        <div className="details-grid">
          <div className="card detail-card">
            <img src="/icons/icons8-bedroom-50 (1).png" style={{width: '30px',height: '30px'}}alt="Bedroom Icon" className="icon" />
            <div className="text-container">
              <span style={{fontWeight: 'bold', fontSize:'16px'}} >{property.bedrooms}</span>
              <span>Bedrooms</span>
            </div>
          </div>
          <div className="card detail-card">
            <img src="/icons/icons8-calendar-64.png" style={{width: '30px',height: '30px'}} alt="Posted On Icon" className="icon" />
                <div className="text-container">
                <span style={{fontWeight: 'bold', fontSize:'16px'}} >{property.postedOn}</span>
                <span>Posted On</span>
              </div>
          </div>
          <div className="card detail-card">
            <img src="/icons/icons8-bathroom-50 (1).png" style={{width: '30px',height: '30px'}} alt="Bathroom Icon" className="icon" />
              <div className="text-container">
              <span style={{fontWeight: 'bold', fontSize:'16px'}} >{property.bathrooms}</span>
              <span>Bathrooms</span>
              </div>
          </div>
          <div className="card detail-card">
            <img src="/icons/icons8-key-50.png" style={{width: '30px',height: '30px'}} alt="Possession Icon" className="icon" />
              <div className="text-container">
              <span style={{fontWeight: 'bold', fontSize:'16px'}} >{property.possessionDate}</span>
              <span>Possession</span>
              </div>
          </div>
          <div className="card detail-card">
              <img src="/icons/icons8-balcony-50 (1).png" style={{width: '30px',height: '30px'}} alt="Balcony Icon" className="icon" />
              <div className="text-container">
              <span style={{fontWeight: 'bold', fontSize:'16px'}} >{property.balcony}</span>
              <span>Balcony</span>
              </div>
          </div>
          <div className="card detail-card">
          <img src="/icons/icons8-apartment-80.png" style={{width: '30px', height: '30px'}} alt="Apartment Icon" className="icon" />
            <div className="text-container">
              <span>{property.name}</span>
              <span style={{fontWeight: 'bold', fontSize: '16px'}}>{property.type}</span>
            </div>
        </div>

        <div className="card detail-card">
          <img src="/icons/icons8-battery-50 (1).png" style={{width: '30px', height: '30px'}} alt="Power Backup Icon" className="icon" />
            <div className="text-container">
              <span style={{fontWeight: 'bold', fontSize: '16px'}}>{property.powerBackup}</span>
              <span>Power Backup</span>
            </div>
        </div>

        <div className="card detail-card">
          <img src="/icons/icons8-p-50.png" style={{width: '30px', height: '30px'}} alt="Parking Icon" className="icon" />
            <div className="text-container">
              <span style={{fontWeight: 'bold', fontSize: '16px'}}>{property.parking}</span>
              <span>Parking</span>
            </div>
        </div>
        </div>


        <div className="price-row">
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>{property.price} <p style= {{fontSize: '14px',fontWeight:'normal'}} > ₹ 11,079 per sq.ft</p></div>
            
            <hr className="vertical-hr" />

            
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}  >{property.emi} <p style= {{fontSize: '14px',fontWeight:'normal'}}>Expected EMI</p></div>
            <hr className="vertical-hr" />

            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}} >{property.area} <p style= {{fontSize: '14px',fontWeight:'normal'}} >Builtup</p></div>

        </div>

        <div className="stats-row">
          <div className="stat-item">
            <img src="/icons/icons8-eye-48 (1).png" style= {{width: '30px',height: '30px'}} alt="Views Icon" className="icon" />
            <span>{property.views}</span>
          </div>
          <hr className="vertical-hr" />

          <div className="stat-item">
            <img src="/icons/icons8-heart-24.png"style= {{width: '30px',height: '30px'}} alt="Shortlist Icon" className="icon" />
            <span>{property.shortlists}</span>
          </div>
          <hr className="vertical-hr" />

          <div className="stat-item">
            <img src="/icons/icons8-call-50.png" style= {{width: '30px',height: '30px'}} alt="Contact Icon" className="icon" />
            <span>{property.contacted}</span>
          </div>
        </div>
      </div>

      </div>
    
   
  );
};



export default PropertyList;

