import React, { useState } from "react";

const iposData = {
  current: [
    { name: "Current IPO 1", issueSize: "500 Crores", price: "₹100", ipoSize: "5,00,000 shares", type: "Mainboard" },
    { name: "Current IPO 2", issueSize: "300 Crores", price: "₹200", ipoSize: "3,00,000 shares", type: "SME" },
    { name: "Current IPO 3", issueSize: "400 Crores", price: "₹150", ipoSize: "4,00,000 shares", type: "Mainboard" },
  ],
  upcoming: [
    { name: "Upcoming IPO 1", issueSize: "400 Crores", price: "₹150", ipoSize: "4,00,000 shares", type: "Mainboard" },
    { name: "Upcoming IPO 2", issueSize: "600 Crores", price: "₹250", ipoSize: "6,00,000 shares", type: "SME" },
    { name: "Upcoming IPO 3", issueSize: "200 Crores", price: "₹180", ipoSize: "2,00,000 shares", type: "Mainboard" },
  ],
  closed: [
    { name: "Closed IPO 1", issueSize: "800 Crores", price: "₹300", ipoSize: "8,00,000 shares", type: "Mainboard" },
    { name: "Closed IPO 2", issueSize: "700 Crores", price: "₹180", ipoSize: "7,00,000 shares", type: "SME" },
    { name: "Closed IPO 3", issueSize: "500 Crores", price: "₹220", ipoSize: "5,00,000 shares", type: "Mainboard" },
  ],
};

function IPOSection() {
  const [activeTab, setActiveTab] = useState("current");
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  // Function to filter IPOs based on the selected filter
  const filterIPOs = (ipos) => {
    if (selectedFilter === "ALL") return ipos;
    return ipos.filter((ipo) => ipo.type === selectedFilter);
  };

  // Get the current IPOS based on the active tab and filter them
  const filteredIPOs = filterIPOs(iposData[activeTab]);

  const renderCards = () => {
    return filteredIPOs.map((ipo, index) => (
      <div key={index} className="border rounded-lg p-4 mb-4 shadow-md">
        <h3 className="text-lg font-bold">{ipo.name}</h3>
        <p>Issue Size: {ipo.issueSize}</p>
        <p>Price: {ipo.price}</p>
        <p>IPO Size: {ipo.ipoSize}</p>
        <div className="flex space-x-2 mt-2">
          <button className="py-1 px-3 bg-blue-500 text-white rounded">View</button>
          <button className="py-1 px-3 bg-gray-300 rounded">Download</button>
        </div>
      </div>
    ));
  };

  return (
    <div className="p-6">
      <div className="flex space-x-4 mb-4">
        <button 
          className={`py-2 px-4 ${activeTab === "current" ? "bg-blue-500 text-white" : "bg-gray-200"}`} 
          onClick={() => { setActiveTab("current"); setSelectedFilter("ALL"); }}
        >
          Current IPO
        </button>
        <button 
          className={`py-2 px-4 ${activeTab === "upcoming" ? "bg-blue-500 text-white" : "bg-gray-200"}`} 
          onClick={() => { setActiveTab("upcoming"); setSelectedFilter("ALL"); }}
        >
          Upcoming IPO
        </button>
        <button 
          className={`py-2 px-4 ${activeTab === "closed" ? "bg-blue-500 text-white" : "bg-gray-200"}`} 
          onClick={() => { setActiveTab("closed"); setSelectedFilter("ALL"); }}
        >
          Closed IPO
        </button>
      </div>

      <div className="mb-4">
        <span className="font-bold">Filter by: </span>
        <label>
          <input 
            type="radio" 
            name="filter" 
            value="ALL" 
            checked={selectedFilter === "ALL"} 
            onChange={() => setSelectedFilter("ALL")} 
          /> ALL
        </label>
        <label className="ml-4">
          <input 
            type="radio" 
            name="filter" 
            value="SME" 
            checked={selectedFilter === "SME"} 
            onChange={() => setSelectedFilter("SME")} 
          /> SME
        </label>
        <label className="ml-4">
          <input 
            type="radio" 
            name="filter" 
            value="Mainboard" 
            checked={selectedFilter === "Mainboard"} 
            onChange={() => setSelectedFilter("Mainboard")} 
          /> Mainboard
        </label>
      </div>

      <div>
        {renderCards()}
      </div>
    </div>
  );
}

export default IPOSection;



//Header

import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center">
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
