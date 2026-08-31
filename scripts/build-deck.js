/**
 * build-deck.js — motor de deck ejecutivo con pptxgenjs
 *
 * Todo lo configurable está arriba. El contenido, abajo.
 * Corré `npm install` en esta carpeta y después `node build-deck.js`.
 *
 * Genera un deck de demostración de 4 slides que muestra los arquetipos y
 * respeta la escala tipográfica mínima. Reemplazá el bloque CONTENIDO por el
 * tuyo; no toques los pisos de la escala.
 */

const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

// ════════════════════════════════════════════════════════════════════
//  CONFIGURACIÓN
// ════════════════════════════════════════════════════════════════════

// Carpeta de imágenes. Si no existe, el deck se genera igual sin ellas.
const A = path.join(__dirname, "assets") + path.sep;
const OUT = path.join(__dirname, "deck.pptx");

const AUTOR = "{{AUTOR}}";
const TITULO = "{{TITULO DEL TRABAJO}}";

/* PALETA FUNCIONAL — seis roles, cada color con una función asignada.
   Estos valores son un ejemplo: derivalos del sujeto de tu deck.
   Ver skills/deck-de-consultoria/referencias/identidad-visual.md          */
const DARK = "0E0B1F";   // ground oscuro   — portada y cierre
const LIGHT = "FAF8F5";  // ground claro    — contenido. NUNCA blanco puro
const ACC1 = "FF2E88";   // acento primario — el dato clave, el énfasis
const ACC2 = "00D4E0";   // acento secundario
const TEXT = "14121F";   // texto oscuro    — casi negro, con el matiz de la marca
const MUTED = "56505F";  // texto secundario
const BORDER = "E2DED8"; // bordes y celdas
const WHITE = "FFFFFF";
const TINT = "FFF3F8";   // fondo teñido para la columna "después"
const DIM = "C9C3D6";    // etiquetas sobre fondo oscuro

const F = "Segoe UI";    // fuente de amplia instalación: sobrevive el viaje a otra máquina

/* GEOMETRÍA — slide 16:9 de 13.33 x 7.5 pulgadas */
const W = 13.33, H = 7.5, M = 0.55, CW = W - 2 * M;

/* ESCALA TIPOGRÁFICA — PISOS, no sugerencias.
   Si el contenido no entra, se recorta el contenido. Nunca se baja un número. */
const T_TITLE = 28;   // título de slide      · mínimo 26
const T_THESIS = 15.5; // bajada bajo el título · mínimo 15
const T_KICK = 11;    // kicker
const T_ITEM = 15;    // título de ítem       · mínimo 14
const T_DESC = 12.5;  // descripción de ítem  · mínimo 12
const T_CELL = 12;    // celda de tabla       · mínimo 11
const T_HEAD = 12;    // encabezado de tabla
const T_FOOT = 8.5;   // notas al pie
const T_ICON = 22;    // íconos de estado     · mínimo 20. El error silencioso
const T_BIG = 60;     // callout de cifra     · mínimo 40

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.author = AUTOR;
pres.title = TITULO;

const img = (n) => (fs.existsSync(A + n) ? A + n : null);

// ════════════════════════════════════════════════════════════════════
//  HELPERS
// ════════════════════════════════════════════════════════════════════

/* valign:"top" y margin:0 son obligatorios: por defecto pptxgenjs centra
   vertical y deja huecos muertos que sólo se ven al renderizar. */
const tb = (o) => Object.assign({ isTextBox: true, valign: "top", margin: 0, fontFace: F }, o);

const lightSlide = () => { const s = pres.addSlide(); s.background = { color: LIGHT }; return s; };

function kicker(s, txt, color) {
  s.addText(txt, tb({ x: M, y: 0.42, w: CW, h: 0.28, fontSize: T_KICK, bold: true, charSpacing: 2, color: color || ACC1 }));
}

/* El titular es una TESIS, no una etiqueta. Y entra en una línea:
   si envuelve a dos, pisa la bajada. */
function title(s, txt) {
  s.addText(txt, tb({ x: M, y: 0.76, w: CW, h: 0.52, fontSize: T_TITLE, bold: true, color: TEXT }));
}

function thesis(s, txt) {
  s.addText(txt, tb({ x: M, y: 1.36, w: CW, h: 0.38, fontSize: T_THESIS, italic: true, color: MUTED }));
}

function foot(s, txt) {
  s.addText(txt, tb({ x: M, y: 7.0, w: CW, h: 0.3, fontSize: T_FOOT, color: "8C8698" }));
}

/* Caja oscura de conclusión. POTENTE Y POR ESO RACIONADA:
   máximo tres apariciones en todo el deck. */
