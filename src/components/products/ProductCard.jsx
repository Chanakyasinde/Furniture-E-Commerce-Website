import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  
  return (
    <Link to={`/products/${product.id}`} className="product-card group block">
      <div className="relative overflow-hidden bg-gray-100 mb-4 aspect-square">
        <img
          src={product.images[0]} 
          alt={product.name}
          className="product-image w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 bg-white text-primary-800 py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary-50"
        >
          Add to Cart
        </button>
      </div>
      <h3 className="font-medium text-lg text-gray-900">{product.name}</h3>
      <p className="text-gray-700">${product.price.toLocaleString()}</p>
    </Link>
  );
}