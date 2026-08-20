# Panel de datos

Contenedor de cifras y visualizaciones dentro del clima oscuro.

**Clases:** `tt-panel`, `tt-panel__label`, `tt-live`

## Ejemplo
```html
<div class="tt-panel">
  <div style="display:flex;justify-content:space-between;margin-bottom:24px">
    <span class="tt-panel__label">Nuestra Base de Datos</span>
    <span class="tt-live"><i></i>actualización continua</span>
  </div>
  <!-- cifras -->
</div>
```

## Regla
Va siempre dentro de un contenedor .tt-dark. El indicador .tt-live solo si el dato realmente se actualiza.
