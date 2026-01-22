// components/CookieConsent.tsx
"use client";

import React, { useState } from "react";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    // Add your cookie acceptance logic here
  };

  const handleReject = () => {
    setIsVisible(false);
    // Add your cookie rejection logic here
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-8">
            <p className="text-sm">
              By clicking on "Accept Cookies", you agree to storing your cookies
              to enhance your experience, analyze site traffic, and personalize
              content.{" "}
              <a href="/privacy" className="text-rose-200 underline">
                Learn more about privacy policy.
              </a>
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setIsVisible(false)}
              className="px-4 py-2 text-sm border border-gray-600 hover:bg-gray-800 transition rounded"
            >
              Manage Preference
            </button>
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm border border-gray-600 hover:bg-gray-800 transition rounded"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm bg-rose-600 hover:bg-rose-700 transition rounded"
            >
              Accept Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
