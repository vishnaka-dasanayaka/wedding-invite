// components/Features.tsx
import React from "react";
import {
  CheckCircle,
  Shield,
  Share2,
  Link,
  Users,
  Download,
} from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Digital Invitations",
      description: "Beautiful mobile-friendly pages",
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Custom Links",
      description: "Personalized invitation URLs",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "RSVP Tracking",
      description: "Manage guest responses easily",
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "WhatsApp Share",
      description: "One-tap sharing to guests",
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Guest List Export",
      description: "Download responses to Excel",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Private & Secure",
      description: "Your data is protected",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600">
            Complete wedding invitation solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 rounded-lg border border-gray-100 hover:border-rose-200 hover:bg-rose-50 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
