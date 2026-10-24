(function () {
  var projectList = document.getElementById('project-list');
  var projectSearch = document.getElementById('project-search');
  var heading = document.getElementById('team-heading');
  var contactList = document.getElementById('team-contact-list');
  var centralSupport = document.getElementById('central-support');
  var emptyMessage = document.getElementById('team-empty');
  var selectedProject = PROYECTOS.find(function (project) {
    return project.nombre === 'Monterrey';
  }) || PROYECTOS[0];

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, function (character) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[character];
    });
  }

  function initials(contact) {
    if (contact.iniciales) return contact.iniciales;
    return contact.nombre.split(/\s+/).slice(0, 2).map(function (part) {
      return part.charAt(0);
    }).join('').toUpperCase();
  }

  function renderProjects() {
    var query = projectSearch.value.trim().toLocaleLowerCase();
    var visibleProjects = PROYECTOS.filter(function (project) {
      return project.nombre.toLocaleLowerCase().includes(query);
    });

    projectList.innerHTML = visibleProjects.map(function (project) {
      var active = selectedProject && selectedProject.nombre === project.nombre;
      return '<button class="project-option' + (active ? ' active' : '') + '" type="button" data-project="' +
        escapeHtml(project.nombre) + '"' + (active ? ' aria-current="true"' : '') + '>' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V5l8-2v18M12 7h8v14M2 21h20"/><path d="M7 7h2M7 11h2M7 15h2M15 10h2M15 14h2M15 18h2"/></svg>' +
        '<span>' + escapeHtml(project.nombre) + '</span></button>';
    }).join('');

    emptyMessage.hidden = visibleProjects.length !== 0;
    projectList.querySelectorAll('.project-option').forEach(function (button) {
      button.addEventListener('click', function () {
        selectedProject = PROYECTOS.find(function (project) {
          return project.nombre === button.dataset.project;
        });
        renderProjects();
        renderContacts();
      });
    });
  }

  function renderContacts() {
    if (!selectedProject) {
      heading.innerHTML = '<h1>Equipo de TI</h1><p>Selecciona una obra o proyecto para consultar sus contactos.</p>';
      contactList.innerHTML = '';
      return;
    }

    heading.innerHTML = '<h1>Equipo de TI · ' + escapeHtml(selectedProject.nombre) +
      '</h1><p>Selecciona tu obra y encuentra a quién contactar.</p>';

    contactList.innerHTML = (selectedProject.contactos || []).map(function (contact) {
      var email = escapeHtml(contact.correo);
      var safeEmail = encodeURIComponent(contact.correo || '');
      var teamsUrl = 'https://teams.microsoft.com/l/chat/0/0?users=' + safeEmail;
      var emailHtml = contact.correo
        ? '<a href="mailto:' + email + '"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg><span>' + email + '</span></a>'
        : '<span class="contact-pending">Correo pendiente de confirmar</span>';
      var teamsHtml = contact.correo
        ? '<a class="contact-action primary" href="' + teamsUrl + '" target="_blank" rel="noopener noreferrer"><span class="teams-mark" aria-hidden="true">T</span>Contactar por Teams</a>'
        : '';
      return '<article class="team-contact-card">' +
        '<div class="contact-avatar" aria-hidden="true">' + escapeHtml(initials(contact)) + '</div>' +
        '<div class="contact-person"><h2>' + escapeHtml(contact.nombre) + '</h2><p>' + escapeHtml(contact.puesto) + '</p></div>' +
        '<div class="contact-details">' +
          emailHtml +
          (contact.telefono ? '<a href="tel:' + escapeHtml(contact.telefono.replace(/[^\d+]/g, '')) + '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.7L7.1 10a16 16 0 0 0 6 6l1.6-1.9a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 1.6 1.9Z"/></svg><span>Tel. ' + escapeHtml(contact.telefono) + '</span></a>' : '') +
        '</div>' +
        '<div class="contact-actions">' +
          teamsHtml +
          (contact.correo ? '<a class="contact-action" href="mailto:' + email + '"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>Enviar correo</a>' : '') +
        '</div>' +
      '</article>';
    }).join('');
  }

  function renderCentralSupport() {
    centralSupport.innerHTML =
      '<div class="central-avatar" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 13v-2a9 9 0 0 1 18 0v2"/><path d="M3 13h3v6H4a1 1 0 0 1-1-1zM21 13h-3v6h2a1 1 0 0 0 1-1zM18 19a6 6 0 0 1-6 3"/></svg></div>' +
      '<div class="central-copy"><strong>' + escapeHtml(SOPORTE_CENTRAL.nombre) + '</strong><span>' + escapeHtml(SOPORTE_CENTRAL.descripcion) + '</span></div>' +
      '<div class="central-links"><a href="mailto:' + escapeHtml(SOPORTE_CENTRAL.correo) + '">' + escapeHtml(SOPORTE_CENTRAL.correo) + '</a>' +
      (SOPORTE_CENTRAL.telefono ? '<a href="tel:' + escapeHtml(SOPORTE_CENTRAL.telefono.replace(/[^\d+]/g, '')) + '">Tel. ' + escapeHtml(SOPORTE_CENTRAL.telefono) + '</a>' : '') + '</div>';
  }

  projectSearch.addEventListener('input', renderProjects);
  renderProjects();
  renderContacts();
  renderCentralSupport();
})();
