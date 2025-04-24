import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';
import ProductList from '../components/products/ProductList';

export default function CategoryPage() {
  const { categoryName } = useParams();
  const categoryProducts = getProductsByCategory(categoryName);
  
  const getCategoryTitle = () => {
    switch (categoryName) {
      case 'soft-seating':
        return 'Soft Seating';
      case 'seating':
        return 'Seating';
      case 'tables':
        return 'Tables';
      case 'storage':
        return 'Storage';
      case 'bedroom':
        return 'Bedroom';
      case 'rugs':
        return 'Rugs';
      default:
        return 'Products';
    }
  };
  
  const getCategoryDescription = () => {
    switch (categoryName) {
      case 'soft-seating':
        return 'Relax in style with our soft seating collection. From plush sofas to comfortable armchairs, each piece is designed for ultimate comfort without compromising on aesthetics.';
      case 'seating':
        return 'Our seating collection offers elegant designs for dining, working, or casual settings. Functional yet beautiful, these pieces will complement any space.';
      case 'tables':
        return 'Discover tables that combine functionality with refined design. From dining tables to coffee tables, each piece serves as a focal point in your space.';
      case 'storage':
        return 'Organize your space with our thoughtfully designed storage solutions. Combining practicality with elegant design, these pieces help create a clutter-free environment.';
      case 'bedroom':
        return 'Transform your bedroom into a sanctuary of style and comfort with our bedroom collection. Each piece is crafted to ensure restful nights and beautiful mornings.';
      case 'rugs':
        return 'Add warmth and texture to your space with our curated collection of rugs. From subtle patterns to bold statements, find the perfect foundation for your room.';
      default:
        return 'Browse our collection of premium furniture pieces.';
    }
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{getCategoryTitle()}</h1>
        <p className="text-gray-600 max-w-3xl">
          {getCategoryDescription()}
        </p>
      </div>
      
      <ProductList 
        products={categoryProducts} 
        initialFilters={{ category: categoryName }}
      />
    </div>
  );
}