// ============================================================
// Generador de nombres por nacionalidad y género
// ============================================================

const datosNombres = {
  alemana: {
    etiqueta: "Alemán",
    bandera: "🇩🇪",
    masculino: [
      "Leon", "Lukas", "Finn", "Jonas", "Noah", "Elias", "Paul", "Felix",
      "Maximilian", "Alexander", "Ben", "Theo", "Emil", "Anton", "Moritz",
      "Matteo", "Henry", "Louis", "Niklas", "Tobias", "Julius", "Konstantin",
      "Wolfgang", "Friedrich", "Heinrich", "Klaus", "Stefan", "Andreas",
    ],
    femenino: [
      "Emma", "Mia", "Hannah", "Sophia", "Emilia", "Lena", "Marie", "Clara",
      "Amelia", "Mila", "Ida", "Luca", "Lea", "Johanna", "Anna", "Sophie",
      "Laura", "Nele", "Greta", "Heidi", "Ingrid", "Helga", "Ursula",
      "Petra", "Monika", "Birgit", "Katrin", "Sabine",
    ],
    apellidos: [
      "Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner",
      "Becker", "Hoffmann", "Schäfer", "Koch", "Bauer", "Richter", "Klein",
      "Wolf", "Schröder", "Neumann", "Schwarz", "Zimmermann", "Braun",
      "Krüger", "Hofmann", "Hartmann", "Lange", "Schmitt", "Werner",
      "Schmitz", "Krause", "Meier", "Lehmann", "Fuchs", "König",
    ],
  },

  mexicana: {
    etiqueta: "Mexicano",
    bandera: "🇲🇽",
    masculino: [
      "Santiago", "Mateo", "Diego", "Alejandro", "Sebastián", "Carlos",
      "Juan", "Luis", "Andrés", "Jesús", "Rafael", "Antonio", "Francisco",
      "José", "Emiliano", "Rodrigo", "Ricardo", "Fernando", "Alberto",
      "Eduardo", "Manuel", "Iván", "Óscar", "Pedro", "Marcos", "Tomás",
      "Adrián", "Gerardo", "Gonzalo", "Héctor",
    ],
    femenino: [
      "Sofía", "Valentina", "Camila", "María", "Guadalupe", "Fernanda",
      "Ximena", "Renata", "Victoria", "Andrea", "Daniela", "Alejandra",
      "Paulina", "Gabriela", "Adriana", "Carolina", "Rocío", "Patricia",
      "Rosa", "Carmen", "Elena", "Lucía", "Regina", "Isabella", "Natalia",
      "Perla", "Citlali", "Itzel", "Dulce", "Rebeca",
    ],
    apellidos: [
      "García", "Hernández", "López", "Martínez", "González", "Rodríguez",
      "Pérez", "Sánchez", "Ramírez", "Torres", "Flores", "Rivera", "Gómez",
      "Díaz", "Cruz", "Morales", "Ortiz", "Gutiérrez", "Chávez", "Ruiz",
      "Álvarez", "Mendoza", "Juárez", "Castillo", "Romero", "Aguilar",
      "Vargas", "Medina", "Herrera", "Jiménez",
    ],
  },

  china: {
    etiqueta: "Chino",
    bandera: "🇨🇳",
    masculino: [
      "Wei", "Ming", "Jun", "Jian", "Lei", "Feng", "Qiang", "Gang",
      "Bin", "Chao", "Hao", "Yang", "Peng", "Tao", "Xin", "Bo",
      "Fan", "Jie", "Kang", "Long", "Rui", "Xiang", "Yu", "Zhe",
      "Chen", "Li", "Wen", "Zhi", "Yong", "Xiaoping",
    ],
    femenino: [
      "Mei", "Ling", "Xiu", "Fang", "Yan", "Hua", "Jing", "Na",
      "Xin", "Zhen", "Xia", "Ying", "Chun", "Fen", "Juan", "Lan",
      "Ping", "Rong", "Wen", "Yaqin", "Lihua", "Xiuying", "Dan", "Li",
      "Xiao", "Yanling", "Huiling", "Shufen", "Meiling", "Guizhen",
    ],
    apellidos: [
      "Wang", "Li", "Zhang", "Liu", "Chen", "Yang", "Huang", "Zhao",
      "Wu", "Zhou", "Xu", "Sun", "Ma", "Zhu", "Hu", "Guo",
      "He", "Gao", "Lin", "Luo", "Zheng", "Liang", "Xie", "Song",
      "Tang", "Han", "Feng", "Dong", "Xiao", "Pan",
    ],
  },

  francesa: {
    etiqueta: "Francés",
    bandera: "🇫🇷",
    masculino: [
      "Louis", "Pierre", "Jean", "Jacques", "Antoine", "Nicolas",
      "Alexandre", "François", "Julien", "Théo", "Baptiste", "Romain",
      "Maxime", "Clément", "Hugo", "Lucas", "Nathan", "Enzo", "Mathis",
      "Tom", "Gaspard", "Émile", "Paul", "Victor", "Adrien", "Jules",
      "Quentin", "Florian", "Sébastien", "Olivier",
    ],
    femenino: [
      "Camille", "Marie", "Louise", "Léa", "Chloé", "Manon", "Emma",
      "Sarah", "Julie", "Anaïs", "Laura", "Marine", "Justine", "Élodie",
      "Célia", "Juliette", "Alice", "Inès", "Lucie", "Margaux", "Océane",
      "Amélie", "Aurélie", "Céline", "Émilie", "Isabelle", "Nathalie",
      "Sandrine", "Véronique", "Yvette",
    ],
    apellidos: [
      "Martin", "Bernard", "Dubois", "Thomas", "Robert", "Richard",
      "Petit", "Durand", "Leroy", "Moreau", "Simon", "Laurent",
      "Lefebvre", "Michel", "Garcia", "David", "Bertrand", "Roux",
      "Vincent", "Fournier", "Morel", "Girard", "André", "Mercier",
      "Blanc", "Guérin", "Boyer", "Garnier", "Faure", "Rousseau",
    ],
  },
};

