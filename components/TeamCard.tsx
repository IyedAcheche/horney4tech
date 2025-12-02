import { useState } from 'react';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  funFact: string;
}

export function TeamCard({ name, role, bio, funFact }: TeamCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[400px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front of card */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border-2 border-[var(--color-burnt-orange)]/30 bg-[var(--color-cream)] shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-full flex flex-col justify-center p-8">
            <h3 className="text-gradient mb-3">{name}</h3>
            <p className="text-[var(--color-burnt-orange)] mb-4">{role}</p>
            <p className="text-sm text-[var(--color-text)]/80 leading-relaxed">{bio}</p>

            {/* Hover hint */}
            <div className="absolute bottom-6 right-6 text-xs text-[var(--color-burnt-orange)] opacity-70">
              Hover for fun fact →
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div 
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border-2 border-[var(--color-burnt-orange)]/60 bg-[var(--color-burnt-orange)] flex items-center justify-center p-6"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="text-center">
            <span className="text-4xl mb-4 block">💡</span>
            <p className="text-xs uppercase tracking-wider text-[var(--color-cream)]/80 mb-3">Fun Fact</p>
            <p className="text-lg leading-relaxed text-[var(--color-cream)]">{funFact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}