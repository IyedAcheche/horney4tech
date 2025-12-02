import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 border-t-2 border-[var(--color-burnt-orange)]/20 bg-[var(--color-cream)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h4 className="text-gradient mb-3">HORNEY4TECH</h4>
            <p className="text-sm text-[var(--color-text)]/60">
              Where technology, identity, and society collide in conversation.
            </p>
          </div>

          {/* The Team */}
          <div>
            <p className="text-xs uppercase tracking-wider text-[var(--color-burnt-orange)] mb-3">The Team</p>
            <ul className="space-y-2 text-sm text-[var(--color-text)]/70">
              <li>Iyed Acheche</li>
              <li>David Zavela</li>
              <li>Olivia Phalen</li>
              <li>Hayden Ward</li>
            </ul>
          </div>

          {/* Project Info */}
          <div>
            <p className="text-xs uppercase tracking-wider text-[var(--color-burnt-orange)] mb-3">About This Project</p>
            <p className="text-sm text-[var(--color-text)]/60 mb-2">
              Created for Intermediate Composition
            </p>
            <p className="text-sm text-[var(--color-text)]/60">
              Fall/Spring 2024
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-burnt-orange)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-text)]/50 flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-[var(--color-burnt-orange)]" fill="currentColor" /> by the H4T crew
          </p>
          <p className="text-sm text-[var(--color-text)]/50">
            © 2024 HORNEY4TECH. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-burnt-orange)] to-transparent opacity-30"></div>
    </footer>
  );
}