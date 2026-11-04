# Aviso en ventana modal

Texto legal o largo en un `<dialog>` nativo. Se abre con `showModal()` desde un `tt-linkish` y se cierra con la × o con Esc.

**Grupo:** Contenido  
**Clases:** `tt-modal`, `tt-modal__box`, `tt-modal__h`, `tt-modal__sub`, `tt-modal__upd`, `tt-modal__x`, `tt-linkish`

## Ejemplo
```html
<button type="button" class="tt-linkish" onclick="document.getElementById('priv').showModal()">Cómo tratamos tus datos</button>

<dialog class="tt-modal" id="priv" aria-labelledby="priv-t">
  <div class="tt-modal__box">
    <button class="tt-modal__x" onclick="document.getElementById('priv').close()" aria-label="Cerrar">×</button>
    <h2 class="tt-modal__h" id="priv-t">Cómo tratamos tus datos</h2>
    <p class="tt-modal__upd">Actualizado: agosto 2026</p>
    <h3 class="tt-modal__sub">Qué recolectamos</h3>
    <p>…</p>
  </div>
</dialog>
```

## Regla
Es el único uso de desenfoque del sistema además de la navegación (libro de marca 6.2). El botón de cierre lleva `aria-label`: la × sola no dice nada al lector de pantalla.
