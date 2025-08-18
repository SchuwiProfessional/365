// script.js
// Reemplaza las líneas siguientes con las oraciones de TU carta.
const lines = [
  "“Mi nombre es Schuwi… y morí de la forma más ridícula del mundo: intentando impresionar a una chica. Lo gracioso es que, en vez de morir de verdad, terminé renaciendo en un mundo mágico… con ella. Tati, la diosa del 18 de agosto. Y así empezó la aventura más absurda y hermosa de mi vida.”",
  "Se desbloqueara en un momento especial.",
];

const giftBtn = document.getElementById("gift");
const letter = document.getElementById("letter");
const resetBtn = document.getElementById("reset");
const revealAllBtn = document.getElementById("revealAll");

let index = 0;

// función que crea y muestra la siguiente línea
function revealNext() {
  // Si ya mostramos todo, nada más (o podrías reiniciar)
  if (index >= lines.length) {
    giftBtn.setAttribute("aria-expanded", "true");
    giftBtn.classList.add("open");
    return;
  }

  // quitar hint la primera vez
  const hint = letter.querySelector(".hint");
  if (hint) hint.remove();

  // crear párrafo
  const p = document.createElement("p");
  p.className = "line";
  p.textContent = lines[index];
  // añadir al contenedor
  letter.appendChild(p);

  // forzar reflow y luego mostrar con clase para animar
  requestAnimationFrame(() => p.classList.add("show"));

  index++;

  // si mostramos la última, abrimos la caja visualmente
  if (index === lines.length) {
    giftBtn.classList.add("open");
    giftBtn.setAttribute("aria-expanded", "true");
  }
}

// habilita teclado para el botón (Enter / Space)
giftBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.code === "Space" || e.key === " ") {
    e.preventDefault();
    revealNext();
  }
});

// click/tap
giftBtn.addEventListener("click", revealNext);

// Reiniciar todo
resetBtn.addEventListener("click", () => {
  index = 0;
  letter.innerHTML =
    '<p class="hint">Haz click en la caja para leer tu carta, frase por frase.</p>';
  giftBtn.classList.remove("open");
  giftBtn.setAttribute("aria-expanded", "false");
  giftBtn.focus();
});

// Mostrar todo de golpe (útil antes de regalar)
revealAllBtn.addEventListener("click", () => {
  while (index < lines.length) revealNext();
});

// accesibilidad: Si el usuario hace focus y presiona Enter, está cubierto por keydown handler.
// aria-live="polite" en el contenedor hace que lectores de pantalla anuncien nuevas líneas.
