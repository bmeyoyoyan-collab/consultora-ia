---
name: deck-de-consultoria
description: Produce un deck ejecutivo sobre una empresa, producto o industria repartiendo el trabajo entre cuatro agentes — encuadre, verificación numérica, investigación con frameworks y diseño. Deriva la identidad visual del sujeto expuesto en vez de aplicar una plantilla genérica, y termina en un .pptx verificado slide por slide. Usar para trabajos prácticos sobre empresas, informes al Directorio, casos de negocio o cualquier presentación de consultoría.
---

# Deck de consultoría

Convertir un encargo en una presentación que alguien va a proyectar, sin que se caiga por
ninguno de los tres lados por los que se cae siempre: números inconsistentes, análisis
descriptivo, o slides ilegibles.

El método reparte el trabajo entre **cuatro agentes**. No es decoración: cada uno es dueño de
un artefacto distinto y ninguno pisa al otro. Esa separación es lo que hace que el trabajo
escale sin contradecirse.

---

## Los cuatro

| | Agente | Es dueño de | Entrega |
|---|---|---|---|
| 1 | **levon** | El encuadre | El brief, la estructura del deck, los prompts |
| 2 | **grigor** | Los números | El data pack, y la auditoría final del deck |
| 3 | **gallego** | El análisis | Un documento por tema, con tesis y consecuencia |
| 4 | **salva** | La producción | El .pptx y su QA visual |

El quinto es quien pide el trabajo: decide, corta y aprueba. Los agentes no deciden alcance.

---

## El flujo

### Fase 0 · Encuadre — levon

Lee la consigna literalmente, identifica los frameworks obligatorios con su estructura exacta,
mide el ejemplo de referencia si lo hay, y escribe el brief y los prompts.

**Se le confirma el encuadre antes de seguir.** Un trabajo largo lanzado sobre un malentendido
se pierde entero, y el malentendido siempre está acá.

### Fase 1 · Data pack — grigor

Antes de que nadie investigue nada, se fija la única fuente de verdad numérica.

Este orden no es negociable. Si la investigación temática arranca antes que el data pack, cada
agente busca las cifras por su cuenta y el deck termina diciendo tres números distintos para
la misma cosa.

### Fase 2 · Investigación — gallego, una vez por tema

Un agente por tema, todos alimentados por el data pack, todos con el mismo preámbulo.

> **Lotes de dos. Nunca más.**
>
> Esta se aprendió a la fuerza. Ocho agentes de investigación lanzados en paralelo agotaron el
> límite de sesión en los primeros minutos y **murieron todos sin escribir un solo archivo**:
> se perdió el lote entero. Dos, corriendo completos, entregaron 37.000 palabras.
>
> El paralelismo no abarata el trabajo, sólo concentra el gasto.
>
> Si hay más temas que capacidad, **consolidá por framework** en lugar de recortar
> profundidad: un agente puede escribir tres documentos separados si son bloques de un mismo
> marco. Instruile que investigue todo primero y escriba después, para no repetir búsquedas.
>
> Los archivos ya escritos **sobreviven** al corte. Antes de relanzar, verificá con `ls` y
> `wc -w` qué quedó en disco y revisá el final de cada archivo para descartar truncamiento: un
> agente puede reportar «falló» habiendo entregado el trabajo completo y haber muerto en un
> retoque final.

### Fase 3 · Producción — salva

Presupuesto de slide, identidad derivada del sujeto, maquetado, build y render.

### Fase 4 · Doble auditoría — grigor y salva

Dos pasadas distintas sobre el mismo entregable, y ninguna reemplaza a la otra:

- **grigor audita los datos** contra su data pack. Busca cifras que no existen, períodos
  cambiados y —el error fino— frases que dicen más que la cifra que citan.
- **salva audita el render.** Mira las slides como imágenes, no como código.

En el caso de referencia, la primera pasada encontró tres afirmaciones falsas ya maquetadas y
la segunda, tres defectos de layout invisibles en el código. Ninguna de las seis se veía sin
auditar.

---

## Las dos reglas madre del diseño

> **1. La estructura es de consultoría. El color es del sujeto. Nunca al revés.**
>
> **2. Un deck se proyecta. Se diseña para la última fila, no para tu monitor.**

La segunda es la que más se viola y la que más caro sale.

---

## El presupuesto de la slide — se hace ESTO primero

**El error más común y más caro es escribir el contenido y después achicar la tipografía para
que entre.** Eso produce decks de 8 pt ilegibles a tres metros. La secuencia correcta es la
inversa:

1. Fijá los tamaños mínimos. **No son negociables.**
2. Contá cuánto contenido entra a esos tamaños.
3. Recortá el contenido hasta que entre.

Presupuesto de referencia para una slide 16:9:

| Arquetipo | Capacidad máxima |
|---|---|
| Lista de ítems | **7 ítems** en una columna. Dos columnas sólo si son ≤5 por lado |
| Tabla | **3 columnas × 5 filas.** Cuatro columnas obligan a ≤10 pt: no entrar ahí |
| Texto corrido | ~60 palabras |
| Callouts de cifra | 3 o 4, no más |

