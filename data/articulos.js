// Datos de los artículos de Soluciones.
// Este es un archivo .js (no .json) a propósito: si alguien abre index.html
// con doble clic, el navegador bloquea fetch() a archivos locales por CORS.
// Como const ARTICULOS se carga con un <script> normal, no con fetch(),
// funciona igual abierto directamente que dentro del despliegue por GPO.
//
// Para agregar un artículo nuevo, copia un objeto de este arreglo y edítalo.
// El campo "imagen" es opcional: solo agrégalo si el artículo tiene una
// captura de pantalla en la carpeta assets/img/.
// Cada paso puede ser texto simple o un objeto con imagen opcional:
// { texto: "Abre Configuración.", imagen: "assets/img/configuracion.png", imagenAlt: "Ventana de Configuración" }
// Para ajustar el ancho de una imagen en píxeles, agrega anchoImagen: 320.

const ARTICULOS = [
  {
    titulo: "La impresora no imprime",
    categoria: "impresoras",
    actualizado: "23 sept 2026",
    imagen: "assets/img/ejemplo-cola-de-impresion.svg",
    imagenAlt: "Ejemplo: ventana de la cola de impresión de Windows con trabajos pendientes",
    pasos: [
      "Verifica que la impresora esté encendida y tenga papel o tóner suficiente.",
      "Revisa que el cable USB o la conexión de red esté bien conectado.",
      "Abre la cola de impresión de Windows y cancela los trabajos atascados.",
      "Reinicia la impresora y la computadora.",
      "Si el problema continúa, contacta a soporte TI."
    ]
  },
  {
    titulo: "Cambiar contraseña caducada de MemWiFi",
    categoria: "cuentas",
    actualizado: "23 sept 2026",
    pasos: [
      "Antes de comenzar, ten a la mano tu usuario de trabajo y tu celular registrado en la cuenta.",
      "Tu nueva contraseña debe tener al menos 14 caracteres, no ser igual a tu nombre de usuario ni contenerlo y ser diferente de tus últimas 24 contraseñas.",
      "Incluye al menos 3 de estos 4 tipos de caracteres: mayúsculas (A–Z), minúsculas (a–z), números (0–9) y símbolos como %, $, ?, coma, _ o #.",
      "Estos pasos corresponden al aviso de contraseña caducada en MemWiFi. Si tu contraseña todavía no caduca y no aparece esta pantalla, consulta el procedimiento de cambio anticipado.",
      {
        texto: "Paso 1. Haz clic en el símbolo de Wi-Fi junto al reloj de tu computadora. Selecciona MemWiFi y haz clic en Conectar.",
        imagen: "assets/img/cambio-de-contrasena/cambio-de-contrasena/wifi-conexion-requerida.png",
        imagenAlt: "Red MemWiFi con el mensaje Se requiere una acción y el botón Conectar",
        anchoImagen: 320
      },
      {
        texto: "Paso 2. Si aparece Ha caducado la contraseña de la red remota, escribe tu nueva contraseña en Nueva contraseña. Vuelve a escribir exactamente la misma en Confirmar contraseña y haz clic en Aceptar.",
        imagen: "assets/img/cambio-de-contrasena/cambio-de-contrasena/wifi-cambio-de-contrasena.png",
        imagenAlt: "Campos para escribir y confirmar la nueva contraseña de MemWiFi",
        anchoImagen: 320
      },
      "Paso 3. Espera la respuesta de la computadora. La ventana debe cerrarse sin errores y MemWiFi debe aparecer conectada. Si la contraseña es rechazada, revisa el mensaje y los requisitos antes de intentarlo otra vez.",
      {
        texto: "Paso 4. Si aparece Seguridad de Windows, escribe tu usuario de trabajo en Nombre de usuario y tu nueva contraseña en Contraseña. Haz clic en Aceptar. Si esta ventana no aparece, continúa con el siguiente paso.",
        imagen: "assets/img/cambio-de-contrasena/cambio-de-contrasena/windows-inicio-de-sesion.png",
        imagenAlt: "Ventana de Seguridad de Windows para ingresar el usuario y la contraseña",
        anchoImagen: 420
      },
      "Si Windows muestra Windows necesita sus credenciales actuales, bloquea el equipo y vuelve a desbloquearlo con tu nueva contraseña. Si aparece un campo de PIN, busca Opciones de inicio de sesión y selecciona la contraseña.",
      {
        texto: "Paso 5. Abre Microsoft Teams. Si aparece Debes volver a iniciar sesión, haz clic en Iniciar sesión. Si Teams funciona normalmente, no necesitas hacer este paso.",
        imagen: "assets/img/cambio-de-contrasena/cambio-de-contrasena/teams-aviso-de-inicio-de-sesion.png",
        imagenAlt: "Aviso de Teams con el botón Iniciar sesión",
        anchoImagen: 640
      },
      {
        texto: "Paso 6. Revisa que aparezca tu cuenta de trabajo, escribe tu nueva contraseña y haz clic en Iniciar sesión. El correo de la imagen es solo un ejemplo.",
        imagen: "assets/img/cambio-de-contrasena/cambio-de-contrasena/microsoft-inicio-de-sesion.png",
        imagenAlt: "Pantalla de Microsoft para escribir la contraseña e iniciar sesión",
        anchoImagen: 420
      },
      {
        texto: "Paso 7. Si Microsoft te pide verificar tu identidad, revisa que los últimos números del teléfono correspondan al tuyo. Selecciona Enviar un mensaje de texto. Si no aparece esta verificación, continúa con la comprobación final.",
        imagen: "assets/img/cambio-de-contrasena/cambio-de-contrasena/microsoft-verificacion-de-identidad.png",
        imagenAlt: "Opciones para verificar la identidad mediante mensaje de texto o llamada",
        anchoImagen: 420
      },
      {
        texto: "Paso 8. Abre el mensaje recibido en tu celular. Escribe ese código en la ventana de Microsoft y haz clic en Comprobar. No copies el código de la imagen: es solo un ejemplo. No compartas tu código ni tu contraseña. Si elegiste una llamada, sigue las instrucciones que escuches y confirma únicamente solicitudes que tú hayas iniciado.",
        imagen: "assets/img/cambio-de-contrasena/cambio-de-contrasena/microsoft-verificacion-por-sms.png",
        imagenAlt: "Campo para escribir el código recibido por SMS y botón Comprobar",
        anchoImagen: 420
      },
      "Comprobación final. Confirma que MemWiFi esté conectada, que puedas abrir una página de trabajo y que Teams funcione sin pedirte iniciar sesión nuevamente. ¡Listo! Usa tu nueva contraseña cuando tu cuenta de trabajo te la solicite."
    ]
  },
  {
    titulo: "La impresora aparece como offline",
    categoria: "impresoras",
    actualizado: "23 sept 2026",
    imagen: "assets/img/05_wifi_accion_tema_claro.png",
    imagenAlt: "Ejemplo: configuración de red y conexión de impresora en Windows",
    pasos: [
      "Comprueba que la impresora esté conectada a la red o al equipo correcto.",
      "Revisa si la dirección IP ha cambiado o si la impresora está apagada.",
      "Elimina la impresora de dispositivos e instálala de nuevo si es necesario.",
      "Prueba a imprimir una página de prueba desde la configuración de la impresora.",
      "Si sigue offline, contacta con soporte TI."
    ]
  },
  {
    titulo: "No puedo conectarme a la VPN",
    categoria: "red",
    actualizado: "23 sept 2026",
    pasos: [
      "Verifica que tengas conexión a internet estable.",
      "Cierra por completo el cliente VPN y vuelve a abrirlo.",
      "Confirma que tu usuario y contraseña sean correctos (revisa Bloq Mayús).",
      "Reinicia el equipo si el cliente no responde.",
      "Si sigue sin conectar, contacta a soporte TI."
    ]
  },
  {
    titulo: "La conexión a internet falla",
    categoria: "red",
    actualizado: "23 sept 2026",
    pasos: [
      "Comprueba si otros dispositivos tienen el mismo problema en la misma zona.",
      "Reinicia el router o el punto de acceso si está disponible.",
      "Desconecta y vuelve a conectar la red Wi‑Fi o Ethernet.",
      "Si la incidencia es solo en tu equipo, reinicia la tarjeta de red.",
      "Si persiste, reporta el problema al equipo de TI."
    ]
  },
  {
    titulo: "Olvidé mi contraseña de red",
    categoria: "cuentas",
    actualizado: "23 sept 2026",
    pasos: [
      "Usa el portal de autoservicio para restablecer tu contraseña.",
      "Verifica que Bloq Mayús no esté activado al escribir la nueva contraseña.",
      "Si tu cuenta se bloqueó por intentos fallidos, espera 15 minutos antes de reintentar.",
      "Si el portal no reconoce tu usuario, contacta a soporte TI."
    ]
  },
  {
    titulo: "La computadora va muy lenta",
    categoria: "equipo",
    actualizado: "23 sept 2026",
    pasos: [
      "Cierra programas y pestañas del navegador que no estés usando.",
      "Reinicia el equipo por completo (no solo lo suspendas).",
      "Revisa el espacio libre en disco; libera archivos si queda menos del 10%.",
      "Si sigue lento después de reiniciar, contacta a soporte TI."
    ]
  }
];
