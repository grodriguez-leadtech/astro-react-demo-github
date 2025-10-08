# 🚀 Astro + React Demo

Un proyecto de demostración que combina **Astro** con **React** para crear aplicaciones web modernas y eficientes. Este proyecto incluye componentes interactivos, testing con Jest, y una configuración optimizada para desarrollo.

## 📋 Características

- ⚡ **Astro** como framework principal para renderizado estático
- ⚛️ **React** para componentes interactivos
- 🧪 **Jest** para testing unitario
- 🎨 **Tailwind CSS** para estilos (en componentes React)
- 📱 **Responsive Design** con componentes accesibles
- 🔧 **Babel** configurado para transpilación

## 🛠️ Tecnologías Utilizadas

- [Astro](https://astro.build/) - Framework web moderno
- [React](https://reactjs.org/) - Biblioteca de UI
- [Jest](https://jestjs.io/) - Framework de testing
- [Babel](https://babeljs.io/) - Transpilador de JavaScript
- [Testing Library](https://testing-library.com/) - Utilidades para testing

## 📦 Componentes Incluidos

### 1. Counter Component
Un contador interactivo que permite incrementar y decrementar valores.

**Características:**
- Estado local con `useState`
- Botones de incremento y decremento
- Interfaz en español

### 2. TodoList Component
Un gestor de tareas completo con funcionalidades avanzadas.

**Características:**
- Añadir nuevas tareas
- Eliminar tareas existentes
- Interfaz accesible con ARIA labels
- Diseño responsive con Tailwind CSS
- Soporte para tecla Enter
- Contador de tareas pendientes

## 🚀 Instalación y Configuración

### Prerrequisitos

Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### 1. Clonar el Repositorio

```bash
git clone <repository-url>
cd astro-react-demo-github
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Ejecutar en Modo Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:4321`

### 4. Construir para Producción

```bash
npm run build
```

### 5. Previsualizar Build de Producción

```bash
npm run preview
```

## 🧪 Testing

El proyecto incluye una configuración completa de testing con Jest y Testing Library.

### Ejecutar Tests

```bash
npm test
```

### Tests Incluidos

- **Counter.test.jsx**: Tests para el componente Counter
- **math.test.js**: Tests para utilidades matemáticas

### Configuración de Testing

- **Jest**: Framework de testing principal
- **jsdom**: Entorno de testing para DOM
- **Testing Library**: Utilidades para testing de componentes React
- **Babel**: Transpilación de código para testing

## 📁 Estructura del Proyecto

```
astro-react-demo-github/
├── __tests__/                 # Tests unitarios
│   ├── Counter.test.jsx
│   └── math.test.js
├── src/
│   ├── components/            # Componentes React
│   │   ├── Counter.jsx
│   │   └── TodoList.jsx
│   ├── lib/                   # Utilidades
│   │   └── math.js
│   ├── pages/                 # Páginas Astro
│   │   └── index.astro
│   └── env.d.ts              # Tipos de TypeScript
├── astro.config.mjs          # Configuración de Astro
├── babel.config.js           # Configuración de Babel
├── jest.config.js            # Configuración de Jest
├── jest.setup.js             # Setup de Jest
└── package.json              # Dependencias y scripts
```

## 🎯 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza el build de producción |
| `npm test` | Ejecuta los tests unitarios |

## 🔧 Configuración

### Astro
- Integración con React habilitada
- Configuración optimizada para desarrollo

### Babel
- Preset para React
- Preset para entorno moderno
- Configuración para Jest

### Jest
- Entorno jsdom para testing de componentes
- Mapeo de módulos CSS
- Setup personalizado con Testing Library

## 🌟 Características de Desarrollo

- **Hot Reload**: Recarga automática durante el desarrollo
- **TypeScript Support**: Tipos incluidos para Astro
- **ESLint Ready**: Preparado para linting (configuración opcional)
- **Git Hooks**: Preparado para pre-commit hooks (configuración opcional)

## 📝 Uso de Componentes

### Counter Component

```jsx
import Counter from "../components/Counter.jsx";

// En tu página Astro
<Counter />
```

### TodoList Component

```jsx
import TodoList from "../components/TodoList.jsx";

// En tu página Astro
<TodoList />
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y está destinado para uso interno.

## 👥 Autores

- **Guillem Rodriguez** - *Desarrollo inicial* - [@guillemrodriguez](https://github.com/guillemrodriguez)

## 🆘 Soporte

Si tienes alguna pregunta o necesitas ayuda, por favor:

1. Revisa la documentación
2. Busca en los issues existentes
3. Crea un nuevo issue si es necesario

---

**¡Disfruta desarrollando con Astro y React! 🚀**
