export default function ValuePropositions() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">More perspectives</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sustainable Vision */}
          <div className="bg-secondary-700 p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">Our Sustainable Vision</h3>
            <p className="mb-4">
              At Homehaven, we are committed to making thoughtful decisions that prioritize the planet's wellbeing. From sourcing eco-conscious materials to ensuring responsible manufacturing processes.
            </p>
            <p>
              We believe in creating furniture that not only looks beautiful in your home but is also gentle on the world we all share.
            </p>
          </div>
          
          {/* Timeless Elegance */}
          <div className="bg-primary-100 p-8">
            <h3 className="text-2xl font-semibold mb-4">Looking for Timeless Elegance?</h3>
            <p className="mb-4">
              Explore our full range of furniture, crafted to bring beauty and functionality to any space.
            </p>
            <div className="mt-8">
              <button className="btn btn-primary">Discover Now</button>
            </div>
          </div>
          
          {/* Spare Parts */}
          <div className="bg-accent-200 p-8">
            <h3 className="text-2xl font-semibold mb-4">Spare Parts</h3>
            <p className="mb-4">
              At Homehaven, we offer a selection of spare parts for selected pieces of our furniture. If you need assistance or purchases, reach out to us at our customer support.
            </p>
            <p>
              Parts available from warranty claims, components only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}