# Campo de formulario

Etiqueta visible más campo. Nunca placeholder como etiqueta.

**Clases:** `tt-label`, `tt-input`, `tt-msg`

## Ejemplo
```html
<label class="tt-label" for="email">Email</label>
<input class="tt-input" id="email" type="email" required autocomplete="email">
<p class="tt-msg tt-msg--ok">Recibido. Te respondemos a la brevedad.</p>
```

## Regla
El mensaje de éxito solo se muestra si el servidor confirmó. Regla del sistema, no del componente.
