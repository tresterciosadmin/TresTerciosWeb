/* Acordeón Tres Tercios — accesible por teclado, sin dependencias.
   Marcado esperado:
     <div class="tt-acc" data-acc>
       <div class="tt-acc__item">
         <button class="tt-acc__head" aria-expanded="true" aria-controls="p1">…</button>
         <div class="tt-acc__panel" id="p1" role="region" data-open="1">…</div>
       </div>
     </div>
   Varios paneles pueden estar abiertos a la vez: en una página de
   servicios, comparar dos ofertas es un caso de uso real. */
(function(){
  function alternar(head){
    var panel = document.getElementById(head.getAttribute('aria-controls'));
    var abierto = head.getAttribute('aria-expanded') === 'true';
    head.setAttribute('aria-expanded', String(!abierto));
    panel.dataset.open = abierto ? '0' : '1';
  }
  document.querySelectorAll('[data-acc]').forEach(function(acc){
    var heads = [].slice.call(acc.querySelectorAll('.tt-acc__head'));
    heads.forEach(function(head, i){
      head.addEventListener('click', function(){ alternar(head); });
      head.addEventListener('keydown', function(e){
        var salto = {ArrowDown:1, ArrowUp:-1}[e.key];
        if(salto){ e.preventDefault(); heads[(i + salto + heads.length) % heads.length].focus(); }
        if(e.key === 'Home'){ e.preventDefault(); heads[0].focus(); }
        if(e.key === 'End'){ e.preventDefault(); heads[heads.length - 1].focus(); }
      });
    });
  });
})();
