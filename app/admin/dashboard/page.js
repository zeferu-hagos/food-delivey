'use client';

import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-indigo-800 mb-4">Admin Dashboard</h1>
          <p className="text-lg text-gray-600">Welcome, Admin! Manage your application here.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-indigo-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Overview</h2>
            <p className="text-gray-700">Get an overview of key metrics and statistics about your application.</p>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">User Management</h2>
            <p className="text-gray-700">Manage users, view activity logs, and perform administrative tasks.</p>
          </div>

          <div className="bg-pink-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">Settings</h2>
            <p className="text-gray-700">Configure application settings and preferences to optimize your platform.</p>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Analytics</h2>
            <p className="text-gray-700">Analyze user data, generate reports, and gain insights for better decision-making.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
