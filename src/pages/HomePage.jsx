import Hero from '../components/home/Hero';
import BrandStory from '../components/home/BrandStory';
import FeaturedProducts from '../components/home/FeaturedProducts';
import ValuePropositions from '../components/home/ValuePropositions';
import ComfortBanner from '../components/home/ComfortBanner';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <BrandStory />
      <FeaturedProducts />
      <ValuePropositions />
      <ComfortBanner />
    </div>
  );
}