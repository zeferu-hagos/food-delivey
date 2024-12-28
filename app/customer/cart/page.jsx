'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from "../../store/slices/cartSlice";
import Notification from "../../components/Notification"; // Import the Notification component

export default function CartPage() {
  // Get cart state from Redux store
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    alert('Checkout functionality goes here.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center">
      {/* Show notification if cart has items */}
      {cart.items.length > 0 && (
        <Notification message="You have items in your cart!" />
      )}

      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl mt-16"> {/* Added margin-top */}
        <b className="text-4xl font-bold text-center text-indigo-700 mb-8">
          Your Shopping Cart
        </b>
        {cart.items.length > 0 ? (
          <div>
            <div className="space-y-4">
              {cart.items.map((item, index) => (
                <div
                  key={item._id || index}  // Use _id if available, else fallback to index
                  className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md"
                >
                  <div>
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-gray-600">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => dispatch(removeItem(item))}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <b className="text-2xl font-bold text-indigo-700">
                Total: ${cart.totalPrice.toFixed(2)}
              </b>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-500 text-lg">
              Your cart is empty. Start adding items to see them here!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
