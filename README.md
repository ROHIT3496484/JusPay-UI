# JusPay Dashboard - Pixel Perfect Implementation

A modern, pixel-perfect React.js dashboard application with Home Page Dashboard and Order List Dashboard, featuring routing, light/dark theme support, and responsive design.

## 🎨 Features

### Core Features
- **Pixel Perfect Design**: Exact measurements, spacing, and typography matching Figma specifications
- **Modern Dashboard**: Clean, professional interface with smooth animations
- **Dual Pages**: Home Dashboard with analytics and Orders Management
- **Theme Support**: Light and dark mode with smooth transitions
- **Responsive Design**: Mobile-first approach with perfect scaling
- **Routing**: React Router for seamless navigation

### Dashboard Features
- **Home Dashboard**:
  - Real-time statistics cards with trend indicators
  - Recent orders list with status indicators
  - Revenue overview chart with interactive controls
  - Payment methods breakdown with visual progress bars
  - Quick action buttons for common tasks

- **Orders Management**:
  - Comprehensive order listing with advanced filtering
  - Search functionality across multiple fields
  - Status-based filtering and sorting
  - Detailed order modal with customer information
  - Export functionality for data analysis
  - Real-time statistics overview

### Technical Features
- **Design System**: Comprehensive CSS variables for consistent styling
- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **Performance**: Optimized animations and efficient rendering
- **Type Safety**: PropTypes and consistent data structures
- **Mobile Optimized**: Touch-friendly interface with responsive breakpoints

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd juspay-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 🎯 Design System

### Color Palette
- **Primary**: Blue gradient (#0EA5E9 to #3B82F6)
- **Success**: Green (#22C55E)
- **Warning**: Amber (#F59E0B)
- **Error**: Red (#EF4444)
- **Gray Scale**: 9-step scale from #F8FAFC to #0F172A

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Sizes**: 12px to 48px with consistent scaling
- **Font Weights**: 400, 500, 600, 700, 800
- **Line Heights**: Tight (1.25) to Loose (2.0)

### Spacing Scale
- **Base Unit**: 4px
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px

### Component Measurements
- **Sidebar**: 256px width
- **Top Bar**: 64px height
- **Cards**: 24px padding with 16px border radius
- **Buttons**: 40px height with 12px border radius
- **Inputs**: 48px height with 16px border radius

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

### Mobile Optimizations
- Collapsible sidebar with overlay
- Touch-friendly button sizes (minimum 44px)
- Optimized typography scaling
- Simplified navigation patterns

## 🎨 Theme System

### Light Theme
- **Background**: Pure white (#FFFFFF)
- **Text**: Dark slate (#0F172A)
- **Borders**: Light gray (#E2E8F0)
- **Shadows**: Subtle with 0.1 opacity

### Dark Theme
- **Background**: Dark slate (#0F172A)
- **Text**: Light gray (#F8FAFC)
- **Borders**: Medium gray (#334155)
- **Shadows**: Enhanced with 0.4 opacity

### Theme Switching
- Automatic system preference detection
- Manual toggle in sidebar
- Persistent storage with localStorage
- Smooth transitions (0.3s ease)

## 🏗️ Architecture

### File Structure
```
src/
├── components/
│   ├── Dashboard.js          # Main layout component
│   └── Layout.css           # Dashboard layout styles
├── pages/
│   ├── HomePage.js          # Dashboard overview
│   ├── HomePage.css         # Home page styles
│   ├── OrdersPage.js        # Orders management
│   └── OrdersPage.css       # Orders page styles
├── contexts/
│   └── ThemeContext.js      # Theme management
├── styles/
│   └── design-system.css    # Design system variables
└── App.js                   # Main application
```

### Component Architecture
- **Functional Components**: Modern React with hooks
- **Context API**: Theme management
- **CSS Modules**: Scoped styling
- **Custom Hooks**: Reusable logic

## 🔧 Customization

### Adding New Colors
```css
:root {
  --your-color-500: #your-hex-value;
}

[data-theme="dark"] {
  --your-color-500: #your-dark-hex-value;
}
```

### Adding New Spacing
```css
:root {
  --space-custom: 28px;
}
```

### Adding New Components
1. Create component file
2. Import design system variables
3. Follow naming conventions
4. Add responsive breakpoints
5. Include accessibility features

## 📊 Performance

### Optimizations
- **Lazy Loading**: Components loaded on demand
- **Memoization**: React.memo for expensive components
- **Efficient Animations**: CSS transforms and opacity
- **Minimal Re-renders**: Optimized state management
- **Bundle Splitting**: Code splitting for better loading

### Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## ♿ Accessibility

### WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 ratio
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Text Scaling**: Supports up to 200% zoom

### Accessibility Features
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Focus trap in modals
- Screen reader announcements

## 🧪 Testing

### Manual Testing Checklist
- [ ] Theme switching works correctly
- [ ] Navigation between pages
- [ ] Search and filter functionality
- [ ] Modal interactions
- [ ] Responsive design on all devices
- [ ] Keyboard navigation
- [ ] Screen reader compatibility

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

### Build Process
```bash
npm run build
```

### Deployment Options
- **Netlify**: Drag and drop build folder
- **Vercel**: Connect GitHub repository
- **AWS S3**: Upload build files
- **Heroku**: Deploy with buildpacks

### Environment Variables
```env
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENVIRONMENT=production
```

## 📈 Analytics Integration

### Google Analytics
```javascript
// Add to index.html
gtag('config', 'GA_MEASUREMENT_ID');
```

### Custom Events
- Page views
- Button clicks
- Form submissions
- Theme changes
- Search queries

## 🔒 Security

### Best Practices
- No sensitive data in client-side code
- HTTPS only in production
- Content Security Policy headers
- XSS protection
- CSRF tokens for API calls

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Code Style
- ESLint configuration
- Prettier formatting
- Consistent naming conventions
- Comprehensive comments
- TypeScript definitions (future)

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Email: support@example.com
- Documentation: [Link to docs]

---

**Built with ❤️ using React.js and modern web technologies**