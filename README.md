# III Congreso Chileno de Física de Plasmas — sitio web

Teaser estático ("Reserva la fecha") para La Serena 2027. Sin dependencias ni build.

## Estructura
```
index.html              página única (texto en español)
assets/css/style.css    estilos; colores día/noche en :root y [data-theme=dark]
assets/js/content.js    galería, créditos de imágenes y correo de contacto  ← editar aquí
assets/js/i18n.js       traducción opcional al inglés (vacía = sin botón EN)
assets/js/main.js       tema día/noche, galería, idioma
assets/img/             fotos WebP, og.jpg (imagen para compartir), favicon.svg
tools/fetch-images.sh   vuelve a descargar las fotos originales desde Wikimedia
PLAN.md                 fases y preguntas abiertas
```

## Probar localmente
```bash
python3 -m http.server 8000   # abrir http://localhost:8000
```

## Publicar en GitHub Pages
1. Crear el repo y subir el contenido de esta carpeta a `main`.
2. Settings → Pages → Deploy from a branch → `main` / root.
3. Para dominio propio: agregar archivo `CNAME` con `congresoplasmas.org` y configurar DNS.
4. Una vez fijada la URL, cambiar `og:image` en `index.html` a URL absoluta
   (WhatsApp/LinkedIn necesitan la URL completa para mostrar la imagen).

## Agregar inglés
Completar `window.CCHP_I18N.en` en `assets/js/i18n.js` con las claves `data-i18n` del HTML.
El botón EN/ES aparece solo; también funciona `?lang=en`.

## Imágenes
Todas de Wikimedia Commons (CC BY / CC BY-SA). Los créditos se muestran en el pie
(`content.js → credits`). Mantenerlos si se cambian o agregan fotos.
