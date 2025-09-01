# Modern Image Gallery

A responsive, interactive image gallery built with vanilla HTML, CSS, and JavaScript. Features a clean modern design with filtering capabilities, lightbox modal, and smooth animations.

![Modern Image Gallery](https://img.shields.io/badge/HTML-5-orange) ![CSS3](https://img.shields.io/badge/CSS-3-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow) ![Responsive](https://img.shields.io/badge/Design-Responsive-green)


[View Live](https://aman-bam.github.io/CodeAlpha_ImageGallery/)

<img width="1915" height="895" alt="Screenshot 2025-09-01 124516" src="https://github.com/user-attachments/assets/acf53b64-20db-4b33-9686-84fc0a43ae82" />
<img width="1919" height="925" alt="Screenshot 2025-09-01 124522" src="https://github.com/user-attachments/assets/527e95cf-5482-4f7d-8ba0-7d5d8308c88b" />

<img width="1919" height="951" alt="Screenshot 2025-09-01 124528" src="https://github.com/user-attachments/assets/226210fa-1621-4c93-aa9c-fc6607bd9153" />


<img width="1900" height="930" alt="Screenshot 2025-09-01 124533" src="https://github.com/user-attachments/assets/ab3e794d-9e74-4cac-96b7-87768a1ddedd" />


<img width="1913" height="954" alt="Screenshot 2025-09-01 124537" src="https://github.com/user-attachments/assets/d0855f8a-4731-4013-badd-80fd0b2159d1" />



## ✨ Features

- **📱 Responsive Design** - Works seamlessly across desktop, tablet, and mobile devices
- **🎨 Modern UI** - Glass morphism effects with gradient backgrounds
- **🔍 Category Filtering** - Filter images by Nature, Architecture, People, Abstract, or view All
- **🖼️ Lightbox Modal** - Full-screen image viewing with navigation
- **⌨️ Keyboard Navigation** - Use arrow keys and ESC for lightbox control
- **📱 Touch Support** - Swipe gestures for mobile navigation
- **🎭 Smooth Animations** - CSS transitions and hover effects
- **⚡ Performance Optimized** - Lazy loading and efficient rendering

## 🚀 Demo

The gallery includes a curated collection of images across different categories:
- **Nature**: Mountain vistas, forest paths, ocean waves
- **Architecture**: Modern buildings, historical monuments, design patterns
- **People**: Portraits and candid photography
- **Abstract**: Artistic compositions and color studies

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with flexbox/grid, animations, and responsive design
- **Vanilla JavaScript** - ES6+ features, DOM manipulation, event handling
- **External APIs** - Unsplash and Wikipedia for image sources

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/modern-image-gallery.git
   cd modern-image-gallery
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   open index.html
   
   # Or use a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 📁 Project Structure

```
modern-image-gallery/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎯 Usage

### Basic Navigation
- Click any image to open it in the lightbox modal
- Use the filter buttons to sort images by category
- Navigate through images using the previous/next buttons

### Keyboard Shortcuts
- `←` / `→` - Navigate between images in lightbox
- `ESC` - Close lightbox modal

### Mobile Gestures
- **Swipe left/right** - Navigate between images
- **Tap outside image** - Close lightbox

## 🎨 Customization

### Adding New Images
Edit the `images` array in `script.js`:

```javascript
{
  src: "your-image-url.jpg",
  title: "Your Image Title",
  description: "Your image description",
  category: "nature" // or architecture, people, abstract
}
```

### Styling Modifications
Key CSS variables in `style.css`:

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --border-radius: 12px;
  --transition: all 0.3s ease;
}
```

### Adding New Categories
1. Add filter button in HTML
2. Update filter functionality in JavaScript
3. Add corresponding images with the new category

## 🔧 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile Large**: 481px - 767px
- **Mobile Small**: 480px and below

## ⚡ Performance Features

- **Lazy Loading** - Images load as needed
- **Efficient Filtering** - Client-side category filtering
- **Optimized Animations** - GPU-accelerated CSS transforms
- **Minimal Dependencies** - Pure vanilla JavaScript

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash** - For providing high-quality stock photography
- **Wikipedia Commons** - For architectural and cultural images
- **Modern CSS** - Inspiration for glass morphism design trends

⭐ **Star this repository if you found it helpful!**
