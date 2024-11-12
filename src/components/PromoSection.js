// PromoSection.js
import React from 'react';
import './PromoSection.css'; // Import corresponding CSS

/**
 * A section on the homepage that promotes the app and invites users to download it.
 * 
 * @return {JSX.Element} The JSX element for the promo section.
 */
const PromoSection = () => {
  return (
    <div>
    <div className="promo-container">
      {/* Content section of the promo container */}
      <div className="promo-content">
        <h1>Looking for the best <br />place to sell your <br />property?</h1>
        <p>Choose the best!</p>
      </div>

      <div className="promo-button">
        <h1>Post your property</h1>
        <p>For Free</p>
        <img src="/icons/icons8-up-right-24.png" alt="arrow up right" />

        </div>

      {/* Image section of the promo container */}
      <img
  src="re-app-home-background-picture.png"
  width={300}
  height={300}
  alt="Home background"
  className="promo-image"
/>
</div>



    <div className="download-section">
      {/* Image of the app */}
      <img 
        src="re-app-download-picture.png"
        alt="Download our app"
        className="download-image"
      />

      {/* Content section of the download section */}
      <div className="download-content">
        <h1>Find your new home!</h1>
        <p className="subheading">Download our App</p>
        <p>Enjoy the freedom to choose!</p>

        {/* Section for the app badges */}
        <div className="app-badges">
          <img 
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Google Play" 
            className="google-play-badge"
          />
          <img 
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store" 
            className="app-store-badge"
          />
        </div>
      </div>
    </div>
    </div>
  )
  
}


export default PromoSection
