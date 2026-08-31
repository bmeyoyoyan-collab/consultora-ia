# Prompts — Ola 2 (Temas 3 a 10)

Ocho agentes en paralelo. Cada uno arranca leyendo el brief y los tres documentos de la Ola 1,
de modo que todos trabajen sobre las mismas cifras verificadas.

---

## PREÁMBULO COMÚN
*(se antepone idéntico a los ocho prompts)*

```
Sos analista de una consultora de estrategia de nivel mundial. Estás preparando material de
base para una presentación al Directorio de Take-Two Interactive (NASDAQ: TTWO), en el marco
de un trabajo académico de la materia "Procesos de Innovación y Nuevos Negocios" (UTDT).

FECHA DE HOY: 26 de agosto de 2026. Tu conocimiento interno está desactualizado y NO es una
fuente válida. Toda cifra se verifica con búsqueda web y se cita con URL.

PRIMER PASO OBLIGATORIO — leé estos cuatro archivos antes de buscar nada:
1. {{RUTA_PROYECTO}}\BRIEF-TP1.md
   (encuadre del trabajo, frameworks de la cátedra, estructura del deck, reglas de trabajo)
2. {{RUTA_PROYECTO}}\Investigacion\00-datapack-numerico.md   (cifras verificadas de TTWO)
3. {{RUTA_PROYECTO}}\Investigacion\01-industria-perimetro.md (contexto de industria)
4. {{RUTA_PROYECTO}}\Investigacion\02-take-two-por-dentro.md (la empresa por dentro)

REGLA DE CONSISTENCIA: las cifras de Take-Two las tomás del data pack, NO las
re-investigues. Si necesitás una cifra que no está ahí, la buscás vos y la marcás
explícitamente como "dato nuevo, no presente en el data pack" para que se pueda incorporar.

HERRAMIENTAS: cargá búsqueda web con ToolSearch, query "select:WebSearch,WebFetch".
Hacé 15-25 búsquedas como mínimo sobre TU tema específico.

IDIOMA: español rioplatense, registro profesional de consultoría. Los términos de framework
en inglés cuando así se usan (Value Delivery System, core competence, live service, etc.).

ESTÁNDAR DE CALIDAD: la cátedra penaliza explícitamente enumerar temas con altos
niveles de descripción, y exige un trabajo de valor estratégico. No hagas listas de tendencias.
Cada sección sostiene una TESIS y deriva una CONSECUENCIA para Take-Two.

FORMATO DE SALIDA: markdown. Abrí con "SÍNTESIS EJECUTIVA" (5-8 bullets de lectura para
Directorio). Cerrá con "MATERIAL PARA LA SLIDE" — el contenido ya destilado al nivel de
detalle que entra en una slide — y con "FUENTES" numeradas (título, medio, fecha, URL).
Referencias [n] en el cuerpo. Distinguí siempre: dato reportado / estimación de tercero /
"inferencia propia:". Si dos fuentes se contradicen, mostrá ambas y explicá por qué.
```

---

## TEMA 3 → `03-vds-choose-the-value.md`

Analizá el bloque **CHOOSE THE VALUE** del Value Delivery System en la industria del
entretenimiento interactivo, y cómo lo ejecuta Take-Two. Tres sub-procesos, cada uno con
comparación **ANTES / DESPUÉS** de la digitalización.

**3.1 Understand value desires** — Cómo se averiguaba qué quiere el jugador y cómo se averigua
hoy. Antes: investigación de mercado esporádica, focus groups, prensa especializada, ventas
retail como único feedback, ciclos de aprendizaje de años. Después: telemetría de juego en
tiempo real, analytics de comportamiento, playtesting continuo, A/B testing, escucha de
comunidad (Reddit, Discord, foros), datos de la operación mobile.
Investigá específicamente: qué capacidad analítica aportó Zynga a Take-Two; si Rockstar usa o
resiste el desarrollo data-driven (hay una tensión interesante entre el modelo autoral de
Rockstar y el modelo de datos de Zynga — exploralá); cómo se usan los datos de GTA Online y
NBA 2K para decisiones de producto.

**3.2 Select target** — Antes: segmentación demográfica gruesa (hombres 18-34), clasificación
ESRB, un producto para un público. Después: microsegmentación por comportamiento y valor,
cohortes, modelos de LTV, identificación de usuarios de alto gasto, cross-promotion entre
títulos y entre plataformas.
Investigá: la ampliación demográfica del gaming (edad y género reales del jugador hoy);
la concentración del gasto en una minoría de usuarios ("whales") con datos si los hay;
cómo Take-Two cruza audiencias entre consola y mobile.

