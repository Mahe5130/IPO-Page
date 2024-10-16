import React from "react";
import { motion } from "framer-motion"; // You can install Framer Motion with npm or yarn

const IPOAboutPage = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100">
      <motion.h1
        className="text-3xl font-bold mb-4"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        About Our IPO
      </motion.h1>

      <motion.p
        className="text-lg text-center max-w-2xl mb-6"
        variants={paragraphVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Initial Public Offerings (IPOs) are a crucial part of the financial market, providing companies with the opportunity to raise capital and allowing investors to buy shares in a company for the first time. Our platform aims to simplify the IPO process for both companies and investors, making it easier to understand, participate, and benefit from new investment opportunities.
      </motion.p>

      <motion.p
        className="text-lg text-center max-w-2xl mb-6"
        variants={paragraphVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        We are committed to transparency and accessibility, ensuring that all participants have the information they need to make informed decisions. Whether you're a seasoned investor or new to the market, our resources and tools are designed to help you navigate the IPO landscape with confidence.
      </motion.p>

      <motion.p
        className="text-lg text-center max-w-2xl mb-6"
        variants={paragraphVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Join us on this exciting journey as we bring new companies to the market and offer fresh opportunities for growth and investment. Together, we can unlock the potential of the next generation of innovators and leaders.
      </motion.p>
    </div>
  );
};

export default IPOAboutPage;
