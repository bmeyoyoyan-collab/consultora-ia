# consultora-ia

**Una consultora de estrategia hecha de cuatro agentes.**

Convierte un encargo —una consigna académica, un pedido de un cliente— en un deck ejecutivo
con cifras verificadas, análisis con frameworks e identidad visual derivada del sujeto.

---

## Origen

Los trabajos prácticos de la materia **Procesos de Innovación y Nuevos Negocios** están
planteados para grupos de cinco personas. Solicité a la cátedra autorización para resolverlos
de manera individual, asumiendo la dirección del trabajo y delegando su ejecución en un equipo
de agentes de IA con roles diferenciados: tratándose de una materia sobre procesos de
innovación, aplicar uno al propio método de trabajo resultaba una decisión coherente con su
objeto de estudio.

La autorización se concedió con una condición: que el método resultante se publicara en
abierto.

Este repositorio la cumple. Contiene el método completo y en funcionamiento —los cuatro
agentes, las skills, las plantillas y el motor que compila el entregable— documentado para que
pueda reutilizarse, auditarse o mejorarse.

---

## Los cuatro

| Agente | Es dueño de | Entrega |
|---|---|---|
| **Levon** | El encuadre | El brief, la estructura del deck, los prompts |
| **Grigor** | Los números | El data pack, y la auditoría final del deck |
| **Gallego** | El análisis | Un documento por tema, con tesis y consecuencia |
| **Salva** | La producción | El `.pptx` y su QA visual |

La separación no es decoración. Cada uno es dueño de un artefacto distinto y ninguno pisa al
otro: eso es lo que permite que el trabajo escale sin contradecirse.

---

## La dirección

Los cuatro agentes ejecutan. **No deciden.** La dirección del trabajo es humana, y es donde se
define la calidad del resultado: un equipo de agentes bien coordinado produce material
correcto y sin criterio, que es exactamente lo que una cátedra o un directorio penalizan.

Quien dirige es responsable de:

- **El sujeto y la tesis.** Qué empresa se analiza y a qué conclusión debe llegar el argumento.
  Ningún agente elige eso.
- **El encuadre.** Qué entra en el alcance, qué queda afuera y cuánto espacio recibe cada cosa.
- **La corrección del análisis.** Un agente puede entregar un hallazgo verificado y aun así mal
  planteado. Detectarlo exige conocer el negocio, no revisar el procedimiento.
- **La aprobación final.** Nada se entrega sin pasar por ahí.

### Un ejemplo del caso documentado

El diagrama de core competence marcaba tres conexiones de la arquitectura de negocio como
inexistentes. La revisión de dirección determinó que la empresa **sí** tenía esas capacidades
conectadas, y que el vacío real era otro: no faltaba una conexión, faltaba un nodo —una
economía persistente sobre la cual esas capacidades pudieran apoyarse—.

Esa corrección cambió el hallazgo central de la slide y, con él, la recomendación del trabajo.
No salió de ningún agente: salió de leer el diagrama y no creerle.

De ahí sale la regla que hoy vive en la skill —*antes de dibujar algo como roto, pasale el test
del nivel y el del contrafáctico*— y su corolario, que muchas veces lo que falta no es una
conexión sino un nodo. El método aprendió de la corrección humana, no al revés.

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
