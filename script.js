document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cartas-container");

  for (let i = 1; i <= 365; i++) {
    const carta = document.createElement("div");
    carta.classList.add("carta");
    carta.innerHTML = `
      <h2>Carta ${i}</h2>
      <p>Haz clic para leer esta carta.</p>
    `;
    carta.addEventListener("click", () => {
      window.location.href = `cartas/carta${i}.html`;
    });

    container.appendChild(carta);
  }
});
