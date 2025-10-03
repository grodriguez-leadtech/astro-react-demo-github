# 🚀 Astro + React Demo

A modern web application demonstrating the integration of Astro with React components, featuring interactive UI elements and best practices for hybrid static/dynamic content.

## 📋 Features

- **Astro Framework**: Fast, modern static site generation with partial hydration
- **React Integration**: Interactive components with state management
- **Counter Component**: Simple stateful counter with increment/decrement functionality
- **Todo List**: Full-featured task management with add/remove capabilities
- **Modern UI**: Beautiful, responsive design with Tailwind CSS styling
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation
- **Testing**: Jest and React Testing Library setup for component testing

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) v4.0.0
- **UI Library**: [React](https://reactjs.org/) v18.2.0
- **Styling**: Tailwind CSS (utility-first CSS framework)
- **Testing**: Jest v29.0.0 + React Testing Library v14.0.0
- **Build Tool**: Vite (included with Astro)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/astro-react-demo-github.git
   cd astro-react-demo-github
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to see the application running.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm test` | Run Jest test suite |

## 🏗️ Project Structure

```
astro-react-demo-github/
├── src/
│   ├── components/          # React components
│   │   ├── Counter.jsx     # Interactive counter component
│   │   └── TodoList.jsx    # Task management component
│   ├── pages/              # Astro pages
│   │   └── index.astro     # Main page
│   └── lib/                # Utility functions
│       └── math.js         # Math utilities
├── __tests__/              # Test files
│   ├── Counter.test.jsx    # Counter component tests
│   └── math.test.js        # Math utility tests
├── astro.config.mjs        # Astro configuration
└── package.json            # Dependencies and scripts
```

## 🧩 Components

### Counter Component
- Interactive counter with increment/decrement buttons
- Uses React `useState` hook for state management
- Demonstrates basic React component patterns

### TodoList Component
- Full-featured task management system
- Add new tasks with Enter key or button click
- Remove tasks with delete button
- Responsive design with Tailwind CSS
- Accessibility features (ARIA labels, semantic HTML)

## 🎨 Styling

The project uses Tailwind CSS for styling, providing:
- Responsive design patterns
- Modern gradient backgrounds
- Hover and focus states
- Consistent spacing and typography
- Accessibility-friendly color contrasts

## 🧪 Testing

The project includes a comprehensive testing setup:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Test Files
- `__tests__/Counter.test.jsx` - Tests for the Counter component
- `__tests__/math.test.js` - Tests for utility functions

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized static files.

### Deploy to Static Hosting

The built files can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **AWS S3**: Upload the `dist/` folder contents

## 🔧 Configuration

### Astro Configuration (`astro.config.mjs`)

```javascript
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
});
```

This configuration enables React integration with Astro's hybrid rendering approach.

## 📚 Learning Resources

- [Astro Documentation](https://docs.astro.build/)
- [React Documentation](https://reactjs.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Jest Testing Framework](https://jestjs.io/docs/getting-started)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/) - the all-in-one web framework
- Powered by [React](https://reactjs.org/) - the library for building user interfaces
- Styled with [Tailwind CSS](https://tailwindcss.com/) - utility-first CSS framework

---

**Happy coding! 🎉**
