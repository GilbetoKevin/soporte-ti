// Datos de los artículos de Soluciones.
// Este es un archivo .js (no .json) a propósito: si alguien abre index.html
// con doble clic, el navegador bloquea fetch() a archivos locales por CORS.
// Como const ARTICULOS se carga con un <script> normal, no con fetch(),
// funciona igual abierto directamente que dentro del despliegue por GPO.
//
// Para agregar un artículo nuevo, copia un objeto de este arreglo y edítalo.
// El campo "imagen" es opcional: solo agrégalo si el artículo tiene una
// captura de pantalla en la carpeta assets/img/.

const ARTICULOS = [
  {
    titulo: "La impresora no imprime",
    categoria: "impresoras",
    actualizado: "23 sept 2026",
    imagen: "assets/img/ejemplo-cola-de-impresion.svg",
    imagenAlt: "Ejemplo: ventana de la cola de impresión de Windows con trabajos pendientes",
    pasos: [
      "Verifica que la impresora esté encendida y con papel o tóner suficiente.",
      "Revisa que el cable USB o la conexión de red esté bien conectado.",
      "Abre la cola de impresión de Windows y cancela los trabajos atascados.",
      "Reinicia la impresora y la computadora.",
      "Si el problema continúa, contacta a soporte TI."
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
