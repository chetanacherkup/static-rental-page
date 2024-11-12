import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">

        <div className="footer-links">
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/list-as-agent">List as an Agent</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        {/* Horizontal Rule */}
        <hr className="vertical-hr1" />

        <div className="footer-post">
          <div classname = "footer-post-text">
          <p style = {{ fontSize: 'clamp(1rem, 0.7rem + 1.5vw, 2.5rem)'}}>Post your property</p>
          <p>Get your property seen by millions!</p>
          </div>
          <button className="post-button">Post Now!</button>
        </div>

        {/* Horizontal Rule */}
        <hr className="vertical-hr2" />

        <div className="footer-connect-download">
          <div className="footer-social">
            <h3>Connect with us</h3>
            <div className="social-icons">
              <img src="/icons8-facebook-64.png" alt="Facebook" />
              <img src="/icons8-twitter-50.png" alt="Twitter" />
              <img src="/icons8-youtube-50.png" alt="YouTube" />
              <img src="/icons8-instagram-64.png" alt="Instagram" />
              <img src="/icons8-linked-in-64.png" alt="LinkedIn" />
            </div>
          </div>

          <div className="footer-download">
            <h3>Download RE app</h3>
            <div className="app-links">
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Google Play"
                className="app-badge-google"
              />
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="App Store" 
                className="app-badge-apple" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}

      <div className="footer-bottom">
        <img src="/website-logo.png" alt="App Logo" className="footer-logo" />
        <p>Copyright &copy; 2024 Dmantz Technologies Pvt. Ltd. All rights reserved.</p>
        <div className="footer-legal">
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-conditions">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

