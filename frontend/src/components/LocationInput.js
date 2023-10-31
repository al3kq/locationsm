import React, { useState } from 'react';

const LocationInput = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://your-api-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="modal flex flex-col items-center justify-center bg-gray-100 min-h-screen">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md w-full sm:w-3/4 lg:w-1/2 xl:w-1/3">
        <label className="block">
          <span className="text-gray-700">Name:</span>
          <input type="text" value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0" />
        </label>
        <label className="block">
          <span className="text-gray-700">Description:</span>
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0" />
        </label>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LocationInput;