import { useEffect, useState } from 'react';

const words = [
  'Innovation',
  'Identity',
  'Culture',
  'Society',
  'Algorithms',
  'Equity',
  'Disruption',
  'Consciousness',
  'Community',
  'Ethics',
  'Progress',
  'Connection'
];

export function WordCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <span className="text-xl md:text-2xl text-[var(--color-text)]">Where tech meets</span>
      <div className="relative h-12 md:h-14 w-48 md:w-56 flex items-center justify-center overflow-hidden">
        <span 
          className={`absolute text-xl md:text-2xl font-mono text-[var(--color-burnt-orange)] transition-all duration-500 ${
            isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
          }`}
        >
          {words[currentIndex]}
        </span>
      </div>
    </div>
  );
}
