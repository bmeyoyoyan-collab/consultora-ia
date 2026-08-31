# QA visual — obligatorio

**Nunca entregues un deck que no viste renderizado.**

El código puede compilar perfecto y la slide estar rota. Renderizar es lo único que lo detecta,
y detecta además si el archivo quedó corrupto.

---

## Los defectos que sólo aparecen al renderizar

Ninguno de estos se ve leyendo el código. Todos son casos reales:

- **La fila de encabezado roba altura** del array de filas y aplasta la última. La tabla
  compila, se ve bien en las primeras filas, y el último renglón queda cortado a la mitad.
- **Las cajas de texto centran vertical** por defecto y dejan huecos muertos arriba y abajo.
  Se arregla con `valign: "top"`.
- **Un título largo envuelve a dos líneas** y pisa la bajada que está debajo.
- **El texto desborda su celda** o su caja contenedora y se derrama sobre el fondo.
- **Una cifra grande envuelve** y la unidad —el «M» de millones— cae sola sobre la etiqueta
  de abajo.

Los dos últimos aparecen sobre todo después de un retoque tardío: subir un tamaño «sólo dos
puntos» es suficiente para romper una caja que entraba justo.

---

## Cómo renderizar

### PowerPoint por COM — la mejor fidelidad

Si PowerPoint está instalado, esta es la vía. Respeta las fuentes exactamente, cosa que
LibreOffice no hace porque las sustituye.

```powershell
$ppt  = New-Object -ComObject PowerPoint.Application
$deck = $ppt.Presentations.Open("C:\ruta\deck.pptx", $true, $false, $false)
$deck.SaveCopyAs("C:\salida\s.png", 18)   # 18 = ppSaveAsPNG
$deck.Close(); $ppt.Quit()
```

Genera `salida\s\DiapositivaN.PNG`, una por slide.

**Que PowerPoint abra el archivo ya prueba que no está corrupto**, así que este paso cubre
validación de esquema y QA visual de una sola vez. El script listo para usar está en
`scripts/render-qa.ps1`.

### Alternativa

LibreOffice a PDF y después `pdftoppm`. Menos fiel: sustituye fuentes, así que sirve para
detectar desbordes pero no para juzgar tipografía.

---

## Cómo mirar el render

**Mirá todas las slides, no una muestra.** Los defectos aparecen en la que no revisaste.

Prestá atención especial a:

- La **última fila** de cada tabla.
- El **último bullet** de cada caja de texto.
- El **borde inferior** de cualquier contenedor con varios párrafos.

Ahí es donde el desborde se esconde.

### El test de la última fila

Mirá cada render **reducido al 40%**. Si a ese tamaño no podés leer el titular, la cifra clave
y las etiquetas de estado, la slide falla — sin importar cuánto te guste de cerca.

Un deck se proyecta. Se diseña para la última fila, no para tu monitor.

---

## Después de cada corrección

**Volvé a renderizar.** Una corrección de layout es exactamente el tipo de cambio que rompe
otra cosa: agrandar una caja empuja la de al lado, acortar un texto cambia el salto de línea de
todo el bloque.

No des por buena una corrección que no viste renderizada.
