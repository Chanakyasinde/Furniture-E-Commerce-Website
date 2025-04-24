import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiShoppingCart, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { getCategories } from '../../data/products';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const categories = getCategories();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="text-primary-900 font-bold text-2xl">
        Homehaven
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className="nav-link text-gray-800 hover:text-primary-800">
            About Us
          </NavLink>
          <NavLink to="/products" className="nav-link text-gray-800 hover:text-primary-800">
            Products
          </NavLink>
          <NavLink to="/designers" className="nav-link text-gray-800 hover:text-primary-800">
            Designers
          </NavLink>
          <NavLink to="/showroom" className="nav-link text-gray-800 hover:text-primary-800">
            Showroom
          </NavLink>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-700 hover:text-primary-800 transition-colors">
            <FiSearch size={20} />
          </button>
          
          <Link to="/cart" className="p-2 text-gray-700 hover:text-primary-800 transition-colors relative">
            <FiShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="p-2 text-gray-700 md:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full absolute top-full left-0 shadow-md py-4 px-4 z-50 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className="text-gray-800 py-2 hover:text-primary-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/products" 
              className="text-gray-800 py-2 hover:text-primary-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink 
              to="/designers" 
              className="text-gray-800 py-2 hover:text-primary-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Designers
            </NavLink>
            <NavLink 
              to="/showroom" 
              className="text-gray-800 py-2 hover:text-primary-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Showroom
            </NavLink>
            
            <div className="border-t border-gray-200 pt-3 mt-2">
              <h3 className="font-medium mb-2 text-gray-700">Categories</h3>
              {categories.map(category => (
                <NavLink 
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="block py-2 text-gray-600 hover:text-primary-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}