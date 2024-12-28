'use client';

import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
  // Fetching data using SWR
  const { data: products, error } = useSWR('/api/admin/products', fetcher);

  if (error)
    return <div className="text-red-500 text-center">Failed to load products.</div>;
  if (!products)
    return <div className="text-gray-500 text-center">Loading products...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Product List
        </h1>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-2">${product.price}</p>
                <p className="text-gray-500 mt-2">{product.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No products available.</p>
        )}
      </div>
    </div>
  );
}
