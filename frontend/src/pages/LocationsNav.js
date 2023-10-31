import React, { useState, useEffect } from 'react';

const LocationsNav = () => {
  const [locations, setLocations] = useState([]);
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  useEffect(() => {
    fetch(`/api/users/${userId}/locations`,
     {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setLocations(data))
      .catch(error => console.log('Fetch error:', error));
  }, [userId, token]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {locations.map((location) => (
        <div key={location.id} className="p-6 m-4 bg-white rounded shadow-md w-full sm:w-3/4 lg:w">
          <h2 className="text-2xl font-bold m-1">{location.name}</h2>
          <p className="text-gray-700">{location.description}</p>
          <p className="text-gray-500">Latitude: {location.latitude}</p>
          <p className="text-gray-500">Longitude: {location.longitude}</p>
          <p className="text-gray-500">Created at: {new Date(location.created_at).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default LocationsNav;