**3.3 Define benefits & price** — Antes: un SKU, precio fijo, USD 60, sin cambios posteriores.
Después: ediciones múltiples, moneda virtual, battle pass, suscripción, free-to-play,
precio dinámico y personalizado, ofertas segmentadas.
Investigá con datos: el estado del debate sobre el precio del AAA (el salto de 60 a 70 y a 80
dólares, quién lo hizo y cómo reaccionó el mercado); el precio anunciado de GTA VI si existe;
GTA+ (precio, evolución, qué incluye); la moneda virtual VC de NBA 2K y la controversia
asociada; Shark Cards en GTA Online.

Cerrá con la tesis: **qué cambió estructuralmente en cómo se elige el valor en esta industria,
y qué tan bien posicionado está Take-Two en cada sub-proceso.**

---

## TEMA 4 → `04-vds-provide-the-value.md`

Analizá el bloque **PROVIDE THE VALUE**. Cinco sub-procesos, cada uno ANTES / DESPUÉS.
Este es el bloque más denso: la producción y distribución de un juego es donde la
digitalización pegó más fuerte.

**4.1 Product process design** — Antes: desarrollo en cascada, ciclo cerrado, el juego se
terminaba y se enviaba a fábrica (el "gold master" era irreversible). Después: desarrollo
iterativo, parches post-lanzamiento, early access, contenido en temporadas, co-creación con
la comunidad.
Investigá: el ciclo de desarrollo de GTA VI y cuánto duró; el motor propietario RAGE de
Rockstar y qué le aporta; la práctica del crunch en Rockstar, la crítica pública que recibió
y qué cambió después; el uso concreto de IA generativa en desarrollo de juegos (casos reales
y cifras de ahorro, no promesas).

**4.2 Procure / produce** — Antes: producción cara y manual, contratación tradicional de
talento, recursos físicos limitados. Después: motion capture, captura de performance, assets
procedurales, IA generativa para arte, código, testing y localización, outsourcing global.
Investigá: la escalada de costos del AAA (estimaciones de presupuesto de GTA VI y de otros
AAA recientes); cuántas personas trabajan en un AAA hoy vs hace 15 años; la huelga de
SAG-AFTRA en videojuegos por derechos de voz e imagen frente a la IA — qué se resolvió y qué
implica para los estudios; los despidos masivos en la industria y las cancelaciones de
proyectos en Take-Two.

**4.3 Distribute** — Antes: retail físico, disco, cajas, distribuidores, inventario, ventana
de lanzamiento única. Después: distribución digital global e instantánea, storefronts,
cross-platform, cloud, actualizaciones remotas.
Investigá a fondo — acá hay un tema estratégico grande: la comisión del 30% de las tiendas
(Apple, Google, Steam, consolas) y cómo se está erosionando; el fallo Epic vs Apple y sus
consecuencias sobre los pagos fuera de la app; **los web shops direct-to-consumer de Zynga**
(Take-Two empujó ventas web para saltear la comisión de las app stores — buscá qué porcentaje
de sus ingresos mobile pasa por ahí, es un dato muy valioso); el peso actual de las ventas
digitales vs físicas.

**4.4 Service** — Antes: el juego se vendía y la relación terminaba; soporte telefónico o por
correo. Después: live operations permanentes, actualizaciones continuas, moderación de
comunidad, anti-cheat, atención multicanal, el juego como servicio que nunca termina.
Investigá: la operación de GTA Online a lo largo de más de una década; el modelo de temporadas
de NBA 2K; qué estructura de equipo requiere sostener un live service.

**4.5 Price** — Antes: precio fijo, ingreso de una sola vez, concentrado en la ventana de
lanzamiento. Después: monetización continua a lo largo de años, recurrent consumer spending,
microtransacciones, pases, suscripciones.
Tomá del data pack el porcentaje de recurrent consumer spending sobre net bookings y su
evolución: es la evidencia dura de este cambio.

Cerrá con la tesis: **la entrega de valor pasó de ser un evento a ser un proceso continuo, y
qué le exige eso a Take-Two en capacidades que antes no necesitaba.**

---

