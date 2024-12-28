'use client';

import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MenuPage() {
  // Using SWR to fetch data
  const { data, error } = useSWR('/api/menu', fetcher);

  if (error) return <div className="text-red-500">Failed to load menu</div>;
  if (!data) return <p className="text-gray-500 text-center">Loading menu...</p>;

  return (
    <div className="min-h-screen mt-5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-5xl">
        <b className="text-5xl font-extrabold text-center text-blue-700 mb-12">
          Our Delicious Menu
        </b>
        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item) => (
              <div
                key={item._id}
                className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <div className="relative">
                  <Image
                    width={400}
                    height={400}
                    src={'/images/burger.jpg'}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-lg"></div>
                </div>
                <b className="text-2xl font-semibold text-gray-800 mb-2">
                  <div className="flex"><b className="text-green-500">Name : </b>{item.name}</div>
                </b>
                <b className="text-xl text-gray-600 mb-4">
                <div className="flex"><b className="text-green-500">Price : </b>{item.price}$</div></b>
                <b className="text-gray-500">
                <div>
                    <strong className="text-green-500">Description </strong><b/>
                   <div style={{ wordWrap: 'break-word', wordBreak: 'break-all' }}>{item.description}</div>
                   </div>
                    </b>
                <button className='items-center bg-cyan-500 text-white w-40 h-8 rounded-lg mt-5'>Add To Cart</button>

              </div>

            ))}
          </div>
          
        ) : (
          <b className="text-gray-500 text-center">No items available in the menu.</b>
        )}
      </div>
    </div>
  );
}
