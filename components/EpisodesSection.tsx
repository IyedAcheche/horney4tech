import { EpisodeCard } from './EpisodeCard';

const episodes = [
  {
    number: 1,
    title: "Introduction — \"Meet the H4T Crew\"",
    description: "A roundtable kickoff: who we are, why we care about tech & identity, and what \"Horney4Tech\" really means.",
    image: "https://images.unsplash.com/photo-1659083725992-9d88c12e719c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwbWljcm9waG9uZSUyMG5lb258ZW58MXx8fHwxNzY0NzAxODY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    soundcloudLink: "https://soundcloud.com/horney-for-tech/introduction"
  },
  {
    number: 2,
    title: "AI in the Classroom",
    description: "From essays to ethics — how artificial intelligence is reshaping academic life, learning patterns, and equity.",
    image: "https://images.unsplash.com/photo-1679639539537-0d2e452890f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjQ2Nzg4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    soundcloudLink: "https://soundcloud.com/horney-for-tech/episode-2"
  },
  {
    number: 3,
    title: "AI in Transportation",
    description: "Self-driving cars, drones, and ethical risk. How far is too far? And who's actually in control?",
    image: "https://images.unsplash.com/photo-1650699060603-5636741760d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwY2FyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ3MDE4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    soundcloudLink: "https://soundcloud.com/horney-for-tech/episode-3"
  },
  {
    number: 4,
    title: "AI in Social Media",
    description: "Algorithms, identity shaping, racial bias, and the psychological ecosystem of online life.",
    image: "https://images.unsplash.com/photo-1690883793939-f8cca2f28ee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBob25lfGVufDF8fHx8MTc2NDY4MjczMHww&ixlib=rb-4.1.0&q=80&w=1080",
    soundcloudLink: "https://soundcloud.com/horney-for-tech/episode-4"
  },
  {
    number: 5,
    title: "AI in Medicine",
    description: "Cutting-edge innovation meets human vulnerability. How AI diagnoses, treats, and disrupts care systems.",
    image: "https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMEFJfGVufDF8fHx8MTc2NDY4NDM1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    soundcloudLink: "https://soundcloud.com/horney-for-tech/episode-5"
  }
];

export function EpisodesSection() {
  return (
    <section id="episodes" className="py-24 relative bg-[var(--color-cream)]">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-burnt-orange)] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-burnt-orange)] to-transparent"></div>

      <div className="container-custom relative">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-4">Listen to the Episodes</h2>
          <p className="text-lg text-[var(--color-text)]/70 max-w-2xl mx-auto">
            Deep dives into AI's impact across different domains — from classrooms to operating rooms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {episodes.slice(0, 1).map((episode) => (
            <div key={episode.number} className="md:col-span-2 lg:col-span-3">
              <EpisodeCard {...episode} />
            </div>
          ))}
          {episodes.slice(1).map((episode) => (
            <EpisodeCard key={episode.number} {...episode} />
          ))}
        </div>
      </div>
    </section>
  );
}