## TEMA 5 → `05-vds-communicate-the-value.md`

Analizá el bloque **COMMUNICATE THE VALUE**. Tres sub-procesos, ANTES / DESPUÉS.

**5.1 Sales message** — Antes: trailers en TV, prensa especializada impresa, ferias como E3,
mensaje unidireccional y masivo. Después: trailers virales que son eventos culturales en sí
mismos, comunicación directa por redes, filtración y expectativa gestionadas, storytelling
adaptado por audiencia y canal.
Investigá el caso Rockstar en profundidad — es excepcional y da para una tesis propia:
Rockstar prácticamente **no hace publicidad tradicional** y opera por escasez deliberada de
comunicación. Buscá los números del trailer de GTA VI (visualizaciones en las primeras 24
horas y récords que batió) y contrastalos con lo que cuesta una campaña tradicional. La tesis
posible: la marca convirtió la comunicación en un activo de costo casi nulo y alcance masivo.

**5.2 Advertising** — Antes: publicidad masiva con medición pobre del impacto. Después:
campañas digitales segmentadas, user acquisition medido por cohorte y LTV, A/B testing
creativo, publicidad dentro del juego.
Investigá: la plataforma de publicidad de Take-Two/Zynga (la adquisición de Chartboost — monto
y fecha) y cuánto factura el negocio de ads; el impacto de App Tracking Transparency de Apple
sobre la adquisición de usuarios en mobile (fue un golpe severo a toda la industria: buscá
magnitud); el mercado de publicidad in-game y su crecimiento proyectado.

**5.3 Promotion / PR** — Antes: eventos presenciales, notas en medios tradicionales, ferias.
Después: creadores y streamers como canal principal, comunidad como amplificador, esports,
contenido generado por usuarios que promociona el juego sin costo.
Investigá el caso más interesante que tiene Take-Two acá: **GTA Roleplay y la adquisición de
Cfx.re/FiveM por parte de Rockstar**. Rockstar pasó de perseguir a los modders a comprar la
plataforma de mods que sostenía un ecosistema entero de roleplay en Twitch. Buscá fecha, qué
implicó y qué volumen de audiencia mueve el GTA RP. Es un ejemplo perfecto de incumbente que
absorbe la innovación del margen en lugar de combatirla. También: la NBA 2K League y el estado
real de esa apuesta de esports.

Cerrá con la tesis: **la comunicación dejó de ser un costo de marketing para volverse un
activo de comunidad, y qué tan bien capitaliza eso Take-Two.**

---

## TEMA 6 → `06-ventajas-competitivas.md`

Identificá las **fuentes de ventaja competitiva** en la industria del entretenimiento
interactivo digitalizada, y evaluá para cada una la posición de Take-Two.

Punto de partida: la clase enumera, para una industria digitalizada, ventajas del tipo
acceso a clientes para testeo, capacidad de obtener feedback continuo, escala de puntos de
interacción, interacción 24x7, capacidad de aprender del cliente, capacidad de co-crear,
capacidad de estimar comportamientos, escala de datasets, escala de experimentos de machine
learning, escala de A/B testing, e hiperpersonalización. Traducilas al lenguaje de esta
industria y agregá las específicas del gaming: propiedad intelectual, capacidad de ejecución
creativa, tecnología propietaria de motor, licencias exclusivas, comunidad, talento.

Para CADA ventaja identificada, resolvé estas tres cosas:
1. Por qué es una fuente de ventaja en esta industria hoy (con evidencia).
2. **Etiqueta obligatoria**: ✅ *Take-Two ya cuenta con esta ventaja* o ⚠️ *Take-Two tiene
   oportunidad de innovar en este campo*. Justificá la etiqueta.
3. Un dato numérico que la respalde, cuando exista.

Investigá específicamente, porque son los puntos donde la evaluación no es obvia:
- La **asimetría interna de Take-Two**: Zynga tiene escala de datos, experimentación y
  monetización data-driven; Rockstar tiene ejecución creativa de clase mundial pero un modelo
  autoral, de ciclo largo, poco data-driven. ¿Es una ventaja combinada o dos empresas que no
  se hablan? Buscá evidencia de sinergias reales entre ambas (no las declaradas en earnings
  calls, las verificables).
- La capacidad de **co-crear con el usuario**: comparala con Roblox y Fortnite/UEFN, que
  hicieron del usuario el productor. ¿Dónde está Take-Two en esa escala?
