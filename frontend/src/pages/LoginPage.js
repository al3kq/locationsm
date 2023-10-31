// LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    fetch('api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    .then(response => {
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid username or password');
        } else {
          throw new Error('An error occurred');
        }
      }
      return response.json();
    })
    .then(data => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      navigate(`/user/${data.userId}`);
      setErrorMessage(''); // Clear the error message on successful login
    })
    .catch((error) => {
      console.error('Error:', error);
      setErrorMessage(error.message);
    });
  };


  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-8 text-blue-500 text-3xl font-bold">Login</h1>
      <input
        type="text"
        className="mb-4"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        className="mb-4"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogin}
      >
        Login
      </button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {/* Other login form elements go here */}
    </div>
  );
};

export default LoginPage;