(function () {
  var form = document.getElementById('report-form');
  if (!form) return;

  var projectSelect = document.getElementById('r-obra');
  var subjectInput = document.getElementById('r-asunto');
  var descriptionInput = document.getElementById('r-descripcion');
  var phoneInput = document.getElementById('r-contacto');
  var responsibles = document.getElementById('report-responsibles');
  var selectedProjectLabel = document.getElementById('selected-project');
  var ccAddress = document.getElementById('report-cc-address');
  var status = document.getElementById('report-status');
  var copyButton = document.getElementById('copy-report');
  var centralEmail = SOPORTE_CENTRAL.correo;

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

  function isVerifiedContact(contact) {
    return contact.nombre !== 'Nombre del responsable' &&
      contact.correo &&
      !/example\.com$/i.test(contact.correo);
  }

  function getSelectedProject() {
    return PROYECTOS.find(function (project) {
      return project.nombre === projectSelect.value;
    });
  }

  function getRecipients(project) {
    var recipients = (project.contactos || [])
      .filter(isVerifiedContact)
      .map(function (contact) { return contact.correo; });
    return recipients.length ? recipients : [centralEmail];
  }

  function renderRecipients() {
    var project = getSelectedProject();
    if (!project) return;

    selectedProjectLabel.innerHTML =
      '<span class="location-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg></span>' +
      escapeHtml(project.nombre);

    var contacts = (project.contactos || []).filter(function (contact) {
      return contact.nombre !== 'Nombre del responsable';
    });
    if (contacts.length) {
      responsibles.innerHTML = contacts.map(function (contact) {
        var email = contact.correo && !/example\.com$/i.test(contact.correo)
          ? '<a href="mailto:' + escapeHtml(contact.correo) + '">' + escapeHtml(contact.correo) + '</a>'
          : '<span class="email-pending">Correo pendiente de confirmar</span>';
        return '<article class="report-responsible">' +
          '<span class="responsible-avatar">' + escapeHtml(contact.iniciales) + '</span>' +
          '<div><strong>' + escapeHtml(contact.nombre) + '</strong>' +
          '<span>' + escapeHtml(contact.puesto) + '</span>' + email + '</div>' +
          '</article>';
      }).join('');
      if (!getRecipients(project).some(function (email) { return email !== centralEmail; })) {
        responsibles.insertAdjacentHTML('beforeend',
          '<p class="central-fallback-note">El reporte se enviará a soporte central porque no hay un correo confirmado para esta obra.</p>');
      }
    } else {
      responsibles.innerHTML =
        '<p class="central-fallback-note">Esta obra no tiene responsables configurados. El reporte se enviará a soporte central.</p>';
    }
  }

  function getReport() {
    var project = getSelectedProject();
    if (!project) throw new Error('Selecciona una obra o ubicación.');

    var subject = subjectInput.value.trim();
    var description = descriptionInput.value.trim();
    if (!subject || !description) throw new Error('Completa el asunto y la descripción del problema.');

    var recipients = getRecipients(project);
    var body = [
      'Obra o ubicación: ' + project.nombre,
      'Problema: ' + subject,
      'Descripción:',
      description,
      phoneInput.value.trim() ? 'Número de contacto: ' + phoneInput.value.trim() : ''
    ].filter(Boolean).join('\n');

    return {
      to: recipients,
      cc: centralEmail,
      subject: subject,
      body: body
    };
  }

  function reportAsText(report) {
    return [
      'Para: ' + report.to.join(', '),
      'CC: ' + report.cc,
      'Asunto: ' + report.subject,
      '',
      report.body
    ].join('\n');
  }

  function showStatus(message, isError) {
    status.textContent = message;
    status.classList.toggle('error', Boolean(isError));
  }

  function copyWithFallback(text) {
    var temporaryInput = document.createElement('textarea');
    temporaryInput.value = text;
    temporaryInput.setAttribute('readonly', '');
    temporaryInput.style.position = 'fixed';
    temporaryInput.style.opacity = '0';
    document.body.appendChild(temporaryInput);
    temporaryInput.select();
    var copied = document.execCommand('copy');
    temporaryInput.remove();
    if (!copied) throw new Error('El navegador no permitió copiar la información.');
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(function () {
        copyWithFallback(text);
      });
    }
    copyWithFallback(text);
    return Promise.resolve();
  }

  PROYECTOS.forEach(function (project) {
    var option = document.createElement('option');
    option.value = project.nombre;
    option.textContent = project.nombre;
    projectSelect.appendChild(option);
  });
  projectSelect.value = PROYECTOS.some(function (project) {
    return project.nombre === 'Monterrey';
  }) ? 'Monterrey' : (PROYECTOS[0] ? PROYECTOS[0].nombre : '');

  ccAddress.textContent = centralEmail;
  projectSelect.addEventListener('change', renderRecipients);
  renderRecipients();

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;

    try {
      var report = getReport();
      var mailto = 'mailto:' + report.to.join(',') +
        '?cc=' + encodeURIComponent(report.cc) +
        '&subject=' + encodeURIComponent(report.subject) +
        '&body=' + encodeURIComponent(report.body);
      window.location.href = mailto;
      showStatus('Se preparó el correo. Revísalo, adjunta tus capturas y pulsa Enviar.', false);
    } catch (error) {
      showStatus(error.message, true);
    }
  });

  copyButton.addEventListener('click', function () {
    if (!form.reportValidity()) return;
    try {
      var text = reportAsText(getReport());
      copyText(text).then(function () {
        showStatus('Información copiada. Pégala en un correo nuevo y adjunta tus capturas.', false);
      }).catch(function (error) {
        showStatus('No se pudo copiar la información: ' + error.message, true);
      });
    } catch (error) {
      showStatus(error.message, true);
    }
  });
})();
