import { TeamCard } from './TeamCard';

const teamMembers = [
  {
    name: "Iyed Acheche",
    role: "Computer Science Major & Certified Plumber",
    bio: "Computer Science major and certified plumber. Iyed brings global identity, AI curiosity, and interdisciplinary insight to every episode.",
    funFact: "Bridges three continents in conversation and can debug code while discussing postcolonial theory."
  },
  {
    name: "David Zavela",
    role: "Forklift Driver & Social Thinker",
    bio: "Forklift driver at your local Home Depot with a sharp analytical lens on how digital tools shape our political, racial, and social landscapes.",
    funFact: "Can quote critical race theory scholars and memes with equal fluency."
  },
  {
    name: "Olivia Phalen",
    role: "Tumbling Coach & Narrative Communicator",
    bio: "Tumbling coach at All 4 Cheer for 5 years. Passionate about identity, representation, and storytelling in digital spaces.",
    funFact: "Believes every algorithm has a story to tell — and she's here to unpack it."
  },
  {
    name: "Hayden Ward",
    role: "Guitarist & Certified Florist",
    bio: "Guitarist and certified florist with a strong passion for animals. Enjoys hiking and unpacking the societal consequences of emerging tech innovations.",
    funFact: "Once spent a week living without algorithmic recommendations. Spoiler: they missed their Spotify Discover Weekly."
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 relative bg-[var(--color-cream)]">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-[var(--color-burnt-orange)]"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-[var(--color-dark-orange)]"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-[var(--color-burnt-orange)]"></div>
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-4">Meet the Minds Behind the Mic</h2>
          <p className="text-lg text-[var(--color-text)]/70 max-w-2xl mx-auto">
            Four perspectives, one mission: exploring how technology reshapes identity, society, and everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}