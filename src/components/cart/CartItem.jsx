// import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
// import { useCart } from '../../context/CartContext';
// import { Link } from 'react-router-dom';

// export default function CartItem({ item }) {
//   const { addToCart, removeFromCart, deleteFromCart } = useCart();
  
//   const handleIncreaseQuantity = () => {
//     addToCart({ id: item.id, price: item.price }, 1);
//   };
  
//   const handleDecreaseQuantity = () => {
//     removeFromCart(item.id);
//   };
  
//   const handleRemoveItem = () => {
//     deleteFromCart(item.id);
//   };
  
//   return (
//     <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b border-gray-200">
//       {/* Product image */}
//       <div className="w-full sm:w-24 h-24 bg-gray-100 mr-4 mb-4 sm:mb-0">
//         <Link to={`/products/${item.id}`}>
//           <img
//             src={item.image}
//             alt={item.name}
//             className="w-full h-full object-cover object-center"
//           />
//         </Link>
//       </div>
      
//       {/* Product info */}
//       <div className="flex-grow">
//         <Link to={`/products/${item.id}`} className="font-medium text-lg text-gray-900 hover:text-primary-800">
//           {item.name}
//         </Link>
//       </div>
      
//       {/* Quantity controls */}
//       <div className="flex items-center mt-4 sm:mt-0 mr-8">
//         <button 
//           onClick={handleDecreaseQuantity}
//           className="p-1 border border-gray-300 text-gray-600 hover:bg-gray-100"
//           aria-label="Decrease quantity"
//         >
//           <FiMinus size={16} />
//         </button>
//         <span className="px-4">{item.quantity}</span>
//         <button 
//           onClick={handleIncreaseQuantity}
//           className="p-1 border border-gray-300 text-gray-600 hover:bg-gray-100"
//           aria-label="Increase quantity"
//         >
//           <FiPlus size={16} />
//         </button>
//       </div>
      
      
//       {/* Price */}
//       <div className="font-medium text-gray-900 mr-4 mt-4 sm:mt-0">
//         ${(item.price * item.quantity).toLocaleString()}
//       </div>
      
//       {/* Remove button */}
//       <button 
//         onClick={handleRemoveItem}
//         className="text-gray-500 hover:text-red-600 transition-colors p-1 mt-4 sm:mt-0"
//         aria-label="Remove item"
//       >
//         <FiTrash2 size={18} />
//       </button>
//     </div>
//   );
// }






import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartItem({ item }) {
  const { addToCart, removeFromCart, deleteFromCart } = useCart();
  
  const handleIncreaseQuantity = () => {
    // Make sure we're passing the item correctly
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    }, 1);
  };
  
  const handleDecreaseQuantity = () => {
    removeFromCart(item.id);
  };
  
  const handleRemoveItem = () => {
    deleteFromCart(item.id);
  };
  
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b border-gray-200">
      {/* Product image */}
      <div className="w-full sm:w-24 h-24 bg-gray-100 mr-4 mb-4 sm:mb-0">
        <Link to={`/products/${item.id}`}>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center"
          />
        </Link>
      </div>
      
      {/* Product info */}
      <div className="flex-grow">
        <Link to={`/products/${item.id}`} className="font-medium text-lg text-gray-900 hover:text-primary-800">
          {item.name}
        </Link>
      </div>
      
      {/* Quantity controls */}
      <div className="flex items-center mt-4 sm:mt-0 mr-8">
        <button
          onClick={handleDecreaseQuantity}
          className="p-1 border border-gray-300 text-gray-600 hover:bg-gray-100"
          aria-label="Decrease quantity"
        >
          <FiMinus size={16} />
        </button>
        <span className="px-4">{item.quantity}</span>
        <button
          onClick={handleIncreaseQuantity}
          className="p-1 border border-gray-300 text-gray-600 hover:bg-gray-100"
          aria-label="Increase quantity"
        >
          <FiPlus size={16} />
        </button>
      </div>
      
      {/* Price */}
      <div className="font-medium text-gray-900 mr-4 mt-4 sm:mt-0">
        ₹{(item.price * item.quantity).toLocaleString()}
      </div>
      
      {/* Remove button */}
      <button
        onClick={handleRemoveItem}
        className="text-gray-500 hover:text-red-600 transition-colors p-1 mt-4 sm:mt-0"
        aria-label="Remove item"
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
}