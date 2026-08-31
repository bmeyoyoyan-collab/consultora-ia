# consultora-ia

**Una consultora de estrategia hecha de cuatro agentes.**

Convierte un encargo —una consigna académica, un pedido de un cliente— en un deck ejecutivo
con cifras verificadas, análisis con frameworks e identidad visual derivada del sujeto.

---

## De dónde salió esto

La materia pedía hacer el trabajo en **grupos de cinco**. Yo lo hice solo, con agentes de IA, y
lo hablé con el profesor antes: la materia se llama Procesos de Innovación y Nuevos Negocios,
y me pareció que la forma más honesta de tomármela en serio era innovar en el cómo, no sólo
escribir sobre innovación. Le gustó la idea, con una condición: que todo fuera **open source**.

Este repositorio es esa condición cumplida. Es el método completo, funcionando, para que
cualquiera lo use, lo critique o lo mejore.

El grupo terminó siendo de cinco igual: cuatro agentes y yo.

---

## Los cuatro

| Agente | Es dueño de | Entrega |
|---|---|---|
| **Levon** | El encuadre | El brief, la estructura del deck, los prompts |
| **Grigor** | Los números | El data pack, y la auditoría final del deck |
| **Gallego** | El análisis | Un documento por tema, con tesis y consecuencia |
| **Salva** | La producción | El `.pptx` y su QA visual |

La separación no es decoración. Cada uno es dueño de un artefacto distinto y ninguno pisa al
otro: eso es lo que permite que el trabajo escale sin contradecirse. El quinto —quien pide el
trabajo— decide, corta y aprueba. Los agentes no deciden alcance.

---

## Las tres cosas que hacen la diferencia

Todo lo demás del repo es detalle. Estas tres son las que cambian el resultado:

**1 · Una sola fuente de verdad numérica, fijada antes de investigar.**
Si cada analista busca las cifras por su cuenta, cada uno encuentra una versión distinta —uno
toma ingresos GAAP, otro bookings, otro el año calendario en vez del fiscal— y el deck termina
diciendo tres números para la misma cosa. El data pack se construye primero y los demás lo
citan sin re-investigarlo.

**2 · Lotes de dos agentes, nunca ocho.**
Esta se aprendió a la fuerza: ocho agentes de investigación lanzados en paralelo agotaron el
límite de sesión en los primeros minutos y murieron todos sin escribir un solo archivo. Dos,
corriendo completos, entregaron 37.000 palabras. El paralelismo no abarata el trabajo, sólo
concentra el gasto.

**3 · Nunca entregar un deck que no viste renderizado.**
El código compila perfecto y la slide está rota igual: una fila de tabla aplastada, un título
que envuelve y pisa la bajada, texto que desborda su caja. Ninguno de esos defectos se ve
leyendo el código. En el caso de referencia, las dos auditorías finales encontraron tres
afirmaciones falsas ya maquetadas y tres defectos de layout.

---

## Instalación

Requiere [Claude Code](https://claude.com/claude-code).

```
/plugin marketplace add bmeyoyoyan-collab/consultora-ia
```

```
/plugin install consultora-ia
```

Quedan disponibles los cuatro agentes y las dos skills. Si preferís no instalar el plugin,
copiá `agents/` y `skills/` a tu `~/.claude/`.

Para el motor de decks:

```bash
cd scripts && npm install
```

---

## Cómo se usa

Pedile a Claude Code lo que necesitás y dejá que despache a los agentes. El flujo que sigue:

| Fase | Quién | Qué pasa |
|---|---|---|
| 0 · Encuadre | Levon | Lee la consigna, arma el brief y los prompts. **Te pide confirmación antes de seguir** |
| 1 · Data pack | Grigor | Fija las cifras verificadas |
| 2 · Investigación | Gallego ×N | Un agente por tema, en lotes de dos |
| 3 · Producción | Salva | Identidad visual, maquetado, build |
| 4 · Doble auditoría | Grigor + Salva | Datos contra el data pack; render slide por slide |

Probar el motor de decks por separado, sin nada más:

```bash
node scripts/build-deck.js
```

```bash
powershell -File scripts/render-qa.ps1 -Deck scripts/deck.pptx
```

---

## Estructura

```
agents/            Levon, Grigor, Gallego, Salva
skills/
  deck-de-consultoria/   El motor. Sirve para cualquier empresa
    referencias/         Identidad visual · arquetipos y diagramas · QA visual
  catedra-inn/           Capa específica de la materia
    frameworks/          VDS · Gharajedaghi · Christensen · diagnóstico del incumbente
scripts/           build-deck.js · render-qa.ps1 · neon-logo.js
plantillas/        BRIEF.md · prompt-investigacion.md
ejemplo-take-two/  El TP1 real: brief, prompts y 117.000 palabras de investigación
```

Las dos capas son deliberadas: **`deck-de-consultoria` no sabe nada de la materia** y sirve para
cualquier deck de consultoría. `catedra-inn` es la capa de arriba, con los frameworks y el
estándar de corrección. Si tu trabajo es de otra materia o de otro cliente, usá sólo la primera.

---

## Requisitos

- **Claude Code**
- **Node.js** para el motor de decks (`pptxgenjs` y `sharp`)
- **Microsoft PowerPoint**, opcional pero muy recomendado: es lo que permite renderizar las
  slides con fidelidad real para el QA. Sin él, la alternativa es LibreOffice a PDF y después
  `pdftoppm`, que sustituye fuentes y sirve para detectar desbordes pero no para juzgar
  tipografía.

---

## Qué no vas a encontrar acá

- **El material de la cátedra.** Los PDF de clase y los enunciados son de sus autores. Los
  frameworks están descriptos para poder aplicarlos; el material original no se redistribuye.
- **Logos de marcas.** El repo publica el código que los procesa, no los archivos.
- **El `.pptx` final del ejemplo.** Por lo mismo: incluye marcas de terceros.

---

## Licencia

MIT. Usalo, copialo, cambialo. Si te sirve para tu trabajo práctico, mejor.

Si lo mejorás, mandá un pull request — sobre todo si encontrás una lección nueva de las que
sólo se aprenden a la fuerza.
