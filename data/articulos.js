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
// Para desplegar otro artículo dentro de este, agrega relacionados: ["id-del-articulo"].

const ARTICULOS = [
  {
    id: "cambiar-contrasena-memwifi",
    titulo: "Cambiar contraseña caducada de MemWiFi",
    categoria: "cuentas",
    actualizado: "30 oct 2026",
    relacionados: ["iniciar-sesion-microsoft"],
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
      "Si Windows muestra que necesita tus credenciales actuales, bloquea el equipo y vuelve a desbloquearlo con tu nueva contraseña. Si aparece un campo de PIN, busca Opciones de inicio de sesión y selecciona la contraseña.",
      "Si Teams o Microsoft te pide iniciar sesión de nuevo, abre el artículo relacionado que aparece al final de esta guía.",
      "Comprobación final. Confirma que MemWiFi esté conectada y que puedas abrir una página de trabajo. Usa tu nueva contraseña cuando tu cuenta de trabajo te la solicite."
    ]
  },
  {
    id: "iniciar-sesion-microsoft",
    titulo: "Volver a iniciar sesión en Microsoft y Teams",
    categoria: "cuentas",
    actualizado: "30 oct 2026",
    pasos: [
      {
        texto: "Paso 1. Abre Microsoft Teams. Si aparece el aviso para iniciar sesión de nuevo, selecciona Iniciar sesión. Si Teams funciona normalmente, no necesitas hacer este paso.",
        imagen: "assets/img/cambio-de-contrasena/cambio-de-contrasena/teams-aviso-de-inicio-de-sesion.png",
        imagenAlt: "Aviso de Teams con la opción para iniciar sesión",
        anchoImagen: 640
      },
      {
        texto: "Paso 2. Comprueba que aparezca tu cuenta de trabajo, escribe tu nueva contraseña y selecciona Iniciar sesión. El correo de la imagen es solo un ejemplo.",
        imagen: "assets/img/cambio-de-contrasena/cambio-de-contrasena/microsoft-inicio-de-sesion.png",
        imagenAlt: "Pantalla de Microsoft para escribir la contraseña e iniciar sesión",
        anchoImagen: 420
      },
      {
        texto: "Paso 3. Si Microsoft solicita verificar tu identidad, confirma que los últimos números del teléfono correspondan al tuyo y selecciona Enviar un mensaje de texto. Si no aparece esta verificación, continúa con la comprobación final.",
        imagen: "assets/img/cambio-de-contrasena/cambio-de-contrasena/microsoft-verificacion-de-identidad.png",
        imagenAlt: "Opciones para verificar la identidad mediante mensaje de texto o llamada",
        anchoImagen: 420
      },
      {
        texto: "Paso 4. Escribe el código recibido en tu celular en la ventana de Microsoft y selecciona Comprobar. No copies el código de la imagen: es solo un ejemplo. No compartas tu código ni tu contraseña. Si elegiste una llamada, sigue las instrucciones y confirma solo solicitudes que tú hayas iniciado.",
        imagen: "assets/img/cambio-de-contrasena/cambio-de-contrasena/microsoft-verificacion-por-sms.png",
        imagenAlt: "Campo para escribir el código recibido por SMS y botón Comprobar",
        anchoImagen: 420
      },
      "Comprueba que Teams funcione y no vuelva a pedirte iniciar sesión. Si el problema continúa, contacta a soporte TI."
    ]
  }
];
