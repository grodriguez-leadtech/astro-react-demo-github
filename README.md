# 🚀 Astro + React Demo

Un proyecto de demostración que combina **Astro** con **React** para crear aplicaciones web modernas y eficientes. Este proyecto incluye componentes interactivos, testing automatizado y está optimizado para trabajar con **Cursor AI**.

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Scripts Disponibles](#-scripts-disponibles)
- [Componentes](#-componentes)
- [Testing](#-testing)
- [Configuración de Astro](#-configuración-de-astro)
- [Desarrollo con Cursor AI](#-desarrollo-con-cursor-ai)
- [Build y Despliegue](#-build-y-despliegue)
- [Contribución](#-contribución)

## 🎯 Descripción del Proyecto

Este proyecto demuestra cómo integrar **Astro** (un framework web moderno) con **React** para crear aplicaciones web rápidas y eficientes. Incluye:

- **Componentes React interactivos**: Counter y TodoList
- **Testing automatizado** con Jest y React Testing Library
- **Configuración optimizada** para desarrollo con Cursor AI
- **Estructura modular** y escalable

## 🛠 Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework web moderno
- **[React](https://reactjs.org/)** - Biblioteca de UI
- **[Jest](https://jestjs.io/)** - Framework de testing
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** - Utilidades de testing para React
- **Node.js** - Runtime de JavaScript

## 📁 Estructura del Proyecto

```
astro-react-demo-github/
├── __tests__/                    # Tests automatizados
│   ├── Counter.test.jsx         # Tests del componente Counter
│   └── math.test.js             # Tests de utilidades matemáticas
├── dist/                        # Build de producción (generado)
├── node_modules/                # Dependencias (generado)
├── src/
│   ├── components/              # Componentes React
│   │   ├── Counter.jsx         # Componente contador interactivo
│   │   └── TodoList.jsx        # Componente lista de tareas
│   ├── lib/                     # Utilidades y helpers
│   │   └── math.js             # Funciones matemáticas
│   ├── pages/                   # Páginas de Astro
│   │   └── index.astro         # Página principal
│   └── env.d.ts                # Tipos de TypeScript
├── astro.config.mjs            # Configuración de Astro
├── package.json                # Dependencias y scripts
└── README.md                   # Este archivo
```

## ⚙️ Instalación y Configuración

### Prerrequisitos

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/astro-react-demo-github.git
   cd astro-react-demo-github
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4321
   ```

## 🚀 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza el build de producción |
| `npm test` | Ejecuta los tests automatizados |

### Ejemplos de Uso

```bash
# Desarrollo
npm run dev

# Testing
npm test

# Build para producción
npm run build

# Previsualizar build
npm run preview
```

## 🧩 Componentes

### Counter.jsx
Componente React que implementa un contador interactivo con botones de incremento y decremento.

**Características:**
- Estado local con `useState`
- Botones de incremento y decremento
- Interfaz en español

### TodoList.jsx
Componente avanzado de gestión de tareas con diseño moderno y accesibilidad.

**Características:**
- Gestión de estado de tareas
- Interfaz responsive con Tailwind CSS
- Accesibilidad completa (ARIA labels, roles)
- Diseño moderno con gradientes y animaciones
- Funcionalidad de teclado (Enter para agregar)

## 🧪 Testing

El proyecto incluye testing automatizado con **Jest** y **React Testing Library**.

### Ejecutar Tests

```bash
npm test
```

### Estructura de Tests

- **`__tests__/Counter.test.jsx`**: Tests del componente Counter
- **`__tests__/math.test.js`**: Tests de utilidades matemáticas

### Ejemplo de Test

```javascript
// Counter.test.jsx
test("increments and decrements the count", () => {
  render(<Counter />);
  
  const incButton = screen.getByText("➕ Incrementar");
  fireEvent.click(incButton);
  
  expect(screen.getByText(/Has hecho clic 1 veces/)).toBeInTheDocument();
});
```

## ⚡ Configuración de Astro

El proyecto está configurado con la integración de React:

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
});
```

### Características de Astro

- **Zero JS por defecto**: Solo carga JavaScript cuando es necesario
- **Islands Architecture**: Componentes React se hidratan selectivamente
- **Build optimizado**: Genera sitios estáticos súper rápidos
- **Hot Module Replacement**: Desarrollo rápido con recarga automática

## 🤖 Desarrollo con Cursor AI

Este proyecto está optimizado para trabajar con **Cursor AI**. Incluye:

### Mejores Prácticas

1. **Comentarios claros** en inglés para mejor comprensión de la IA
2. **Estructura modular** que facilita el análisis del código
3. **Tests automatizados** para validar cambios sugeridos por la IA
4. **Configuración estándar** que la IA puede entender fácilmente

### Prompts Útiles para Cursor

```
# Para agregar nuevos componentes
"Create a new React component for [functionality] following the existing patterns in this project"

# Para mejorar tests
"Add comprehensive tests for the [component] component using React Testing Library"

# Para optimización
"Optimize the [component] component for better performance and accessibility"
```

## 🏗 Build y Despliegue

### Build de Producción

```bash
npm run build
```

Esto genera:
- Archivos estáticos optimizados en `dist/`
- CSS minificado
- JavaScript optimizado
- Assets optimizados

### Previsualización

```bash
npm run preview
```

### Despliegue

El proyecto se puede desplegar en cualquier plataforma que soporte sitios estáticos:

- **Vercel**: `vercel --prod`
- **Netlify**: Arrastra la carpeta `dist/`
- **GitHub Pages**: Configura GitHub Actions
- **AWS S3**: Sube el contenido de `dist/`

## 🤝 Contribución

### Cómo Contribuir

1. **Fork** el repositorio
2. **Crea una rama** para tu feature: `git checkout -b feature/nueva-funcionalidad`
3. **Commit** tus cambios: `git commit -m 'feat: add nueva funcionalidad'`
4. **Push** a la rama: `git push origin feature/nueva-funcionalidad`
5. **Abre un Pull Request**

### Convenciones

- **Commits**: Usa [Conventional Commits](https://www.conventionalcommits.org/)
- **Código**: Sigue las reglas de ESLint y Prettier
- **Tests**: Asegúrate de que todos los tests pasen
- **Documentación**: Actualiza el README si es necesario

### Estructura de Commits

```
feat: ✨ nueva funcionalidad
fix: 🐛 corrección de bug
docs: 📚 actualización de documentación
test: 🧪 agregar o modificar tests
refactor: ♻️ refactorización de código
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

## 🆘 Soporte

Si tienes preguntas o necesitas ayuda:

1. **Revisa la documentación** de [Astro](https://docs.astro.build/) y [React](https://reactjs.org/docs/)
2. **Busca en los issues** existentes
3. **Crea un nuevo issue** con detalles del problema
4. **Contacta al equipo** de desarrollo

---

**¡Disfruta desarrollando con Astro + React + Cursor AI! 🚀**
