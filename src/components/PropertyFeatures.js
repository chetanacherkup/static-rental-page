import React from 'react';
import './PropertyFeatures.css'; // Import the corresponding CSS file

const PropertyFeatures = () => {
  return (
    <div className="property-features">
      <h1 className="main-heading">
        We help you with...
      </h1>

      <div className="card-container1">
        <div className="card feature-card">
          <img 
            src="/re-app-smooth-home-buying-picture.png" 
            alt="Smooth Home buying experience" 
            className="card-image"
          />
          <h2 className="card-title">Smooth Home Buying Experience</h2>
        </div>

        <div className="card feature-card1">
          <img 
            src="/re-app-choose-plenty-options-picture.png" 
            alt="Choose from plenty of options" 
            className="card-image"
          />
          <h2 className="card-title">Choose from Plenty of Options</h2>
        </div>

        <div className="card feature-card">
          <img 
            src="/re-app-assistance-in-every-step-picture.png" 
            alt="Assistance in every step of buying" 
            className="card-image"
          />
          <h2 className="card-title">Assistance in Every Step of Buying</h2>
        </div>
      </div>

      <h1 className="main-heading">
        What sets us apart?
      </h1>

      <div className="card-container2">
        <div className="card feature-card">
          <img 
            src="re-app-maps-picture.png" 
            alt="Location wise Search" 
            className="card-image"
          />
          <h2 className="card-title">Location wise <br />Search</h2>
        </div>

        <div className="card feature-card">
          <img 
            src="re-app-no-spam-picture.png" 
            alt="Strictly no Spamming!" 
            className="card-image"
          />
          <h2 className="card-title">Strictly <br />No Spamming!</h2>
        </div>

        <div className="card feature-card">
          <img 
            src="re-app-shortlists-picture.png" 
            alt="Shortlist your Favorites" 
            className="card-image"
          />
          <h2 className="card-title">Shortlist your <br />Favorites</h2>
        </div>

        <div className="card feature-card">
          <img 
            src="re-app-schedule-appointments-picture.png" 
            alt="Schedule Appointments to visit" 
            className="card-image"
          />
          <h2 className="card-title">Schedule <br />Appointments</h2>
        </div>

        <div className="card feature-card">
          <img 
            src="re-app-verified-homes-picture.png" 
            alt="Only Verified properties" 
            className="card-image"
          />
          <h2 className="card-title">Only Verified <br />Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyFeatures;
