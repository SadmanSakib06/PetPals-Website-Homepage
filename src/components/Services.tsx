import React from 'react';
import { Scissors, Cat, Sparkles, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Dog Grooming",
      description: "Complete grooming services including bathing, brushing, nail trimming, and styling to keep your dog looking and feeling great.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Cat className="w-8 h-8" />,
      title: "Cat Grooming", 
      description: "Gentle and stress-free grooming for cats including bathing, brushing, nail care, and specialized feline treatments.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Pet Grooming",
      description: "Professional grooming services for all types of pets with attention to detail and care for their comfort and wellbeing.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Pet Training",
      description: "Expert training programs to help your pets develop good behavior, obedience, and social skills in a positive environment.",
      color: "bg-blue-100 text-blue-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of pet care services designed to keep your furry friends healthy, happy, and looking their best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;