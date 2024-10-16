import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";

const iposData = {
  current: [
    {
      name: "Current IPO 1",
      openClose: "2023-10-01 - 2023-10-05",
      issueSize: 500,
      minQty: 1,
      priceRange: "₹100 - ₹150",
      minBidAmount: 100,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Current IPO 2",
      openClose: "2023-10-02 - 2023-10-06",
      issueSize: 300,
      minQty: 2,
      priceRange: "₹200 - ₹250",
      minBidAmount: 200,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Current IPO 3",
      openClose: "2023-10-03 - 2023-10-07",
      issueSize: 400,
      minQty: 1,
      priceRange: "₹150 - ₹200",
      minBidAmount: 150,
      image: "https://via.placeholder.com/50",
    },
  ],
  upcoming: [
    {
      name: "Upcoming IPO 1",
      openClose: "2023-10-10 - 2023-10-15",
      issueSize: 400,
      minQty: 1,
      priceRange: "₹150 - ₹180",
      minBidAmount: 150,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Upcoming IPO 2",
      openClose: "2023-10-11 - 2023-10-16",
      issueSize: 600,
      minQty: 1,
      priceRange: "₹250 - ₹300",
      minBidAmount: 250,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Upcoming IPO 3",
      openClose: "2023-10-12 - 2023-10-17",
      issueSize: 200,
      minQty: 1,
      priceRange: "₹180 - ₹220",
      minBidAmount: 180,
      image: "https://via.placeholder.com/50",
    },
  ],
  closed: [
    {
      name: "Closed IPO 1",
      openClose: "2023-09-20 - 2023-09-25",
      issueSize: 800,
      minQty: 1,
      priceRange: "₹300 - ₹350",
      minBidAmount: 300,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Closed IPO 2",
      openClose: "2023-09-21 - 2023-09-26",
      issueSize: 700,
      minQty: 1,
      priceRange: "₹220 - ₹260",
      minBidAmount: 220,
      image: "https://via.placeholder.com/50",
    },
    {
      name: "Closed IPO 3",
      openClose: "2023-09-22 - 2023-09-27",
      issueSize: 500,
      minQty: 1,
      priceRange: "₹250 - ₹280",
      minBidAmount: 250,
      image: "https://via.placeholder.com/50",
    },
  ],
};

function IPOSection() {
  const [activeTab, setActiveTab] = useState("current");

  const filteredIPOs = iposData[activeTab];

  return (
    <div className="p-6">
      <div className="flex space-x-4 mb-4">
        <button 
          className={`py-2 px-4 ${activeTab === "current" ? "bg-blue-500 text-white" : "bg-gray-200"}`} 
          onClick={() => setActiveTab("current")}
        >
          Current IPO
        </button>
        <button 
          className={`py-2 px-4 ${activeTab === "upcoming" ? "bg-blue-500 text-white" : "bg-gray-200"}`} 
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming IPO
        </button>
        <button 
          className={`py-2 px-4 ${activeTab === "closed" ? "bg-blue-500 text-white" : "bg-gray-200"}`} 
          onClick={() => setActiveTab("closed")}
        >
          Closed IPO
        </button>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Companies</th>
              <th scope="col" className="px-6 py-3">Open - Close</th>
              <th scope="col" className="px-6 py-3">Issue Size</th>
              <th scope="col" className="px-6 py-3">Min. Qty</th>
              <th scope="col" className="px-6 py-3">Price Range</th>
              <th scope="col" className="px-6 py-3">Min. Bid Amount</th>
              <th scope="col" className="px-6 py-3"><span className="sr-only">Apply</span></th>
            </tr>
          </thead>
          <tbody>
            {filteredIPOs.map((ipo, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                  <img src={ipo.image} alt={ipo.name} className="mr-2" />
                  {ipo.name}
                </th>
                <td className="px-6 py-4">{ipo.openClose}</td>
                <td className="px-6 py-4">{ipo.issueSize} Crores</td>
                <td className="px-6 py-4">{ipo.minQty}</td>
                <td className="px-6 py-4">{ipo.priceRange}</td>
                <td className="px-6 py-4">{ipo.minBidAmount}</td>
                <td className="px-6 py-4 text-right">
                  <button className="border p-1 rounded-md bg-green-400 font-medium text-white dark:text-white">View More</button>
                  <button className="font-medium text-black dark:text-white hover:underline ml-2">
                  <FaDownload className="inline mr-1" />
                  </button>
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IPOSection;
