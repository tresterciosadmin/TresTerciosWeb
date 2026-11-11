# Matriz de estilos — Servicios

Medida sobre la maqueta (`maqueta.html`) a 1280 px de ancho, con los estilos reales calculados por el navegador. Cada valor sale de los tokens del libro de marca (`Marca/MarcaTT/Libro-de-Marca.md`, secciones 4, 5, 6 y 8).

| Elemento | Familia · peso | Tamaño / interlineado | Tracking · caja | Color | Fondo | Ejemplo |
|---|---|---|---|---|---|---|
| Enlace de navegación | Inter · 500 | 14px / 22.4px | — | Bordó #7D1F30 | — | Servicios |
| Título de sección (h2) | Source Serif 4 · 600 | 38px / 43.32px | -0.57px | Tinta #191817 | — | Qué hacemos |
| Título de tarjeta (h3) | Source Serif 4 · 600 | 25px / 28.5px | -0.375px | Tinta #191817 | — | Inteligencia legislativa y regulatoria |
| Botón principal | Inter · 600 | 15px / 24px | — | Blanco (solo sobre bordó) | Bordó #7D1F30 | Pedir una reunión |
| Etiqueta | IBM Plex Mono · 500 | 10.5px / 16.8px | 1.47px · uppercase | Blanco (solo sobre bordó) | Bordó #7D1F30 | Oferta insignia |

## Reglas que se cumplen
- Tres familias, ninguna más: Source Serif 4 (títulos), Inter (texto y display en MAYÚSCULAS), IBM Plex Mono (antetítulos, etiquetas y cifras con cifras tabulares).
- Un solo acento: Bordó `#7D1F30` en claro; `#D4677F` en el clima oscuro.
- Papel plano `#F7F3EC`; superficies elevadas `#FDFBF7`; sin blanco puro de fondo.
- Una sola sombra del sistema, más la del botón del hero (8.3).
- Movimiento: 220 ms y curva del sistema; entrada al cargar de 800 ms solo donde dice 8.3; todo se apaga con `prefers-reduced-motion`.
