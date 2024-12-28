// app/admin/dashboard/orders/page.js
'use client';

import React, { useEffect, useState } from 'react';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/api/orders') // Example API endpoint
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.customerName}: ${order.totalPrice} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
