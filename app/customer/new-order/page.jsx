'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/cartSlice';
import Loading from '../../components/Loading'; // Import the Loading component
import { useRouter } from 'next/navigation';

const NewOrderPage = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [quantity, setQuantity] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddProduct = async () => {
    setError('');
    setLoading(true);

    const product = { name, price, description, imageUrl, quantity, specialInstructions };

    try {
      const response = await fetch('/api/admin/addProducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Product added successfully!');
        dispatch(addItem(product));
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Show loading spinner when loading
  if (loading) return <Loading />;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct();
    router.push('/customer/orders'); // Redirect to orders page after adding product
  };

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-green-400 via-teal-500 to-green-600 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-yellow-300 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-300 rounded-full blur-3xl opacity-30 -z-10"></div>

      {/* Container */}
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-3xl w-full">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-orange-700 mb-6 animate-pulse">
          📝 Place a New Order
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Fill out the form below to enjoy your favorite dish, fresh and fast!
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-2">Dish Name</label>
            <input
              type="text"
              placeholder="Enter the dish name"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">🍲</span>
          </div>

          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-2">Quantity</label>
            <input
              type="number"
              placeholder="Enter quantity"
              className="w-full px-4 py-3 bg-gray-100 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔢</span>
          </div>

          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-2">Special Instructions</label>
            <textarea
              placeholder="Add any special instructions for the order"
              rows="4"
              onChange={(e) => setSpecialInstructions(e.target.value)}
              value={specialInstructions}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <span className="absolute right-3 top-3 text-gray-400">✍️</span>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          >
            🚀 Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewOrderPage;
