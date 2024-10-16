import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Ensure you have react-icons installed

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is an IPO?",
      answer: "An Initial Public Offering (IPO) is when a company offers its shares to the public for the first time."
    },
    {
      question: "Who can invest in an IPO?",
      answer: "Anyone can invest in an IPO, but there are certain eligibility requirements depending on the type of investor."
    },
    {
      question: "How do I apply for an IPO?",
      answer: "You can apply for an IPO through a broker or financial institution that offers the service."
    },
    {
      question: "What are the risks of investing in an IPO?",
      answer: "Investing in an IPO carries risks, including market volatility and the potential for the stock to underperform."
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-4 text-left transition-all duration-200 ease-in-out"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              {activeIndex === index ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-gray-600" />
              )}
            </button>
            <div
              className={`transition-all duration-200 ease-in-out ${
                activeIndex === index ? "max-h-40" : "max-h-0"
              } overflow-hidden`}
            >
              <div className="p-4 border-t border-gray-200">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
