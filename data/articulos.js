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
    titulo: "Manual para resolver problemas de conexión a MemWiFi",
    categoria: "red",
    actualizado: "11 nov 2026",
    pasos: [
      "Si al conectarte a MemWiFi aparece el mensaje «Se requiere una acción», sigue estos pasos según lo que muestre tu pantalla.",
      {
        texto: "<strong>1. Selecciona MemWiFi</strong><br>Abre la lista de redes Wi-Fi, selecciona MemWiFi, deja activada la opción Conectarse automáticamente y haz clic en Conectar. Después, puede aparecer una solicitud para cambiar la contraseña o para escribir tus credenciales.",
        imagen: "assets/img/memwifi-conexion-paso-1.webp",
        imagenAlt: "Selecciona la red MemWiFi, deja activada la conexión automática y haz clic en Conectar",
        anchoImagen: 380
      },
      {
        texto: "<strong>2. Si la contraseña caducó, crea una nueva</strong><br>Si aparece el mensaje «Ha caducado la contraseña de la red remota», escribe una contraseña nueva en Nueva contraseña y vuelve a escribirla en Confirmar contraseña. Luego, haz clic en Aceptar.",
        imagen: "assets/img/memwifi-contrasena-paso-2.webp",
        imagenAlt: "Escribe y confirma la nueva contraseña, y haz clic en Aceptar",
        anchoImagen: 380
      },
      {
        texto: "<strong>3. Si Windows solicita tus credenciales, escríbelas</strong><br>En la ventana Seguridad de Windows, escribe tu usuario de empresa (por ejemplo, juan.perez) y tu contraseña actual. Haz clic en Aceptar. Si los datos son correctos, el equipo debería conectarse a MemWiFi.",
        imagen: "assets/img/memwifi-credenciales-paso-3.webp",
        imagenAlt: "Escribe el usuario de la empresa y la contraseña en la ventana de Seguridad de Windows, y haz clic en Aceptar",
        anchoImagen: 380
      },
      "<strong>4. Comprueba que puedes iniciar sesión con la nueva contraseña</strong><br>Después de conectarte, presiona Windows + L para bloquear la computadora. En la pantalla de inicio de sesión, escribe la nueva contraseña para desbloquearla.",
      "<strong>Ten en cuenta:</strong> esta contraseña también se usará para iniciar sesión en tu computadora, correo electrónico y otros servicios corporativos vinculados a la misma cuenta.",
      "<strong>¿Sigues sin poder conectarte?</strong><br>Comunícate con Soporte TI para recibir ayuda."
    ]
  }
];
