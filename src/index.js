import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from react-dom/client (React 18)
import './index.css'; // Import the main CSS file
import App from './App'; // Import the App component

// Render the App component to the root div in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
