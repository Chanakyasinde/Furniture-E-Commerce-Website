// Mock product data
const products = [
  {
    id: 1,
    name: "Cozy Armchair",
    description: "A comfortable armchair with tufted back and durable wooden legs, perfect for any living room. The plush cushioning provides excellent support while the clean lines offer a timeless aesthetic that complements various interior styles.",
    price: 499,
    rating: 4.7,
    reviewCount: 42,
    category: "soft-seating",
    categoryName: "Soft Seating",
    stock: 15,
    dimensions: "31.5\"W x 35\"D x 33.5\"H",
    materials: ["Wood", "Polyester", "Foam"],
    colors: ["Gray", "Beige", "Blue"],
    images: [
      "/images/products/armchair-gray.jpg"
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Scandinavian Dining Chair",
    description: "Modern dining chair with a sculpted seat and elegant tapered legs. This chair exemplifies Scandinavian design principles with its perfect balance of form and function, offering both comfort and visual appeal for your dining area.",
    price: 199,
    rating: 4.5,
    reviewCount: 38,
    category: "seating",
    categoryName: "Seating",
    stock: 24,
    dimensions: "18\"W x 21\"D x 30\"H",
    materials: ["Walnut", "Veneer"],
    colors: ["Natural", "Black", "White"],
    images: [
      "/images/products/dining-chair.jpg"
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Minimalist Dining Table",
    description: "Clean-lined dining table that seats up to six people comfortably. Crafted from solid oak with attention to detail, this table features subtle wood grain patterns that add natural character to your dining space while maintaining a sleek, contemporary profile.",
    price: 899,
    rating: 4.8,
    reviewCount: 26,
    category: "tables",
    categoryName: "Tables",
    stock: 10,
    dimensions: "72\"W x 36\"D x 30\"H",
    materials: ["Oak", "Solid Wood"],
    colors: ["Natural Oak"],
    images: [
      "/images/products/dining-table.jpg"
    ],
    featured: true,
  },
  {
    id: 4,
    name: "Mid-century Sideboard",
    description: "Vintage-inspired storage sideboard with ample cabinet space. Featuring three spacious compartments with adjustable shelving, this sideboard combines stylish mid-century aesthetics with practical storage solutions for dining rooms, living rooms, or entryways.",
    price: 799,
    rating: 4.6,
    reviewCount: 19,
    category: "storage",
    categoryName: "Storage",
    stock: 8,
    dimensions: "60\"W x 18\"D x 30\"H",
    materials: ["Walnut", "MDF"],
    colors: ["Walnut"],
    images: [
      "/images/products/sideboard.jpg"
    ],
    featured: false,
  },
  {
    id: 5,
    name: "Platform Bed Frame",
    description: "Modern low-profile bed frame with headboard. The platform design eliminates the need for a box spring while providing sturdy support for your mattress. Clean lines and a minimalist silhouette make this bed frame an elegant centerpiece for contemporary bedrooms.",
    price: 1099,
    rating: 4.9,
    reviewCount: 31,
    category: "bedroom",
    categoryName: "Bedroom",
    stock: 7,
    dimensions: "Queen: 63\"W x 83\"D x 35\"H",
    materials: ["Oak", "Plywood"],
    colors: ["Oak", "Walnut", "White"],
    images: [
      "/images/products/bed-frame.jpg"
    ],
    featured: true,
  },
  {
    id: 6,
    name: "Geometric Pattern Rug",
    description: "Soft wool rug with contemporary geometric design. Hand-tufted from premium wool, this rug adds warmth, texture, and visual interest to any room. The geometric pattern offers a modern touch while the neutral color palette ensures versatility across different interior styles.",
    price: 349,
    rating: 4.4,
    reviewCount: 22,
    category: "rugs",
    categoryName: "Rugs",
    stock: 15,
    dimensions: "5' x 8'",
    materials: ["Wool", "Cotton"],
    colors: ["Multicolor"],
    images: [
      "/images/products/geometric-rug.jpg"
    ],
    featured: false,
  },
  {
    id: 7,
    name: "Lounge Sofa",
    description: "Three-seater sofa with deep seats and plush cushions. Designed for ultimate comfort, this sofa features high-resilience foam cushions and a sturdy hardwood frame. The clean lines and tailored upholstery create a sophisticated silhouette that works well in both modern and traditional settings.",
    price: 1299,
    rating: 4.7,
    reviewCount: 48,
    category: "soft-seating",
    categoryName: "Soft Seating",
    stock: 5,
    dimensions: "84\"W x 38\"D x 34\"H",
    materials: ["Wood", "Polyester", "Foam"],
    colors: ["Light Gray", "Dark Gray", "Blue", "Beige"],
    images: [
      "/images/products/lounge-sofa.jpg"
    ],
    featured: true,
  },
  {
    id: 8,
    name: "Bar Stool",
    description: "Modern counter-height stool with footrest. The ergonomically designed seat ensures comfort during extended periods of sitting, while the steel frame provides excellent stability. Perfect for kitchen islands, home bars, or counter-height dining tables.",
    price: 179,
    rating: 4.3,
    reviewCount: 17,
    category: "seating",
    categoryName: "Seating",
    stock: 20,
    dimensions: "17\"W x 17\"D x 30\"H",
    materials: ["Steel", "Wood"],
    colors: ["Black", "White", "Natural"],
    images: [
      "/images/products/bar-stool.jpg"
    ],
    featured: false,
  },
  {
    id: 9,
    name: "Coffee Table",
    description: "Sleek coffee table with storage shelf. The minimalist design features clean lines and a floating lower shelf that provides additional storage space for books, magazines, or decorative items. The sturdy construction ensures longevity while maintaining a light visual footprint.",
    price: 449,
    rating: 4.6,
    reviewCount: 29,
    category: "tables",
    categoryName: "Tables",
    stock: 12,
    dimensions: "47\"W x 24\"D x 16\"H",
    materials: ["Oak", "Glass"],
    colors: ["Oak/Glass"],
    images: [
      "/images/products/coffee-table.jpg"
    ],
    featured: true,
  },
  {
    id: 10,
    name: "Bookshelf",
    description: "Contemporary bookcase with five shelves. This versatile shelving unit provides ample space for books, collectibles, and decor items. The open design allows you to create visual interest by arranging items of different heights and shapes, making it both functional and decorative.",
    price: 299,
    rating: 4.5,
    reviewCount: 23,
    category: "storage",
    categoryName: "Storage",
    stock: 18,
    dimensions: "32\"W x 12\"D x 72\"H",
    materials: ["MDF", "Laminate"],
    colors: ["White", "Black", "Oak"],
    images: [
      "/images/products/bookshelf.jpg"
    ],
    featured: false,
  },
  {
    id: 11,
    name: "Dresser",
    description: "Six-drawer dresser with simple hardware. This spacious dresser combines style and functionality with smooth-gliding drawers that provide generous storage for clothing and personal items. The minimalist design is enhanced by subtle hardware that maintains the clean aesthetic.",
    price: 749,
    rating: 4.7,
    reviewCount: 15,
    category: "bedroom",
    categoryName: "Bedroom",
    stock: 9,
    dimensions: "58\"W x 18\"D x 32\"H",
    materials: ["Wood", "MDF"],
    colors: ["White", "Walnut"],
    images: [
      "/images/products/dresser.jpg"
    ],
    featured: false,
  },
  {
    id: 12,
    name: "Hand-woven Area Rug",
    description: "Natural fiber rug with subtle texture. Hand-woven from jute and cotton, this rug brings organic warmth and texture to your living space. The neutral tones complement various color schemes, while the durable construction stands up to high-traffic areas in your home.",
    price: 199,
    rating: 4.2,
    reviewCount: 11,
    category: "rugs",
    categoryName: "Rugs",
    stock: 25,
    dimensions: "4' x 6'",
    materials: ["Jute", "Cotton"],
    colors: ["Natural"],
    images: [
      "/images/products/area-rug.jpg"
    ],
    featured: false,
  }
];

export default products;

// Get products by category
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

// Get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

// Get single product
export const getProductById = (id) => {
  return products.find(product => product.id === Number(id));
};

// Get all categories with products
export const getCategories = () => {
  const categories = [
    { id: 'soft-seating', name: 'Soft Seating' },
    { id: 'seating', name: 'Seating' },
    { id: 'tables', name: 'Tables' },
    { id: 'storage', name: 'Storage' },
    { id: 'bedroom', name: 'Bedroom' },
    { id: 'rugs', name: 'Rugs' },
  ];
  
  return categories;
};