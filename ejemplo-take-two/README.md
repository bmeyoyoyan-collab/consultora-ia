# Ejemplo trabajado — Take-Two Interactive

El método completo aplicado a un caso real: un trabajo sobre **digitalización de industrias**
con Take-Two Interactive (NASDAQ: TTWO) como sujeto, industria *Electronic Gaming &
Multimedia*, entregado en agosto de 2026.

Está acá porque el método en abstracto no enseña. Esto es lo que produce.

---

## Qué hay

| Archivo | Qué es | Lo produjo |
|---|---|---|
| `BRIEF-TP1.md` | El encuadre completo: encargo textual, frameworks con su estructura, estructura objetivo del deck, mapa de documentos y reglas de trabajo | levon |
| `prompts-investigacion.md` | El preámbulo común y los ocho prompts específicos, uno por tema | levon |
| `investigacion/00-datapack-numerico.md` | **La única fuente de verdad numérica.** Cifras verificadas con el semáforo de confiabilidad, las cifras para citar y la lista de trampas | grigor |
| `investigacion/01` y `02` | Perímetro de la industria y la empresa por dentro | grigor |
| `investigacion/03` a `10` | Un documento por tema, con su framework aplicado | gallego |

Unas **117.000 palabras** de investigación con fuentes citadas, que se destilaron en un deck de
12 slides.

---

## Qué NO hay, y por qué

**El `.pptx` final y sus imágenes.** El deck incluye logos de Take-Two, Rockstar, Zynga y 2K, y
un render derivado del logo oficial de Rockstar. Son marcas de terceros y no corresponde
publicarlas en un repositorio abierto.

Lo que sí está publicado es **el código que las genera**: `scripts/build-deck.js` arma la
maqueta y `scripts/neon-logo.js` produce el render de neón a partir de un SVG que conseguís vos.
La receta, no el archivo.

**El material de la cátedra.** Los PDF de clase y el enunciado son de sus autores. Los
frameworks están descriptos en `skills/catedra-inn/frameworks/` para poder aplicarlos, pero el
material original no se redistribuye.

---

## Por dónde empezar a leerlo

1. **`BRIEF-TP1.md`** — para ver cómo se traduce una consigna en un plan.
2. **`investigacion/00-datapack-numerico.md`** — el artefacto más reutilizable de todos. Fijate
   en la clasificación por confiabilidad y en la sección de trampas: esa lista es la que
   después detectó tres afirmaciones falsas que ya estaban maquetadas en el deck.
3. **`investigacion/09-core-competence-gharajedaghi.md`** — el mejor ejemplo de análisis con
   framework, y el que se convirtió en el diagrama de tres ejes.

---

## Advertencia sobre las cifras

Los datos son de **agosto de 2026** y estaban verificados a esa fecha. Si vas a reutilizar
alguno, verificalo de nuevo: el data pack está construido justamente para que se vea de dónde
salió cada número y se pueda auditar.

Y respetá lo que el propio data pack marca como 🔴 no verificado. Está listado precisamente
para que nadie lo use por accidente.
