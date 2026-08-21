# Perfil de equipo

Una persona del equipo: logo del tercio, foto, nombre, rol, formación, trayectoria y su línea propia.

**Grupo:** Contenido  
**Clases:** `tt-perfil`, `tt-perfil__foto`, `tt-perfil__tercio`, `tt-perfil__nombre`, `tt-perfil__rol`, `tt-meta`, `tt-linea`

## Ejemplo
```html
<article class="tt-perfil">
  <img class="tt-logo" src="../../assets/logo-tercio-1.svg" alt="" width="120">
  <div class="tt-perfil__foto" aria-hidden="true"></div>
  <div>
    <p class="tt-perfil__tercio">Análisis político</p>
    <h3 class="tt-perfil__nombre">Nombre Apellido</h3>
    <p class="tt-perfil__rol">Rol en la firma</p>
    <dl class="tt-meta">
      <div><dt>Formación</dt><dd>…</dd></div>
      <div><dt>Trayectoria</dt><dd>…</dd></div>
    </dl>
    <p class="tt-linea">Qué mira esta persona que los demás no.</p>
    <a class="tt-link" href="#" target="_blank" rel="noopener">LinkedIn →</a>
  </div>
</article>
```

## Regla
El marcador de foto va con aria-hidden: es un espacio reservado, no una imagen. Anunciarlo como imagen le miente al lector de pantalla. Los tres perfiles llevan el mismo peso visual: nadie es el jefe.
