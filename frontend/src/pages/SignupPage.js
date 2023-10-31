// SignupPage.js

import React, { useState } from 'react';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSignup = () => {
    fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-8 text-blue-500 text-3xl font-bold">Signup</h1>
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
      <input
        type="email"
        className="mb-4"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSignup}
      >
        Signup
      </button>
      {/* Other signup form elements go here */}
    </div>
  );
};

export default SignupPage;