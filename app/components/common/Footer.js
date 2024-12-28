'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Short Description */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-500">FoodieDelight</h2>
            <p className="mt-4 text-lg text-gray-300">
              Enjoy delicious meals delivered straight to your door. Our goal is to bring the freshest and finest food to your table.
            </p>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/" className="hover:text-yellow-500 transition duration-200">Home</Link></li>
              <li><Link href="/customer/menu" className="hover:text-yellow-500 transition duration-200">Menu</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-500 transition duration-200">Contact Us</Link></li>
              <li><Link href="/about" className="hover:text-yellow-500 transition duration-200">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200">Follow Us</h3>
            <div className="mt-4 flex gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-200">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-200">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-200">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-200">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} FoodieDelight. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
