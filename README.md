# 🌍 Generador de Nombres

Proyecto de frontend básico que genera hasta **20 sugerencias de nombres** de forma aleatoria, eligiendo **nacionalidad** (combinable) y **género**.

## Características

- **4 nacionalidades disponibles:** Alemán 🇩🇪, Mexicano 🇲🇽, Chino 🇨🇳 y Francés 🇫🇷.
- **Selección múltiple de nacionalidades:** puedes combinar varias a la vez y los nombres se mezclarán entre las seleccionadas.
- **Selector de género:** Masculino (azul 🔵) y Femenino (rosa 🔵).
- Los colores azul y rosa se aplican de forma consistente en los botones, el botón de generar y las tarjetas de resultados.
- Genera hasta **20 nombres** aleatorios (solo nombres de pila, sin apellidos).
- **1 o 2 nombres por persona:** el usuario puede elegir si cada resultado lleva un solo nombre o dos.
- **Resultados agrupados por nacionalidad:** los nombres se organizan en secciones por país y en orden alfabético, no esparcidos.
- La cantidad total se distribuye de forma equitativa entre las nacionalidades seleccionadas.
- Sin dependencias externas: solo HTML, CSS y JavaScript puro.

## Cómo ejecutarlo

No hay nada que instalar. Simplemente abre el archivo `index.html` en tu navegador:

```
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

O usa un servidor local si lo prefieres:

```
npx serve .
python -m http.server
```

## Estructura

```
├── index.html   → Estructura de la página
├── styles.css   → Estilos, animaciones y colores por género
├── script.js    → Lógica del generador y datos de nombres
└── README.md    → Este archivo
```

## Tecnologías

- HTML5
- CSS3
- JavaScript (ES6)
