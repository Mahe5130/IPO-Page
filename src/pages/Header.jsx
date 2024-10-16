import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center sticky top-0 z-50">
      <div className="h-14 w-full m-1 rounded-xl flex items-center justify-between p-6" style={{ backgroundColor: 'rgba(248, 251, 248, 0.9)' }}>
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="https://tradejini.com/wp-content/uploads/2023/06/logo-img.svg" alt="Logo" className="h-10" />
        </div>

        {/* Navigation Menu for Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-black-200">About</a>
          <a href="#" className="hover:text-black-200">Products</a>
          <a href="#" className="hover:text-black-200">Pricing</a>
          <a href="#" className="hover:text-black-200">Jiniversity</a>
          <a href="#" className="hover:text-black-200">Media</a>
          <a href="#" className="hover:text-black-200">Support</a>
        </nav>

        {/* Sign Up Button for Desktop */}
        <button 
          className="hidden md:flex py-1 px-4 rounded-full font-medium" 
          style={{ backgroundColor: 'rgba(255, 255, 255, 1)', color: 'rgba(1, 120, 123, 1)' }}
        >
          Sign Up
        </button>

        {/* Mobile Navigation Toggle (Hamburger Icon) */}
        <button 
          className="md:hidden flex items-center" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <img src="https://img.icons8.com/ios-filled/50/000000/close-window.png" alt="Close Menu" className="h-6 w-6" />
          ) : (
            <img src="https://img.icons8.com/ios-filled/50/000000/menu.png" alt="Open Menu" className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full m-4 bg-white rounded-lg shadow-md">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#" className="hover:text-black-200">About</a>
            <a href="#" className="hover:text-black-200">Products</a>
            <a href="#" className="hover:text-black-200">Pricing</a>
            <a href="#" className="hover:text-black-200">Jiniversity</a>
            <a href="#" className="hover:text-black-200">Media</a>
            <a href="#" className="hover:text-black-200">Support</a>
          </nav>

          <div className="flex justify-center mb-4">
            <button 
              className="py-2 px-4 rounded-full font-medium" 
              style={{ backgroundColor: 'rgba(255, 255, 255, 1)', color: 'rgba(1, 120, 123, 1)' }}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
