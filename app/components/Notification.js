// components/Notification.js
import React from 'react';

const Notification = ({ message }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-indigo-600 text-white text-center p-2 z-50">
      {message}
    </div>
  );
};

export default Notification;