function darkBox(s, y, h, label, runs) {
  s.addShape(pres.ShapeType.roundRect, { x: M, y, w: CW, h, fill: { color: DARK }, line: { color: DARK, width: 0 }, rectRadius: 0.04 });
  s.addText(label, tb({ x: 0.82, y: y + 0.15, w: 8, h: 0.26, fontSize: 11, bold: true, charSpacing: 1.5, color: ACC2 }));
  s.addText(runs, tb({ x: 0.82, y: y + 0.45, w: CW - 0.54, h: h - 0.58, fontSize: T_DESC, lineSpacing: 17 }));
}

/* Tabla antes/después. TRES columnas, no cuatro: la cuarta obliga a
   tipografía ilegible. El veredicto propio va en darkBox, no como columna. */
function tablaAntesDespues(s, rows, y, rowH) {
  const head = [
    { text: "", options: { fill: LIGHT, border: [{ type: "none" }] } },
    { text: "ANTES", options: { fill: "EAE6E0", color: MUTED, bold: true, align: "center", fontSize: T_HEAD } },
    { text: "DESPUÉS", options: { fill: ACC1, color: WHITE, bold: true, align: "center", fontSize: T_HEAD } },
  ];
  const body = rows.map((r) => [
    { text: r[0], options: { fill: DARK, color: WHITE, bold: true, fontSize: T_HEAD, valign: "middle" } },
    { text: r[1], options: { fill: WHITE, color: MUTED, fontSize: T_CELL, valign: "middle" } },
    { text: r[2], options: { fill: TINT, color: TEXT, fontSize: T_CELL, valign: "middle" } },
  ]);
  /* OJO: la fila de encabezado roba altura del array rowH y aplasta la última
     fila. Por eso el 0.42 va explícito al principio del array. */
  s.addTable([head, ...body], {
    x: M, y, w: CW, colW: [2.35, 4.94, 4.94],
    rowH: [0.42, ...rows.map(() => rowH)],
    border: { type: "solid", color: BORDER, pt: 0.5 },
    fontFace: F, margin: 8, autoPage: false,
  });
}

/* Lista etiquetada — arquetipo D. Máximo 7 ítems.
   Cada ítem: [icono, titulo, descripcion].
   El título y la descripción van en la MISMA caja acá; si el salto de tamaño
   entre ambos es parte de tu jerarquía y el deck viaja a Canva, separalos en
   dos cajas: Canva colapsa los tamaños mixtos de una caja al más chico. */
function itemList(s, items, x, y, w, gap) {
  items.forEach((it, i) => {
    const yy = y + i * gap;
    const on = it[0] === "★";
    s.addText(it[0], tb({ x, y: yy - 0.05, w: 0.4, h: 0.36, fontSize: T_ICON, color: on ? ACC2 : ACC1 }));
    s.addText([
      { text: it[1] + "   ", options: { bold: true, color: TEXT, fontSize: T_ITEM } },
      { text: it[2], options: { color: MUTED, fontSize: T_DESC } },
    ], tb({ x: x + 0.44, y: yy, w: w - 0.44, h: gap - 0.03, lineSpacing: 16 }));
  });
}

/* Callout de cifra grande. Insustituible en slides económicas y el recurso
   más barato para romper la monotonía de cajas. */
function callout(s, x, y, w, cifra, etiqueta, color) {
  s.addText(cifra, tb({ x, y, w, h: 0.9, fontSize: T_BIG, bold: true, color: color || ACC1 }));
  s.addText(etiqueta, tb({ x, y: y + 0.92, w, h: 0.5, fontSize: T_DESC, color: MUTED, lineSpacing: 15 }));
}

/* Conector recto. Para curvas Bézier pptxgenjs no sirve: hay que componer un
   SVG, rasterizarlo con sharp y montarlo como capa debajo de los nodos.
   Ver neon-logo.js para la técnica de rasterización. */
function link(s, x1, y1, x2, y2, color, dash, wid) {
  const x = Math.min(x1, x2), y = Math.min(y1, y2);
  const w = Math.abs(x2 - x1), h = Math.abs(y2 - y1);
  const flipV = (x1 < x2) !== (y1 < y2);
  s.addShape(pres.ShapeType.line, { x, y, w, h, flipV, line: { color, width: wid || 1.25, dashType: dash || "solid" } });
}

// ════════════════════════════════════════════════════════════════════
//  CONTENIDO — reemplazar por el propio
// ════════════════════════════════════════════════════════════════════

