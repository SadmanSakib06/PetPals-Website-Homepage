import React from 'react';
import { Star, Heart, Award } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Emily Chen",
      role: "Lead Groomer",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5
    },
    {
      name: "David Martinez", 
      role: "Pet Trainer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5
    },
    {
      name: "Lisa Smith",
      role: "Veterinary Assistant", 
      image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5
    },
    {
      name: "Chris Johnson",
      role: "Pet Behaviorist",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400", 
      rating: 5
    },
    {
      name: "Michael Thompson",
      role: "Senior Groomer",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5
    },
    {
      name: "Sarah Taylor",
      role: "Pet Nutritionist",
      image: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Groomers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our passionate team of certified pet care professionals who are dedicated to providing the best care for your beloved companions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="relative">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <Heart className="w-5 h-5 text-red-500" />
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-4">{member.role}</p>
                
                {/* Rating Stars */}
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(member.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">
                    <span className="text-sm">f</span>
                  </div>
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">
                    <span className="text-sm">t</span>
                  </div>
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">
                    <span className="text-sm">in</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;