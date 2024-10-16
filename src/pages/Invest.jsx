import React from "react";

const WhoCanInvestPage = () => {
  const investorTypes = [
    {
      title: "Retail Investors",
      description: "Retail investors are individual investors who buy and sell securities for their personal accounts, rather than for an organization.",
      image: "https://img.icons8.com/ios-filled/100/000000/user.png", // Example icon
    },
    {
      title: "Institutional Investors",
      description: "Institutional investors include organizations such as banks, insurance companies, pensions, and mutual funds that invest large amounts of money.",
      image: "https://img.icons8.com/ios-filled/100/000000/business.png", // Example icon
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Who Can Invest in IPO?</h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        Initial Public Offerings (IPOs) are open to a variety of investors. Understanding who can participate can help you determine your eligibility and options.
      </p>

      <div className="flex flex-col space-y-6">
        {investorTypes.map((investor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center md:flex-row md:items-start">
            <div className="md:hidden mb-4">
              <img src={investor.image} alt={investor.title} className="h-20" />
            </div>
            <div className="hidden md:block mr-4">
              <img src={investor.image} alt={investor.title} className="h-20" />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-xl font-semibold mb-2">{investor.title}</h2>
              <p className="text-gray-600">{investor.description}</p>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoCanInvestPage;
