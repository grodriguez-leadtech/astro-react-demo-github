# 🚀 Astro + React Demo

Un proyecto de demostración que combina **Astro** con **React** para crear aplicaciones web modernas y eficientes. Este proyecto incluye componentes interactivos y está configurado para desarrollo con **Cursor AI**.

## 📋 Características

- ⚡ **Astro** como framework principal para renderizado estático
- ⚛️ **React** para componentes interactivos
- 🎨 **Tailwind CSS** para estilos (en componentes React)
- 🧪 **Jest** para testing
- 🔧 **Cursor AI** optimizado para desarrollo

## 🛠️ Tecnologías Utilizadas

- **Astro** ^4.0.0 - Framework web moderno
- **React** ^18.2.0 - Biblioteca de UI
- **@astrojs/react** ^4.4.0 - Integración de React con Astro
- **Jest** ^29.0.0 - Framework de testing
- **@testing-library/react** ^14.0.0 - Utilidades de testing para React

## 📁 Estructura del Proyecto

```
astro-react-demo-github/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Counter.jsx     # Contador interactivo
│   │   └── TodoList.jsx    # Lista de tareas
│   ├── lib/                # Utilidades
│   │   └── math.js         # Funciones matemáticas
│   └── pages/              # Páginas Astro
│       └── index.astro     # Página principal
├── __tests__/              # Tests
│   ├── Counter.test.jsx    # Tests del contador
│   └── math.test.js        # Tests de utilidades
├── astro.config.mjs        # Configuración de Astro
└── package.json            # Dependencias y scripts
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **Git**

### 1. Clonar el Repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd astro-react-demo-github
```

### 2. Instalar Dependencias

```bash
npm install
# o
yarn install
```

### 3. Ejecutar en Modo Desarrollo

```bash
npm run dev
# o
yarn dev
```

El servidor de desarrollo estará disponible en `http://localhost:4321`

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye el proyecto para producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm test` | Ejecuta los tests con Jest |

## 🧩 Componentes Incluidos

### Counter
Un contador interactivo que demuestra el uso básico de React hooks (`useState`).

**Características:**
- Incremento y decremento
- Estado persistente durante la sesión
- Interfaz simple y clara

### TodoList
Una aplicación completa de gestión de tareas con diseño moderno.

**Características:**
- Añadir nuevas tareas
- Eliminar tareas existentes
- Contador de tareas pendientes
- Diseño responsive con Tailwind CSS
- Accesibilidad completa (ARIA labels, navegación por teclado)
- Interfaz intuitiva y moderna

## 🧪 Testing

El proyecto incluye tests para los componentes principales:

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm test -- --watch
```

### Tests Incluidos

- **Counter.test.jsx** - Tests del componente contador
- **math.test.js** - Tests de utilidades matemáticas

## 🏗️ Configuración de Astro

El proyecto está configurado con:

- **Integración de React** habilitada
- **Assets optimizados** con pipeline de Astro
- **Variables de entorno** configuradas para desarrollo y producción
- **Build optimizado** para rendimiento

## 🎨 Estilos y Diseño

- **Astro**: Estilos scoped en archivos `.astro`
- **React**: Tailwind CSS para componentes interactivos
- **Responsive**: Diseño adaptable a diferentes dispositivos
- **Accesibilidad**: Cumple estándares WCAG

## 🔧 Desarrollo con Cursor AI

Este proyecto está optimizado para trabajar con **Cursor AI**:

- Estructura clara y bien documentada
- Componentes modulares y reutilizables
- Tests incluidos para validación
- Configuración estándar de Astro + React

### Mejores Prácticas Implementadas

- Separación clara entre lógica de Astro y React
- Componentes funcionales con hooks
- Props tipadas y validación
- Estilos scoped y organizados
- Tests unitarios para funcionalidad crítica

## 📦 Build y Despliegue

### Build de Producción

```bash
npm run build
```

Los archivos generados se encontrarán en la carpeta `dist/`.

### Previsualización

```bash
npm run preview
```

Esto iniciará un servidor local para previsualizar la build de producción.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y está destinado para uso interno.

## 📞 Soporte

Para cualquier pregunta o problema, contacta con el equipo de desarrollo.

---

**Desarrollado con ❤️ usando Astro + React + Cursor AI**
