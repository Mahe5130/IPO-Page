import React from "react";
import { motion } from "framer-motion";

// Sample data for benefits
const benefitsData = [
  {
    title: "Raise Capital",
    description: "IPOs allow companies to raise substantial capital for growth and expansion.",
    icon: "💰",
  },
  {
    title: "Increase Visibility",
    description: "Becoming public increases brand awareness and credibility in the market.",
    icon: "🌟",
  },
  {
    title: "Liquidity",
    description: "IPOs provide liquidity for shareholders, allowing them to buy and sell shares easily.",
    icon: "🔄",
  },
  {
    title: "Employee Benefits",
    description: "Offering stock options can attract and retain top talent in your company.",
    icon: "👥",
  },
];

const BenefitsPage = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Benefits of IPO</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefitsData.map((benefit, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-5xl mb-4">{benefit.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{benefit.title}</h2>
            <p className="text-gray-600 text-center">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsPage;
