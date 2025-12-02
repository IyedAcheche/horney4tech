import { Instagram, Music2 } from 'lucide-react';
import { useState } from 'react';

export function SocialSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const socials = [
    { icon: Instagram, label: 'Instagram', color: '#D2734A', link: 'https://www.instagram.com/horney_for_tech_/' },
    { icon: Music2, label: 'SoundCloud', color: '#B85A35', link: 'https://soundcloud.com/horney-for-tech?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
  ];

  return (
    <section id="social" className="py-24 relative overflow-hidden bg-[var(--color-cream)]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-cream)] via-[var(--color-burnt-orange)]/5 to-[var(--color-cream)]"></div>

      <div className="container-custom relative">
        <div className="text-center mb-12">
          <h2 className="text-gradient mb-4">Stay Connected</h2>
          <p className="text-lg text-[var(--color-text)]/70 max-w-2xl mx-auto">
            Join the conversation across platforms and never miss an episode.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-12">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.link}
                className="group relative w-20 h-20 rounded-full border-2 bg-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label={social.label}
                style={{
                  borderColor: social.color
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${social.color}80`;
                  e.currentTarget.style.backgroundColor = `${social.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.backgroundColor = 'white';
                }}
              >
                <Icon 
                  className="w-8 h-8 transition-transform group-hover:scale-110" 
                  style={{ color: social.color }}
                />
              </a>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubscribe} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for episode updates..."
              className="w-full px-6 py-4 rounded-full bg-white border-2 border-[var(--color-burnt-orange)]/30 focus:border-[var(--color-burnt-orange)] outline-none text-[var(--color-text)] placeholder:text-[var(--color-text)]/40 transition-colors shadow-lg"
              required
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-[var(--color-burnt-orange)] text-[var(--color-cream)] rounded-full text-sm hover:scale-105 hover:bg-[var(--color-dark-orange)] transition-all"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <p className="text-center mt-4 text-[var(--color-burnt-orange)] animate-pulse">
              ✨ Thanks for subscribing! We'll keep you posted.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}