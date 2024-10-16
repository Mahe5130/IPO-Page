import React from "react";

const HowToApplyForIPO = () => {
  const steps = [
    { title: "Step 1: Research", link: "/research", description: "Learn about the company and its financials." },
    { title: "Step 2: Open a Demat Account", link: "/open-demat", description: "Ensure you have a Demat account to hold shares." },
    { title: "Step 3: Apply Online", link: "/apply-online", description: "Use your broker's platform to apply for the IPO." },
  ];

  return (
   
    <div className="flex flex-col md:flex-row items-center p-8 bg-gray-100">
        
      {/* Left Column: Steps */}
      <div className="flex flex-col space-y-4 md:w-1/2">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">
              <a href={step.link} className="text-blue-600 hover:underline">{step.title}</a>
            </h2>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Right Column: Image */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img 
          src="https://via.placeholder.com/300" // Replace with your image URL
          alt="How to Apply for IPO"
          className="rounded-lg shadow-md" 
        />
      </div>
    </div>
    
  );
};

export default HowToApplyForIPO;