- **Hiperpersonalización**: qué tan personalizado es un juego de Take-Two hoy frente a lo que
  la tecnología permite.

Cerrá con un veredicto: **cuántas de las ventajas decisivas de la industria digitalizada
posee efectivamente Take-Two, y cuántas son terreno donde está expuesto.** Sé honesto: si el
balance es incómodo, decilo — es exactamente lo que un Directorio necesita escuchar.

---

## TEMA 7 → `07-apalancamiento-economico.md`

Analizá el **apalancamiento económico** en esta industria: de dónde sale el efecto
multiplicador sobre la rentabilidad, y cuánto de eso captura Take-Two.

La clase enumera para industrias digitalizadas: determinar el modelo de ingreso más creativo,
crear efectos de red, modelos de plataforma, virtualización de operaciones, uso de bots,
optimizadores de pricing basados en IA, control de riesgos en tiempo real, decisiones basadas
en analytics, minimización del costo de adquisición de clientes. Traducilo al gaming.

Ejes a desarrollar, todos con números del data pack o buscados:
- **Costo marginal cero** del contenido digital y qué significa para el margen.
- **Contenido evergreen**: un catálogo que sigue vendiendo durante años sin costo adicional.
  El caso testigo es GTA V — tomá del data pack las unidades acumuladas y los años que lleva
  vendiendo. Calculá qué significa eso en términos de retorno sobre el costo de desarrollo
  original.
- **Ingresos recurrentes**: el peso del recurrent consumer spending y por qué transforma el
  perfil económico del negocio (de picos por lanzamiento a base continua).
- **Efectos de red**: dónde existen realmente en gaming (multijugador, comunidad, UGC) y dónde
  no. Sé riguroso: no todo negocio digital tiene efectos de red.
- **Reutilización de activos**: motor propietario, assets, herramientas y tecnología
  compartidos entre franquicias.
- **Cross-selling** entre consola, PC y mobile, y entre franquicias.
- **La plataforma de publicidad** como fuente de ingreso secundaria de alto margen.
- **Operating leverage**: cómo se comportan los costos fijos cuando el ingreso escala.

Contrapeso obligatorio — no hagas una slide optimista: analizá también **por qué el
apalancamiento de Take-Two es peor de lo que la teoría sugiere**. Pistas a verificar en el
data pack y en fuentes: los cargos por deterioro de goodwill vinculados a Zynga; la escalada
del costo de desarrollo del AAA, que sube el punto de equilibrio; la concentración del
resultado en pocos títulos, que hace que un retraso mueva el año entero; los márgenes reales
de la empresa comparados con los de sus pares.

Cerrá con la tesis: **cuál es la verdadera palanca económica de Take-Two y cuál es la que
debería construir.**

---

## TEMA 8 → `08-barreras-de-entrada.md`

Analizá las **barreras de entrada** de la industria: qué protege hoy al incumbente, y —lo más
importante para el Directorio— **cuáles se están erosionando**.

Primera mitad: las barreras que existen y su solidez, cada una etiquetada ✅ / ⚠️ y sostenida
con datos.
- **Propiedad intelectual y franquicias**: el valor de una IP consolidada, la lealtad de
  audiencia, la dificultad de construir una franquicia nueva desde cero. Buscá datos de cuántas
  IP nuevas logran escala frente a cuántas se intentan.
- **Costo de producción de un AAA**: hoy es una barrera brutal. Estimaciones de presupuesto de
  GTA VI y de otros AAA recientes. Cuánto cuesta y cuánto tarda entrar a competir en esa liga.
- **Licencias exclusivas**: NBA, WWE, PGA Tour. Qué cuestan, cuánto duran y qué pasaría si se
  perdieran. Es una barrera que Take-Two *alquila*, no posee — analizá esa fragilidad.
- **Tecnología propietaria**: el motor RAGE y las herramientas internas.
- **Comunidad y switching cost**: progresión acumulada, inversión en moneda virtual, amigos
  en la plataforma. Por qué un jugador no se va.
- **Escala de datos y de live ops**.
- **Talento**: la escasez de equipos capaces de ejecutar un mundo abierto de esta escala.

Segunda mitad, la más valiosa: **QUÉ ESTÁ DERRIBANDO ESTAS BARRERAS.** Sé específico y
buscá evidencia:
- La **IA generativa** baja el costo de producir contenido. Si producir deja de ser caro, la
  barrera de costo AAA —la principal defensa de Take-Two— se debilita. ¿Qué evidencia real hay
  de esto ya ocurriendo? Distinguí lo demostrado de lo anunciado.
