// components/Templates.tsx
import React from "react";
import Image from "next/image";

const Templates: React.FC = () => {
  const templates = [
    {
      name: "Classic Romance",
      description: "Elegant & Timeless",
      color: "from-rose-100 to-pink-200",
    },
    {
      name: "Golden Elegance",
      description: "Luxury & Sophistication",
      color: "from-amber-100 to-yellow-200",
    },
    {
      name: "Heard Dreams",
      description: "Romantic & Natural",
      color: "from-emerald-100 to-teal-200",
    },
    {
      name: "Modern Minimal",
      description: "Clean & Contemporary",
      color: "from-gray-100 to-slate-200",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Beautiful Templates
          </h2>
          <p className="text-xl text-gray-600">
            Choose from our elegant designs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {templates.map((template, index) => (
            <div key={index} className="group cursor-pointer">
              <div
                className={`h-64 rounded-xl bg-gradient-to-br ${template.color} mb-4 overflow-hidden relative transition-transform duration-300 group-hover:-translate-y-2`}
              >
                {/* Mock template preview */}
                <div className="absolute inset-4 bg-white/20 rounded-lg border-2 border-white/30"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-2xl">💍</div>
                  <div className="text-lg font-bold text-gray-800">
                    Template Preview
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {template.name}
                </h3>
                <p className="text-gray-600">{template.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
