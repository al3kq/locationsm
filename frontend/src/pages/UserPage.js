import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import PostFeed from "../components/PostFeed";
import LocationInputButton from "../components/LocationInputButton";

function UserPage() {
  const [userData, setUserData] = useState(null);

  const { userId, token } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');

    fetch(`/api/users/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      setUserData(data);
    })
    .catch(error => {
      console.log('Fetch error:', error);
    });

  }, [userId, token]);

  // Render the user data
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {userData ? (
        <div className="p-6 m-4 bg-white rounded shadow-md w-full sm:w-4/5 lg:w-3/4 xl:w-2/3">
          <h1 className="text-2xl font-bold mb-2">Welcome, {userData.username}!</h1>
          <p className="text-gray-700">Your user ID is: {userData.id}</p>
          <button
            className="flex justify-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate(`/user/${userData.id}/locations`)}
          >
        Location Feed
      </button>
          {<LocationInputButton />}

          {<PostFeed userId={userId} />}
        </div>
      ) : (
        <p className="text-lg text-gray-700">Loading...</p>
      )}
    </div>
  );
}

export default UserPage;