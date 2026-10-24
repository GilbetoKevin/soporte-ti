(function () {
  var list = document.getElementById('list');
  var pills = document.querySelectorAll('.pill');
  var searchInput = document.getElementById('search');
  var emptyMsg = document.getElementById('empty');

  var categoryLabels = {
    impresoras: 'Impresoras',
    red: 'Red y VPN',
    cuentas: 'Cuentas y accesos',
    equipo: 'Equipo'
  };

  function stepText(step) {
    return typeof step === 'string' ? step : step.texto;
  }

  function renderSteps(article) {
    var stepsHtml = article.pasos.map(function (step) {
      var texto = stepText(step);
      var imagenPaso = '';
      if (typeof step === 'object' && step.imagen) {
        var ancho = Number(step.anchoImagen);
        var anchoHtml = Number.isFinite(ancho) && ancho > 0
          ? ' style="width: ' + Math.min(ancho, 1200) + 'px"'
          : '';
        imagenPaso = '<img class="step-image" src="' + step.imagen + '" alt="' + (step.imagenAlt || '') + '" loading="lazy"' + anchoHtml + '>';
      }
      return '<li>' + texto + imagenPaso + '</li>';
    }).join('');

    return '<ul>' + stepsHtml + '</ul>';
  }

  function renderRelatedArticles(article, articlesById) {
    if (!article.relacionados || !article.relacionados.length) return '';

    var relatedHtml = article.relacionados.map(function (relatedId) {
      var related = articlesById[relatedId];
      if (!related) {
        return '<p class="related-error">No se encontró el artículo relacionado: ' + relatedId + '.</p>';
      }

      return '<details class="related-card">' +
        '<summary><span>' + related.titulo + '</span><span class="chev">›</span></summary>' +
        '<div class="related-content">' + renderSteps(related) + '</div>' +
      '</details>';
    }).join('');

    return '<section class="related-articles"><h3>Artículos relacionados</h3>' + relatedHtml + '</section>';
  }

  function renderArticulos(articulos) {
    var articlesById = {};
    articulos.forEach(function (article) {
      if (article.id) articlesById[article.id] = article;
    });

    list.innerHTML = articulos.map(function (a) {
      var relatedTitles = (a.relacionados || []).map(function (relatedId) {
        return articlesById[relatedId] ? articlesById[relatedId].titulo : '';
      }).join(' ');
      var searchText = (a.titulo + ' ' + a.pasos.map(stepText).join(' ') + ' ' + relatedTitles).toLowerCase();
      var imagenHtml = a.imagen
        ? '<img class="card-image" src="' + a.imagen + '" alt="' + (a.imagenAlt || '') + '" loading="lazy">'
        : '';
      var pasosHtml = renderSteps(a);
      var relatedHtml = renderRelatedArticles(a, articlesById);
      return (
        '<details class="card" data-cat="' + a.categoria + '" data-search="' + searchText.replace(/"/g, '&quot;') + '">' +
          '<summary>' +
            '<div><div class="card-title">' + a.titulo + '</div><div class="meta">Actualizado: ' + a.actualizado + '</div></div>' +
            '<div class="row-end"><span class="badge">' + (categoryLabels[a.categoria] || a.categoria) + '</span><span class="chev">›</span></div>' +
          '</summary>' +
          '<div class="steps">' + imagenHtml + pasosHtml + relatedHtml + '</div>' +
        '</details>'
      );
    }).join('');
  }

  renderArticulos(ARTICULOS);

  var activeCat = 'all';
  function applyFilter() {
    var q = searchInput.value.trim().toLowerCase();
    var cards = document.querySelectorAll('.card');
    var visible = 0;
    cards.forEach(function (card) {
      var show = (activeCat === 'all' || card.dataset.cat === activeCat) && (!q || card.dataset.search.includes(q));
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    emptyMsg.style.display = visible === 0 ? 'block' : 'none';
  }

  pills.forEach(function (p) {
    p.addEventListener('click', function () {
      pills.forEach(function (x) { x.classList.remove('active'); });
      p.classList.add('active');
      activeCat = p.dataset.cat;
      applyFilter();
    });
  });
  searchInput.addEventListener('input', applyFilter);
})();
