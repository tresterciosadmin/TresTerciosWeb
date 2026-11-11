# Matriz de estilos — Nowcast Legislativo

Medida sobre la maqueta (`maqueta.html`) a 1280 px de ancho, con los estilos reales calculados por el navegador. Cada valor sale de los tokens del libro de marca (`Marca/MarcaTT/Libro-de-Marca.md`, secciones 4, 5, 6 y 8).

| Elemento | Familia · peso | Tamaño / interlineado | Tracking · caja | Color | Fondo | Ejemplo |
|---|---|---|---|---|---|---|
| Enlace de navegación | Inter · 500 | 14px / 22.4px | — | Texto tenue oscuro #94A1B5 | — | Servicios |
| Display (h1) | Inter · 700 | 45px / 51.3px | -0.675px · uppercase | Texto claro #EDF1F7 | — | Nowcast Legislativo |
| Título de sección (h2) | Source Serif 4 · 600 | 38px / 43.32px | -0.57px | Texto claro #EDF1F7 | — | Cuando te enterás, ya se votó |
| Título de tarjeta (h3) | Source Serif 4 · 600 | 18px / 20.52px | -0.27px | Texto claro #EDF1F7 | — | Ver qué se mueve hoy |
| Texto de tarjeta | Inter · 400 | 14.5px / 23.2px | — | Texto tenue oscuro #94A1B5 | — | El estado de los proyectos que tocan t |

## Reglas que se cumplen
- Tres familias, ninguna más: Source Serif 4 (títulos), Inter (texto y display en MAYÚSCULAS), IBM Plex Mono (antetítulos, etiquetas y cifras con cifras tabulares).
- Un solo acento: Bordó `#7D1F30` en claro; `#D4677F` en el clima oscuro.
- Papel plano `#F7F3EC`; superficies elevadas `#FDFBF7`; sin blanco puro de fondo.
- Una sola sombra del sistema, más la del botón del hero (8.3).
- Movimiento: 220 ms y curva del sistema; entrada al cargar de 800 ms solo donde dice 8.3; todo se apaga con `prefers-reduced-motion`.
