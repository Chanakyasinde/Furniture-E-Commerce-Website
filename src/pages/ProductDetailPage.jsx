import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { FiShoppingCart, FiStar } from 'react-icons/fi';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = getProductById(productId);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  useEffect(() => {
    if (!product) {
      navigate('/products');
      return;
    }
    
    window.scrollTo(0, 0);
  }, [product, navigate, productId]);
  
  if (!product) return null;
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value < 1 ? 1 : value);
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar 
        key={i} 
        className={`${i < Math.floor(rating) 
          ? 'text-yellow-500 fill-yellow-500' 
          : i < rating 
            ? 'text-yellow-500 fill-yellow-500 opacity-50' 
            : 'text-gray-300'}`} 
      />
    ));
  };
  
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <Link to="/products" className="text-primary-700 hover:text-primary-800 flex items-center space-x-1">
          <span>← Back to Products</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-gray-50 flex items-center justify-center p-8">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="max-w-full max-h-[500px] object-contain"
          />
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {renderStars(product.rating)}
            </div>
            <span className="text-gray-600">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>
          
          <p className="text-2xl font-medium text-gray-900 mb-6">
          ₹{product.price.toLocaleString()}
          </p>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Dimensions</h3>
            <p className="text-gray-600">{product.dimensions}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Materials</h3>
            <p className="text-gray-600">{product.materials.join(', ')}</p>
          </div>
          
          {product.colors.length > 0 && (
            <div className="mb-8">
              <h3 className="font-medium mb-3">Available Colors</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <div key={color} className="flex flex-col items-center">
                    <div 
                      className="w-8 h-8 rounded-full border border-gray-300 mb-1"
                      style={{
                        backgroundColor: 
                          color.toLowerCase() === 'natural' || color.toLowerCase() === 'natural oak' 
                            ? '#D7BC8D' 
                            : color.toLowerCase() === 'walnut' 
                              ? '#5C4033'
                              : color.toLowerCase() === 'oak'
                                ? '#E8D0A9'
                                : color.toLowerCase(),
                      }}
                    ></div>
                    <span className="text-xs">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mb-8">
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center max-w-[150px]">
              <button 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="w-8 h-8 flex items-center justify-center border border-gray-300"
              >
                -
              </button>
              <input 
                type="number" 
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max={product.stock}
                className="w-16 h-8 text-center border-t border-b border-gray-300"
              />
              <button 
                onClick={() => setQuantity(prev => Math.min(product.stock, prev + 1))}
                className="w-8 h-8 flex items-center justify-center border border-gray-300"
              >
                +
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {product.stock > 0 
                ? `${product.stock} items in stock` 
                : 'Out of stock'}
            </p>
          </div>
          
          <button 
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`flex items-center justify-center space-x-2 btn btn-cart w-full max-w-xs ${
              product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}