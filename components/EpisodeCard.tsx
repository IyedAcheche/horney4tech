import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play } from 'lucide-react';

interface EpisodeCardProps {
  number: number;
  title: string;
  description: string;
  image: string;
  soundcloudLink: string;
}

export function EpisodeCard({ number, title, description, image, soundcloudLink }: EpisodeCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border-2 border-[var(--color-burnt-orange)]/20 hover:border-[var(--color-burnt-orange)]/60 transition-all duration-300 hover:scale-[1.02] shadow-lg">
      {/* Episode Banner */}
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback 
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black)] via-[var(--color-black)]/50 to-transparent"></div>
        
        {/* Episode Number Badge */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[var(--color-burnt-orange)] flex items-center justify-center glow-orange shadow-lg">
          <span className="font-mono text-[var(--color-cream)]">{number}</span>
        </div>

        {/* Play Button Overlay */}
        <a 
          href={soundcloudLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="w-16 h-16 rounded-full bg-[var(--color-burnt-orange)] flex items-center justify-center glow-orange hover:scale-110 transition-transform shadow-xl">
            <Play className="w-8 h-8 text-[var(--color-cream)] ml-1" fill="currentColor" />
          </div>
        </a>
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-[var(--color-burnt-orange)] mb-3 group-hover:text-gradient transition-all">
          {title}
        </h4>
        <p className="text-sm text-[var(--color-text)]/70 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Platform Links */}
        <div className="flex gap-3 pt-4 border-t border-[var(--color-burnt-orange)]/20">
          <a 
            href={soundcloudLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 py-2 text-xs bg-[var(--color-burnt-orange)] hover:bg-[var(--color-dark-orange)] text-[var(--color-cream)] rounded-lg transition-colors text-center flex items-center justify-center gap-1"
          >
            🎶 Listen on SoundCloud
          </a>
        </div>
      </div>
    </div>
  );
}