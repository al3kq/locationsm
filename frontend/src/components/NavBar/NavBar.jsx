// NavBar.js

import React from 'react';
import NavBarButton from './NavBarButton';

const NavBar = () => {
  return (
    <div className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          
          {/* Logo / Branding */}
          <div className="text-white font-bold text-xl sm:text-2xl">Your Logo</div>

          {/* Search Bar */}
          <div className="hidden sm:block">
            <input 
              type="text" 
              placeholder="Search..." 
              className="p-2 rounded bg-white"
            />
          </div>

          {/* Navigation Links / Profile Picture */}
          <div className="flex space-x-4 items-center">
            <NavBarButton text="Home" />
            <NavBarButton text="Friends" />
            
            {/* Notifications Icon */}
            <div className="relative">
              <i className="fas fa-bell text-white"></i> {/* Using Font Awesome for the icon */}
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </div>

            {/* Profile Picture */}
            <img 
              src="path_to_user_image.jpg" 
              alt="User Profile" 
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
