// NavBarButton.js

import React from 'react';

const NavBarButton = ({ text }) => {
  return (
    <button className="m-2 sm:ml-4 sm:mr-0 bg-white text-blue-500 hover:bg-blue-600 hover:text-white px-4 py-2 rounded transition duration-300">
      {text}
    </button>
  );
};

export default NavBarButton;
