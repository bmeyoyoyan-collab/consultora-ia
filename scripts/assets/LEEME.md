# assets/

Acá van las imágenes de tu deck: el fondo de portada, la ilustración lateral, el SVG del logo
que le pasás a `neon-logo.js`.

**Nada de esta carpeta se commitea**, salvo este archivo. Está así a propósito.

Un logo de una marca ajena en un repositorio público es un problema de marcas que no hace falta
tener, y las imágenes generadas pesan de más para el historial de git. Lo que se publica es el
código que las produce, no los archivos.

Los nombres que `build-deck.js` busca por defecto:

| Archivo | Dónde se usa |
|---|---|
| `portada.jpg` | Fondo de la slide 1. Si no está, usa el color oscuro liso |
| `lateral.jpg` | Imagen vertical de las slides de lista |

Si falta alguna, el deck se genera igual, sin ella.
