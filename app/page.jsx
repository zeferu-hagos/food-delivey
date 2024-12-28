import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Homepage = () => {
  return (
    <div className="mt-7 min-h-screen bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 flex flex-col items-center justify-start text-gray-800 relative overflow-hidden scroll-smooth">
      {/* Background Image with blur effect */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40 z-0 blur-sm" style={{ backgroundImage: 'url(/images/food-background.jpg)' }}></div>

      {/* Header Section */}
      <header className="text-center z-10 relative px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl animate__animated animate__fadeIn animate__delay-1s transform transition duration-1000 ease-in-out">
          Welcome to FoodExpress
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light text-gray-100 animate__animated animate__fadeIn animate__delay-2s">
          Your favorite dishes delivered right to your door, hot and fresh!
        </p>
      </header>

      {/* Call-to-Action Buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 z-10 relative">
        <Link href="/customer/menu">
          <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-lg text-lg font-medium shadow-2xl hover:scale-110 transform transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-red-600 hover:to-yellow-600 hover:shadow-xl hover:opacity-90">
            Explore Menu
          </button>
        </Link>
        <Link href="/customer/cart">
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg text-lg font-medium shadow-2xl hover:scale-110 transform transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-green-600 hover:to-teal-600 hover:shadow-xl hover:opacity-90">
            View Your Cart
          </button>
        </Link>
        <Link href="/about-us">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg text-lg font-medium shadow-2xl hover:scale-110 transform transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:shadow-xl hover:opacity-90">
            Learn More About Us
          </button>
        </Link>
      </div>

      {/* Scrollable Sections with increased padding */}
      <section className="mt-16 w-full px-4 py-16 z-10 relative">
        <h2 className="text-3xl font-bold text-center text-orange-600 animate__animated animate__fadeIn animate__delay-1s">
          Why Choose Us?
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ease-in-out hover:bg-orange-50">
            <div className="flex justify-center mb-4">
              <Image src="/images/hero-food1.jpg" width={500} height={500} alt="Fast Delivery Icon" />
            </div>
            <h3 className="text-xl font-semibold text-orange-500">Fast Delivery</h3>
            <p className="mt-2 text-gray-600">
              Get your food delivered within 30 minutes!
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ease-in-out hover:bg-orange-50">
            <div className="flex justify-center mb-4">
              <Image src="/images/burger.jpg" width={500} height={500} alt="Fresh Ingredients Icon" />
            </div>
            <h3 className="text-xl font-semibold text-orange-500">Fresh Ingredients</h3>
            <p className="mt-2 text-gray-600">
              We use only the freshest and finest ingredients.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ease-in-out hover:bg-orange-50">
            <div className="flex justify-center mb-4">
              <Image src="/images/dessert.jpg" width={500} height={500} alt="Variety of Dishes Icon" />
            </div>
            <h3 className="text-xl font-semibold text-orange-500">Variety of Choices</h3>
            <p className="mt-2 text-gray-600">
              Choose from hundreds of delicious dishes.
            </p>
          </div>
        </div>
      </section>

      {/* Another section for content */}
      <section className="mt-16 w-full px-4 py-16 bg-gray-100 z-10 relative">
        <h2 className="text-3xl font-bold text-center text-orange-600 animate__animated animate__fadeIn animate__delay-2s">
          Our Services
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ease-in-out hover:bg-orange-50">
            <h3 className="text-xl font-semibold text-orange-500">Delivery at Your Doorstep</h3>
            <p className="mt-2 text-gray-600">
              Food delivered directly to your door, at the speed of light!
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ease-in-out hover:bg-orange-50">
            <h3 className="text-xl font-semibold text-orange-500">24/7 Service</h3>
            <p className="mt-2 text-gray-600">
              We are available around the clock, every day of the week.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ease-in-out hover:bg-orange-50">
            <h3 className="text-xl font-semibold text-orange-500">Easy Ordering</h3>
            <p className="mt-2 text-gray-600">
              Order effortlessly through our simple-to-use app.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
