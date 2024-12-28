'use client'; // Add this line to indicate it's a Client Component

import { useSelector } from 'react-redux';

const handleCheckout = () => {
    // Redirect to the checkout page (assuming you have a checkout page at '/checkout')
    window.location.href = '/customer/order-confirmation-page';
};

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="p-6 bg-gradient-to-br from-green-400 via-teal-500 to-green-600 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl">
        <h1 className="text-4xl font-bold text-center text-teal-700 mb-8">Checkout</h1>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-teal-600">Your Order</h2>
          
          {/* Cart Items List */}
          {cart.items.length > 0 ? (
            cart.items.map((item, index) => (
              <div key={index} className="flex justify-between items-center p-4 border-b border-gray-300 hover:bg-gray-100 rounded-lg transition-all duration-300">
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-600">${item.price} x {item.quantity}</p>
                </div>
                <p className="font-semibold text-xl text-teal-600">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          )}
          
          {/* Total Price */}
          <div className="text-right mt-4">
            <b className="text-2xl font-bold text-teal-700">Total: ${cart.totalPrice.toFixed(2)}</b>
          </div>
        </div>

        {/* Checkout Form */}
        <form className="mt-6 space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Shipping Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="border p-3 w-full rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Payment Method</label>
            <select className="border p-3 w-full rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="tele-birr">Tele-birr</option>
            </select>
          </div>

          {/* Checkout Button */}
          <button
            type="button"
            onClick={handleCheckout}
            className="bg-teal-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105"
          >
            Complete Order
          </button>
        </form>

        {/* Call to Action */}
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-700">Need help with your order? <a href="/support" className="text-teal-600 hover:text-teal-700">Contact support</a></p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
