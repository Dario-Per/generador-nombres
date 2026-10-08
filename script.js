// ============================================================
// Generador de nombres por nacionalidad y género
// (solo nombres, sin apellidos)
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
  },
};

// ============================================================
// Lógica de generación
// ============================================================

function elementoAleatorio(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/** Mezcla un array de forma aleatoria (algoritmo Fisher–Yates). */
function barajar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/**
 * Genera nombres únicos combinando las nacionalidades seleccionadas.
 * @param {string[]} nacionalidades - Claves activas (ej: ["alemana", "china"]).
 * @param {string} genero - masculino | femenino
 * @param {number} cantidad - 1 a 20
 * @returns {{nombre: string, nacionalidad: string}[]}
 */
function generarNombres(nacionalidades, genero, cantidad) {
  // Crear el pool combinando todas las nacionalidades activas
  const pool = [];
  nacionalidades.forEach((clave) => {
    const datos = datosNombres[clave];
    const lista = genero === "masculino" ? datos.masculino : datos.femenino;
    lista.forEach((nombre) => pool.push({ nombre, nacionalidad: clave }));
  });

  // Mezclar y tomar la cantidad pedida (sin repetir)
  return barajar(pool).slice(0, cantidad);
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

let nacionalidadesActivas = ["alemana"];
let generoActual = "masculino";

// Selección de nacionalidad (múltiple: siempre debe quedar al menos una activa)
nationalityGroup.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-nationality]");
  if (!btn) return;
  const clave = btn.dataset.nationality;
  const activo = btn.classList.contains("active");

  if (activo && nacionalidadesActivas.length === 1) {
    // No se puede deseleccionar la última nacionalidad
    return;
  }

  btn.classList.toggle("active", !activo);
  if (activo) {
    nacionalidadesActivas = nacionalidadesActivas.filter((n) => n !== clave);
  } else {
    nacionalidadesActivas.push(clave);
  }
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

function renderNombres(nombres) {
  namesList.innerHTML = "";
  emptyMessage.style.display = "none";

  const etiquetaGenero = generoActual === "masculino" ? "Masculino" : "Femenino";
  const etiquetasNac = nacionalidadesActivas
    .map((clave) => `${datosNombres[clave].bandera} ${datosNombres[clave].etiqueta}`)
    .join(" + ");
  resultInfo.textContent = `${etiquetasNac} · ${etiquetaGenero} · ${nombres.length} nombre(s)`;

  nombres.forEach((item, index) => {
    const datos = datosNombres[item.nacionalidad];

    const li = document.createElement("li");
    li.style.animationDelay = `${index * 0.05}s`;

    const texto = document.createElement("span");
    texto.textContent = item.nombre;

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
  if (cantidad > 20) cantidad = 20;
  quantityInput.value = cantidad;

  const nombres = generarNombres(nacionalidadesActivas, generoActual, cantidad);
  renderNombres(nombres);
});
