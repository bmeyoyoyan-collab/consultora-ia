---
name: catedra-inn
description: Pack de frameworks y criterios de la materia Procesos de Innovación y Nuevos Negocios (UTDT). Contiene la estructura exacta del Value Delivery System, el modelo de core competence de Gharajedaghi, el dilema del innovador de Christensen y la matriz del atacante de Fiona Murray, más el estándar de evaluación de la cátedra. Usar junto con deck-de-consultoria cuando el trabajo sea de esta materia.
---

# Pack de la cátedra — Procesos de Innovación y Nuevos Negocios

Capa específica sobre el motor genérico `deck-de-consultoria`. Acá viven los frameworks con su
estructura exacta y el estándar con el que se corrige.

> **Nota sobre la bibliografía.** Este pack describe la *estructura* de los frameworks para
> poder aplicarlos correctamente. No reproduce el material de la cátedra: los PDF de clase y
> los enunciados son de sus autores y no forman parte de este repositorio. Conseguilos por los
> canales de la materia.

---

## El estándar de evaluación

La metodología es **Action-Based Learning**: se evalúa desempeño y calidad de decisión, no
descripción. La consigna lo advierte de forma explícita y conviene tomárselo al pie de la
letra: penaliza enumerar temas con mucho nivel de descripción, y exige que el trabajo tenga
valor estratégico.

Traducido a instrucciones concretas para el trabajo:

- **No hagas listas de tendencias.** Cada sección sostiene una tesis y deriva una consecuencia
  para la empresa analizada.
- **Nombrar un framework no es aplicarlo.** Si lo invocás, dibujalo y ubicá el caso adentro.
- **El titular de cada slide es una conclusión, no una etiqueta.**

---

## Los frameworks

| Framework | Clase | Archivo |
|---|---|---|
| Value Delivery System | 2 | `frameworks/value-delivery-system.md` |
| Core Competence — Gharajedaghi | 2 | `frameworks/gharajedaghi-core-competence.md` |
| El Dilema del Innovador — Christensen | 2 | `frameworks/christensen-dilema.md` |
| Diagnóstico del incumbente y perspectiva del atacante | 1 | `frameworks/diagnostico-del-incumbente.md` |

**Reproducí la estructura tal cual está.** Un framework con un eje de más, un cuadrante
renombrado o una fase omitida se detecta antes de que el evaluador lea el contenido, y a partir
de ahí lee el resto con desconfianza. Es donde más barato se pierden puntos.

Cuando el caso real no encaja limpio en el framework, **eso es un hallazgo, no un problema**.
Decilo: «este eje del modelo asume X, y en este caso no se cumple porque...». Vale mucho más
que forzar el encaje.

---

## Estructura de referencia para el TP de digitalización de industrias

El encargo típico: actuar como una consultora de estrategia contratada por una empresa para
presentarle al Directorio las tendencias de su industria y los riesgos y oportunidades que
enfrenta.

Diez secciones que caben en diez a doce slides:

| # | Sección | Framework que la sostiene |
|---|---|---|
| 1 | Portada | — |
| 2 | Encuadre e índice | — |
| 3 | Choose the value | VDS, bloque 1 |
| 4 | Provide the value | VDS, bloque 2 |
| 5 | Communicate the value | VDS, bloque 3 |
| 6 | Ventajas competitivas | Dimensión transversal del VDS |
| 7 | Apalancamiento económico | Dimensión transversal del VDS |
| 8 | Barreras de entrada | Dimensión transversal del VDS |
| 9 | Core competence y arquitectura de negocio | Gharajedaghi |
| 10 | Factores clave de éxito y cómo cambian | Clase 1 |
| 11 | Riesgos | Christensen + Murray |
| 12 | Recomendación al Directorio | — |

Las slides 3 a 5 llevan el **antes / después de la digitalización**: cómo era cada sub-proceso
del VDS antes y en qué se convirtió. Es el corazón del trabajo y donde se juega la nota.

---

## Los tres tipos de afirmación

La cátedra distingue —y conviene explicitarlo en el propio deck— entre:

1. **Dato reportado** por la empresa en un documento oficial.
2. **Estimación de un tercero**, citando quién estima.
3. **Inferencia propia**, mostrando el razonamiento.

Mezclarlas sin marcar la diferencia es la forma más rápida de perder credibilidad ante un
panel que conoce el sector.

---

## Si el trabajo no es el de digitalización

Este pack está armado alrededor del TP de digitalización de industrias, que es el que está
documentado de punta a punta en `ejemplo-take-two/`. La materia tiene otros entregables a lo
largo de la cursada, con consignas propias: el programa vigente lo publica la cátedra y no se
reproduce acá.

**No asumas que el método de un TP se traslada al siguiente.** Los requisitos cambian bastante
entre uno y otro: lo que sirve para analizar una empresa con frameworks de industria no sirve
para un trabajo de perfiles de equipo ni para uno de valuación. Al arrancar un TP nuevo, que
`levon` relea el enunciado
específico antes de proponer estructura.
