# Oferta insignia

El servicio que vende, solo y con el abanico. Título, descripción y alcance, siempre visible.

**Grupo:** Contenido  
**Clases:** `tt-insignia`, `tt-insignia__tag`, `tt-insignia__h`, `tt-insignia__p`

## Ejemplo
```html
<div class="tt-insignia">
  <img class="tt-logo" src="../../assets/logo.svg" alt="" width="150">
  <div>
    <span class="tt-insignia__tag">Oferta insignia</span>
    <h3 class="tt-insignia__h">Nombre del servicio</h3>
    <p class="tt-insignia__p">Qué resuelve, en una frase.</p>
  </div>
</div>
```

## Regla
Arranca cerrada —etiqueta y título— y se abre cuando entra en pantalla. Por defecto el CSS la deja **abierta**: la clase `.js` en `<html>` es la que habilita el estado cerrado, así que si el script no corre el contenido está igual. Sin esa precaución, un visitante con JavaScript bloqueado vería la oferta principal vacía.

Una sola por página y nunca colapsada: es la oferta que vende, no puede depender de que alguien pase el cursor. El abanico va a 150 px, el tamaño más grande del sistema fuera del hero.
