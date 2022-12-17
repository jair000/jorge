const main = document.querySelector(".main")

Swal.fire({
  title: "Bienvenido!!",
  text: "Antes de navegar, debes iniciar sesión 🐱‍👤🎂",
  confirmButtonText: "Iniciar Sesión",
  // grow: "fullscreen",
  allowOutsideClick: false,
  allowEscapeKey: false,
  allowEnterKey: false,
  stopKeydownPropagation: true,
  backdrop: true,
  width: "80%"
})
