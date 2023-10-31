import React, { useState, useEffect, useRef } from 'react';
import LocationInput from './LocationInput';

const LocationInputButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div className="flex justify-center">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-1/2 lg:w-1/4"
        >
          Open Location Input
        </button>
      )}
      {isOpen && (
        <div ref={modalRef} className="modal">
          <LocationInput />
        </div>
      )}
    </div>
  );
};

export default LocationInputButton;