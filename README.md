# 🚀 Astro + React Demo

A modern web application built with **Astro** and **React** that demonstrates the power of combining static site generation with interactive React components. This project showcases a simple but elegant todo list application with a counter component.

## ✨ Features

- **Static Site Generation** with Astro for optimal performance
- **Interactive React Components** for dynamic user experience
- **Modern UI Design** with Tailwind CSS styling
- **Responsive Layout** that works on all devices
- **Accessibility Features** with proper ARIA labels and semantic HTML
- **Testing Setup** with Jest and React Testing Library

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[React](https://reactjs.org/)** - UI library for interactive components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Jest](https://jestjs.io/)** - JavaScript testing framework
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** - React component testing utilities

## 📦 Project Structure

```
astro-react-demo-github/
├── src/
│   ├── components/          # React components
│   │   ├── Counter.jsx     # Interactive counter component
│   │   └── TodoList.jsx    # Todo list with add/remove functionality
│   ├── pages/              # Astro pages
│   │   └── index.astro     # Main page
│   └── lib/                # Utility functions
│       └── math.js         # Math utilities
├── __tests__/              # Test files
│   ├── Counter.test.jsx    # Counter component tests
│   └── math.test.js        # Math utility tests
├── astro.config.mjs        # Astro configuration
└── package.json            # Project dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/astro-react-demo-github.git
   cd astro-react-demo-github
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to see the application running.

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm test` | Run the test suite |

## 🎯 What You'll See

The application includes two main interactive components:

### 1. Counter Component
- Simple counter with increment/decrement buttons
- Demonstrates basic React state management
- Shows click count in Spanish

### 2. Todo List Component
- Add new tasks by typing and pressing Enter or clicking "Agregar"
- Remove tasks by clicking the delete button
- Beautiful gradient design with Tailwind CSS
- Responsive layout that works on mobile and desktop
- Accessibility features for screen readers

## 🧪 Testing

The project includes a comprehensive test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch
```

Tests cover:
- React component functionality
- Utility function behavior
- User interactions and state changes

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 🌐 Deployment

This project can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Any static hosting service**: Upload the contents of the `dist/` folder

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/) for blazing-fast static sites
- Powered by [React](https://reactjs.org/) for interactive components
- Styled with [Tailwind CSS](https://tailwindcss.com/) for beautiful designs
- Tested with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/)

---

**Happy coding! 🎉**

If you find this project helpful, please give it a ⭐ on GitHub!
