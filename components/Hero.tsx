import { ImageWithFallback } from './figma/ImageWithFallback';
import { Headphones, Users } from 'lucide-react';
import groupPhoto from 'figma:asset/cab3672fb3339850deb21e46607e630c6ac3a0e9.png';
import logo from 'figma:asset/ae97dd2b7ebc90d7382e7cbf40cedc75e75ba975.png';
import { WordCarousel } from './WordCarousel';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-background)]">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[var(--color-burnt-orange)] rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--color-dark-orange)] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[var(--color-burnt-orange)] rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Waveform visualization */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <svg width="100%" height="400" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path 
            d="M0,200 Q150,100 300,200 T600,200 T900,200 T1200,200" 
            fill="none" 
            stroke="var(--color-burnt-orange)" 
            strokeWidth="4"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-2 flex justify-center">
            <ImageWithFallback 
              src={logo}
              alt="HORNEY4TECH Logo"
              className="w-64 h-64 object-contain"
            />
          </div>

          {/* Word Carousel */}
          <WordCarousel />

          {/* Main Title */}
          <h1 className="text-[var(--color-black)] mb-8 text-6xl md:text-7xl lg:text-8xl tracking-tight">
            HORNEY4TECH
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-6 text-[var(--color-text)] max-w-3xl mx-auto">
            A podcast where four students get a little too excited about 
            <span className="text-[var(--color-burnt-orange)]"> Technology</span>, 
            <span className="text-[var(--color-dark-orange)]"> Society</span>, and 
            <span className="text-[var(--color-burnt-orange)]"> Identity</span>.
          </p>

          <p className="text-base md:text-lg mb-12 text-[var(--color-text)]/70 max-w-2xl mx-auto">
            Conversations from the heart of our Intermediate Composition class — where AI, culture, and personal identity collide.
          </p>

          {/* Group Photo */}
          <div className="mb-12 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-burnt-orange)] to-[var(--color-dark-orange)] rounded-2xl blur-xl opacity-30"></div>
            <ImageWithFallback 
              src={groupPhoto}
              alt="HORNEY4TECH Team"
              className="relative rounded-2xl w-full max-w-2xl h-80 object-cover border-4 border-[var(--color-burnt-orange)]/30"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('episodes')}
              className="group relative px-8 py-4 bg-[var(--color-burnt-orange)] text-[var(--color-cream)] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-[var(--color-dark-orange)] glow-orange"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Headphones className="w-5 h-5" />
                Listen Now
              </span>
            </button>

            <button 
              onClick={() => scrollToSection('team')}
              className="px-8 py-4 border-2 border-[var(--color-burnt-orange)] text-[var(--color-burnt-orange)] rounded-full transition-all duration-300 hover:bg-[var(--color-burnt-orange)] hover:text-[var(--color-cream)] hover:scale-105 flex items-center gap-2"
            >
              <Users className="w-5 h-5" />
              Meet the Team
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[var(--color-burnt-orange)]/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2 bg-[var(--color-burnt-orange)] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}