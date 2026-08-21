# Selector de idioma

Alterna ES/EN. Vive en la navegación pero puede usarse suelto en superficies de producto.

**Grupo:** Navegación  
**Clases:** `tt-lang`

## Ejemplo
```html
<div class="tt-lang" role="group" aria-label="Idioma">
  <button aria-pressed="true">ES</button>
  <button aria-pressed="false">EN</button>
</div>
```

## Regla
El estado activo se comunica con aria-pressed, no solo con color. Nunca banderas: un idioma no es un país.
