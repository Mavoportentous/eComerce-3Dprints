# FPV 3D LAB - Landing Page

Una landing page moderna y responsiva para una tienda de accesorios de drones impresos en 3D.

## 📋 Características

- ✅ Diseño completamente responsivo (mobile-first)
- ✅ Componentes React reutilizables
- ✅ Navegación intuitiva
- ✅ Catálogo de productos
- ✅ Carrito de compras (contador)
- ✅ Formulario de newsletter
- ✅ Footer con redes sociales
- ✅ Animaciones y transiciones suaves
- ✅ Accesibilidad mejorada

## 🚀 Tecnologías Utilizadas

- **React 18** - Librería de UI
- **Vite** - Build tool moderno
- **CSS3** - Estilos responsivos
- **Lucide React** - Iconos SVG

## 📁 Estructura del Proyecto

```
eComerce-3Dprints/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── DroneCategories.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── Features.jsx
│   │   ├── Newsletter.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

## 🛠️ Instalación y Configuración

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:3000`

### 3. Compilar para producción

```bash
npm run build
```

### 4. Previsualizar la compilación

```bash
npm run preview
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🎨 Paleta de Colores

- **Primario**: `#2563eb` (Azul)
- **Secundario**: `#10b981` (Verde)
- **Oscuro**: `#1f2937` (Gris oscuro)
- **Claro**: `#f9fafb` (Gris claro)

## 🧩 Componentes

### Header
- Barra de navegación con logo
- Menú responsivo para móvil
- Iconos de búsqueda, usuario y carrito
- Contador de carrito dinámico

### Hero
- Sección principal con headline impactante
- Botones de acción
- Características destacadas con iconos
- Imagen del producto (emoji)

### DroneCategories
- Grid de categorías por modelo de dron
- Tarjetas interactivas con hover effects

### FeaturedProducts
- Grid de productos destacados
- Información de compatibilidad
- Botón para agregar al carrito
- Precios visibles

### Features
- 4 características principales de la empresa
- Diseño de números grandes
- Beneficios destacados

### Newsletter
- Formulario de suscripción
- Integración simple de email
- Diseño atractivo

### Footer
- Enlaces múltiples
- Redes sociales
- Información de la empresa
- Métodos de pago

## 📝 Personalización

### Agregar Productos
Edita el archivo `src/components/FeaturedProducts.jsx` y añade más objetos al array `products`.

### Cambiar Colores
Modifica las variables CSS en `src/styles/index.css` (`:root` section).

### Agregar Nuevas Secciones
1. Crea un nuevo componente en `src/components/`
2. Importalo en `App.jsx`
3. Agregalo donde corresponda en el JSX

## 🔄 Estado y Props

- `cartCount`: Estado del carrito en App.jsx
- `onAddToCart`: Función para actualizar el carrito
- Componentes son mostly presentacionales (dumb components)

## 🐛 Troubleshooting

### Puerto 3000 en uso
Cambiar puerto en `vite.config.js`

### Estilos no se aplican
Verificar que `index.css` está importado en `main.jsx`

### Componentes no se renderizan
Revisar que todos los componentes están correctamente importados y exportados

## 🚀 Próximas Mejoras

- [ ] Integración con backend/API
- [ ] Sistema de filtrado de productos
- [ ] Carrito persistente (localStorage)
- [ ] Página de detalles del producto
- [ ] Sistema de pago
- [ ] Autenticación de usuarios
- [ ] Búsqueda de productos
- [ ] Reseñas y ratings

## 📄 Licencia

Este proyecto es de demostración. Siéntete libre de modificarlo según tus necesidades.

## 👨‍💻 Autor

Creado con ❤️ para FPV 3D LAB
