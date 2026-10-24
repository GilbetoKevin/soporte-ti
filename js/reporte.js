(function () {
  var form = document.getElementById('report-form');
  if (!form) return;

  function getValue(id) {
    return document.getElementById(id).value.trim();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var nombre = getValue('r-nombre') || 'Sin nombre';
    var categoria = getValue('r-categoria') || 'Otro';
    var descripcion = getValue('r-descripcion');

    if (!descripcion) {
      alert('Escribe una descripción del problema para poder enviar el informe.');
      return;
    }

    var asunto = encodeURIComponent('Reporte de soporte TI - ' + categoria);
    var cuerpo = encodeURIComponent(
      'Nombre: ' + nombre + '\n' +
      'Categoría: ' + categoria + '\n\n' +
      'Descripción:\n' + descripcion
    );

    var mailtoLink = 'mailto:mesa.ti@motaengil.com?subject=' + asunto + '&body=' + cuerpo;

    try {
      window.location.href = mailtoLink;
    } catch (error) {
      window.open(mailtoLink, '_self');
    }
  });
})();
