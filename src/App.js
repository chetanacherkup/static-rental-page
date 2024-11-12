import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
import Search from './components/Search';
import PropertyFeatures from './components/PropertyFeatures';
import PromoSection from './components/PromoSection';
import './App.css';
import React, { useState } from 'react'; // Add useState import
// Import the Scroll component
import PropertyList from './components/PropertyList';


function App() {
  const [selectedProperty, setSelectedProperty] = useState(null); // State to track the selected property

  // Function to handle property selection
  const handlePropertyClick = (property) => {
    setSelectedProperty(property); // Set the clicked property
  };
  return (
    <div className="App">
      {/* Navbar component */}
      <Navbar />

      {/* Search bar component */}
      <Search />

      {/* Scrolling component with properties */}
      {/* Conditionally render either Scroll or PropertyList */}

      {selectedProperty ? (
        <PropertyList property={selectedProperty} />
      ) : (
        <Scroll onPropertyClick={handlePropertyClick} />
      )}
    
      {/* Property features component */}
      <PropertyFeatures />

      {/* Promo section component */}
      <PromoSection />

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;


