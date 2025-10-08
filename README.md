# 🚀 Astro + React Demo

Un proyecto de demostración que combina **Astro** con **React** para crear una aplicación web moderna y eficiente. Este proyecto incluye componentes interactivos como un contador y un gestor de tareas, perfecto para probar las capacidades de desarrollo con Cursor.

## 📋 Características

- ⚡ **Astro** como framework principal para un rendimiento óptimo
- ⚛️ **React** para componentes interactivos
- 🎯 **Componentes incluidos:**
  - Contador interactivo con botones de incremento/decremento
  - Gestor de tareas completo con funcionalidades de añadir/eliminar
- 🧪 **Testing** configurado con Jest y React Testing Library
- 🎨 **Diseño moderno** con estilos CSS y gradientes

## 🛠️ Tecnologías Utilizadas

- [Astro](https://astro.build/) - Framework web moderno
- [React](https://reactjs.org/) - Biblioteca de interfaz de usuario
- [Jest](https://jestjs.io/) - Framework de testing
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Utilidades de testing para React

## 📦 Instalación

### Prerrequisitos

Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

### Pasos de instalación

1. **Clona el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd astro-react-demo-github
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** y visita `http://localhost:4321`

## 🚀 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm test` | Ejecuta los tests |

## 📁 Estructura del Proyecto

```
astro-react-demo-github/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Counter.jsx     # Componente contador
│   │   └── TodoList.jsx    # Componente gestor de tareas
│   ├── lib/                # Utilidades
│   │   └── math.js         # Funciones matemáticas
│   └── pages/              # Páginas de Astro
│       └── index.astro     # Página principal
├── __tests__/              # Tests
│   ├── Counter.test.jsx    # Tests del contador
│   └── math.test.js        # Tests de utilidades
├── astro.config.mjs        # Configuración de Astro
└── package.json            # Dependencias y scripts
```

## 🧪 Testing

El proyecto incluye tests para los componentes principales:

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm test -- --watch
```

### Tests incluidos:
- **Counter.test.jsx**: Tests para el componente contador
- **math.test.js**: Tests para las funciones matemáticas

## 🎯 Funcionalidades

### Contador
- Botones para incrementar y decrementar
- Estado persistente durante la sesión
- Interfaz simple y clara

### Gestor de Tareas
- Añadir nuevas tareas
- Eliminar tareas existentes
- Interfaz moderna con gradientes
- Contador de tareas pendientes
- Diseño responsive

## 🔧 Configuración

### Astro
El proyecto está configurado con la integración de React habilitada en `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
});
```

## 📝 Desarrollo

### Añadir nuevos componentes

1. Crea tu componente React en `src/components/`
2. Importa y usa el componente en `src/pages/index.astro`
3. Añade tests correspondientes en `__tests__/`

### Estructura de un componente

```jsx
import { useState } from "react";

export default function MiComponente() {
  const [estado, setEstado] = useState(initialValue);
  
  return (
    <div>
      {/* Tu JSX aquí */}
    </div>
  );
}
```

## 🚀 Despliegue

### Build para producción

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `dist/`.

### Previsualizar la build

```bash
npm run preview
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

- **Guillem Rodriguez** - *Desarrollo inicial* - [guillem.rodriguez@leadtech.com](mailto:guillem.rodriguez@leadtech.com)

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda, contacta con el equipo de desarrollo.

---

**Desarrollado con ❤️ usando Astro y React**