- Las **plataformas UGC** (Roblox, Fortnite Creative/UEFN) trasladan la producción a los
  usuarios: contenido infinito a costo casi nulo para la plataforma. Buscá cifras de volumen
  de contenido creado y de ingresos repartidos a creadores.
- La **distribución democratizada**: cualquiera publica en Steam o en las tiendas móviles.
- La **competencia por tiempo de atención** no requiere hacer un juego: TikTok y YouTube
  compiten por las mismas horas sin pagar el costo de un AAA. Esta es la barrera que no
  protege nada.

Cerrá con la tesis: **cuáles de las murallas de Take-Two siguen en pie, cuáles ya están
agrietadas, y cuál es la que hay que empezar a construir ahora.**

---

## TEMA 9 → `09-core-competence-gharajedaghi.md`

Aplicá el framework de **Gharajedaghi** (está desarrollado en el brief; leelo antes de
empezar) para determinar la arquitectura de negocio y el core competence de Take-Two.

**9.1 Mapeo de los tres ejes.** Construí el inventario de cada eje:
- **PRODUCTO**: franquicias AAA de mundo abierto, simulación deportiva anual, juegos mobile
  free-to-play, live services, estrategia/rol.
- **MERCADO**: core gamers, jugadores casuales de mobile, fandom de deportes, audiencia de
  streaming y roleplay, creadores.
- **TECNOLOGÍA / KNOWHOW**: diseño de mundo abierto, motor RAGE, narrativa y dirección de arte,
  motion capture, live operations, monetización free-to-play, analítica y modelos de LTV,
  user acquisition, publicidad.

**9.2 ¿Qué arquitectura tiene Take-Two?** Evaluá las cuatro opciones (definida por producto,
por mercado, por tecnología, o interactiva).
Hipótesis a poner a prueba — no la aceptes sin evidencia, confirmala o refutala:
> Take-Two no tiene una arquitectura, tiene **dos coexistiendo sin integrar**. Rockstar opera
> una arquitectura **definida por el producto** (la obra manda; la tecnología y el mercado se
> subordinan a la visión creativa; ciclos de siete años). Zynga opera una arquitectura
> **definida por el mercado** (el comportamiento del usuario manda; el producto se ajusta a lo
> que los datos dicen; ciclos de semanas). Gharajedaghi advierte que el enfoque
> unidimensional se vuelve ineficiente al aumentar la competencia, y que la oportunidad está
> en la **interacción** entre ejes. Si la hipótesis se sostiene, el hallazgo central del TP es
> que Take-Two tiene los ingredientes de una arquitectura interactiva pero **no captura la
> sinergia**: es una empresa con dos almas que no se hablan.
Buscá evidencia a favor y en contra: ¿hay tecnología compartida entre Rockstar y Zynga?
¿hay franquicias de Rockstar en mobile operadas por Zynga? ¿hay traspaso de capacidades de
monetización o de datos? ¿qué dijeron los ejecutivos sobre las sinergias y qué se materializó?

**9.3 Formulación del core competence.** Usá la técnica textual de la cátedra: la suma de las
respuestas a *¿en qué somos realmente buenos?* y *¿qué significaría llevar esto en lo que
somos buenos a su máximo potencial?* Formulalo como atributo de la organización entera, no de
un área. Evaluá qué tan **context-free** es (cuanto más independiente del contexto, más
difícil de imitar y mayor la ventaja).

**9.4 ¿CAMBIARON LOS FACTORES CLAVE DE ÉXITO?** — Esta pregunta está en el enunciado de forma
explícita, así que dedicale una sección propia y contundente. Construí una tabla comparativa
de los KSF de la industria ANTES y AHORA. Hipótesis a testear: se pasó de *"hacer el mejor
juego posible y venderlo"* a *"operar el mejor sistema vivo de engagement y monetización
sostenido en el tiempo"*. Y una segunda, más incómoda: el KSF emergente podría ya no ser
producir contenido sino **capturar tiempo de atención**, un juego que Take-Two no está
jugando. Evaluá si el core competence histórico de la empresa sigue siendo el correcto para
los KSF actuales, o si hay un desalineamiento.

