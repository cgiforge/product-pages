/* Generiert mit HiveCreator – skaliert die Seite auf kleinere Bildschirme */
(function () {
  var DESIGN_WIDTH = 960;
  var page = document.getElementById('hc-page');
  var viewport = document.getElementById('hc-viewport');
  function fit() {
    var vw = viewport.clientWidth;
    if (vw < DESIGN_WIDTH) {
      var scale = vw / DESIGN_WIDTH;
      page.style.transform = 'scale(' + scale + ')';
      page.style.marginLeft = '0';
      page.style.marginRight = '0';
      viewport.style.height = (page.offsetHeight * scale) + 'px';
      viewport.style.overflow = 'hidden';
    } else {
      page.style.transform = '';
      page.style.marginLeft = 'auto';
      page.style.marginRight = 'auto';
      viewport.style.height = '';
    }
  }
  window.addEventListener('resize', fit);
  window.addEventListener('load', fit);
  fit();
})();
