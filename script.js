// ============================================================
// Generador de nombres alemanes (nombres de origen alemán)
// ============================================================

// Nombres de pila masculinos tradicionales
const nombresMasculinos = [
  "Leon", "Lukas", "Finn", "Jonas", "Noah", "Elias", "Paul", "Felix",
  "Maximilian", "Alexander", "Ben", "Theo", "Emil", "Anton", "Moritz",
  "Matteo", "Henry", "Louis", "Niklas", "Tobias", "Julius", "Konstantin",
  "Wolfgang", "Friedrich", "Heinrich", "Klaus", "Stefan", "Andreas",
];

// Nombres de pila femeninos tradicionales
const nombresFemeninos = [
  "Emma", "Mia", "Hannah", "Sophia", "Emilia", "Lena", "Marie", "Clara",
  "Amelia", "Mila", "Ida", "Luca", "Lea", "Johanna", "Anna", "Sophie",
  "Laura", "Nele", "Greta", "Heidi", "Ingrid", "Helga", "Ursula",
  "Petra", "Monika", "Birgit", "Katrin", "Sabine",
];

// Apellidos alemanes tradicionales
const apellidos = [
  "Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner",
  "Becker", "Hoffmann", "Schäfer", "Koch", "Bauer", "Richter", "Klein",
  "Wolf", "Schröder", "Neumann", "Schwarz", "Zimmermann", "Braun",
  "Krüger", "Hofmann", "Hartmann", "Lange", "Schmitt", "Werner",
  "Schmitz", "Krause", "Meier", "Lehmann", "Fuchs", "König",
];

/**
 * Devuelve un elemento aleatorio de un array.
 */
function elementoAleatorio(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Genera una lista de nombres alemanes únicos (sin repetir).
 * @param {number} cantidad - Cuántos nombres generar (1 a 10).
 * @returns {string[]} Lista de nombres completos.
 */
function generarNombres(cantidad) {
  const nombres = new Set();
  while (nombres.size < cantidad) {
    const sexo = Math.random() < 0.5 ? "m" : "f";
    const nombrePila =
      sexo === "m"
        ? elementoAleatorio(nombresMasculinos)
        : elementoAleatorio(nombresFemeninos);
    const apellido = elementoAleatorio(apellidos);
    nombres.add(`${nombrePila} ${apellido}`);
  }
  return Array.from(nombres);
}

// ============================================================
// Interfaz de usuario
// ============================================================

const quantityInput = document.getElementById("quantity");
const generateBtn = document.getElementById("generateBtn");
const namesList = document.getElementById("namesList");
const emptyMessage = document.getElementById("emptyMessage");

function renderNombres(nombres) {
  namesList.innerHTML = "";
  emptyMessage.style.display = "none";

  nombres.forEach((nombre, index) => {
    const li = document.createElement("li");
    li.style.animationDelay = `${index * 0.05}s`;

    const texto = document.createElement("span");
    texto.textContent = nombre;

    const origen = document.createElement("span");
    origen.className = "origin";
    origen.textContent = "🇩🇪 Alemán";

    li.appendChild(texto);
    li.appendChild(origen);
    namesList.appendChild(li);
  });
}

generateBtn.addEventListener("click", () => {
  // Leer y validar la cantidad (entre 1 y 10)
  let cantidad = parseInt(quantityInput.value, 10);
  if (isNaN(cantidad) || cantidad < 1) cantidad = 1;
  if (cantidad > 10) cantidad = 10;
  quantityInput.value = cantidad;

  const nombres = generarNombres(cantidad);
  renderNombres(nombres);
});