// ── 1 · PORTADA (arquetipo A) ──────────────────────────────────────
{
  const s = pres.addSlide();
  const bg = img("portada.jpg");
  if (bg) s.background = { path: bg }; else s.background = { color: DARK };
  // Scrim: sin esto el texto pierde contraste sobre cualquier imagen
  s.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: W, h: H, fill: { color: DARK, transparency: 30 } });
  s.addShape(pres.ShapeType.rect, { x: 0, y: 0, w: 7.7, h: H, fill: { color: DARK, transparency: 16 } });

  s.addText("NOMBRE DE LA MATERIA\nTRABAJO PRÁCTICO N° 1",
    tb({ x: M, y: 0.98, w: 7.3, h: 0.62, fontSize: 12, bold: true, charSpacing: 2, color: ACC2, lineSpacing: 19 }));
  s.addText("Título del\ntrabajo",
    tb({ x: M, y: 1.80, w: 7.2, h: 2.05, fontSize: 50, bold: true, color: WHITE, lineSpacing: 50 }));
  s.addText([
    { text: "Industria:  ", options: { color: DIM } },
    { text: "{{INDUSTRIA}}\n", options: { color: WHITE, bold: true } },
    { text: "Empresa:  ", options: { color: DIM } },
    { text: "{{EMPRESA}}", options: { color: WHITE, bold: true } },
  ], tb({ x: M, y: 4.05, w: 7.2, h: 0.8, fontSize: 14, lineSpacing: 22 }));
  s.addText(`${AUTOR} · Legajo {{LEGAJO}} · {{SECCIÓN}} · {{FECHA}}`,
    tb({ x: M, y: 6.75, w: 8.5, h: 0.3, fontSize: 11, color: DIM }));
}

// ── 2 · TABLA ANTES / DESPUÉS (arquetipo C) ────────────────────────
{
  const s = lightSlide();
  kicker(s, "01 · NOMBRE DEL BLOQUE");
  title(s, "El titular es la conclusión, no la etiqueta del framework");
  thesis(s, "Una línea que explica por qué la tabla de abajo importa.");

  tablaAntesDespues(s, [
    ["Sub-proceso 1", "Cómo era antes de la digitalización", "En qué se convirtió"],
    ["Sub-proceso 2", "Cómo era antes", "En qué se convirtió"],
    ["Sub-proceso 3", "Cómo era antes", "En qué se convirtió"],
  ], 1.92, 0.86);

  /* La tabla termina en 1.92 + 0.42 (encabezado) + 3 x 0.86 = 4.92.
     Poner la caja en 4.72 la hacía pisar la última fila: se veía sólo al
     renderizar. Calculá siempre el borde inferior real, encabezado incluido. */
  darkBox(s, 5.08, 1.42, "QUÉ SIGNIFICA PARA LA EMPRESA", [
    { text: "El veredicto propio va acá, ", options: { color: WHITE } },
    { text: "no como cuarta columna de la tabla.", options: { color: ACC1, bold: true } },
  ]);
  foot(s, "Fuente: [1] Referencia con URL completa.");
}

// ── 3 · LISTA ETIQUETADA CON IMAGEN (arquetipo D) ──────────────────
{
  const s = lightSlide();
  kicker(s, "02 · OTRO BLOQUE");
  title(s, "Máximo siete ítems, y con una imagen al costado");
  thesis(s, "Un bloque de ocho slides de cajas se lee como un formulario.");

  const ilu = img("lateral.jpg");
  if (ilu) s.addImage({ path: ilu, x: 9.05, y: 1.9, w: 3.73, h: 4.6 });

  itemList(s, [
    ["★", "Lo que sí tiene", "El ícono grande codifica el estado. A 10 pt sería invisible."],
    ["★", "Otra fortaleza", "Descripción de una línea, no dos."],
    ["⚠", "Lo que le falta", "El sistema de etiquetas necesita leyenda al pie."],
    ["⚠", "Otro faltante", "Siete ítems es el techo, no la meta."],
  ], M, 2.0, 8.2, 0.82);

  foot(s, "★ capturado   ⚠ sin capturar        Fuente: [2] Referencia.");
}

// ── 4 · CIERRE CON CALLOUTS (arquetipo E) ──────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: DARK };
  s.addText("RECOMENDACIÓN AL DIRECTORIO",
    tb({ x: M, y: 0.7, w: CW, h: 0.3, fontSize: T_KICK, bold: true, charSpacing: 2, color: ACC2 }));
  s.addText("La tesis del deck entera, en una sola frase",
    tb({ x: M, y: 1.15, w: 10.5, h: 0.9, fontSize: 32, bold: true, color: WHITE, lineSpacing: 38 }));

  callout(s, M, 2.9, 3.6, "3,1x", "Etiqueta chica que explica\nqué es la cifra", ACC1);
  callout(s, 4.55, 2.9, 3.6, "39,8%", "Segunda cifra que\nsostiene la tesis", ACC2);
  callout(s, 8.6, 2.9, 3.6, "12", "Tercera. Tres o cuatro,\nnunca más", WHITE);

  s.addText(`${AUTOR} · {{FECHA}}`, tb({ x: M, y: 6.85, w: 8, h: 0.3, fontSize: 10, color: DIM }));
}

// ════════════════════════════════════════════════════════════════════

pres.writeFile({ fileName: OUT }).then(() => {
  console.log("Deck generado: " + OUT);
  console.log("");
  console.log("FALTA EL PASO OBLIGATORIO: renderizalo y miralo.");
  console.log("  powershell -File render-qa.ps1 -Deck \"" + OUT + "\"");
});
