import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, initialFilters = {} }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    category: initialFilters.category || 'all',
    sortBy: initialFilters.sortBy || 'featured',
    priceRange: initialFilters.priceRange || [0, 100000],
  });

  useEffect(() => {
    applyFilters();
  }, [filters, products]);

  const applyFilters = () => {
    let result = [...products];
    
    // Apply category filter
    if (filters.category !== 'all') {
      result = result.filter((product) => product.category === filters.category);
    }
    
    // Apply price range filter
    result = result.filter((product) => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );
    
    // Apply sorting
    if (filters.sortBy === 'priceLowToHigh') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'priceHighToLow') {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredProducts(result);
  };

  const handleCategoryChange = (e) => {
    setFilters({
      ...filters,
      category: e.target.value,
    });
  };

  const handleSortChange = (e) => {
    setFilters({
      ...filters,
      sortBy: e.target.value,
    });
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    const name = e.target.name;
    
    setFilters({
      ...filters,
      priceRange: name === 'minPrice' 
        ? [value, filters.priceRange[1]] 
        : [filters.priceRange[0], value],
    });
  };

  return (
    <div>
      <div className="mb-8 flex flex-col sm:flex-row gap-4 bg-gray-50 p-4">
        <div className="sm:w-1/3">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category"
            value={filters.category}
            onChange={handleCategoryChange}
            className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Categories</option>
            <option value="soft-seating">Soft Seating</option>
            <option value="seating">Seating</option>
            <option value="tables">Tables</option>
            <option value="storage">Storage</option>
            <option value="bedroom">Bedroom</option>
            <option value="rugs">Rugs</option>
          </select>
        </div>
        
        <div className="sm:w-1/3">
          <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-1">
            Sort By
          </label>
          <select
            id="sortBy"
            value={filters.sortBy}
            onChange={handleSortChange}
            className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="featured">Featured</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        
        <div className="sm:w-1/3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price Range (₹)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              name="minPrice"
              value={filters.priceRange[0]}
              onChange={handlePriceChange}
              min="0"
              max={filters.priceRange[1]}
              className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Min"
            />
            <span>-</span>
            <input
              type="number"
              name="maxPrice"
              value={filters.priceRange[1]}
              onChange={handlePriceChange}
              min={filters.priceRange[0]}
              className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Max"
            />
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}