// ============================================================
// Lógica de generación
// ============================================================

function elementoAleatorio(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Genera nombres únicos según nacionalidad y género.
 * @param {string} nacionalidad - Clave: alemana | mexicana | china | francesa
 * @param {string} genero - masculino | femenino
 * @param {number} cantidad - 1 a 10
 * @returns {string[]}
 */
function generarNombres(nacionalidad, genero, cantidad) {
  const datos = datosNombres[nacionalidad];
  const nombresPila = genero === "masculino" ? datos.masculino : datos.femenino;
  const nombres = new Set();

  while (nombres.size < cantidad) {
    const nombreCompleto = `${elementoAleatorio(nombresPila)} ${elementoAleatorio(datos.apellidos)}`;
    nombres.add(nombreCompleto);
  }
  return Array.from(nombres);
}

// ============================================================
// Interfaz de usuario
// ============================================================

const nationalityGroup = document.getElementById("nationalityGroup");
const genderGroup = document.getElementById("genderGroup");
const quantityInput = document.getElementById("quantity");
const generateBtn = document.getElementById("generateBtn");
const namesList = document.getElementById("namesList");
const emptyMessage = document.getElementById("emptyMessage");
const resultInfo = document.getElementById("resultInfo");

let nacionalidadActual = "alemana";
let generoActual = "masculino";

// Selección de nacionalidad
nationalityGroup.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-nationality]");
  if (!btn) return;
  nationalityGroup.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  nacionalidadActual = btn.dataset.nationality;
});

// Selección de género (cambia colores azul / rosa)
genderGroup.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-gender]");
  if (!btn) return;
  genderGroup.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  generoActual = btn.dataset.gender;

  // Cambiar el tema global de la página
  document.body.classList.toggle("gender-feminine", generoActual === "femenino");

  // Actualizar el color de los resultados existentes
  namesList.classList.toggle("masculine", generoActual === "masculino");
  namesList.classList.toggle("feminine", generoActual === "femenino");
});

function renderNombres(nombres, datos, genero) {
  namesList.innerHTML = "";
  emptyMessage.style.display = "none";

  const etiquetaGenero = genero === "masculino" ? "Masculino" : "Femenino";
  resultInfo.textContent = `${datos.bandera} ${datos.etiqueta} · ${etiquetaGenero} · ${nombres.length} nombre(s)`;

  nombres.forEach((nombre, index) => {
    const li = document.createElement("li");
    li.style.animationDelay = `${index * 0.05}s`;

    const texto = document.createElement("span");
    texto.textContent = nombre;

    const origen = document.createElement("span");
    origen.className = "origin";
    origen.textContent = `${datos.bandera} ${datos.etiqueta}`;

    li.appendChild(texto);
    li.appendChild(origen);
    namesList.appendChild(li);
  });
}

generateBtn.addEventListener("click", () => {
  let cantidad = parseInt(quantityInput.value, 10);
  if (isNaN(cantidad) || cantidad < 1) cantidad = 1;
  if (cantidad > 10) cantidad = 10;
  quantityInput.value = cantidad;

  const datos = datosNombres[nacionalidadActual];
  const nombres = generarNombres(nacionalidadActual, generoActual, cantidad);
  renderNombres(nombres, datos, generoActual);
});
