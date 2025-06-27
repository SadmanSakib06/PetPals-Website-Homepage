import React from 'react';
import { Award, Clock, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-12 h-12 text-orange-500" />,
      title: "Certified Groomers",
      description: "Our team consists of certified professional groomers with years of experience and ongoing training."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: "15 Years of Experience", 
      description: "With over 15 years in the pet care industry, we understand what your pets need for optimal health and happiness."
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Trusted by Families",
      description: "Thousands of pet families trust us with their beloved companions. Join our community of satisfied customers."
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We are Committed to Making an{' '}
              <span className="text-orange-500">Awesome Pet</span>
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our commitment goes beyond just grooming. We create lasting relationships with pets and their families, 
              ensuring every visit is a positive experience that contributes to your pet's overall wellbeing and happiness.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/4587955/pexels-photo-4587955.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Multiple dogs"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white text-2xl">🎾</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;