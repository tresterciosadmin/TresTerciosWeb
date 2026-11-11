# BITÁCORA — Web / 03-nowcast-legislativo

Resumen: Página del producto en clima oscuro, sin cambios de contenido en este rediseño.

## Buscar acá si
- Ver cómo quedó la página → `maqueta.html` (autocontenida; se abre con doble clic) y las capturas `captura-escritorio.png` / `captura-celular.png`
- Saber qué estilo usa cada elemento → `matriz-de-estilos.md`
- Cambiar la página real → el sitio, en el repo `TresTerciosWeb` (`nowcast-legislativo.html`)

## Qué hay
- Base de datos, método y medidor con la nota «esquema ilustrativo».

## Estado
- Generada el 2026-11-11 desde la rama `rediseno-web-v3` del sitio. Pendiente de revisión del cliente; no está publicada en main.
- La maqueta es una foto: si el sitio cambia, hay que volver a generarla.

## Trampas
- Las cifras (1.016.632 votos, 6.231 votaciones, 2001–2026) vienen del Copy v1.0: verificar vigencia antes de publicar (decisión 9, abierta).
- Los enlaces entre páginas apuntan a las otras maquetas (`../NN-nombre/maqueta.html`); el formulario de la maqueta usa el endpoint real de Formspree: no lo envíes en pruebas.
