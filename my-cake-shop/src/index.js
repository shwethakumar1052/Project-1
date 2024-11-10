import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import global styles (optional, you can modify it)
import App from './App'; // Import the main App component
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router for routing

// Render the App component wrapped in Router for navigation
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root') // This will mount the app inside the 'root' div in index.html
);
