# Identidad visual — del sujeto, no de una plantilla

Una plantilla corporativa genérica dice «esto lo podría haber hecho cualquiera sobre cualquier
empresa». Una identidad derivada del sujeto demuestra que lo entendiste.

---

## 1 · Leer el sujeto y la tesis

Antes de elegir un solo color, escribí en una línea:

1. **Quién es el sujeto** — empresa, producto, industria.
2. **Cuál es la tesis central del deck** — la conclusión a la que llega el argumento.

La paleta sirve a la tesis, no sólo a la marca. Un deck cuya tesis es «esta empresa está en
riesgo» no puede verse igual que uno que dice «esta empresa domina su categoría», aunque el
logo sea el mismo.

Si la tesis es una decisión pendiente, la identidad debe tener **tensión**: dos polos
cromáticos, no uno.

---

## 2 · Sourcing

Buscá activos reales. No inventes la marca de memoria.

| Fuente | Qué sacar |
|---|---|
| Brand kit o press kit oficial | Logo en vector o PNG transparente, colores oficiales |
| Sitio corporativo y reporte anual | Paleta institucional, tono |
| Key art del producto insignia | Los colores que el público **realmente asocia** al sujeto |
| Packaging, tienda, app | Colores de uso, no de manual |

**La trampa más común:** el color institucional del holding suele ser aburrido y no es lo que
la gente asocia con la empresa. Si el producto insignia tiene una identidad más fuerte que el
corporativo, **derivá del producto**. Es lo que reconoce la audiencia.

Truco práctico: el sitio corporativo casi siempre sirve los logos desde su propio CDN. Bajar
el HTML y buscar `logo` o `brand` en los `src` da los archivos oficiales sin pasar por
repositorios de terceros.

> Antes de descargar cualquier cosa, decile al usuario qué archivo es, de qué fuente sale y
> cuánto pesa. Y no subas logos de terceros a un repositorio público: publicá el código que
> los procesa, no el archivo.

---

## 3 · Derivar la paleta funcional

De dos o tres colores de marca hay que construir un set completo de seis roles. **Cada color
lleva una función asignada**; un color sin función termina apareciendo al azar y ensucia todo.

| Rol | Función | Cómo se obtiene |
|---|---|---|
| **Ground oscuro** | Fondo de portada y cierre | Color de marca llevado a luminosidad muy baja, conservando el matiz |
| **Ground claro** | Fondo de slides de contenido | Blanco cálido o frío según la temperatura de la marca. **Nunca blanco puro** |
| **Acento primario** | El dato clave, el énfasis, el «después» | El color más reconocible de la marca |
| **Acento secundario** | Segundo nivel, chevrons, subtítulos | Complemento o análogo del primario |
| **Texto oscuro** | Cuerpo sobre fondo claro | Casi negro con el matiz de la marca, nunca negro puro |
| **Neutros** | Bordes, celdas, notas al pie | Grises con una pizca del matiz de la marca |

Dos acentos como máximo en uso simultáneo. Un tercero sólo si codifica significado.

---

## 4 · Validar antes de maquetar

Cuatro filtros. Si la paleta no los pasa, se ajusta; no se justifica.

- **Contraste de proyección.** Texto de cuerpo ≥ 4.5:1 contra su fondo; titulares ≥ 3:1. Los
  proyectores de aula lavan los colores: lo que en pantalla es aceptable, proyectado
  desaparece.
- **Daltonismo.** El significado nunca puede depender sólo del color. Si dos estados se
  distinguen por color, agregá forma o ícono.
- **Escala de grises.** Los dos acentos deben seguir distinguiéndose por luminosidad.
- **Densidad.** Probá el color más saturado detrás de una tabla. Si cansa, ese color va a los
  extremos del deck, no al contenido.

**Fallbacks:** marca monocroma → un matiz en tres luminosidades más un neutro cálido. Marca de
neones saturados → el neón vive en portada y cierre. Marca sin identidad reconocible → derivá
del sector, no inventes.

---

## 5 · Tipografía

**Nunca uses la tipografía propietaria de la marca.** No está disponible, no se puede embeber
legalmente y rompe el archivo en otra máquina. Identificá el **carácter** de la marca y elegí
un par de sistema que lo evoque:

| Carácter de la marca | Par sugerido (display / texto) |
|---|---|
| Geométrica, moderna, tecnológica | Poppins, Montserrat / Inter, Segoe UI |
| Editorial, con autoridad | Georgia, Cambria / Source Sans, Calibri |
| Condensada, urgente, urbana | Oswald, Archivo Narrow / Inter |
| Humanista, de consumo | Lato / Open Sans |
| Neutral, corporativa | Helvetica, Arial / Arial, Calibri |

Si el archivo viaja a otra máquina o a Canva, quedate en fuentes de amplia instalación.

### Escala mínima — no negociable

Estos son **pisos**, no sugerencias. Derivan de la regla de proyección.

| Elemento | Mínimo | Cómodo |
|---|---|---|
| Título de slide | 26 pt | 28-30 pt |
| Bajada o tesis bajo el título | **15 pt** | 16-17 pt |
| Título de ítem en lista | **14 pt** | 15-16 pt |
| Descripción de ítem | **12 pt** | 13-14 pt |
| Celda de tabla | **11 pt** | 12-13 pt |
| Cifra destacada (callout) | 40 pt | 54-72 pt |
| Etiqueta de chevron | 11 pt | 12 pt |
| Nota al pie y fuentes | 8 pt | 9 pt |
| **Íconos de estado** | **20 pt** | 24-28 pt |

Los íconos son el error silencioso. Si el sistema de etiquetas es el mecanismo que comunica
«lo tenemos» contra «nos falta», un ícono de 10 pt lo vuelve invisible y la slide pierde su
función. Van grandes.

---

## Qué le hace Canva a un .pptx al importarlo

Verificado sobre un deck real de 12 slides.

La importación conserva **todo como objeto nativo** —textos editables, formas con su path,
imágenes como relleno reemplazable, líneas con sus puntas de flecha, notas del orador— y
respeta los colores al hex exacto. Pero hay dos cosas que cambia:

1. **Sustituye la tipografía por una fuente propia**, de forma uniforme en todo el documento.
   Conserva negrita e itálica, así que la jerarquía sobrevive. No es un problema.

2. **Colapsa a un solo tamaño los distintos tamaños dentro de una misma caja de texto**, y se
   queda con el más chico. Si en una caja pusiste un rótulo a 15 pt seguido de una descripción
   a 12,5 pt, en Canva los dos quedan en 12,5.

   **Consecuencia de diseño:** si el salto de tamaño entre dos textos es parte de tu jerarquía,
   **ponelos en cajas separadas** desde el generador. Dentro de una misma caja sólo son
   confiables el color, la negrita y la itálica.

   No se arregla del lado de Canva: su operación de formato de texto actúa sobre el elemento
   entero, no sobre un tramo. Subir el tamaño de la caja agranda también la descripción y el
   renglón envuelve.

**Antes de subir**, revisá los textos alternativos de las imágenes: los generadores suelen
dejar ahí la ruta local del archivo, y esa ruta viaja con el documento.
