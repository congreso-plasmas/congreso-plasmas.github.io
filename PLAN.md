# III Congreso Chileno de Física de Plasmas — plan del sitio web

La Serena · fines de octubre o noviembre 2027 · anuncio en el cierre de SOCHIFI 2026 (jueves 26 nov 2026)

## Fase 0 — Teaser "Reserva la fecha" (ahora, GitHub Pages)
Sitio estático de una página, sin build: HTML + CSS + JS simple.

- [x] Portada con foto a sangre: Faro Monumental (modo día, por defecto) / sprites sobre La Silla (modo noche)
- [x] Toggle día/noche (recuerda la elección; día por defecto, no sigue al sistema)
- [x] Secciones: el congreso, áreas temáticas (base 2025), fechas clave, galería de La Serena, ediciones anteriores, organización/contacto
- [x] Imágenes de Wikimedia Commons optimizadas a WebP (~2.3 MB en total), con créditos y licencias en el pie
- [x] Imagen para compartir (og.jpg, 1200×630) para WhatsApp/correo/redes; favicon
- [x] Español como fuente de verdad en el HTML; claves `data-i18n` + `assets/js/i18n.js` permiten agregar inglés sin tocar el diseño
- [ ] Definir URL pública (GitHub Pages o congresoplasmas.org) → generar QR para la diapositiva de cierre de SOCHIFI
- [ ] Correo de contacto (`contactEmail` en `assets/js/content.js`)
- [ ] Logo oficial (el actual es un marcador provisorio)
- [ ] Formulario de interés / lista de correo (Google Forms o similar, enlazado)

## Fase 1 — Sitio informativo (cuando haya datos)
- Sede y mapa; fechas exactas + archivo .ics "Agregar al calendario" y cuenta regresiva
- Comité organizador y científico (fotos + afiliaciones), charlas invitadas
- Valores de inscripción, becas para estudiantes, alojamiento y cómo llegar
- Patrocinio / auspicio (logos)
- Instrucciones para presentaciones (póster, charlas) — reutilizar las de 2025
- Probablemente pasar a varias páginas o a un generador estático (Astro/Eleventy/Vite) si crece

## Fase 2 — Servidor propio (cuando se necesite base de datos)
- Envío y revisión de resúmenes, buscador de resúmenes y libro de resúmenes (como en 2025)
- Inscripción y pagos, certificados de asistencia/presentación en PDF
- Opciones: servidor institucional; Indico (estándar en congresos de física, resuelve resúmenes/inscripción/programa) o app propia (p. ej. como SOCHIFI 2026: Vite + login con Google)
- Migrar dominio congresoplasmas.org (lo transfieren desde la edición 2025) y conservar el sitio 2025 como archivo en /2025

## Referencias revisadas
- 2023 Concepción (UdeC): plasmaschile2023.udec.cl — programa en línea
- 2025 Valparaíso (USM): congresoplasmas.org — WordPress, una página: galería, buscador de resúmenes, guías de presentación, mapa, patrocinio, comité, FAQ
- SOCHIFI 2026: sochifi2026.cl — SPA Vite, Inter, modo oscuro, toggle ES/EN, carrusel de fotos, páginas de programa/resúmenes/registro/ponentes
- Congresos internacionales (Sherwood 2026, ICOPS 2026, EPS 2026): "Save the date" con fecha + ciudad + foto del lugar como primera pantalla

## Preguntas abiertas
1. ¿URL definitiva para el anuncio del jueves? (GitHub Pages `usuario.github.io/...` o apuntar ya congresoplasmas.org)
2. ¿Correo de contacto oficial?
3. ¿Se mantiene la lista de 7 áreas temáticas de 2025?
4. ¿Universidad o institución anfitriona en La Serena (ULS, UCN, ...) para mencionarla y usar sus logos?
5. ¿Logo propio para 2027, o adaptar el de 2025?
