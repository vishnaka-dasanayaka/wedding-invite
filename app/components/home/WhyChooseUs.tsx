// components/WhyChooseUs.tsx
import React from "react";
import { Sparkles, DollarSign, Shield, Heart } from "lucide-react";

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Simple & Easy to Use",
      description:
        "No technical skills needed. Create your invitation in minutes.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "No Printing Cost",
      description: "Save money and the environment with digital invitations.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Private Access",
      description: "Only people with your link can view and RSVP.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Made for Sri Lankan Weddings",
      description: "Designed with local customs and preferences in mind.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            The smart choice for modern couples
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-600">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
