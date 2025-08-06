# 🌟 Soft Highlight Glow

A modern, responsive LED lighting e-commerce website built with React, TypeScript, and cutting-edge web technologies.

## 🚀 Live Demo

🔗 **[View Live Site](https://delve-golden-bites.netlify.app/)**

## ✨ Features

- **Modern Design**: Sleek dark theme with gradient accents and soft glow effects
- **Responsive Layout**: Optimized for both mobile and desktop viewing
- **Interactive Shop**: Browse LED lighting products with filtering and sorting
- **Smooth Animations**: GSAP-powered animations and Lenis smooth scrolling
- **3D Elements**: Three.js integration for immersive product visualization
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Code splitting and lazy loading for optimal performance

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and development server
- **React Router DOM** - Client-side routing

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components
- **Shadcn/ui** - Beautiful, customizable components
- **Custom CSS** - Enhanced animations and effects

### Animations & Interactions
- **GSAP** - Professional-grade animations
- **Lenis** - Smooth scrolling experience
- **Three.js** - 3D graphics and visualizations
- **React Three Fiber** - React renderer for Three.js

### State Management & Data
- **React Query (TanStack Query)** - Server state management
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/3a7anton/soft-highlight-glow.git
   cd soft-highlight-glow
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 🏗️ Build

```bash
# Production build
npm run build

# Development build
npm run build:dev

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Shop.tsx        # Shopping page
│   ├── Contact.tsx     # Contact page
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx            # Main application component
```

## 🎨 Key Components

### Shop Page
- **Product Grid**: Responsive grid layout with hover effects
- **Filtering**: Category-based product filtering
- **Sorting**: Multiple sorting options (price, rating, featured)
- **Search**: Real-time product search functionality
- **Mobile-First**: Optimized for all screen sizes

### Animations
- **Smooth Scrolling**: Lenis integration for buttery smooth scrolling
- **Page Transitions**: GSAP-powered entrance animations
- **Interactive Elements**: Hover effects and micro-interactions

### 3D Elements
- **Model Viewer**: Three.js powered 3D product visualization
- **Performance**: Lazy-loaded 3D components for optimal performance

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
# Add your environment variables here
```

### Vite Configuration
The project uses a custom Vite configuration with:
- Code splitting for optimal bundle sizes
- SPA routing support
- Path aliases (`@/` for `src/`)

## 📱 Responsive Design

The application is fully responsive with:
- **Mobile-first approach**
- **Flexible grid layouts**
- **Touch-friendly interactions**
- **Optimized typography scales**

## 🚢 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. The `_redirects` file is included for SPA routing support

### Other Platforms
The built files in the `dist` directory can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**ABU AHAD ANTON**
- GitHub: [@3a7anton](https://github.com/3a7anton)
- Email: [Your Email]

## 🙏 Acknowledgments

- [Shadcn/ui](https://ui.shadcn.com/) for the beautiful component system
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [GSAP](https://greensock.com/gsap/) for powerful animations
- [Three.js](https://threejs.org/) for 3D capabilities
- [Unsplash](https://unsplash.com/) for high-quality product images

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/3a7anton">ABU AHAD ANTON</a>
</div>
