// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserPage from './pages/UserPage'
import LocationsNav from './pages/LocationsNav';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/user/:userId" element={<UserPage />} />
          <Route path="/user/:userId/locations" element={<LocationsNav />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
