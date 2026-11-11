# BITÁCORA — Web / 05-contacto

Resumen: Página de contacto, sin cambios de contenido en este rediseño.

## Buscar acá si
- Ver cómo quedó la página → `maqueta.html` (autocontenida; se abre con doble clic) y las capturas `captura-escritorio.png` / `captura-celular.png`
- Saber qué estilo usa cada elemento → `matriz-de-estilos.md`
- Cambiar la página real → el sitio, en el repo `TresTerciosWeb` (`contacto.html`)

## Qué hay
- Formulario con Formspree y correo directo.

## Estado
- Generada el 2026-11-11 desde la rama `rediseno-web-v3` del sitio. Pendiente de revisión del cliente; no está publicada en main.
- La maqueta es una foto: si el sitio cambia, hay que volver a generarla.

## Trampas
- El envío solo muestra «gracias» si el servidor responde OK.
- Los enlaces entre páginas apuntan a las otras maquetas (`../NN-nombre/maqueta.html`); el formulario de la maqueta usa el endpoint real de Formspree: no lo envíes en pruebas.
