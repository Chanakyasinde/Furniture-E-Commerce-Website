export default function ComfortBanner() {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] bg-primary-50 overflow-hidden">
      <div className="container mx-auto h-full relative z-10">
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 max-w-md p-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            The Perfect Balance of Comfort and Style
          </h2>
          <p className="text-white text-lg mb-6">
            Our designs emphasize both aesthetics and ergonomics, ensuring that beautiful furniture is also exceptionally comfortable.
          </p>
          <button className="btn btn-primary">Explore Our Soft Seating</button>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/comfort-banner.jpg" 
          alt="Comfortable seating area" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}