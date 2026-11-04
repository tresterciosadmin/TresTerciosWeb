/* Medidor Tres Tercios — el abanico del logo como escala.
   Usa la geometría oficial del logo nuevo (libro de marca, sección 3.2;
   archivos de assets/logo/): semicírculo de base plana, tres sectores
   separados por canales rectos. No se redibuja: los trazados de abajo son
   los del SVG oficial, sin retoques.

   Cada tercio vale 33,3 %. Los tercios se llenan de izquierda a derecha y
   dentro de cada tercio el llenado es angular, medido desde el punto donde
   convergen los canales (100, 86).
   Uso:  ttGauge(document.querySelector('#mi-svg'), 68)
   El SVG debe tener viewBox="-4 -4 208 105.56". */
(function(global){
  /* sectores llenos */
  var SECTOR = [
    'M0.03,97.56A100,100 0 0 1 46.71,15.38L81.44,63.86A36.95,36.95 0 0 0 63.09,97.56Z',
    'M50.51,13.11A100,100 0 0 1 149.49,13.11L114.58,61.85A36.95,36.95 0 0 0 85.42,61.85Z',
    'M199.97,97.56A100,100 0 0 0 153.29,15.38L118.56,63.86A36.95,36.95 0 0 1 136.91,97.56Z'
  ];
  /* contornos: el sector menos su borde interior (se pintan con fill-rule evenodd) */
  var CONTORNO = [
    'M0.03,97.56A100,100 0 0 1 46.71,15.38L81.44,63.86A36.95,36.95 0 0 0 63.09,97.56ZM2.89,94.81A97.25,97.25 0 0 1 46.01,19.12L77.51,63.09A39.7,39.7 0 0 0 60.31,94.81Z',
    'M50.51,13.11A100,100 0 0 1 149.49,13.11L114.58,61.85A36.95,36.95 0 0 0 85.42,61.85ZM54.55,14.03A97.25,97.25 0 0 1 145.45,14.03L113.59,58.51A39.7,39.7 0 0 0 86.41,58.51Z',
    'M199.97,97.56A100,100 0 0 0 153.29,15.38L118.56,63.86A36.95,36.95 0 0 1 136.91,97.56ZM197.11,94.81A97.25,97.25 0 0 0 153.99,19.12L122.49,63.09A39.7,39.7 0 0 1 139.69,94.81Z'
  ];
  /* ángulos de cada tercio, en grados desde la vertical, hacia la derecha */
  var FOCO = [100, 86], RADIO = 400;
  var ANGULOS = [[-115, -35.6], [-35.6, 35.6], [35.6, 115]];

  function punto(grados){
    var t = grados * Math.PI / 180;
    return (FOCO[0] + RADIO * Math.sin(t)).toFixed(2) + ',' + (FOCO[1] - RADIO * Math.cos(t)).toFixed(2);
  }
  /* cuña desde el foco hasta el ángulo alcanzado: recorta el tercio parcialmente lleno */
  function cuna(a0, a1){
    var d = 'M' + FOCO[0] + ',' + FOCO[1], pasos = Math.max(1, Math.ceil((a1 - a0) / 10));
    for(var i = 0; i <= pasos; i++) d += 'L' + punto(a0 + (a1 - a0) * i / pasos);
    return d + 'Z';
  }

  function ttGauge(svg, pct){
    if(!svg) return;
    var v = Math.max(0, Math.min(100, Number(pct) || 0)), t = v / 100 * 3,
        id = svg.id || 'tt-gauge', defs = '', out = '';
    for(var i = 0; i < 3; i++){
      out += '<path class="tt-gauge__bg" d="' + SECTOR[i] + '"/>' +
             '<path class="tt-gauge__ring" fill-rule="evenodd" d="' + CONTORNO[i] + '"/>';
      var f = Math.max(0, Math.min(1, t - i));
      if(f >= 1){
        out += '<path class="tt-gauge__fill" d="' + SECTOR[i] + '"/>';
      } else if(f > 0){
        var a = ANGULOS[i];
        defs += '<clipPath id="' + id + '-c' + i + '"><path d="' + cuna(a[0], a[0] + (a[1] - a[0]) * f) + '"/></clipPath>';
        out += '<path class="tt-gauge__fill" clip-path="url(#' + id + '-c' + i + ')" d="' + SECTOR[i] + '"/>';
      }
    }
    svg.innerHTML = (defs ? '<defs>' + defs + '</defs>' : '') + out;
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'Medidor: ' + Math.round(v) + ' por ciento');
  }
  global.ttGauge = ttGauge;
})(window);
