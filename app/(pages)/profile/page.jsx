'use client';

import React, { useState, useEffect } from "react";
import { FaUserCircle, FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { useRouter } from 'next/navigation'; // For navigation after saving

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState("John Doe"); // Default name
  const [email, setEmail] = useState("john.doe@example.com"); // Default email
  const [phone, setPhone] = useState("+1234567890"); // Default phone
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter(); // Used to redirect after saving

  // Fetch the user data when the page loads (e.g., on component mount)
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/profile'); // Fetch user profile from the backend
        const data = await response.json();

        if (response.ok) {
          setUserName(data.userName || userName); // Set fetched value or default value
          setEmail(data.email || email); // Set fetched value or default value
          setPhone(data.phone || phone); // Set fetched value or default value
        } else {
          setError(data.message || 'Failed to fetch profile');
        }
      } catch (err) {
        setError('Failed to load profile');
      }
    };

    fetchProfile();
  }, []); // Empty dependency array means this runs once when the component mounts

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    if (!userName || !email || !phone) {
      setError('All fields are required');
      return;
    }
  
    setLoading(true);
    setError(''); // Reset any previous errors
    
    const updatedProfile = { userName, email, phone };
  
    try {
      const response = await fetch('/api/profile', {
        method: 'PUT',  // Use PUT to update the existing profile
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProfile),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Profile updated successfully!');
        router.push('/profile'); // Redirect after saving to show updated profile
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (error) {
      setError('Failed to save profile, please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  const handleCancelClick = () => {
    setIsEditing(false);
    // Optionally reset the profile state if needed
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center p-6">
      {/* Container */}
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-lg w-full overflow-hidden">
        {/* Profile Header */}
        <div className="flex justify-center mb-8">
          <FaUserCircle className="text-teal-600 text-7xl transform transition-all hover:scale-125" />
        </div>

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center text-teal-800 mb-6">
          Your Profile
        </h2>

        {/* User Information Form */}
        <div className="space-y-8">
          {/* Name */}
          <div className="flex justify-between items-center">
            <label className="text-lg font-semibold text-gray-700">Full Name</label>
            {isEditing ? (
              <input
                type="text"
                className="w-3/4 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-md transition-all transform hover:scale-105"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            ) : (
              <p className="text-lg text-gray-700">{userName}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex justify-between items-center">
            <label className="text-lg font-semibold text-gray-700">Email</label>
            {isEditing ? (
              <input
                type="email"
                className="w-3/4 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-md transition-all transform hover:scale-105"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <p className="text-lg text-gray-700">{email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="flex justify-between items-center">
            <label className="text-lg font-semibold text-gray-700">Phone</label>
            {isEditing ? (
              <input
                type="tel"
                className="w-3/4 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-md transition-all transform hover:scale-105"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            ) : (
              <p className="text-lg text-gray-700">{phone}</p>
            )}
          </div>
        </div>

        {/* Error or loading state */}
        {error && <p className="text-red-600 text-center">{error}</p>}
        {loading && <p className="text-teal-600 text-center">Saving...</p>}

        {/* Action Buttons */}
        <div className="mt-10 flex justify-center space-x-6">
          {!isEditing ? (
            <button
              className="px-6 py-3 bg-teal-600 text-white rounded-full shadow-xl hover:bg-teal-700 transform hover:scale-105 transition duration-300"
              onClick={handleEditClick}
            >
              <FaEdit className="mr-2 text-xl" />
              Edit Profile
            </button>
          ) : (
            <>
              <button
                className="px-6 py-3 bg-teal-600 text-white rounded-full shadow-xl hover:bg-teal-700 transform hover:scale-105 transition duration-300"
                onClick={handleSaveClick}
              >
                <FaSave className="mr-2 text-xl" />
                Save Changes
              </button>
              <button
                className="px-6 py-3 bg-red-600 text-white rounded-full shadow-xl hover:bg-red-700 transform hover:scale-105 transition duration-300"
                onClick={handleCancelClick}
              >
                <FaTimes className="mr-2 text-xl" />
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
