// components/Pricing.tsx
import React from "react";
import { Check } from "lucide-react";

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Free",
      price: "LKR 0",
      description: "Perfect to get started",
      recommended: false,
      features: [
        "1 Digital Invitation",
        "Basic Templates",
        "Basic RSVP Management",
        "50 Guest Limit",
        "Standard Support",
      ],
      buttonText: "Get Started Free",
    },
    {
      name: "Premium",
      price: "LKR 2,500",
      description: "Most popular choice",
      recommended: true,
      features: [
        "Unlimited Invitations",
        "Unlimited Guests",
        "All Templates",
        "Advanced RSVP Dashboard",
        "Excel Export",
        "Priority Support",
      ],
      buttonText: "Get Premium",
    },
    {
      name: "VIP",
      price: "LKR 5,000",
      description: "Ultimate wedding package",
      recommended: false,
      features: [
        "Everything in Premium",
        "Custom Design",
        "Personal Assistance",
        "WhatsApp Broadcast",
        "Dedicated Account Manager",
        "24/7 Priority Support",
      ],
      buttonText: "Get VIP",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 p-8 ${
                plan.recommended
                  ? "border-rose-500 bg-white shadow-xl scale-105"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    What's Our Recommendation?
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-bold transition duration-300 ${
                  plan.recommended
                    ? "bg-rose-600 hover:bg-rose-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
