# BITÁCORA — Marca / Web

Resumen: Una maqueta por página del sitio, con su bitácora, su matriz de estilos y capturas de escritorio y celular. Son fotos autocontenidas del sitio en la rama `rediseno-web-v3`; la fuente de verdad es el repo `TresTerciosWeb`.

## Buscar acá si
- Ver cómo quedó una página sin levantar el sitio → `NN-nombre/maqueta.html` (doble clic; los enlaces van entre maquetas)
- Saber qué estilo usa cada elemento → `NN-nombre/matriz-de-estilos.md`
- Cambiar el sitio real → el repo `TresTerciosWeb`, siempre en una rama; main publica solo

## Páginas
| Carpeta | Página | Estado |
|---|---|---|
| `01-home` | Home | Rediseñada (nov 2026) |
| `02-servicios` | Servicios | Sin cambios de contenido |
| `03-nowcast-legislativo` | Nowcast Legislativo | Sin cambios de contenido |
| `04-nosotros` | Nosotros | Sin cambios de contenido |
| `05-contacto` | Contacto | Sin cambios de contenido |

## Estado
- Generadas el 2026-11-11 desde `rediseno-web-v3` (commit de la home sobre main con los endpoints reales de Formspree). Pendiente de revisión; no está publicado.
- La maqueta histórica `maquetas/nosotros.html` del repo no se tocó.

## Trampas
- Las maquetas son una foto: si el sitio cambia, hay que volver a generarlas.
- El formulario de las maquetas usa el endpoint real de Formspree; no lo envíes en pruebas.
