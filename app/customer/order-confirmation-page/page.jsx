import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const OrderConfirmationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-300 to-blue-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-12 max-w-lg w-full text-center">
        {/* Success Icon */}
        <FaCheckCircle className="text-teal-600 text-6xl mb-6 animate-bounce" />

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-teal-600 mb-4">
          Thank you for your order!
        </h1>

        {/* Confirmation Message */}
        <p className="text-lg text-gray-700 mb-6">
          Your order has been successfully placed. You will receive an email with the details shortly.
        </p>

        {/* Link to View Orders */}
        <Link href="/customer/orders" className="inline-block text-teal-600 text-lg font-semibold py-2 px-6 rounded-full border border-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-105">
          View your orders
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
