# Logotipo

Envoltorio del abanico. Hace cumplir el mínimo de 32 px (versión reducida).

**Grupo:** Marca  
**Clases:** `tt-logo`

## Ejemplo
```html
<img class="tt-logo" src="../../assets/logo.svg" alt="Tres Tercios" width="120">
<img class="tt-logo" src="../../assets/logo-negativo.svg" alt="Tres Tercios" width="120">
<!-- de 32 a 72 px de ancho: versión reducida -->
<img class="tt-logo" src="../../assets/logo-reducido.svg" alt="Tres Tercios" width="38">
```

## Regla
Nunca pegar el <svg> inline en una pieza nueva: se usa el asset. Resguardo = ½ del alto en los cuatro lados.

Versiones (libro de marca, sección 3.3): **principal** (`logo.svg`, `logo-negativo.svg`) desde 72 px de ancho; **reducida** (`logo-reducido.svg`, `logo-reducido-negativo.svg`) de 32 a 72 px, con el trazo y los canales reforzados; favicon de 16 a 64 px. En la navegación (38 px) y en la tarjeta insignia chica (70 px) va la reducida. Por debajo de 32 px no va logo.
