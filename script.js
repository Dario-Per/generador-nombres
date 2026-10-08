// ============================================================
// Generador de nombres por nacionalidad y género
// (solo nombres, sin apellidos; agrupados por nacionalidad)
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
      "Leonhard", "Valentin", "Matthäus", "Gabriel", "Raphael", "Samuel",
      "David", "Jonathan", "Christian", "Martin", "Thomas", "Michael",
      "Sebastian", "Dominik", "Florian", "Philipp", "Simon", "Markus",
      "Marco", "Kevin", "Marvin", "Jannik", "Benedikt",
    ],
    femenino: [
      "Emma", "Mia", "Hannah", "Sophia", "Emilia", "Lena", "Marie", "Clara",
      "Amelia", "Mila", "Ida", "Luca", "Lea", "Johanna", "Anna", "Sophie",
      "Laura", "Nele", "Greta", "Heidi", "Ingrid", "Helga", "Ursula",
      "Petra", "Monika", "Birgit", "Katrin", "Sabine", "Mathilde", "Frieda",
      "Paulina", "Charlotte", "Alice", "Nora", "Lily", "Melina", "Vanessa",
      "Jasmin", "Lisa", "Sarah", "Julia", "Christina", "Sabrina", "Nadine",
      "Stefanie", "Karin", "Renate", "Christa", "Doris", "Marlene", "Hilda",
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
      "Adrián", "Gerardo", "Gonzalo", "Héctor", "Miguel", "Arturo", "Rubén",
      "Óliver", "Dylan", "Kevin", "Bryan", "César", "Raúl", "Ernesto",
      "Ramiro", "Aurelio", "Blas", "Cirilo", "Damián", "Efraín", "Fabián",
      "Gael", "Humberto", "Ismael", "Joaquín",
    ],
    femenino: [
      "Sofía", "Valentina", "Camila", "María", "Guadalupe", "Fernanda",
      "Ximena", "Renata", "Victoria", "Andrea", "Daniela", "Alejandra",
      "Paulina", "Gabriela", "Adriana", "Carolina", "Rocío", "Patricia",
      "Rosa", "Carmen", "Elena", "Lucía", "Regina", "Isabella", "Natalia",
      "Perla", "Citlali", "Itzel", "Dulce", "Rebeca", "Abril", "Alondra",
      "Belén", "Esmeralda", "Fabiola", "Griselda", "Irlanda", "Jimena",
      "Lourdes", "Marisol", "Nayeli", "Olga", "Priscila", "Quetzalli",
      "Selene", "Tania", "Xóchitl", "Yolanda", "Zulema", "Aurora", "Claudia",
    ],
  },

  china: {
    etiqueta: "Chino",
    bandera: "🇨🇳",
    masculino: [
      "Wei", "Ming", "Jun", "Jian", "Lei", "Feng", "Qiang", "Gang",
      "Bin", "Chao", "Hao", "Yang", "Peng", "Tao", "Xin", "Bo",
      "Fan", "Jie", "Kang", "Long", "Rui", "Xiang", "Yu", "Zhe",
      "Chen", "Li", "Wen", "Zhi", "Yong", "Xiaoping", "Jianhua",
      "Guoqiang", "Wenhao", "Zhiyuan", "Junjie", "Haoran", "Yuxuan",
      "Zeyu", "Xinyang", "Zihao", "Bohan", "Ruize", "Jinhao", "Yuanhao",
      "Zhihao", "Longwei", "Jianjun", "Guoming", "Ding", "Kai", "Xuan",
    ],
    femenino: [
      "Mei", "Ling", "Xiu", "Fang", "Yan", "Hua", "Jing", "Na",
      "Xin", "Zhen", "Xia", "Ying", "Chun", "Fen", "Juan", "Lan",
      "Ping", "Rong", "Wen", "Yaqin", "Lihua", "Xiuying", "Dan", "Li",
      "Xiao", "Yanling", "Huiling", "Shufen", "Meiling", "Guizhen",
      "Yuting", "Yuxin", "Xinyi", "Jiaqi", "Siqi", "Yue", "Shanshan",
      "Tingting", "Caihong", "Lifen", "Yuyan", "Qing", "Nana", "Liling",
      "Xiuling", "Cuiping", "Ailing", "Peiyu", "Yiru", "Siyu", "Wanqing",
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
      "Quentin", "Florian", "Sébastien", "Olivier", "Guillaume", "Matthieu",
      "Vincent", "Christophe", "Stéphane", "Alain", "Marcel", "Cédric",
      "Loïc", "Aurélien", "Rémi", "Thibault", "Corentin", "Étienne",
      "Félix", "Gaston", "Henri", "Léo", "Bastien", "Cyprien", "Amaury",
    ],
    femenino: [
      "Camille", "Marie", "Louise", "Léa", "Chloé", "Manon", "Emma",
      "Sarah", "Julie", "Anaïs", "Laura", "Marine", "Justine", "Élodie",
      "Célia", "Juliette", "Alice", "Inès", "Lucie", "Margaux", "Océane",
      "Amélie", "Aurélie", "Céline", "Émilie", "Isabelle", "Nathalie",
      "Sandrine", "Véronique", "Yvette", "Colombe", "Solène", "Maëlys",
      "Amandine", "Delphine", "Florence", "Hélène", "Aurore", "Béatrice",
      "Cécile", "Colette", "Denise", "Élise", "Françoise", "Geneviève",
      "Irène", "Joséphine", "Marguerite", "Suzanne", "Vivienne", "Marianne",
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
 * Genera nombres agrupados por nacionalidad.
 * La cantidad total se distribuye de forma equitativa entre las
 * nacionalidades activas (el resto se reparte al azar).
 *
 * @param {string[]} nacionalidades - Claves activas.
 * @param {string} genero - masculino | femenino
 * @param {number} cantidad - Total de nombres a generar (1 a 20).
 * @param {number} numNombres - 1 o 2 nombres por persona.
 * @returns {{nacionalidad: string, nombres: string[][]}[]}
 */
function generarNombres(nacionalidades, genero, cantidad, numNombres) {
  const numGrupos = nacionalidades.length;
  const base = Math.floor(cantidad / numGrupos);
  const resto = cantidad % numGrupos;

  // Repartir el resto al azar entre los grupos
  const extras = new Array(numGrupos).fill(0);
  const indices = barajar(Array.from({ length: numGrupos }, (_, i) => i));
  for (let i = 0; i < resto; i++) {
    extras[indices[i]] = 1;
  }

  const resultado = nacionalidades.map((clave, i) => {
    const datos = datosNombres[clave];
    const pool = barajar(genero === "masculino" ? datos.masculino : datos.femenino);
    const cuenta = Math.min(base + extras[i], pool.length);

    const nombres = [];
    const usados = new Set(); // evitar repetir el primer nombre

    for (let k = 0; k < cuenta; k++) {
      // Elegir un primer nombre no usado aún en este grupo
      let primero = pool[k % pool.length];
      while (usados.has(primero)) {
        primero = elementoAleatorio(pool);
      }
      usados.add(primero);

      const entrada = [primero];

      if (numNombres === 2 && pool.length > 1) {
        // Segundo nombre distinto del primero, de la misma nacionalidad
        const candidatos = pool.filter((n) => n !== primero);
        entrada.push(elementoAleatorio(candidatos));
      }
      nombres.push(entrada);
    }

    // Orden alfabético dentro del grupo
    nombres.sort((a, b) => a[0].localeCompare(b[0], "es"));

    return { nacionalidad: clave, nombres };
  });

  return resultado.filter((g) => g.nombres.length > 0);
}

// ============================================================
// Interfaz de usuario
// ============================================================

const nationalityGroup = document.getElementById("nationalityGroup");
const genderGroup = document.getElementById("genderGroup");
const namesPerPersonGroup = document.getElementById("namesPerPersonGroup");
const quantityInput = document.getElementById("quantity");
const generateBtn = document.getElementById("generateBtn");
const namesList = document.getElementById("namesList");
const emptyMessage = document.getElementById("emptyMessage");
const resultInfo = document.getElementById("resultInfo");

let nacionalidadesActivas = ["alemana"];
let generoActual = "masculino";
let nombresPorPersona = 1;

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

// Selección de nombres por persona (1 o 2)
namesPerPersonGroup.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-count]");
  if (!btn) return;
  namesPerPersonGroup.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  nombresPorPersona = parseInt(btn.dataset.count, 10);
});

