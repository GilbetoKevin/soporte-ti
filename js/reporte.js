(function () {
  var form = document.getElementById('report-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nombre = document.getElementById('r-nombre').value.trim() || 'Sin nombre';
    var categoria = document.getElementById('r-categoria').value;
    var descripcion = document.getElementById('r-descripcion').value.trim() || 'Sin descripción';
    var asunto = encodeURIComponent('Reporte de soporte TI - ' + categoria);
    var cuerpo = encodeURIComponent('Nombre: ' + nombre + '\nCategoría: ' + categoria + '\n\nDescripción:\n' + descripcion);
    window.location.href = 'mailto:mesa.ti@motaengil.com?subject=' + asunto + '&body=' + cuerpo;
  });
})();
