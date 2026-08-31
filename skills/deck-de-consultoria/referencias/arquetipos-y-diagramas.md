# Arquetipos, imágenes y diagramas

---

## Los cinco arquetipos

Se combinan; no se inventan layouts nuevos sobre la marcha.

**A · Portada** (ground oscuro). Kicker, título grande, sujeto y encargo, imagen protagonista
con scrim, datos del autor. Logo una vez, discreto.

**B · Índice y encuadre** (ground claro). Texto de contexto a un lado, índice numerado al otro.
El índice coincide con los entregables exigidos, y **el orden del índice es el orden de las
slides** — que no coincidan es un error que el evaluador nota.

**C · Antes / Después** (ground claro). Chevrons con los sub-procesos más dos columnas de
comparación. **Tres columnas, no cuatro.** El veredicto propio no va como cuarta columna: va
como caja de conclusión al pie, una sola, fuerte.

**D · Lista etiquetada** (ground claro). Máximo 7 ítems en una columna, **con una imagen
vertical ocupando un tercio del ancho al costado**. Cada ítem: ícono grande, título en negrita,
descripción.

**E · Cierre y recomendación** (ground oscuro). Vuelve al ground de la portada y cierra el arco
visual. Titular igual a la tesis en una frase. Pilares como círculos numerados o columnas.

---

## La regla anti-monotonía

**Ningún arquetipo puede usarse en más de tres slides seguidas, y ningún recurso gráfico puede
aparecer en todas las slides de contenido.**

El síntoma a vigilar: si todas las slides son «cajas redondeadas arriba y una caja oscura de
conclusión abajo», el deck perdió jerarquía. Todo pesa lo mismo y el ojo deja de distinguir
qué importa. Un motivo repetido mecánicamente deja de ser motivo y pasa a ser ruido.

Antes de generar, escribí la lista de arquetipos slide por slide y verificá que haya **al menos
cuatro lenguajes visuales distintos**. Recursos para alternar:

- Tabla con chevrons
- Lista de tarjetas con imagen lateral
- **Callouts de cifra grande** — un número de 54 a 72 pt con etiqueta chica debajo.
  Insustituible en slides económicas
- Diagrama del framework
- Círculos numerados
- Cita destacada a ancho completo
- Comparación de dos columnas sin cajas

La **caja oscura de conclusión** es potente y por eso hay que racionarla: **máximo tres veces
en todo el deck**, en las slides cuya conclusión realmente sea el punto.

---

## Imágenes

Las imágenes van **también en las slides de contenido**, no sólo en portada y cierre. Un bloque
de ocho slides de texto en cajas se lee como un formulario. Una imagen vertical al costado
rompe el bloque, da respiro y convierte la slide en composición.

- **Portada y cierre**: imagen protagonista, a sangre o en bloque grande, siempre con **scrim**
  para que el texto conserve contraste.
- **Slides de lista**: imagen vertical ocupando un tercio del ancho, alto completo del bloque
  de contenido. Es el patrón de referencia y funciona.
- **Slides de tabla**: sin imagen. Ahí la tabla es el objeto visual.
- **Preferí lo atmosférico y abstracto sobre lo literal.** Ilustración editorial, no captura de
  pantalla del producto. Una captura convierte el deck en fan art.
- **Generá el arte** cuando sea posible: sin fricción de derechos, control total del encuadre y
  de la paleta. Pedí composición vertical y espacio negativo generoso, y nombrá los colores de
  tu paleta en el prompt para que la imagen pertenezca al deck.
- **Logo**: una sola aparición, en portada, con su espacio de respeto. No lo deformes ni lo
  recolores — salvo reversar un logo monocromo a blanco sobre fondo oscuro, que es práctica
  estándar y todo brand kit la contempla.

---

## Fidelidad de framework

**Si la slide invoca un framework, tiene que dibujar el framework.**

Nombrar a Porter, a Gharajedaghi o al Value Delivery System y después poner tres rectángulos
en fila no aplica el framework: lo cita. Un evaluador que conoce el marco lo detecta de
inmediato, y es donde más barato se pierden puntos.

- Si el framework tiene **ejes**, dibujá los ejes.
- Si su tesis son las **relaciones entre elementos**, dibujá las líneas — incluidas las que
  están rotas o ausentes, que suelen ser el hallazgo.
- Si es una **matriz**, dibujá los cuadrantes y ubicá los elementos adentro.

Test de control: **tapá el título de la slide. ¿Se sigue entendiendo qué framework es?** Si no,
la slide es una lista disfrazada.

---

## Cómo dibujar un diagrama de ejes que no parezca un andamio

Un diagrama de tres ejes con cuatro líneas rectas se lee como un esquema de ingeniería. Lo que
lo convierte en diagrama es la **densidad de conexiones curvas**. Receta:

1. **Ejes** con punta de flecha y **etiqueta en caja sólida** en cada extremo. En pptxgenjs el
   origen debe quedar en el vértice *sin* flecha: `flipH: origenX > destinoX`,
   `flipV: origenY > destinoY`. Cualquier otra fórmula pone la flecha del lado equivocado.

2. **Conexiones como capa rasterizada.** pptxgenjs no dibuja curvas Bézier. Componé un SVG con
   los arcos, rasterizalo con `sharp` a PNG transparente e insertalo como imagen **debajo** de
   los nodos. Curva simple entre dos puntos: control perpendicular al segmento, desplazado una
   distancia — la «panza». Panzas grandes, del orden de un tercio de la distancia, producen el
   envolvente que hace que el diagrama se vea diseñado.

3. **Diez a quince conexiones**, en cuatro o cinco tonos. Menos de diez se ve pobre.

4. **Los nodos van neutros** —gris claro— y por encima de la capa de curvas. El color vive en
   las líneas, no en las cajas: si además tenés bordes de color, el resultado es ruido.

5. **Lo ausente se dibuja distinto**: línea punteada en el acento primario, más gruesa, con un
   marcador sobre el punto medio de la curva. Ese punto, en una cuadrática, está en
   `0,25·A + 0,5·C + 0,25·B`, donde C es el punto de control.

Ventaja del método: los nodos y las etiquetas siguen siendo **objetos nativos editables** —
sobreviven a la importación a Canva — y sólo las curvas son imagen.

---

## Antes de dibujar algo como roto

Una línea punteada es una acusación. Antes de trazarla, pasale dos tests:

**1 · Test del nivel.** ¿La conexión falla *en toda la compañía* o sólo entre dos unidades? Si
es lo segundo, el diagrama sobre-afirma: el nodo dice «Datos y LTV» pero vos querías decir
«los datos de la filial que compramos». Un reclamo acotado va en las notas del orador o en una
caja de texto, **nunca en la geometría del diagrama**. La geometría no admite matices.

**2 · Test del contrafáctico.** Si la empresa hiciera hoy lo que decís que no hace, ¿se
notaría? Si la respuesta es «ya lo hace desde hace años», la línea está mal clasificada.

### El corolario, que vale más que la regla

**Muchas veces lo que falta no es una conexión sino un nodo.**

Si tres capacidades apuntan al mismo vacío, dibujá el vacío: un nodo con **trazo cortado** en
el acento primario, sobre el eje, con las líneas ausentes convergiendo en él y un solo marcador
✕ en el punto donde ese peldaño no se construyó.

Es más honesto que tres líneas rotas y muchísimo más legible: el ojo va a un lugar, no a tres.
