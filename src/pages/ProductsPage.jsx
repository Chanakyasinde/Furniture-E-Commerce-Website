import { useEffect } from 'react';
import products from '../data/products';
import ProductList from '../components/products/ProductList';

export default function ProductsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Collection</h1>
        <p className="text-gray-600 max-w-3xl">
          Explore our full range of furniture pieces, each one designed with a perfect blend of form and function. Filter and sort to find the perfect addition to your space.
        </p>
      </div>
      
      <ProductList products={products} />
    </div>
  );
}