import React from 'react'

import image  from 'next/image'

const NewArrivals = () => {
  return (
    <div>
<section className="relative bg-[#FFFBF1]">
      <div className="container mx-auto px-4 py-16 lg:flex lg:items-center lg:justify-between">
        {/* Image Section */}
        <div className="lg:w-2/3">
          <img
            src="/Asgaardsofa.png"
            alt="Asgaardsofa"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/3 text-center lg:text-left mt-8 lg:mt-0">
          <p className="text-lg text-gray-600 mb-2">New Arrivals</p>
          <h1 className="text-4xl font-bold mb-6">Asgaard sofa</h1>
          <button className="px-6 py-3 bg-transparent border-2 border-black text-black font-medium text-lg hover:bg-black hover:text-white transition-all duration-300">
            Order Now
          </button>
        </div>
      </div>

      </section>
      </div>
  );
};


export default NewArrivals;