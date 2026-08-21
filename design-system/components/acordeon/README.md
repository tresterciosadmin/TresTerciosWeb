# Acordeón de servicios

Un servicio con profundidad propia: descripción, qué ofrece y qué se entrega.

**Grupo:** Contenido  
**Clases:** `tt-acc`, `tt-acc__item`, `tt-acc__head`, `tt-acc__n`, `tt-acc__t`, `tt-acc__ind`, `tt-acc__panel`, `tt-acc__body`, `tt-acc__desc`, `tt-acc__cols`, `tt-acc__sub`, `tt-acc__list`, `tt-acc__ent`

## Ejemplo
```html
<div class="tt-acc" data-acc>
  <div class="tt-acc__item">
    <button class="tt-acc__head" aria-expanded="true" aria-controls="p1">
      <span class="tt-acc__n">01</span>
      <span class="tt-acc__t">Nombre del servicio</span>
      <span class="tt-acc__ind" aria-hidden="true"></span>
    </button>
    <div class="tt-acc__panel" id="p1" role="region" data-open="1">
      <div class="tt-acc__body">…</div>
    </div>
  </div>
</div>
```

## Regla
Un servicio sin entregables es un enunciado, no una oferta: las dos columnas —qué ofrecemos y cómo lo entregamos— son obligatorias. Varios paneles pueden estar abiertos a la vez: comparar dos servicios es un caso de uso real. El signo se dibuja con dos filetes, no con un ícono.
