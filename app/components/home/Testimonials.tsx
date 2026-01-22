// components/Testimonials.tsx
import React from "react";
import Image from "next/image";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      names: "Thilini & Ravindu",
      date: "Married June 2024",
      quote:
        '"The templates are stunning! We customized everything in minutes. Our guests loved the digital invitation and found it very convenient."',
      avatarBg: "bg-gradient-to-br from-rose-100 to-pink-200",
    },
    {
      names: "Shenali & Dilshan",
      date: "Married April 2024",
      quote:
        '"Absolutely loved the RSVP tracking feature! Made managing guest responses so much easier. Highly recommend for modern couples!"',
      avatarBg: "bg-gradient-to-br from-blue-100 to-cyan-200",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Happy Couples
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-16 h-16 rounded-full ${testimonial.avatarBg} flex items-center justify-center`}
                >
                  <span className="text-2xl">👰</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {testimonial.names}
                  </h3>
                  <p className="text-gray-600">{testimonial.date}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic text-lg">
                {testimonial.quote}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
