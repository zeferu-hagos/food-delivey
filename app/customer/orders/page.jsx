"use client";

import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../../store/slices/cartSlice";

const OrdersPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    // Redirect to the checkout page (assuming you have a checkout page at '/checkout')
    window.location.href = '/customer/check-out-page';
  };

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-green-400 via-teal-500 to-green-600 flex items-center justify-center p-6">
      {/* Main Container */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-extrabold text-teal-700 mb-4">🛒 Your Food Orders</h1>
          <p className="text-lg text-gray-600">
            Easily track your meals, monitor their progress, and check delivery times.
            <span className="block text-teal-600 font-semibold mt-2">Bon Appétit!</span>
          </p>
        </div>

        {/* Order List */}
        <div className="space-y-8">
          {cart.items && cart.items.length > 0 ? (
            <>
              {/* Render cart items */}
              <div className="space-y-4">
                {cart.items.map((item, index) => (
                  <div
                    key={item._id || index} // Use _id if available, else fallback to index
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

              {/* Total Price */}
              <div className="mt-8 text-center">
                <b className="text-2xl font-bold text-indigo-700">
                  Total: ${cart.totalPrice?.toFixed(2) || "0.00"}
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
            </>
          ) : (
            <div className="text-center">
              <p className="text-gray-500 text-lg">Your cart is empty!</p>
            </div>
          )}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-12">
          <Link
            href="/customer/new-order"
            className="flex items-center justify-center px-10 py-4 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          >
            <FaShoppingCart className="mr-3 text-3xl" />
            Place a New Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
