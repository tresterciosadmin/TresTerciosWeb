# Formulario

Contenedor del formulario de contacto. Reúne los campos (`tt-label` + `tt-input`), la trampa antispam y el mensaje de resultado.

**Grupo:** Formularios  
**Clases:** `tt-form`, `tt-hp`, `tt-label`, `tt-input`, `tt-msg`

## Ejemplo
```html
<form class="tt-form" action="https://formspree.io/f/ID" method="POST" novalidate>
  <div class="tt-hp" aria-hidden="true"><label>No completar<input type="text" name="_gotcha" tabindex="-1" autocomplete="off"></label></div>
  <div><label class="tt-label" for="f-nombre">Nombre</label><input class="tt-input" id="f-nombre" name="nombre" type="text" required autocomplete="name"></div>
  <div><label class="tt-label" for="f-msj">Mensaje</label><textarea class="tt-input" id="f-msj" name="mensaje" required></textarea></div>
  <div><button class="tt-btn tt-btn--primary" type="submit">Enviar</button></div>
  <p class="tt-msg" role="status" hidden></p>
</form>
```

## Regla
Sin sombra en reposo: la profundidad la da el borde (libro de marca 6.2). El mensaje nace con `hidden` y solo se muestra cuando el servidor respondió: éxito únicamente si la respuesta es OK. El campo `tt-hp` es una trampa para bots: nunca se muestra ni se traduce.
