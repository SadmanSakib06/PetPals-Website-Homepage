import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Woman with dog"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">🐾</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-blue-50 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Best Grooming Style & Care for Your{' '}
              <span className="text-orange-500">Cats and Dogs</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our professional pet grooming services ensure your beloved companions look and feel their absolute best. 
              We combine years of experience with genuine love for animals to provide exceptional care that goes beyond just grooming.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From basic baths to full spa treatments, nail trimming to dental care, we offer comprehensive services 
              tailored to each pet's unique needs and personality.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;