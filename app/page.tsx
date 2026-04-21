import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CoupleStory from '@/components/CoupleStory';
import Gallery from '@/components/Gallery';
import BrideSection from '@/components/BrideSection';
import Comments from '@/components/Comments';
import Footer from '@/components/Footer';
import MusicToggle from '@/components/MusicToggle';



export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <Hero />
      <CoupleStory />
      <Gallery />
      <BrideSection />
      <Comments />
      <Footer />
      <MusicToggle />
    </main>
  );
}
