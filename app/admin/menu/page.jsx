'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/cartSlice';
import Loading from '../../components/Loading'; // Import the Loading component

export default function AdminMenuPage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const dispatch = useDispatch();

  const handleAddProduct = async () => {
    setError('');
    setLoading(true);

    const product = { name, price, description, imageUrl };

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

  return (
    <div className="mt-8 min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-center text-purple-700 mb-6">
          Add New Product
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-4">
          <div>
            <label className="block text-lg font-semibold text-gray-700" htmlFor="name">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter product name"
              className="w-full px-4 py-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter product price"
              className="w-full px-4 py-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
              className="w-full px-4 py-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700" htmlFor="imageUrl">
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image URL"
              className="w-full px-4 py-3 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={handleAddProduct}
              disabled={loading}
              className="w-full py-3 mt-4 bg-purple-600 text-white rounded-lg text-lg font-semibold shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
