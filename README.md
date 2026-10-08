# 🌍 Generador de Nombres

Proyecto de frontend básico que genera hasta **10 sugerencias de nombres** de forma aleatoria, eligiendo **nacionalidad** y **género**.

## Características

- **4 nacionalidades disponibles:** Alemán 🇩🇪, Mexicano 🇲🇽, Chino 🇨🇳 y Francés 🇫🇷.
- **Selector de género:** Masculino (azul 🔵) y Femenino (rosa 🔵).
- Los colores azul y rosa se aplican de forma consistente en los botones, el botón de generar y las tarjetas de resultados.
- Genera nombres completos aleatorios (nombre de pila + apellido) según la selección.
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
