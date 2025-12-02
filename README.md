# Podcast Website

A beautiful, modern podcast website inspired by professional podcast sites, featuring a landing page and episodes page.

## 📁 Project Structure

```
.
├── index.html           # Landing page
├── episodes.html        # Episodes listing page
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── episodes-data.json  # Episode data in JSON format
└── README.md          # This file
```

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize the content**: Edit the text, colors, and episodes to match your podcast
3. **Deploy**: Upload all files to your web hosting service

## ✏️ Customization Guide

### 1. Update Podcast Information

Edit `index.html` and `episodes.html` to replace:
- `YOUR PODCAST NAME` - Your podcast name
- `An amazing podcast about amazing things` - Your tagline
- Navigation links (HOME, PODCAST, CREW, EVENTS, etc.)
- About section text
- Subscribe/Social links

### 2. Change Colors

Edit `styles.css` at the top of the file:

```css
:root {
    --primary-color: #667eea;      /* Main brand color */
    --secondary-color: #764ba2;    /* Secondary brand color */
    --text-dark: #1a202c;          /* Dark text color */
    --text-light: #4a5568;         /* Light text color */
    /* ... more colors ... */
}
```

### 3. Add Your Episodes

**Option A: Edit JavaScript directly**

Open `script.js` and find the `episodes` array (around line 40). Edit the episodes:

```javascript
const episodes = [
    {
        id: 1,
        date: "November 09, 2025",
        duration: "02:36:34",
        tag: "episode series name",
        title: "Episode Title Here",
        guest: "with Guest Name",
        description: "Your episode description..."
    },
    // Add more episodes...
];
```

**Option B: Use JSON file** (for advanced users)

The `episodes-data.json` file contains the same episode data in JSON format. If you want to load episodes from this file instead:

1. Modify `script.js` to fetch data from `episodes-data.json`
2. This requires running a local server (file:// protocol doesn't support fetch)

### 4. Replace Podcast Artwork

The landing page has a placeholder SVG artwork. To use your own:

1. Replace the artwork placeholder in `index.html` (around line 62)
2. Add an `<img>` tag with your artwork:

```html
<img src="your-artwork.jpg" alt="Podcast Artwork" style="width: 300px; height: 300px; border-radius: 20px;">
```

### 5. Update Links

Replace placeholder links (`#`) with your actual links:
- Subscribe platforms (Apple Podcasts, Spotify, etc.)
- Social media links (Twitter, Instagram, etc.)
- Patreon or support links

## 🎨 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern, clean UI with smooth animations
- ✅ Sticky navigation bar
- ✅ Dropdown menus
- ✅ Episode cards with hover effects
- ✅ Load more functionality
- ✅ Smooth scrolling
- ✅ Fade-in animations on scroll
- ✅ Mobile-friendly hamburger menu

## 📱 Responsive Design

The website automatically adapts to:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🌐 Deployment

### Simple Hosting Options:

1. **Netlify** (Recommended for beginners)
   - Drag and drop your folder
   - Free hosting with custom domain support

2. **GitHub Pages**
   - Create a GitHub repository
   - Upload files
   - Enable GitHub Pages in settings

3. **Vercel**
   - Connect your GitHub repo
   - Automatic deployments

4. **Traditional Web Hosting**
   - Upload via FTP
   - Works with any hosting provider

## 🔧 Advanced Customization

### Adding More Pages

1. Create a new HTML file (e.g., `about.html`)
2. Copy the navigation from `index.html` or `episodes.html`
3. Add your content
4. Update navigation links in all files

### Adding Audio Players

You can add audio players to episode cards by:

1. Installing a player library (e.g., Plyr, Howler.js)
2. Adding audio elements to episode cards
3. Styling them to match your design

### Integrating with a CMS

For easier content management, consider:
- WordPress with a custom theme
- Headless CMS (Contentful, Strapi)
- Podcast hosting platforms with API access

## 📝 Episode Data Fields

Each episode has these fields:

- `id`: Unique identifier (number)
- `date`: Publication date (string)
- `duration`: Episode length (string, format: HH:MM:SS)
- `tag`: Category or series tag (string)
- `title`: Episode title (string)
- `guest`: Guest name with "with" prefix (string)
- `description`: Episode description (string)

## 🎯 Tips

1. **SEO**: Add meta tags for better search engine visibility
2. **Images**: Compress images before uploading for faster loading
3. **Analytics**: Add Google Analytics or similar tracking
4. **RSS Feed**: Consider generating an RSS feed for podcast directories
5. **Testing**: Test on multiple browsers and devices

## 🐛 Troubleshooting

**Episodes not showing?**
- Check browser console for JavaScript errors
- Ensure `script.js` is properly linked

**Styling issues?**
- Clear browser cache
- Check if `styles.css` is properly linked

**Mobile menu not working?**
- Check if JavaScript is enabled
- Verify `script.js` is loaded

## 📄 License

Feel free to customize this template for your podcast!

---

Need help? Check the code comments in each file for more guidance.

