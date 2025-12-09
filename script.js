// ==================== //
// NAVIGATION TOGGLE
// ==================== //
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navToggle) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
});

// Handle dropdown toggle on mobile
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 968) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    }
});

// ==================== //
// EPISODES DATA
// ==================== //
// Horny4Tech Episodes Data
const episodes = [
    {
        id: 1,
        date: "November 09, 2025",
        duration: "02:36:34",
        tag: "AI Deep Dive",
        title: "ChatGPT-5: The Future is Now",
        guest: "with Dr. Sarah Chen",
        description: "Join Professor Mat Wenzel and Dr. Sarah Chen as we explore the latest developments in AI language models. From ethical implications to mind-blowing capabilities, we're getting absolutely turned on by the future of artificial intelligence. Spoiler: the robots are coming, and we're here for it."
    },
    {
        id: 2,
        date: "November 02, 2025",
        duration: "02:41:24",
        tag: "Startup Stories",
        title: "From Dorm Room to IPO: The Silicon Valley Dream",
        guest: "with Alex Martinez, Founder of TechFlow",
        description: "Ever wondered what it takes to build a billion-dollar startup? Alex Martinez shares the wild ride from coding in a college dorm to ringing the NASDAQ bell. It's messy, it's stressful, and it's absolutely exhilarating. Get ready for some serious entrepreneurial inspiration."
    },
    {
        id: 3,
        date: "October 26, 2025",
        duration: "02:32:32",
        tag: "Cybersecurity",
        title: "Hackers, Passwords, and Digital Disasters",
        guest: "with Marcus Black, Ethical Hacker",
        description: "Marcus Black reveals the dark arts of cybersecurity. Learn why your 'password123' isn't cutting it, how hackers think, and what you can do to protect yourself in an increasingly digital world. This episode will make you paranoid in the best way possible.",
        link: "https://soundcloud.com/horney-for-tech/podcast_3_horny4tech"
    },
    {
        id: 4,
        date: "October 19, 2025",
        duration: "02:58:27",
        tag: "Web3 & Crypto",
        title: "NFTs Are Dead, Long Live NFTs",
        guest: "with Jamie Wu, Blockchain Developer",
        description: "Is Web3 the future or just expensive JPEGs? Jamie Wu helps us navigate the confusing world of blockchain, crypto, and decentralization. We're diving into what actually works, what's total BS, and where this technology might actually change the world."
    },
    {
        id: 5,
        date: "October 12, 2025",
        duration: "01:51:51",
        tag: "Gadget Reviews",
        title: "Tech We're Actually Using in 2025",
        guest: "with the Horny4Tech Team",
        description: "From smart fridges to AR glasses, we review the tech that's actually worth your hard-earned cash. Professor Wenzel shares his latest tech obsessions, and the team debates which gadgets are revolutionary versus which ones are destined for the landfill."
    },
    {
        id: 6,
        date: "October 05, 2025",
        duration: "02:11:15",
        tag: "Coding Talk",
        title: "The Programming Languages You Should Learn in 2025",
        guest: "with Lisa Thompson, Senior Engineer at Google",
        description: "Should you learn Rust? Is Python still king? What about JavaScript frameworks (there are 10,000 now)? Lisa Thompson breaks down the programming landscape and helps you figure out where to invest your learning time. Whether you're a beginner or a seasoned dev, this one's for you."
    }
];

// ==================== //
// LOAD LATEST EPISODES ON HOME PAGE
// ==================== //
const latestEpisodesContainer = document.getElementById('latestEpisodes');
if (latestEpisodesContainer) {
    const latestThree = episodes.slice(0, 3);
    latestEpisodesContainer.innerHTML = latestThree.map(episode => createEpisodeCard(episode)).join('');
}

// ==================== //
// LOAD ALL EPISODES ON EPISODES PAGE
// ==================== //
const episodesListContainer = document.getElementById('episodesList');
let displayedEpisodesCount = 6;

if (episodesListContainer) {
    loadEpisodes();
}

function loadEpisodes() {
    const episodesToShow = episodes.slice(0, displayedEpisodesCount);
    episodesListContainer.innerHTML = episodesToShow.map(episode => createEpisodeCardFull(episode)).join('');
    
    // Hide load more button if all episodes are displayed
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn && displayedEpisodesCount >= episodes.length) {
        loadMoreBtn.style.display = 'none';
    }
}

// Load More Button
const loadMoreBtn = document.getElementById('loadMoreBtn');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        displayedEpisodesCount += 6;
        loadEpisodes();
    });
}

// ==================== //
// CREATE EPISODE CARD (for grid display)
// ==================== //
function createEpisodeCard(episode) {
    const linkButton = episode.link ? `<a href="${episode.link}" target="_blank" class="episode-listen-btn" onclick="event.stopPropagation()">🎧 Listen Now</a>` : '';
    
    return `
        <div class="episode-card">
            <div class="episode-tag">${episode.tag}</div>
            <div class="episode-header">
                <div class="episode-meta">
                    <div class="episode-date">${episode.date}</div>
                    <div class="episode-duration">${episode.duration}</div>
                </div>
            </div>
            <h3 class="episode-title">${episode.title}</h3>
            <div class="episode-guest">${episode.guest}</div>
            <p class="episode-description">${episode.description}</p>
            ${linkButton}
        </div>
    `;
}

// ==================== //
// CREATE FULL EPISODE CARD (for list display)
// ==================== //
function createEpisodeCardFull(episode) {
    const linkButton = episode.link ? `<a href="${episode.link}" target="_blank" class="episode-listen-btn">🎧 Listen Now on SoundCloud</a>` : '';
    const cardClass = episode.link ? 'episode-card-full episode-card-clickable' : 'episode-card-full';
    
    return `
        <div class="${cardClass}" ${episode.link ? `onclick="window.open('${episode.link}', '_blank')"` : ''}>
            <div class="episode-tag">${episode.tag}</div>
            <div class="episode-header">
                <div class="episode-meta">
                    <div class="episode-date">${episode.date}</div>
                    <div class="episode-duration">${episode.duration}</div>
                </div>
            </div>
            <h3 class="episode-title">${episode.title}</h3>
            <div class="episode-guest">${episode.guest}</div>
            <p class="episode-description">${episode.description}</p>
            ${linkButton}
        </div>
    `;
}

// ==================== //
// SMOOTH SCROLLING
// ==================== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        }
    });
});

// ==================== //
// ADD FADE-IN ANIMATION ON SCROLL
// ==================== //
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all episode cards
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const cards = document.querySelectorAll('.episode-card, .episode-card-full');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
});

