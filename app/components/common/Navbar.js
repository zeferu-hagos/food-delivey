'use client'; 

import React, { useState } from 'react';
import Link from 'next/link';
import { FaUserCircle, FaShoppingCart, FaUserShield } from 'react-icons/fa';
import { useSelector } from 'react-redux';  // Import Redux selector
import Notification from "../Notification"; // Import Notification component

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get cart state from Redux store
  const cart = useSelector((state) => state.cart);

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg z-50">
      {/* Show notification if cart has items */}
     
      <div className="mb-8">
  {cart.items.length > 0 && (
    <div className="bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md flex items-center justify-between">
      <span>You have {cart.items.length} item{cart.items.length > 1 ? 's' : ''} in your cart!</span>
      <Notification message="Check them out now!" />
    </div>
  )}
</div>

 
      <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="text-3xl font-bold text-white">
          FoodieDelight
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white text-lg hover:text-yellow-500 transition duration-300">
            Home
          </Link>
          <Link href="/customer/menu" className="text-white text-lg hover:text-yellow-500 transition duration-300">
            Menu
          </Link>
          <Link href="/customer/orders" className="text-white text-lg hover:text-yellow-500 transition duration-300">
            Order
          </Link>

          {/* Cart Icon with Badge */}
          <Link href="/customer/cart" className="relative block text-lg text-white hover:text-yellow-500 transition duration-300">
  <        FaShoppingCart size={20} />
   
            {/* Badge above the cart icon */}
              {cart.items.length > 0 && (
           <span className="absolute top-[-22px] right-[-10px] bg-red-600 text-white text-xs rounded-full px-2 py-1">
             {cart.items.length}
            </span>
  )}
</Link>

          {/* Profile Button */}
          <button className="text-white text-lg flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-yellow-500 hover:to-red-500 hover:shadow-lg transition duration-300 transform hover:scale-105">
            <Link href="/profile" className="flex items-center space-x-2">
              <FaUserCircle size={24} className="text-white" />
              <span className="font-semibold">Account</span>
            </Link>
          </button>

          {/* Admin Button */}
          <button className="text-white text-lg flex items-center space-x-3 px-5 py-3 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 rounded-full hover:from-yellow-400 hover:via-orange-500 hover:to-red-500 hover:shadow-2xl transition duration-300 transform hover:scale-110 focus:ring-4 focus:ring-purple-400">
            <Link href="/admin/menu" className="flex items-center space-x-2">
              <FaUserShield size={28} className="text-white" />
              <span className="font-bold tracking-wide">Admin</span>
            </Link>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-gray-700">
          <ul className="space-y-4 py-4 px-6">
            <li>
              <Link href="/" className="block text-lg text-gray-700 hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/customer/menu" className="block text-lg text-gray-700 hover:text-yellow-500">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/customer/cart" className="block text-lg text-gray-700 hover:text-yellow-500">
                <FaShoppingCart size={20} />
              </Link>
            </li>
            <li>
              <Link href="/login" className="block text-lg text-gray-700 hover:text-yellow-500">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="block text-lg text-gray-700 hover:text-yellow-500">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
