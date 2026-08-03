# juanparmer.github.io

Sitio personal / portfolio de **Juan Pablo Arcos Merchan** — Consultor y Desarrollador Odoo | Experto en Python e Inteligencia Artificial.

Publicado con GitHub Pages: <https://juanparmer.github.io/>

## Características

- **Multilingüe (ES / EN)** con selector de idioma en el header (la elección se guarda en `localStorage`).
- Una sola página (portfolio/resume): Inicio, Sobre mí, Servicios, Stack, Experiencia, Formación y Contacto.
- Sin dependencias ni build: HTML, CSS y JS estáticos.

## Estructura

```
index.html      Estructura de la página (contenido dinámico vía data-key)
css/styles.css  Estilos
js/main.js      Diccionario de traducciones ES/EN + renderizado
assets/         Foto de perfil
```

## Previsualización local

```bash
python -m http.server 8000
```

Abrir <http://localhost:8000>

## Personalización

- **Email / LinkedIn:** edita los enlaces en `index.html` (sección contacto).
- **Contenido y traducciones:** edita el diccionario en `js/main.js` (claves `es` y `en`).
- **Foto de perfil:** reemplaza `assets/profile.jpg`.

## Publicación

El sitio se sirve desde la rama `main` en GitHub Pages (Settings → Pages → Source: Deploy from a branch → main). Cada `push` publica los cambios automáticamente.
