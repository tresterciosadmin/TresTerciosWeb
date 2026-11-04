/* Idioma compartido — Tres Tercios

   Cada página conserva su propio diccionario I18N y su propia función que
   pinta los textos. Acá vive solo lo que tiene que ser igual en las tres
   páginas: dónde se guarda la elección (localStorage, clave tt-lang) y
   cuándo se aplica.

   Todo acceso al almacenamiento va en try/catch. En modo privado o con el
   almacenamiento bloqueado el navegador tira un error: acá se ignora, el
   sitio abre en ES y la elección vale hasta que se cambia de página.

   Uso:
   1. Al final del <body>, cuando ya existen los nodos [data-i18n]:
        ttLang.iniciar(aplicarLang);
      Aplica el idioma guardado enseguida, antes del primer pintado, para
      que no se vea ES y después EN.
   2. En el setLang que llaman los botones ES / EN:
        ttLang.guardar(l);
*/
(function(global){
  var CLAVE = 'tt-lang', IDIOMAS = ['es', 'en'], POR_DEFECTO = 'es';

  function leer(){
    try{
      var v = global.localStorage.getItem(CLAVE);
      return IDIOMAS.indexOf(v) > -1 ? v : POR_DEFECTO;
    }catch(e){ return POR_DEFECTO; }
  }

  function guardar(l){
    try{ global.localStorage.setItem(CLAVE, l); }catch(e){}
  }

  function iniciar(aplicar){
    aplicar(leer());
    /* Al volver con "atrás" el navegador puede devolver la página tal como
       estaba (caché de ida y vuelta) y con el idioma anterior. */
    global.addEventListener('pageshow', function(e){
      if(e.persisted) aplicar(leer());
    });
  }

  global.ttLang = {leer: leer, guardar: guardar, iniciar: iniciar};
})(window);
