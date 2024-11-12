import React from 'react'
import './Search.css'; 

const Search = () => {
  return (
<div className="search-section">
  <h1 className="heading">We help you choose the Right Property!</h1>
  
  <div className="search-bar">
    <div className="search-options">
      <button className="tab active">Buy</button>
      <button className="tab">Rent</button>
      <button className="tab">Projects</button>
    </div>

    <div className="location-search">
      <select className="location-dropdown">
        <option value="Hyderabad">Hyderabad</option>
        <option value="Hyderabad">Secundrabad</option>
        <option value="Hyderabad">Narsingi</option>
        <option value="Hyderabad">Kukatpally</option>
        {/* Add more options here */}
      </select>

      <input type="text" className="location-input" placeholder="Search a location ..." />
      
      <button className="search-button">
        <img src="Search.png" alt="search" />
      </button>
    </div>
  </div>
</div>

  )
}

export default Search





