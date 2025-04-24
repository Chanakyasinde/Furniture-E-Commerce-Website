export default function BrandStory() {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              A Brand Born from Passion for Design
            </h2>
            <p className="text-gray-700 mb-4">
              At Homehaven, we take pride in the timeless elegance of Scandinavian design. Our furniture is crafted with the finest materials, offering a blend of innovation and comfort to elevate every space.
            </p>
            <p className="text-gray-700 mb-4">
              With a focus on sustainability, functionality, and thoughtful design, we create pieces that not only look beautiful but also stand the test of time.
            </p>
            <p className="text-gray-700">
              Rooted in the values of quality, sustainability, and innovation, Homehaven brings the spacious living room, our carefully curated collection will transform your space into a sanctuary of style and serenity.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="category-card bg-white shadow-sm p-6 flex flex-col items-center text-center">
              <img 
                src="/images/categories/soft-seating.jpg" 
                alt="Soft Seating" 
                className="w-full h-32 object-cover mb-4"
              />
              <h3 className="text-primary-800 font-medium">Soft Seating</h3>
            </div>
            
            <div className="category-card bg-white shadow-sm p-6 flex flex-col items-center text-center">
              <img 
                src="/images/categories/seating.jpg" 
                alt="Seating" 
                className="w-full h-32 object-cover mb-4"
              />
              <h3 className="text-primary-800 font-medium">Seating</h3>
            </div>
            
            <div className="category-card bg-white shadow-sm p-6 flex flex-col items-center text-center">
              <img 
                src="/images/categories/tables.jpg" 
                alt="Tables" 
                className="w-full h-32 object-cover mb-4"
              />
              <h3 className="text-primary-800 font-medium">Tables</h3>
            </div>
            
            <div className="category-card bg-white shadow-sm p-6 flex flex-col items-center text-center">
              <img 
                src="/images/categories/storage.jpg" 
                alt="Storage" 
                className="w-full h-32 object-cover mb-4"
              />
              <h3 className="text-primary-800 font-medium">Storage</h3>
            </div>
            
            <div className="category-card bg-white shadow-sm p-6 flex flex-col items-center text-center">
              <img 
                src="/images/categories/bedroom.jpg" 
                alt="Bedroom" 
                className="w-full h-32 object-cover mb-4"
              />
              <h3 className="text-primary-800 font-medium">Bedroom</h3>
            </div>
            
            <div className="category-card bg-white shadow-sm p-6 flex flex-col items-center text-center">
              <img 
                src="/images/categories/rugs.jpg" 
                alt="Rugs" 
                className="w-full h-32 object-cover mb-4"
              />
              <h3 className="text-primary-800 font-medium">Rugs</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}