**Lo que no entra no se borra: va a las notas del orador.** Ese es el desagote. Una slide con
7 ítems y notas ricas se presenta mejor que una con 12 ítems y nada que decir.

Si el contenido no cabe ni recortando, la respuesta es **otra slide**, nunca tipografía menor.

---

## Identidad visual

El detalle completo —sourcing, los seis roles de color, validación y tipografía— está en
`referencias/identidad-visual.md`. El núcleo:

Antes de elegir un solo color, escribí en una línea **quién es el sujeto** y **cuál es la
tesis del deck**. La paleta sirve a la tesis, no sólo a la marca: un deck que dice «esta
empresa está en riesgo» no puede verse igual que uno que dice «esta empresa domina su
categoría», aunque el logo sea el mismo. Si la tesis es una decisión pendiente, la identidad
necesita **tensión**: dos polos cromáticos, no uno.

Buscá activos reales, no inventes la marca de memoria. Y ojo con la trampa: el color
institucional del holding suele ser aburrido y no es lo que la gente asocia con la empresa.
**Si el producto insignia tiene identidad más fuerte que el corporativo, derivá del producto.**

Cada color lleva una **función** asignada. Un color sin función termina apareciendo al azar.

---

## Arquetipos, imágenes y diagramas

Ver `referencias/arquetipos-y-diagramas.md`. Lo que no se puede olvidar:

**Ningún arquetipo puede usarse en más de tres slides seguidas, y ningún recurso gráfico puede
aparecer en todas las slides de contenido.** Si todas las slides son «cajas redondeadas arriba
y una caja oscura de conclusión abajo», el deck perdió jerarquía: todo pesa lo mismo y el ojo
deja de distinguir qué importa.

Antes de generar, escribí la lista de arquetipos slide por slide y verificá que haya **al menos
cuatro lenguajes visuales distintos**.

**Si la slide invoca un framework, tiene que dibujar el framework.** Nombrar a Porter o al
Value Delivery System y poner tres rectángulos en fila no aplica el marco: lo cita.
Test de control: **tapá el título de la slide. ¿Se sigue entendiendo qué framework es?**

---

## Reglas de contenido

1. **El titular de cada slide es una tesis, no una etiqueta.** «Value Delivery System» es una
   etiqueta; «la entrega de valor pasó de evento a proceso continuo» es una tesis.
2. **El titular entra en una línea.** Si envuelve a dos, pisa la bajada y descoloca la maqueta.
   Un titular más corto casi siempre es mejor.
3. **Una idea por slide.**
4. **Toda cifra lleva fuente**, con referencia al pie.
5. **Distinguí dato de estimación y de inferencia.** Un Directorio detecta un número inventado
   más rápido que un error de diseño.
6. **Respetá el límite de slides.** Si sobra contenido, fusioná o mandá a notas.

---

## Errores a evitar

- **Achicar la tipografía para que entre más texto.** El error capital. Si no entra, sobra.
- Repetir el mismo arquetipo en todas las slides.
- Poner el logo de la empresa en todas las slides. Una vez alcanza.
- Íconos de estado diminutos: si codifican significado, van a 20 pt o más.
- Usar los colores de marca al 100% de saturación en fondos de contenido.
- Titulares que nombran el framework en vez de la conclusión.
- Tablas de cuatro columnas: obligan a tipografía ilegible.
- Blanco puro y negro puro en fondos: matan el carácter de la paleta.
- Recrear a mano la tipografía o el logo de la marca.
- Slides de contenido sin ningún elemento visual.
- **Líneas de acento bajo los títulos y barras decorativas de color.** Son el tic más
  reconocible de las slides generadas por IA. Para separar, usá espacio en blanco o un kicker
  de color encima del título.

---

## Producción y QA

Salida por defecto: **.pptx** con pptxgenjs. Es editable, es lo que aceptan cátedras y
empresas, y se importa a Canva conservando la edición. El motor parametrizado está en
`scripts/build-deck.js`.

**Nunca entregues un deck que no viste renderizado.** El procedimiento completo y la lista de
defectos que sólo aparecen al renderizar están en `referencias/qa-visual.md`.

---

## Checklist final

- [ ] Cantidad de slides dentro del límite
- [ ] Ningún cuerpo de texto por debajo de los mínimos de la tabla tipográfica
- [ ] Al menos cuatro lenguajes visuales distintos en el deck
- [ ] Ningún titular envuelve a dos líneas
- [ ] Toda cifra con su referencia al pie, y verificada contra el data pack
- [ ] Leyenda de íconos donde se usa un sistema de etiquetas
- [ ] Las slides de lista tienen imagen; las de tabla no
- [ ] Los frameworks invocados están dibujados, no listados
- [ ] Datos del autor completos en portada
- [ ] Orden del índice = orden de las slides
- [ ] Todas las slides vistas renderizadas, no sólo una muestra
