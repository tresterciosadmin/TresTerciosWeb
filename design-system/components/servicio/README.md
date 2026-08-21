# Tarjeta de servicio que se abre

Los servicios que acompañan a la insignia: se muestran por título y revelan su detalle al pasar el cursor o al tocarlas.

**Grupo:** Contenido  
**Clases:** `tt-servicios`, `tt-serv`, `tt-serv__head`, `tt-serv__h`, `tt-serv__ind`, `tt-serv__body`, `tt-serv__inner`, `tt-serv__p`, `tt-serv__sub`, `tt-serv__list`

## Ejemplo
```html
<div class="tt-servicios">
  <article class="tt-serv" data-serv data-abierto="0" tabindex="0">
    <div class="tt-serv__head">
      <h3 class="tt-serv__h">Nombre del servicio</h3>
      <span class="tt-serv__ind" aria-hidden="true"></span>
    </div>
    <div class="tt-serv__body"><div class="tt-serv__inner">…</div></div>
  </article>
</div>
```

## Regla
Van de a tres, lado a lado, nunca apiladas en lista. La apertura ocurre con :hover y con :focus-within, así que el teclado funciona sin JavaScript; servicios.js sólo agrega el toque en pantallas sin cursor. La flecha que gira es el único indicio de que hay más: sin ella, nadie descubre el contenido.
