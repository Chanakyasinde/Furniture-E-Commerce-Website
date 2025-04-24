import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '../../data/products';
import ProductCard from '../products/ProductCard';

export default function FeaturedProducts() {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular pieces, handcrafted with exceptional attention to detail and designed to elevate your living space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/products" 
            className="btn btn-primary"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}