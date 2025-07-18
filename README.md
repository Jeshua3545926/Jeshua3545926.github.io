# CodeTranslate Pro - Landing Page

Landing page moderna y responsiva para CodeTranslate Pro, la extensión de traducción más avanzada para VS Code.

## 🚀 Despliegue en Vercel

### Opción 1: Despliegue Automático (Recomendado)

1. **Conecta tu repositorio a Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "New Project"
   - Importa tu repositorio de GitHub/GitLab/Bitbucket
   - Vercel detectará automáticamente la configuración

2. **Configuración automática:**
   - Vercel usará el archivo `vercel.json` para la configuración
   - El build se ejecutará automáticamente
   - Tu sitio estará disponible en una URL de Vercel

### Opción 2: Despliegue Manual con Vercel CLI

1. **Instala Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Inicia sesión en Vercel:**
   ```bash
   vercel login
   ```

3. **Despliega el proyecto:**
   ```bash
   # Para preview/staging
   vercel
   
   # Para producción
   vercel --prod
   ```

### Opción 3: Build Local y Subida Manual

1. **Instala dependencias:**
   ```bash
   npm install
   ```

2. **Ejecuta el build:**
   ```bash
   npm run build
   ```

3. **Sube la carpeta `public` a Vercel:**
   ```bash
   vercel --prod
   ```

## 📁 Estructura del Proyecto

```
├── public/           # Archivos estáticos servidos por Vercel
│   ├── index.html   # Página principal
│   ├── web.css      # Estilos
│   └── web.js       # JavaScript
├── src/             # Código fuente
│   ├── web.html     # HTML fuente
│   ├── web.css      # CSS fuente
│   ├── web.js       # JavaScript fuente
│   └── web.ts       # TypeScript fuente
├── vercel.json      # Configuración de Vercel
├── package.json     # Dependencias y scripts
└── tsconfig.json    # Configuración TypeScript
```

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo local con Vercel
- `npm run build` - Compila TypeScript y copia archivos a public/
- `npm run compile` - Solo compila TypeScript
- `npm run watch` - Compila TypeScript en modo watch
- `npm run preview` - Preview del sitio en Vercel
- `npm run deploy` - Despliega a producción en Vercel

## ⚙️ Configuración de Vercel

El archivo `vercel.json` está configurado para:

- Servir archivos estáticos desde `src/`
- Redirigir todas las rutas a `index.html` (SPA)
- Aplicar headers de seguridad
- Optimizar el rendimiento

## 🎨 Características

- **Diseño Responsivo:** Funciona perfectamente en desktop, tablet y móvil
- **Animaciones Suaves:** Transiciones y efectos visuales modernos
- **Optimizado para SEO:** Meta tags y estructura semántica
- **Performance:** Carga rápida y optimizada
- **Interactivo:** Modales, navegación suave y efectos hover

## 🔧 Personalización

Para personalizar el contenido:

1. Edita `src/web.html` para cambiar el contenido
2. Modifica `src/web.css` para ajustar estilos
3. Actualiza `src/web.js` o `src/web.ts` para funcionalidad
4. Ejecuta `npm run build` para aplicar cambios

## 📱 Responsive Design

La landing page está optimizada para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🌟 Funcionalidades Incluidas

- Navegación fija con efecto scroll
- Hero section con animaciones
- Grid de características
- Sección de demo interactiva
- Planes de precios
- Footer completo
- Menú móvil hamburguesa
- Modales interactivos
- Easter eggs (Konami code)

## 🚀 URL de Producción

Una vez desplegado, tu sitio estará disponible en:
`https://tu-proyecto.vercel.app`

## 📞 Soporte

Si tienes problemas con el despliegue:
1. Revisa los logs en el dashboard de Vercel
2. Verifica que todos los archivos estén en `public/`
3. Asegúrate de que `vercel.json` esté configurado correctamente