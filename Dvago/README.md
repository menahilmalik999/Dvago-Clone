# DVAGO Pharmacy Clone - HTML, CSS & JavaScript

A complete pixel-perfect clone of the DVAGO pharmacy website, converted from React/TypeScript/Tailwind CSS to vanilla HTML, CSS, and JavaScript.

## Features

### ✅ Header
- Sticky header with announcement bar
- Logo with tagline
- Search bar (desktop & mobile)
- Location selector
- Download App & Instant Order buttons
- User, Wishlist, and Cart icons
- Desktop navigation menu
- Mobile responsive menu with hamburger icon

### ✅ Hero Slider
- 5 auto-scrolling slides (4-second intervals)
- Manual navigation with arrow buttons
- Dot navigation for direct slide access
- Smooth transitions
- Fully responsive

### ✅ Categories Carousel
- Auto-scrolling category cards
- Manual navigation controls
- Hover effects on cards
- 7 different categories
- Responsive design

### ✅ Brand Banners
- Three sets of side-by-side promotional banners:
  - Cetaphil & La Roche-Posay
  - The Ordinary & Schwarzkopf
  - For Him & For Her
- Hover zoom effects
- Responsive grid layout

### ✅ Product Carousels
- **Top Selling Items**: 6 products with auto-scroll
- **Deals**: 6 products with discounted prices
- **Featured Products**: 6 products showcase
- Each product card includes:
  - Wishlist heart button
  - Product image with hover effect
  - Product name (truncated to 2 lines)
  - Current price and original price (with strikethrough)
  - "VIEW ALL" button

### ✅ Care By Condition
- Unique pill-shaped cards
- 6 health conditions
- Circular images at top
- Colored bottom tabs with navigation icons
- Auto-scroll carousel

### ✅ Blogs Section
- 5 blog posts
- Circular images with green tint effect
- Hover effects
- "VIEW ALL" button
- Carousel navigation

### ✅ Brands Section
- 8 brand logos
- Grayscale effect with color on hover
- Expandable description section
- "Show More/Show Less" toggle button
- Links in description text

### ✅ Footer
- Green background (matching brand color)
- 5-column grid layout:
  - Logo & Social Media
  - Categories
  - Navigate
  - Support
  - Contact Us
- Social media icons (Facebook, Twitter, Instagram, YouTube)
- Copyright notice

### ✅ Disclaimer Section
- Red text warnings
- Multiple disclaimer paragraphs
- Copyright information

### ✅ Mobile Responsive
- Fully responsive design
- Mobile menu
- Stacked layouts on small screens
- Touch-friendly navigation
- Optimized for all screen sizes

## File Structure

```
pharmacy-clone/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styles
├── script.js           # JavaScript functionality
├── assets/             # Image assets folder
│   ├── hero-slide-1.jpg
│   ├── hero-slide-2.jpg
│   ├── hero-slide-3.jpg
│   ├── hero-slide-4.jpg
│   ├── hero-slide-5.jpg
│   ├── banner-cetaphil.jpg
│   ├── banner-laroche.jpg
│   ├── banner-ordinary.jpg
│   ├── banner-schwarzkopf.jpg
│   ├── banner-forhim.jpg
│   └── banner-forher.jpg
└── README.md           # This file
```

## How to Use

1. **Download** all files to your computer
2. Make sure the folder structure is maintained
3. **Open** `index.html` in your web browser
4. No server required - works directly in the browser!

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Color Scheme

- **Primary Green**: `hsl(82, 64%, 44%)` - #82B366
- **Teal Accent**: `hsl(174, 62%, 47%)` - #2DB8AC
- **Destructive Red**: `hsl(340, 82%, 52%)` - #E53E57
- **Background**: White
- **Text**: Dark gray
- **Muted**: Light gray

## Typography

- **Font Family**: Poppins (from Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## Key Interactive Features

1. **Auto-scrolling Carousels**:
   - Categories: Every 3.5 seconds
   - Top Selling: Every 3 seconds
   - Deals: Every 3.2 seconds
   - Featured: Every 3.4 seconds

2. **Hero Slider**:
   - Auto-advances every 4 seconds
   - Pause on manual navigation
   - Resume after 5 seconds

3. **Mobile Menu**:
   - Toggles with hamburger icon
   - Smooth transition
   - Includes all navigation items and action buttons

4. **Description Toggle**:
   - "Show More" expands content
   - "Show Less" collapses it
   - Smooth transition

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: hsl(82, 64%, 44%);
    --teal: hsl(174, 62%, 47%);
    --destructive: hsl(340, 82%, 52%);
}
```

### Adding Products
Edit the arrays in `script.js`:
```javascript
const topSellingProducts = [
    { id: 1, name: "Product Name", price: 1000, originalPrice: 1200, image: "url" },
    // Add more products...
];
```

### Changing Slider Images
Replace the image files in the `assets/` folder with your own images, keeping the same filenames.

## Credits

Original design by DVAGO (www.dvago.pk)
Converted from React/TypeScript/Tailwind to HTML/CSS/JavaScript

## Notes

- All product images use Unsplash placeholders
- Category images use Unsplash placeholders
- Blog images use Unsplash placeholders
- Original brand banner images are included in the assets folder
- The site is fully functional without any backend/database
- All carousel functionality is smooth and performant

## Support

For any issues or questions:
- Check that all files are in the correct locations
- Ensure assets folder contains all images
- Verify JavaScript is enabled in your browser
- Try clearing browser cache

---

**Last Updated**: February 2026
**Version**: 1.0.0
