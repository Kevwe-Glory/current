import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div className="thankyou-page bg-indigo-400 min-h-screen flex items-center justify-center">
      <div className="max-w-md p-4 md:p-8 bg-white shadow-lg rounded-md text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4">Thank you for joining our waitlist!</h1>
        <p className="text-gray-700 mb-4">We appreciate your interest. You will be notified as soon as we have updates!</p>

        <p className="text-gray-700 mb-4">Join our Telegram group for more discussions and updates:</p>
        <a
          href="https://t.me/your_telegram_group"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:underline"
        >
          Join Telegram Group
        </a>

        {/* Use Link for navigation instead of anchor tag */}
        <Link to="/" className="block mt-4 text-indigo-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
