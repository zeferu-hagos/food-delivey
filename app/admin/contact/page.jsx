'use client'; // Enables client-side rendering in Next.js

import React, { useEffect, useState } from 'react';

const AdminContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch('/api/contact', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch contact submissions');
        }

        const data = await res.json();
        setContacts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return <p>Loading contact submissions...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Submissions</h1>
      {contacts.length === 0 ? (
        <p className="text-gray-500">No contact submissions found.</p>
      ) : (
        <div className="bg-white rounded-lg shadow p-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b-2 p-2">Name</th>
                <th className="border-b-2 p-2">Email</th>
                <th className="border-b-2 p-2">Message</th>
                <th className="border-b-2 p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id} className="border-b">
                  <td className="p-2">{contact.name}</td>
                  <td className="p-2">{contact.email}</td>
                  <td className="p-2">{contact.message}</td>
                  <td className="p-2">
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminContactPage;
