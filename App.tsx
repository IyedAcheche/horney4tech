import { Hero } from './components/Hero';
import { TeamSection } from './components/TeamSection';
import { EpisodesSection } from './components/EpisodesSection';
import { SocialSection } from './components/SocialSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <Hero />
      <TeamSection />
      <EpisodesSection />
      <SocialSection />
      <Footer />
    </div>
  );
}