function renderNombres(grupos) {
  namesList.innerHTML = "";
  emptyMessage.style.display = "none";

  // Resumen superior
  const etiquetaGenero = generoActual === "masculino" ? "Masculino" : "Femenino";
  const etiquetasNac = grupos
    .map((g) => `${datosNombres[g.nacionalidad].bandera} ${datosNombres[g.nacionalidad].etiqueta}`)
    .join(" + ");
  const total = grupos.reduce((suma, g) => suma + g.nombres.length, 0);
  const etiquetaPorPersona = nombresPorPersona === 1 ? "1 nombre" : "2 nombres";
  resultInfo.textContent = `${etiquetasNac} · ${etiquetaGenero} · ${etiquetaPorPersona} por persona · ${total} en total`;

  // Render agrupado por nacionalidad
  grupos.forEach((grupo, grupoIndex) => {
    const datos = datosNombres[grupo.nacionalidad];

    const groupDiv = document.createElement("div");
    groupDiv.className = "name-group";
    groupDiv.style.animationDelay = `${grupoIndex * 0.08}s`;

    const titulo = document.createElement("h3");
    titulo.className = "group-title";
    titulo.textContent = `${datos.bandera} ${datos.etiqueta} (${grupo.nombres.length})`;
    groupDiv.appendChild(titulo);

    const ul = document.createElement("ul");
    grupo.nombres.forEach((entrada, index) => {
      const li = document.createElement("li");
      li.style.animationDelay = `${grupoIndex * 0.08 + index * 0.04}s`;

      const texto = document.createElement("span");
      texto.textContent = entrada.join(" ");

      li.appendChild(texto);
      ul.appendChild(li);
    });

    groupDiv.appendChild(ul);
    namesList.appendChild(groupDiv);
  });
}

generateBtn.addEventListener("click", () => {
  let cantidad = parseInt(quantityInput.value, 10);
  if (isNaN(cantidad) || cantidad < 1) cantidad = 1;
  if (cantidad > 20) cantidad = 20;
  quantityInput.value = cantidad;

  const grupos = generarNombres(nacionalidadesActivas, generoActual, cantidad, nombresPorPersona);
  renderNombres(grupos);
});
