// components/HowItWorks.tsx
import React from "react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "1️⃣",
      title: "Choose a Template",
      description:
        "Select from our beautiful collection of wedding invitation designs",
    },
    {
      number: "2️⃣",
      title: "Customize Details",
      description:
        "Add your names, wedding date, venue, and personalize every detail",
    },
    {
      number: "3️⃣",
      title: "Share & Collect RSVPs",
      description:
        "Share via WhatsApp or link and track guest responses in real-time",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to your perfect invitation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
