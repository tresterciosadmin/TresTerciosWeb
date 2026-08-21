/* Medidor Tres Tercios — genera los arcos parciales con la geometría real
   de la marca: tres tercios de 46,67°, separaciones de 10°, apertura 160°,
   radio exterior 100 e interior 38.
   Uso:  ttGauge(document.querySelector('#mi-svg'), 68)
   El SVG debe tener viewBox="-4 -6 208 112". */
(function(global){
  var A0 = 170, GAP = 10, SPAN = (170 - 10 - 2 * GAP) / 3;   // 46.666…

  function punto(ang, rad){
    var t = ang * Math.PI / 180;
    return [(100 + rad * Math.cos(t)).toFixed(2), (100 - rad * Math.sin(t)).toFixed(2)];
  }
  function cuna(a0, a1){                                      // a0 > a1
    var o1 = punto(a0, 100), o2 = punto(a1, 100),
        i2 = punto(a1, 38),  i1 = punto(a0, 38);
    return 'M' + o1 + ' A100,100 0 0 1 ' + o2 + ' L' + i2 + ' A38,38 0 0 0 ' + i1 + ' Z';
  }
  function ttGauge(svg, pct){
    if(!svg) return;
    var v = Math.max(0, Math.min(100, Number(pct) || 0)), t = v / 100 * 3, out = '';
    for(var i = 0; i < 3; i++){
      var a0 = A0 - i * (SPAN + GAP);
      out += '<path class="tt-gauge__bg" d="' + cuna(a0, a0 - SPAN) + '"/>';
      var f = Math.max(0, Math.min(1, t - i));
      if(f > 0) out += '<path class="tt-gauge__fill" d="' + cuna(a0, a0 - SPAN * f) + '"/>';
    }
    svg.innerHTML = out;
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'Medidor: ' + Math.round(v) + ' por ciento');
  }
  global.ttGauge = ttGauge;
})(window);
