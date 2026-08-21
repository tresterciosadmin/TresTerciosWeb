# Mensaje de formulario

Resultado de un envío. Separado del campo porque tiene su propio ciclo de vida.

**Grupo:** Formularios  
**Clases:** `tt-msg`, `tt-msg--ok`, `tt-msg--err`

## Ejemplo
```html
<p class="tt-msg tt-msg--ok">Recibido. Te respondemos a la brevedad.</p>
<p class="tt-msg tt-msg--err">No se pudo enviar el formulario. Escribinos por LinkedIn mientras lo resolvemos.</p>
```

## Regla
El mensaje de éxito se muestra SOLO si el servidor respondió OK. Nunca hardcodeado: un formulario que dice «gracias» sin haber enviado nada es el modo de falla más caro del sistema.
