import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { FiShoppingCart } from 'react-icons/fi';

export default function CartPage() {
  const { cart, totalItems, totalAmount, clearCart } = useCart();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (totalItems === 0) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <div className="flex flex-col items-center justify-center max-w-md mx-auto">
          <FiShoppingCart size={64} className="text-gray-300 mb-4" />
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Shopping Cart</h1>
        <p className="text-gray-600">
          You have {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <h2 className="text-xl font-medium">Items</h2>
              <button 
                onClick={clearCart}
                className="text-red-600 hover:text-red-800 text-sm font-medium"
              >
                Clear Cart
              </button>
            </div>
            
            <div>
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <CartSummary totalAmount={totalAmount} />
        </div>
      </div>
    </div>
  );
}