# Tres Tercios — Sistema de diseño

Sistema de diseño de **Tres Tercios**, consultora de asuntos públicos. Pensado para que cualquiera —persona o modelo— construya piezas nuevas que se vean parte de la marca sin tener que adivinar.

**Sitio de referencia:** https://tresterciosadmin.github.io/TresTerciosWeb/

---

## Estructura

```
design-system-spec.json          manifiesto que lee el importador (raíz del repo)
design-system/
├─ tokens/
│  ├─ design-tokens.json         tokens en formato Design Tokens (DTCG)
│  └─ tokens.css                 los mismos tokens como custom properties
├─ components/
│  ├─ manifest.json              índice de componentes
│  ├─ components.css             la biblioteca completa
│  └─ <componente>/              example.html + README.md por componente
├─ assets/                       logotipo en SVG y sus variantes
├─ preview.html                  todos los componentes en una página
└─ README.md
```

## Cómo se usa

```html
<link rel="stylesheet" href="design-system/tokens/tokens.css">
<link rel="stylesheet" href="design-system/components/components.css">
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## Los principios, en orden de importancia

**1. Un sistema, no decisiones sueltas.** Ningún componente inventa un color, un espaciado o una sombra. Si algo hace falta y no está en los tokens, el problema es el componente, no los tokens.

**2. Dos climas, un solo sistema.** El clima claro es institucional: fondo papel, bordó como único acento, serif en los títulos. El clima oscuro se usa exclusivamente para la sección de producto (Nowcast) y comparte las mismas familias tipográficas y la misma escala. Lo que cambia es la superficie, no el sistema. La transición entre ambos es siempre un par de degradés —entrada y salida— sin ningún elemento gráfico encima.

**3. El papel no cambia.** Todas las secciones claras usan `--bg`. La profundidad la dan las superficies elevadas y el halo del hero, nunca un cambio de fondo entre secciones. `--bg-2` está reservado a la zona de cierre. Dos secciones contiguas del mismo tono se separan con una línea de 1 px, no con otro color.

**4. Jerarquía por tamaño, peso y espacio.** Si todo pesa lo mismo, nada importa. Un solo botón primario por pantalla; el resto va como enlace.

**5. Las cifras son un componente.** Todo número va en IBM Plex Mono con cifras tabulares. Es lo que sostiene la promesa de rigor de la marca: si los números bailan al actualizarse, el mensaje se cae.

**6. Estados completos.** Todo elemento interactivo necesita hover, foco, activo y deshabilitado. Toda vista de datos necesita carga, vacío y error. Un componente sin sus estados está a medio hacer.

---

## Reglas de marca que el sistema hace cumplir

| Regla | Por qué |
|---|---|
| El bordó es acento, nunca fondo de bloques grandes | Proporción 60% papel / 30% tinta y grises / 10% bordó |
| Un solo acento de color por pieza | Si todo destaca, no destaca nada |
| Nada de emojis como íconos | Rompen el trazo único y envejecen mal |
| Nada de degradés violeta-celeste | Es el aspecto genérico de "IA" que la marca evita a propósito |
| No se toca la geometría del logo | Tres tercios de 46,67°, separaciones de 10°, apertura total 160° |
| Tamaño mínimo del logo: 28 px | Por debajo, las separaciones se cierran y se lee como una mancha |
| Área de resguardo: ½ del alto del logo | En los cuatro lados, libre de texto y de bordes |

## Voz y contenido

**Castellano rioplatense, voseo.** *Tu empresa, contanos, necesitás, podés darte de baja.* Nunca trato formal ni español neutro. La primera persona es plural y sobria: *leemos la política argentina, te avisamos*.

**Registro comercial, no técnico.** Se dice *Base de Datos, votos analizados, monitoreo continuo, alerta temprana, proyecto*. No se dice *base canónica, votos nominales, embudo, pipeline* ni *expediente* como término técnico. Por eso el componente de los pasos del método se llama `recorrido` y no `pipeline`.

**Frases cortas con un dato adentro.** El patrón es promesa + prueba: *"Un sistema que estima la probabilidad de que un proyecto se convierta en ley. No es una promesa: la base ya existe."* O beneficio + momento: *"qué proyectos avanzan, qué normas cambian y cómo te afectan — antes de que sea noticia."*

**Casing.** Los títulos display se escriben en oración normal y las mayúsculas las pone el CSS. Los títulos de sección van en capitalización de oración: *"Una oferta con centro"*, no *"Una Oferta Con Centro"*. Las pastillas del método van en minúscula.

**Sin emojis, sin signos de exclamación, sin superlativos vacíos.** La autoridad se transmite con espacio, no con volumen. El CTA dice *Suscribirme*, no *"¡Suscribite ahora!"*.

**Honestidad sobre el estado del producto.** Nowcast se presenta como *"en construcción"* y el medidor lleva *"esquema ilustrativo"*. El sistema no muestra cifras que no puede sostener.

**Bilingüe en la misma pasada.** Todo texto existe en ES y EN, clave por clave, en un único diccionario. El inglés es igual de sobrio, no una traducción literal: *"Otra forma de ver el Congreso" → "A new way to see Congress"*.

## Iconografía

**El sistema casi no tiene íconos, y es una decisión.** El inventario completo es: el logotipo y sus variantes, dos flechas de carrusel (trazo de 2 px, extremos redondeados), la flecha `→` y la `×` como caracteres tipográficos, y el punto de 7 px del indicador en vivo. Nada más.

No hay familia de íconos, ni fuente de íconos, ni sprite. **Si una pieza nueva necesita un ícono que no está en esta lista, la respuesta por defecto es no usar ícono:** una etiqueta en monoespaciada, una cifra o espacio en blanco resuelven casi siempre. Si es imprescindible, se dibuja con trazo de 2 px y extremos redondeados para que combine con las flechas existentes, y se anota acá. No se mezclan familias ni se pega un set entero.

---

## Mantenimiento

**La fuente de verdad de los tokens es el bloque `:root` de `index.html`.** `tokens.css` y `design-tokens.json` se generan a partir de ahí. Si un token cambia, se cambia primero en el sitio y después se regeneran estos dos archivos; nunca al revés, para que el sitio publicado y el sistema no puedan divergir.

Al agregar un componente: crear su carpeta con `example.html` y `README.md`, sumar sus clases a `components.css` y registrarlo en `components/manifest.json`.

**Versión 1.0.0** · agosto 2026
