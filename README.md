# Gateaux · Repostería casera

Sitio web de repostería hecho con **React Router 8** (sucesor de Remix), **Vite** y **Motion** (Framer Motion) para las animaciones. Se despliega en **Netlify** con Node 22.

## Funcionalidades

- Inicio con hero animado, beneficios, productos destacados, curso y blog
- Tienda con detalle de producto, selector de cantidad y productos relacionados
- Carrito persistente (localStorage) que envía el pedido por WhatsApp
- Blog con entradas
- Página de contacto con formulario (Netlify Forms) y mapa
- Menú hamburguesa en móvil, botón flotante de WhatsApp y páginas 404 propias

## Requisitos

- Node.js 22 o superior (hay un `.nvmrc` con la versión)

## Desarrollo

```sh
npm install
npm run dev
```

Abre http://localhost:5173. En local, el formulario de contacto simula el envío.

## Personalizar contenido

| Qué | Dónde |
| --- | --- |
| WhatsApp, dirección, correo, teléfono, horario, mapa y redes | `app/config.js` |
| Productos | `app/data/pasteles.js` |
| Entradas del blog | `app/data/blogs.js` |
| Curso | `app/data/curso.js` |

> Cambia `whatsapp` en `app/config.js` por el número real (formato `57300...`, sin `+`), o los pedidos llegarán a un número de ejemplo.

Los datos se leen en `app/models/pasteles.server.js`. Si en algún momento quieres volver a usar una API (Strapi u otra), solo cambia esas funciones.

## Producción local

```sh
npm run build
npm start
```

## Desplegar en Netlify

El proyecto ya trae `netlify.toml` (build `npm run build`, publica `build/client`, `NODE_VERSION = 22`) y el adaptador `@netlify/vite-plugin-react-router`, que genera la función de servidor.

1. Sube el repositorio a GitHub.
2. En Netlify: **Add new site → Import an existing project** y elige el repositorio. La configuración se toma del `netlify.toml`.
3. Para recibir los mensajes de contacto: **Site configuration → Forms → Enable form detection** y vuelve a desplegar. Los envíos aparecen en la pestaña **Forms**.

Si un sitio ya existente tiene fijada una versión de Node en **Site configuration → Environment variables**, bórrala o ponla en `22`.
