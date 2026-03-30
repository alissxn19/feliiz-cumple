// Carta
const regalo = document.querySelector(".regalo");
const regalos = document.querySelector(".regalos");
const modalCarta = document.getElementById("modalCarta");

regalo.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

regalos.addEventListener("click", () => {
  modalCarta.classList.add("activo");
});

modalCarta.addEventListener("click", () => {
  modalCarta.classList.remove("activo");
});

// Todo Oscuro + Soplido + Canción
const overlay = document.querySelector(".overlay");
const soplido = document.getElementById("soplido");
const cancion = document.getElementById("cancion");
const llama = document.querySelector(".llama");

llama.addEventListener("click", () => {
  soplido.currentTime = 0;
  cancion.currentTime = 0;

  // 🔥 activar ambos en el click
  soplido.play();
  cancion.play().then(() => {
    cancion.pause(); // la pausas al instante
  });

  llama.style.animation = "apagar 0.5s forwards";

  setTimeout(() => {
    cancion.play(); // ahora sí funciona en móvil
    overlay.classList.add("hidden");
  }, 1000);
});
