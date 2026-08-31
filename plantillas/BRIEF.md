# BRIEF — {{NOMBRE DEL TRABAJO}}
## {{EMPRESA}} · Industria: {{INDUSTRIA}}

> Plantilla del artefacto que produce **levon**. Reemplazá todo lo que esté entre llaves.
> Este documento es la referencia común de los cuatro agentes: si algo no está acá, no existe.

---

## 1. Datos administrativos

| | |
|---|---|
| **Materia / cliente** | {{MATERIA O CLIENTE}} |
| **Entregable** | {{TP N° X · NOMBRE}} |
| **Autor** | {{AUTOR}} · Legajo {{LEGAJO}} · {{SECCIÓN}} |
| **Fecha de entrega** | {{DD/MM/AAAA}} |
| **Formato exigido** | {{PPT / PDF / Canva}} |
| **Extensión** | {{N slides estimadas, máximo M}} |

---

## 2. El encargo — textual

> {{Pegar acá la cita LITERAL del enunciado o del pedido del cliente. No parafrasear:
> los demás agentes derivan de este texto, y una paráfrasis propaga su propio sesgo.}}

### Entregables mínimos

1. {{...}}
2. {{...}}

### Criterios de evaluación

{{Transcribir los criterios, sobre todo los NEGATIVOS. Si la consigna dice que penaliza algo,
eso es una instrucción de diseño, no una advertencia decorativa.}}

### El rol que hay que asumir

{{Ej.: "una consultora de estrategia de nivel mundial presentando al Directorio". Define el
registro, el nivel de detalle y a quién se le habla.}}

---

## 3. Frameworks obligatorios

Para cada uno: **nombre, fuente y estructura exacta**. Cuántos ejes, cuántas fases, cómo se
llama cada una. Un framework mal reproducido se detecta antes de que lean el contenido.

### 3.1 {{Framework}}

*{{Autor, obra}}*

{{Estructura, en tabla o lista. Nombres tal como los usa la cátedra o el cliente,
incluyendo los que van en inglés.}}

---

## 4. Estructura objetivo del deck

| Slide | Sección | Arquetipo | Alimentada por |
|---|---|---|---|
| 1 | Portada | A | — |
| 2 | Encuadre e índice | B | — |
| 3 | {{...}} | {{C}} | `03-{{tema}}.md` |
| ... | | | |

**Verificación:** el orden del índice tiene que ser el orden de las slides, y las secciones
tienen que cubrir los entregables mínimos del punto 2. Que no coincidan es un error que el
evaluador nota.

---

## 5. Mapa de documentos de investigación

| Doc | Tema | Agente | Alimenta |
|---|---|---|---|
| `00-datapack-numerico.md` | Cifras verificadas y benchmarks | grigor | Transversal |
| `01-{{...}}.md` | {{...}} | grigor | Slide {{n}} |
| `02-{{...}}.md` | {{...}} | gallego | Slide {{n}} |

---

## 6. Reglas de trabajo para todos los agentes

1. **Nada de memoria.** Toda cifra se verifica con búsqueda y se cita con URL.
2. **Trazabilidad.** Referencias `[n]` en el cuerpo, fuentes al final con título, medio, fecha
   y URL completa.
3. **Tres categorías de afirmación, siempre distinguidas:** dato reportado por la empresa /
   estimación de un tercero / inferencia propia.
4. **Las discrepancias se muestran, no se promedian.** Si dos fuentes difieren, van las dos y
   se explica por qué.
5. **Año fiscal.** El ejercicio de {{EMPRESA}} cierra el {{DD/MM}}. Aclarar siempre a qué FY
   corresponde cada cifra y no mezclarlo con año calendario.
6. **Consistencia numérica.** Las cifras salen del data pack, no se re-investigan.
7. **Tesis antes que descripción.** Cada sección cierra con su consecuencia estratégica.

---

## 7. Decisiones de diseño heredadas

{{Si hay un ejemplo de referencia, anotá acá qué se toma de él y qué no: densidad, cantidad
de slides, tipo de gráficos. Medilo, no lo copies.}}
