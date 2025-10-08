# Astro + React Demo

Un proyecto de demostración que combina **Astro** con **React** para crear aplicaciones web modernas y eficientes. Este proyecto incluye componentes interactivos, testing con Jest, y una estructura optimizada para SEO.

## 🚀 Características

- **Astro 4.0** - Framework web moderno con renderizado estático
- **React 18** - Biblioteca de componentes interactivos
- **Jest** - Framework de testing con React Testing Library
- **Babel** - Transpilación de JavaScript moderno
- **Componentes interactivos** - Counter y TodoList con estado
- **Testing completo** - Tests unitarios para componentes y utilidades
- **SEO optimizado** - Meta tags y estructura semántica

## 📋 Componentes Incluidos

### Counter
Un contador interactivo que permite incrementar y decrementar valores usando React hooks.

### TodoList
Un gestor de tareas completo con:
- Añadir nuevas tareas
- Eliminar tareas existentes
- Interfaz responsive con Tailwind CSS
- Accesibilidad completa (ARIA labels, navegación por teclado)

### Utilidades
- Función `average()` para calcular promedios (con tests incluidos)

## 🛠️ Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/astro-react-demo-github.git
cd astro-react-demo-github
```

### Instalar dependencias
```bash
npm install
```

## 🚀 Uso

### Desarrollo
Inicia el servidor de desarrollo:
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:4321`

### Construcción
Genera la versión de producción:
```bash
npm run build
```

### Vista previa
Visualiza la versión construida:
```bash
npm run preview
```

### Testing
Ejecuta todos los tests:
```bash
npm test
```

## 📁 Estructura del Proyecto

```
astro-react-demo-github/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Counter.jsx     # Contador interactivo
│   │   └── TodoList.jsx    # Gestor de tareas
│   ├── lib/                # Utilidades
│   │   └── math.js         # Funciones matemáticas
│   ├── pages/              # Páginas Astro
│   │   └── index.astro     # Página principal
│   └── env.d.ts           # Tipos de TypeScript
├── __tests__/             # Tests unitarios
│   ├── Counter.test.jsx   # Tests del contador
│   └── math.test.js       # Tests de utilidades
├── astro.config.mjs       # Configuración de Astro
├── jest.config.js         # Configuración de Jest
├── babel.config.js        # Configuración de Babel
└── package.json           # Dependencias y scripts
```

## 🧪 Testing

El proyecto incluye tests completos usando Jest y React Testing Library:

- **Tests de componentes**: Verifican la funcionalidad interactiva
- **Tests de utilidades**: Validan funciones matemáticas
- **Cobertura de código**: Configurada para monitorear la calidad

### Ejecutar tests específicos
```bash
# Tests del contador
npm test Counter.test.jsx

# Tests de utilidades
npm test math.test.js
```

## 🎨 Tecnologías Utilizadas

- **Astro** - Framework web moderno
- **React** - Biblioteca de componentes
- **Jest** - Framework de testing
- **Babel** - Transpilador JavaScript
- **React Testing Library** - Testing de componentes
- **Tailwind CSS** - Framework CSS (en componentes)

## 📝 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye para producción |
| `npm run preview` | Vista previa de la build |
| `npm test` | Ejecuta todos los tests |

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y está bajo la licencia de Leadtech.

## 👥 Autor

**GUILLEM RODRIGUEZ VENTOSA**
- Email: guillem.rodriguez@leadtech.com

---

*Proyecto creado como demostración de integración entre Astro y React para aplicaciones web modernas.*
