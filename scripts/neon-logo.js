/**
 * neon-logo.js — convierte un logo vectorial en un letrero de neón sobre un piso
 * en perspectiva, y lo rasteriza a JPG para usarlo como imagen de slide.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * EL LOGO NO VIENE INCLUIDO Y NO DEBE COMMITEARSE.
 *
 * Este script es la RECETA, no el archivo. Conseguí el SVG oficial de la marca
 * por tu cuenta —el press kit de la empresa, o su CDN— guardalo en ./assets/ y
 * pasáselo por parámetro. Un logo de terceros en un repositorio público es un
 * problema de marcas que no hace falta tener.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Uso:
 *   node neon-logo.js ./assets/marca.svg
 *   node neon-logo.js ./assets/marca.svg --escala 26.5 --x 232 --y 196
 *
 * Por qué SVG y no formas nativas: pptxgenjs no dibuja curvas Bézier ni glows.
 * La técnica es componer un SVG, rasterizarlo con sharp, y montarlo como imagen.
 * La misma técnica sirve para la capa de conexiones curvas de un diagrama de
 * ejes — ver referencias/arquetipos-y-diagramas.md.
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// ── argumentos ───────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const SRC = argv[0];
if (!SRC) {
  console.error("Falta el SVG de la marca.\n  node neon-logo.js ./assets/marca.svg");
  process.exit(1);
}
if (!fs.existsSync(SRC)) {
  console.error("No existe: " + SRC);
  process.exit(1);
}
const arg = (n, d) => { const i = argv.indexOf("--" + n); return i > -1 ? parseFloat(argv[i + 1]) : d; };

// ── lienzo y paleta ──────────────────────────────────────────────────────────
const CW = 1100, CH = 1470;          // proporción vertical: entra en el tercio lateral de una slide
const NIGHT = "#0E0B1F";             // ground oscuro del deck
const MAG = "#FF2E88";               // acento primario — el color del tubo

// ── la marca ─────────────────────────────────────────────────────────────────
// Se extrae el path del SVG oficial. No se redibuja a mano: un logo dibujado a
// ojo se nota, y es exactamente el detalle que hace que el deck pierda seriedad.
const raw = fs.readFileSync(SRC, "utf8");
const m = raw.match(/ d="([^"]+)"/);
if (!m) { console.error("El SVG no tiene un atributo d= reconocible."); process.exit(1); }
const D = m[1];

const S = arg("escala", 26.5);       // el viewBox típico de un icono es 24u
const TX = arg("x", 232), TY = arg("y", 196);
const mark = (extra = "") => `<g transform="translate(${TX},${TY}) scale(${S})"><path d="${D}" ${extra}/></g>`;

// ── piso en perspectiva ──────────────────────────────────────────────────────
// Horizontales con espaciado cuadrático (potencia 2.15) y verticales que
// convergen en el punto de fuga. Es lo que da profundidad sin modelar nada.
const HZ = 968, VPX = 550;
let floor = "";
for (let i = 1; i <= 13; i++) {
  const y = HZ + (CH - HZ) * Math.pow(i / 13, 2.15);
  floor += `<line x1="0" y1="${y.toFixed(1)}" x2="${CW}" y2="${y.toFixed(1)}" stroke="#5B3C9E" stroke-width="${(1 + i * 0.16).toFixed(2)}" stroke-opacity="${(0.16 + i * 0.028).toFixed(3)}"/>`;
}
for (let k = -9; k <= 9; k++) {
  floor += `<line x1="${VPX + k * 22}" y1="${HZ}" x2="${VPX + k * 190}" y2="${CH}" stroke="#5B3C9E" stroke-width="1.6" stroke-opacity="0.24"/>`;
}

// ── composición ──────────────────────────────────────────────────────────────
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${CW}" height="${CH}" viewBox="0 0 ${CW} ${CH}">
<defs>
  <filter id="b34" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="34"/></filter>
  <filter id="b16" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="17"/></filter>
  <filter id="b6"  x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="6"/></filter>
  <radialGradient id="halo" cx="50%" cy="34%" r="60%">
    <stop offset="0%" stop-color="${MAG}" stop-opacity="0.26"/>
    <stop offset="48%" stop-color="#5B1E6B" stop-opacity="0.14"/>
    <stop offset="100%" stop-color="${NIGHT}" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#150F2E"/><stop offset="70%" stop-color="${NIGHT}"/>
  </linearGradient>
  <linearGradient id="tube" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#FF5FA8"/><stop offset="55%" stop-color="${MAG}"/><stop offset="100%" stop-color="#E01A6E"/>
  </linearGradient>
</defs>

<rect width="${CW}" height="${CH}" fill="url(#sky)"/>
<rect width="${CW}" height="${CH}" fill="url(#halo)"/>
${floor}

<!-- reflejo sobre el piso: la marca espejada, muy tenue y desenfocada -->
<g opacity="0.085" filter="url(#b16)" transform="translate(0,${2 * HZ - 2 * TY}) scale(1,-1)">${mark(`fill="${MAG}"`)}</g>

<!-- tres halos, del más ancho al más ceñido. Este apilado es lo que hace el neón:
     una sola capa de blur da un resplandor plano y sintético -->
<g opacity="0.58" filter="url(#b34)">${mark(`fill="${MAG}"`)}</g>
<g opacity="0.72" filter="url(#b16)">${mark(`fill="#FF56A0"`)}</g>
<g opacity="0.85" filter="url(#b6)">${mark(`fill="#FF8CC0"`)}</g>

<!-- núcleo: el tubo, con degradado vertical -->
${mark(`fill="url(#tube)"`)}

<ellipse cx="${VPX}" cy="${HZ + 4}" rx="340" ry="24" fill="${MAG}" fill-opacity="0.16"/>
</svg>`;

const base = path.join(path.dirname(SRC), "neon");
fs.writeFileSync(base + ".svg", svg);
sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile(base + ".jpg")
  .then(() => {
    const kb = (fs.statSync(base + ".jpg").size / 1024).toFixed(0);
    console.log(`neon: ${CW}x${CH}, ${kb} KB -> ${base}.jpg`);
    console.log("");
    console.log("Si la marca queda cortada o el resplandor se ve sucio, ajustá");
    console.log("--escala y --x/--y. Una marca demasiado grande satura los halos");
    console.log("y ensucia los contraformas de las letras.");
  })
  .catch((e) => { console.error("sharp falló: " + e.message); process.exit(1); });
