# soporte-ti

## Desarrollo de estilos

Los estilos fuente están en `scss/` y se compilan a `css/main.css`, que es el archivo usado por las páginas.

1. Instala las dependencias con `npm install`.
2. Ejecuta `npm run watch:css` para recompilar automáticamente al guardar cambios SCSS.
3. Para una compilación única, ejecuta `npm run build:css`.

## Directorio del equipo de TI

Los proyectos y contactos de la página `equipo.html` se editan en `data/equipo.js`. Actualiza `PROYECTOS` con los nombres de obra y contactos reales, y sustituye también los datos de ejemplo de `SOPORTE_CENTRAL`.

El formulario de `reporte.html` usa esos mismos datos para elegir destinatarios; los correos sin confirmar no se usan y los reportes siempre llevan copia a `SOPORTE_CENTRAL.correo`.
