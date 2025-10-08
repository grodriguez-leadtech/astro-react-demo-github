# 🚀 Astro + React Demo

Un proyecto de demostración que combina **Astro** con **React** para crear una aplicación web moderna y eficiente. Este proyecto incluye componentes interactivos como un contador y un gestor de tareas, perfecto para probar las capacidades de desarrollo con Cursor.

## 📋 Características

- ⚡ **Astro** como framework principal para un rendimiento óptimo
- ⚛️ **React** para componentes interactivos
- 🎨 **Tailwind CSS** para estilos modernos y responsivos
- 🧪 **Jest** para testing
- 📱 **Diseño responsivo** y accesible
- 🎯 **Componentes funcionales**:
  - Contador interactivo
  - Gestor de tareas con funcionalidades completas

## 🛠️ Tecnologías Utilizadas

- **Astro** ^4.0.0 - Framework web moderno
- **React** ^18.2.0 - Biblioteca de UI
- **Jest** ^29.0.0 - Framework de testing
- **Babel** - Transpilador de JavaScript
- **Tailwind CSS** - Framework de CSS utility-first

## 📦 Instalación

### Prerrequisitos

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**

### Pasos de instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/grodriguez-leadtech/astro-react-demo-github.git
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
| `npm test` | Ejecuta los tests con Jest |

## 📁 Estructura del Proyecto

```
astro-react-demo-github/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Counter.jsx     # Componente contador
│   │   └── TodoList.jsx    # Gestor de tareas
│   ├── lib/                # Utilidades
│   │   └── math.js         # Funciones matemáticas
│   ├── pages/              # Páginas Astro
│   │   └── index.astro     # Página principal
│   └── env.d.ts           # Tipos de entorno
├── __tests__/             # Tests
│   ├── Counter.test.jsx   # Tests del contador
│   └── math.test.js       # Tests de utilidades
├── astro.config.mjs       # Configuración de Astro
└── package.json           # Dependencias y scripts
```

## 🎯 Funcionalidades

### Contador Interactivo
- Incremento y decremento de valores
- Estado persistente durante la sesión
- Interfaz intuitiva con emojis

### Gestor de Tareas
- ✅ Añadir nuevas tareas
- ❌ Eliminar tareas existentes
- 📊 Contador de tareas pendientes
- ⌨️ Soporte para tecla Enter
- 🎨 Diseño moderno con gradientes
- ♿ Accesibilidad completa

## 🧪 Testing

El proyecto incluye tests unitarios para los componentes principales:

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm test -- --watch
```

## 🏗️ Desarrollo

### Configuración de Astro

El proyecto está configurado con la integración de React:

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
});
```

### Añadir Nuevos Componentes

1. Crea tu componente en `src/components/`
2. Importa y usa el componente en `src/pages/index.astro`
3. Añade tests correspondientes en `__tests__/`

## 🚀 Despliegue

### Build de Producción

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `dist/`.

### Previsualización

```bash
npm run preview
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es privado y está destinado para uso interno de Leadtech.

## 👥 Autores

- **Guillem Rodriguez** - *Desarrollo inicial* - [@grodriguez-leadtech](https://github.com/grodriguez-leadtech)

## 📞 Soporte

Para soporte técnico o preguntas sobre el proyecto, contacta con el equipo de desarrollo.

---

**Desarrollado con ❤️ usando Astro + React**