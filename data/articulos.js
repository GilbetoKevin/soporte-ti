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
// Para limitar el ancho máximo de una imagen en píxeles, agrega anchoImagen: 320.
// Para desplegar otro artículo dentro de este, agrega relacionados: ["id-del-articulo"].

const ARTICULOS = [
  {
    id: "solucionar-conexion-memwifi",
    titulo: "Manual para solucionar problemas de conexión a la red MemWiFi",
    categoria: "red",
    actualizado: "11 nov 2026",
    pasos: [
      "Si tu computadora muestra el mensaje «Se requiere una acción» al intentar conectarte a MemWiFi, es posible que tu contraseña haya caducado o que necesites actualizar tus datos de acceso. Sigue las instrucciones según la pantalla que aparezca.",
      {
        texto: "Paso 1. Abre la lista de redes Wi-Fi y selecciona MemWiFi. Verifica que esté marcada la opción Conectarse automáticamente y haz clic en Conectar. Después, aparecerá una ventana solicitando tu usuario y contraseña o indicando que tu contraseña ha caducado.",
        imagen: "assets/img/memwifi-conexion-paso-1.webp",
        imagenAlt: "Selecciona la red MemWiFi, deja activada la conexión automática y haz clic en Conectar",
        anchoImagen: 640
      },
      "Paso 2. Si aparece el mensaje «Ha caducado la contraseña de la red remota», crea una nueva contraseña. Debe cumplir todos estos requisitos:",
      "Tener al menos 15 caracteres.",
      "No contener tu nombre de usuario ni partes de él.",
      "Incluir al menos 2 caracteres especiales, como @, #, $, % o &.",
      "Contener números.",
      "Incluir letras mayúsculas y minúsculas.",
      {
        texto: "Escribe la nueva contraseña en el campo Nueva contraseña y vuelve a escribir exactamente la misma en Confirmar contraseña. Haz clic en Aceptar.",
        imagen: "assets/img/memwifi-contrasena-paso-2.webp",
        imagenAlt: "Escribe y confirma la nueva contraseña, y haz clic en Aceptar",
        anchoImagen: 640
      },
      "Si la contraseña cumple los requisitos, el equipo debería conectarse a MemWiFi. Importante: esta también será la contraseña para iniciar sesión en tu computadora, correo electrónico y otros servicios corporativos que utilicen la misma cuenta.",
      {
        texto: "Paso 3. Si aparece una ventana de Seguridad de Windows, en Nombre de usuario escribe tu usuario de la empresa (por ejemplo, juan.perez). En Contraseña escribe tu contraseña actual y haz clic en Aceptar.",
        imagen: "assets/img/memwifi-credenciales-paso-3.webp",
        imagenAlt: "Escribe el usuario de la empresa y la contraseña en la ventana de Seguridad de Windows, y haz clic en Aceptar",
        anchoImagen: 640
      },
      "Si los datos son correctos, tu computadora debería conectarse a MemWiFi.",
      "Paso 4. Actualiza la contraseña en tu computadora: cuando ya estés conectado a MemWiFi, presiona Windows + L para bloquear el equipo. En la pantalla de inicio de sesión, escribe tu nueva contraseña para desbloquearlo y comprobar que puedes iniciar sesión con ella.",
      "¿El problema continúa? Si después de realizar estos pasos no puedes conectarte a MemWiFi, comunícate con el área de Soporte TI para recibir ayuda."
    ]
  }
];
