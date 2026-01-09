// Variables configurables
const telefonoWhatsApp = "+51 998919468";
const direccion = "Covicorti Mz.A Lt.5, Trujillo";
const horario = "Lunes a Sábado: 9:00–19:00";
const colorPrimario = "#0f6efc";
const colorFondo = "#0a1a3c"; // Azul oscuro

// Ajustar dinámicamente elementos
document.getElementById("year").textContent = new Date().getFullYear();

// Botón WhatsApp
document.getElementById("btnWhatsApp").href =
  `https://wa.me/${telefonoWhatsApp}?text=Hola%20TruSeg,%20quiero%20cotizar%20seguridad%20vehicular`;

// Formulario contacto
document.getElementById("formContacto").addEventListener("submit", function(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const servicio = document.getElementById("servicio").value;
  const mensaje = document.getElementById("mensaje").value;

  const texto = encodeURIComponent(
    `Hola TruSeg, soy ${nombre}. Tel: ${telefono}. Me interesa: ${servicio}. Detalles: ${mensaje}`
  );
  window.open(`https://wa.me/${telefonoWhatsApp}?text=${texto}`, "_blank");
});