Incluí una descripción textual del **diagrama de tres ejes** para que se pueda dibujar en la
slide 9 (qué elementos van en cada eje y qué conexiones entre ejes hay que marcar).

---

## TEMA 10 → `10-riesgos-y-estrategia-incumbente.md`

Este documento cierra el trabajo: consolida los riesgos y produce **la recomendación
estratégica al Directorio**. Leé los documentos de los otros analistas que ya estén
disponibles en la carpeta antes de escribir.

**10.1 El dilema del innovador aplicado.** Es un caso de manual y hay que explotarlo:
GTA Online lleva más de una década generando ingresos recurrentes; GTA VI lo canibaliza.
Christensen describe exactamente esto — el incumbente enfrenta un desincentivo estructural
a innovar porque el producto nuevo se come al que ya tiene. Desarrollalo con las cifras del
data pack. Buscá qué dijo la empresa sobre la convivencia de GTA Online y GTA VI, y qué pasó
históricamente cuando lanzó GTA V teniendo GTA IV vivo.

**10.2 Mapa de riesgos.** Para cada uno: descripción, evidencia, probabilidad, impacto y
horizonte temporal.
- **Concentración extrema**: qué proporción del valor depende de una sola franquicia. Un
  retraso adicional o una recepción tibia mueve el año entero y la acción.
- **Canibalización** interna (lo de 10.1).
- **Competencia por tiempo de atención**: video corto y plataformas UGC compitiendo por las
  mismas horas sin el costo de producir un AAA.
- **Erosión de la barrera de costo** por IA generativa.
- **Escalada de costos y punto de equilibrio**: cada AAA es una apuesta más grande y más
  binaria.
- **Dependencia de licencias de terceros** (NBA, WWE, PGA): barrera alquilada, no propia.
- **Regulación**: loot boxes y moneda virtual, protección de menores, privacidad, IA y
  derechos de imagen y voz de los actores.
- **Talento y reputación** como empleador.
- **Plataformas**: dependencia de las tiendas y de sus comisiones.

**10.3 Diagnóstico con el framework de evolución de la industria** (está en el brief, sección
3.4). Respondé las cinco dimensiones para Take-Two: adecuación de los activos, dominio
tecnológico, barreras de entrada, productos sustitutos e integración vertical. ¿Las nuevas
tendencias se apalancan en los activos actuales de Take-Two o los destruyen?

**10.4 Perspectiva del atacante** (brief, sección 3.5). Ubicá las amenazas principales en la
matriz de Fiona Murray: ¿refuerzan o destruyen la expertise tecnológica de Take-Two?
¿refuerzan o socavan sus activos de mercado? Identificá si hay alguna amenaza en el cuadrante
*Novelty Squared*.

**10.5 OPORTUNIDADES.** El espejo de los riesgos, priorizadas por atractivo y por
factibilidad dado lo que la empresa ya sabe hacer: UGC dentro de sus propios mundos
(capitalizando lo que ya aprendió con la compra de FiveM); IA generativa en producción para
bajar el costo del AAA; expansión del negocio de publicidad; transmedia y licenciamiento de IP
a cine y series; suscripción propia; venta directa al consumidor salteando comisiones;
mercados emergentes.

**10.6 LA RECOMENDACIÓN AL DIRECTORIO.** Es la slide 10 y la conclusión de todo el trabajo.
Requisitos:
- **Un titular único y memorable** que capture la estrategia en una frase. El deck de
  referencia usó "de streaming a experiencia inmersiva: un metaverso de marca". El nuestro
  tiene que ser igual de nítido y tiene que salir del core competence identificado en el
  Tema 9, no de una lluvia de ideas genérica.
- **Cuatro pilares** que desarrollen el titular, cada uno con su lógica y con qué capacidad
  de la empresa se apalanca.
- Debe responder explícitamente el dilema del innovador de 10.1: qué hacer con GTA Online
  cuando llegue GTA VI.
- Debe ser una estrategia **para el incumbente**: apalancada en los activos que Take-Two ya
  tiene, no una lista de deseos que requeriría ser otra empresa.
- Proponé 2 o 3 alternativas de titular al final, para poder elegir al armar el deck.
```

---

## Nota de ejecución

Los ocho se lanzan en paralelo. El Tema 10 es el único que conviene que lea los documentos de
los otros temas antes de escribir; si termina primero, se le puede pedir una segunda pasada
al final para consolidar.
