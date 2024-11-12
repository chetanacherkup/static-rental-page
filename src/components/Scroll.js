import React, { useRef } from 'react';
import './Scroll.css'; // Importing the CSS file for styles
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Scroll = ({ onPropertyClick }) => {
  const properties = [
    { id: 1, title: '3 BHK in Narsingi', size: '1800', unit: 'Sqft', price: '1.9 Cr', image: '/narsingiproperties.jpg' },
    { id: 2, title: '2 BHK in Gachibowli', size: '1500', unit: 'Sqft', price: '1.5 Cr', image: '/narsingiproperties.jpg' },
    { id: 3, title: '4 BHK in Kukatpally', size: '2200', unit: 'Sqft', price: '2.5 Cr', image: '/narsingiproperties.jpg' },
    { id: 4, title: '3 BHK in Madhapur', size: '1800', unit: 'Sqft', price: '1.8 Cr', image: '/narsingiproperties.jpg' },
    { id: 5, title: '3 BHK in Madhapur', size: '1800', unit: 'Sqft', price: '1.8 Cr', image: '/narsingiproperties.jpg' },
    // Add more properties if needed
  ];

  const similarPropertiesRef = useRef(null);

  const scrollLeft = () => {
    similarPropertiesRef.current.scrollBy({ left: -360, behavior: 'smooth' });
  };

  const scrollRight = () => {
    similarPropertiesRef.current.scrollBy({ left: 360, behavior: 'smooth' });
  };

  return (
    <div className="scroll-container">
      <h2 className='heading'
        style = {{       
          fontSize: 'clamp(1.5rem, 1.2rem + 1.5vw, 3rem)',
          margin: 0 , 
          fontWeight: 'bold',
          color: '#333333',
          lineHeight: '1.2', 
          marginBottom: '5rem',
          
          marginTop: '10rem' }}
          >
          
          Featured Properties in Hyderabad
          
          </h2>
    
      <div className="items-container" ref={similarPropertiesRef}>
        {properties.map((item) => (
          <div className="property-item" key={item.id} onClick={() => onPropertyClick(item)}>
            <div className="property-image" style={{ backgroundImage: `url(${item.image})` }}>
              <div className="icon-container" style = {{
                
                fontSize: '2em',
                margin: 0 , 
                fontWeight: 'bold',
                color: '#cd1212',
                lineHeight: '1.2' }}
    
 >
                <img src="/location.png" alt="Location Icon" />
                <img src="/heart.png" alt="Heart Icon" />
              </div>
              <div className="price-tag">{item.price}</div>
            </div>
            <div className="property-details">
              <h4>{item.title}</h4>
              <div className="item-size">
                <h5>{item.size}</h5>
                <p>{item.unit}</p>
              </div>
            </div>
          </div>
        ))}
          <div className="scroll-buttons">
        <button className="left-button" onClick={scrollLeft}>
          <BsChevronLeft size={60} />
        </button>
        <button className="right-button" onClick={scrollRight}>
          <BsChevronRight size={60} />
        </button>
      </div>
      </div>
    </div>
  );
};

export default Scroll;

