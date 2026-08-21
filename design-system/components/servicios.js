/* Servicios — dos comportamientos, ambos como mejora progresiva.

   1. La insignia arranca cerrada y se abre al llegar a ella con el scroll.
      Sin JavaScript queda abierta: el contenido nunca depende del script.
   2. Las tarjetas se abren con :hover y :focus-within, o sea que el
      escritorio y el teclado funcionan sin JavaScript. Acá sólo se agrega
      el toque para las pantallas sin cursor. */
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- insignia --- */
  var ins = document.querySelectorAll('[data-insignia]');
  ins.forEach(function(el){ el.dataset.abierto = reduce ? '1' : '0'; });
  if(!reduce && 'IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entradas){
      entradas.forEach(function(e){
        if(!e.isIntersecting) return;
        e.target.dataset.abierto = '1';
        io.unobserve(e.target);
      });
    }, {threshold: 0.35});
    ins.forEach(function(el){ io.observe(el); });
  } else {
    ins.forEach(function(el){ el.dataset.abierto = '1'; });
  }

  /* --- tarjetas --- */
  var tactil = window.matchMedia('(hover: none)').matches;
  document.querySelectorAll('[data-serv]').forEach(function(card){
    function alternar(){
      card.dataset.abierto = card.dataset.abierto === '1' ? '0' : '1';
    }
    if(tactil){ card.addEventListener('click', alternar); }
    card.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); alternar(); }
    });
  });
})();
