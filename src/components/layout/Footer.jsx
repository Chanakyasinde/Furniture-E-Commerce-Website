import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-primary-50 text-gray-800">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and social */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="text-primary-900 font-bold text-3xl">
            Homehaven
            </Link>
            <div className="flex items-center mt-4 space-x-4">
              <a href="#" className="text-gray-700 hover:text-primary-800">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-800">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-800">
                <FiTwitter size={20} />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Stay updated with the latest trends and exclusive offers from Homehaven. Follow our newsletter.
            </p>
            <div className="flex mt-4">
              <input 
                type="email" 
                placeholder="E-mail" 
                className="px-4 py-2 w-full bg-white border border-gray-300 focus:outline-none focus:border-primary-500"
              />
              <button 
                className="bg-primary-800 text-white px-4 hover:bg-primary-900 transition-colors"
              >
                →
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary-800">Our Story</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary-800">Sustainability</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary-800">Craftsmanship</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary-800">Materials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/category/soft-seating" className="text-gray-600 hover:text-primary-800">Soft Seating</Link></li>
              <li><Link to="/category/tables" className="text-gray-600 hover:text-primary-800">Tables</Link></li>
              <li><Link to="/category/storage" className="text-gray-600 hover:text-primary-800">Storage</Link></li>
              <li><Link to="/category/bedroom" className="text-gray-600 hover:text-primary-800">Bedroom</Link></li>
              <li><Link to="/category/rugs" className="text-gray-600 hover:text-primary-800">Rugs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Showroom</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary-800">FAQ</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary-800">Shipping & Returns</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary-800">Warranty Information</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary-800">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary-800">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-sm text-gray-600">
          <p>© 2025 Homehaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}