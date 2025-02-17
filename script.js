// Control del reproductor de música y animación de la imagen del reproductor
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");
const reproductor = document.querySelector(".reproductor");

playBtn.addEventListener("click", () => {
  audio.play();
  reproductor.classList.add("spin"); // Activa la animación
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
  reproductor.classList.remove("spin"); // Detiene la animación
});

stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  reproductor.classList.remove("spin"); // Detiene la animación
});

// Menú Hamburguesa
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


