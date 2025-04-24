// import { Link } from 'react-router-dom';

// export default function CartSummary({ totalAmount }) {
//   const shippingCost = totalAmount > 999 ? 0 : 99;
//   const estimatedTax = totalAmount * 0.08;
//   const orderTotal = totalAmount + shippingCost + estimatedTax;
  
//   return (
//     <div className="bg-gray-50 p-6">
//       <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
      
//       <div className="space-y-3 mb-6">
//         <div className="flex justify-between">
//           <span className="text-gray-600">Subtotal</span>
//           <span className="font-medium">${totalAmount.toLocaleString()}</span>
//         </div>
        
//         <div className="flex justify-between">
//           <span className="text-gray-600">Shipping</span>
//           <span className="font-medium">
//             {shippingCost === 0 ? 'Free' : `$${shippingCost}`}
//           </span>
//         </div>
        
//         <div className="flex justify-between">
//           <span className="text-gray-600">Estimated Tax</span>
//           <span className="font-medium">${estimatedTax.toFixed(2)}</span>
//         </div>
        
//         <div className="border-t border-gray-200 pt-3 mt-3">
//           <div className="flex justify-between font-semibold">
//             <span>Order Total</span>
//             <span>${orderTotal.toFixed(2)}</span>
//           </div>
//         </div>
//       </div>
      
//       <button className="w-full btn btn-cart mb-4">
//         Proceed to Checkout
//       </button>
      
//       <Link to="/products" className="text-primary-800 hover:text-primary-900 inline-block">
//         Continue Shopping
//       </Link>
      
//       <div className="mt-6 text-sm text-gray-500">
//         <p className="mb-2">We accept:</p>
//         <div className="flex gap-2">
//           <div className="w-10 h-6 bg-gray-300 rounded"></div>
//           <div className="w-10 h-6 bg-gray-300 rounded"></div>
//           <div className="w-10 h-6 bg-gray-300 rounded"></div>
//           <div className="w-10 h-6 bg-gray-300 rounded"></div>
//         </div>
//       </div>
//     </div>
//   );
// }






import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

export default function CartSummary({ totalAmount }) {
  const { clearCart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const shippingCost = totalAmount > 999 ? 0 : 99;
  const estimatedTax = totalAmount * 0.08;
  const orderTotal = totalAmount + shippingCost + estimatedTax;
  
  const handleCheckout = () => {
    setShowConfirmation(true);
    
    // Clear cart and hide confirmation after 3 seconds
    setTimeout(() => {
      clearCart();
      setShowConfirmation(false);
    }, 3000);
  };
  
  return (
    <div className="bg-gray-50 p-6 relative">
      {/* Success Modal Overlay */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl transform transition-all animate-fadeIn">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FiCheckCircle className="text-green-500" size={64} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Order Placed Successfully!
              </h3>
              <p className="text-gray-600 mb-6">
                Thank you for your purchase. You will receive an email confirmation shortly.
              </p>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <p className="text-sm text-gray-500">Order #: {Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}</p>
                <p className="text-sm text-gray-500">Date: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${totalAmount.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">
            {shippingCost === 0 ? 'Free' : `$${shippingCost}`}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Estimated Tax</span>
          <span className="font-medium">${estimatedTax.toFixed(2)}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="flex justify-between font-semibold">
            <span>Order Total</span>
            <span>${orderTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <button 
        className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-md font-medium transition-colors btn btn-cart mb-4"
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </button>
      
      <Link to="/products" className="text-primary-800 hover:text-primary-900 inline-block">
        Continue Shopping
      </Link>
      
      <div className="mt-6 text-sm text-gray-500">
        <p className="mb-2">We accept:</p>
        <div className="flex gap-2">
          <div className="w-10 h-6 bg-gray-300 rounded"></div>
          <div className="w-10 h-6 bg-gray-300 rounded"></div>
          <div className="w-10 h-6 bg-gray-300 rounded"></div>
          <div className="w-10 h-6 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}