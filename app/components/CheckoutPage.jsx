import React from 'react';

const CheckoutPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
      {/* Add form fields for shipping details */}
      <form className="space-y-6">
        <div>
          <label className="block text-lg font-medium">Shipping Address</label>
          <input type="text" placeholder="Enter your address" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block text-lg font-medium">Payment Method</label>
          <select className="border p-2 w-full">
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-teal-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-300"
          >
            Complete Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
