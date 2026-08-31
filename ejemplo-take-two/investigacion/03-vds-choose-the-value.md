# 03 — VALUE DELIVERY SYSTEM · BLOQUE 1: **CHOOSE THE VALUE**
### Understand value desires · Select target · Define benefits & price
**Material de base para presentación al Directorio de Take-Two Interactive (NASDAQ: TTWO)**
**Fecha de corte de la investigación: 27 de agosto de 2026**

> **Nota de método.** Las cifras financieras de Take-Two provienen del data pack
> `00-datapack-numerico.md` y **no fueron re-investigadas**. Todo dato nuevo está marcado como
> *"dato nuevo, no presente en el data pack"*. Se distingue siempre entre **dato reportado** por
> la empresa, **estimación de un tercero**, **dato filtrado** (no auditado) e ***inferencia
> propia***. Referencias `[n]` a la lista de FUENTES al final. El año fiscal de Take-Two cierra
> el **31 de marzo**: FY2026 = 1/4/2025 a 31/3/2026.
>
> **Estado de GTA VI a la fecha:** **no lanzado**. Fecha vigente 19/11/2026, exclusivo PS5 y
> Xbox Series X|S, sin versión de PC anunciada. USD 79,99 standard / USD 99,99 ultimate,
> preventas abiertas desde el 25/6/2026.

---

## SÍNTESIS EJECUTIVA

**1. El bloque "Choose the Value" es el que más se transformó de los tres, porque la
digitalización no mejoró la investigación de mercado: la volvió innecesaria.** Antes, elegir el
valor era un acto de inferencia previo a la producción — focus groups, prensa especializada,
ventas retail como único feedback, ciclos de aprendizaje de años. Hoy el juego en operación
*es* el instrumento de medición: la elección de valor se hace **después** de lanzar y de forma
permanente. El sub-proceso dejó de ser una etapa y pasó a ser un bucle.

**2. Take-Two contiene, en una misma sociedad, los dos extremos del espectro de esta industria
— y esa es la observación central del documento.** Zynga elige valor con un ciclo de semanas
gobernado por telemetría, A/B testing y modelos de LTV. Rockstar elige valor con un ciclo de
**~13 años** gobernado por una visión autoral. El CEO lo formula sin ambigüedad: la IA y los
datos son *"backward-looking"*, están construidos sobre información que ya existe, y por eso
*"no hacemos eso acá; queremos algo que nunca hayas visto"* [8]. Son dos teorías incompatibles
sobre qué quiere el cliente conviviendo bajo un mismo ticker.

**3. Pero la lectura fácil —"Rockstar no usa datos"— es falsa, y el matiz importa.** El ataque
informático del **13-14 de abril de 2026** al que Rockstar fue expuesto reveló que la compañía
opera un **data warehouse en Snowflake** monitoreado con **Anodot**, con un dataset
multi-dominio dedicado a *performance de la economía in-game y tracking de monetización* [16][17].
Rockstar publica además vacantes de Analytics y de UX Research [10][11]. ***Inferencia propia:***
la asimetría entre Rockstar y Zynga **no es de capacidad analítica sino de gobierno**: Rockstar
tiene datos de clase mundial y decidió, deliberadamente, **no dejar que decidan el producto**.
Los usa para operar, no para crear. Eso es una elección de arquitectura, no una carencia — y por
lo tanto es reversible por decisión del Directorio, cosa que una carencia de capacidad no sería.

**4. La segmentación demográfica que sostuvo el marketing de esta industria durante veinte años
ya no describe al mercado.** La edad promedio del jugador estadounidense es **36 años**, con
**18 años de antigüedad** jugando; el reparto por género es **53% hombres / 46% mujeres**, y en
la cohorte boomer las mujeres juegan **más** que los hombres (52% vs 46%) [12][13]. "Hombres de
18 a 34" describe hoy a una minoría del mercado. El segmento sigue siendo el núcleo económico de
Rockstar, pero ya no es el mercado.

**5. La concentración del gasto en Take-Two está documentada, y es más extrema que el promedio
de la industria.** Los datos filtrados de la operación de GTA Online indican que, entre
**septiembre de 2025 y marzo de 2026, el 4% de la base de jugadores generó prácticamente el
100% del gasto**, y que las **Shark Cards explican ~74-75% de los ingresos** del servicio, con
GTA+ aportando el resto [16][17]. **Advertencia: es dato filtrado por un tercero criminal, no
reportado ni confirmado por la empresa; se cita porque es la única cuantificación existente y
porque fue replicado por múltiples medios especializados, pero no debe presentarse como dato
auditado.**

**6. El precio dejó de ser un número y pasó a ser una arquitectura — y Take-Two está en la
frontera legal de esa arquitectura.** GTA VI se lanza a **USD 79,99 / 99,99** [datapack],
consolidando el salto de 60 → 70 → 80 que Nintendo abrió con *Mario Kart World* y que Microsoft
intentó y retrocedió parcialmente [14][15]. Pero el precio de entrada es la parte menor: GTA+
subió de USD 5,99 a **USD 7,99 mensuales (+33%)** [18][19], NBA 2K sostiene una economía de
Virtual Currency cuya progresión completa la prensa especializada estima en torno a **USD 100
por temporada** [20][21], y en su defensa judicial Take-Two argumentó que la moneda virtual
**"no es propiedad del demandante: son ficciones creadas por los publishers"** [22]. Esa frase
es, literalmente, la definición del producto que hoy sostiene el 78% de sus Net Bookings.

**7. Posición consolidada por sub-proceso.** *Understand value desires:* **capacidad de clase
mundial, gobierno fragmentado**. *Select target:* **fuerte en mobile, débil en la sinergia
prometida entre consola y mobile — el cross-selling que justificó la compra de Zynga por
USD 9.521,8 M no tiene evidencia pública de haberse materializado**. *Define benefits & price:*
**líder de la industria en sofisticación, y por eso mismo el más expuesto al giro regulatorio
europeo sobre monedas in-app**.

---

## 0. QUÉ SIGNIFICA "CHOOSE THE VALUE" EN ESTA INDUSTRIA

En el Value Delivery System clásico, *Choose the Value* es lo que ocurre **antes** de producir:
se investiga qué quiere el cliente, se elige a quién servir y se define qué se le va a ofrecer y
a qué precio. Es un bloque de decisión previa.

**En el entretenimiento interactivo digitalizado ese orden se rompió.** El producto se lanza,
la operación mide, y la elección de valor se re-hace de manera continua sobre una base instalada
viva. La consecuencia práctica es que el bloque *Choose* dejó de ser una etapa del proceso y
pasó a ser **una capacidad permanente que corre en paralelo a los otros dos bloques**.

*Inferencia propia:* esto explica por qué el activo estratégico de esta industria migró del
**catálogo** (qué juegos tengo) al **sistema de escucha** (qué tan rápido aprendo de los
jugadores que ya tengo). Y explica por qué un publisher sin un juego vivo está estructuralmente
ciego: no tiene con qué medir.

---

## 3.1 UNDERSTAND VALUE DESIRES
### *Cómo se averiguaba qué quiere el jugador, y cómo se averigua hoy*

### 3.1.1 La comparación estructural

| Dimensión | **ANTES** (hasta ~2008) | **DESPUÉS** (2026) |
|---|---|---|
| **Instrumento principal** | Focus groups, encuestas, prensa especializada, ferias | **Telemetría del juego en operación**: cada acción del jugador es un evento registrado |
| **Momento de la medición** | *Antes* de producir (y ya nunca más) | *Permanente*, durante toda la vida del título |
| **Latencia del aprendizaje** | 3 a 5 años (un ciclo de producto entero) | Horas a días. En mobile, **el ciclo de decisión es semanal** |
| **Señal de éxito/fracaso** | **Ventas retail sell-in** — un número agregado, con semanas de retraso y sin causa | Retención D1/D7/D30, sesiones, conversión, ARPDAU, embudo por cohorte |
| **Muestra** | Cientos de personas | **Toda la base instalada**, censal, no muestral |
| **Naturaleza del conocimiento** | Declarativo ("qué dice el jugador que quiere") | **Revelado** ("qué hace el jugador cuando cree que nadie mira") |
| **Método de validación** | Juicio del director creativo + review de prensa | **A/B testing** con asignación aleatoria y significancia estadística |
| **Canal de escucha cualitativa** | Cartas de lectores, revistas, foros incipientes | Reddit, Discord, Twitch, X, review-bombing en storefronts |
| **Quién sabe qué quiere el cliente** | El publisher, por inferencia | **La operación**, por medición — y en Rockstar, *deliberadamente*, el autor |

### 3.1.2 Qué capacidad analítica aportó Zynga (y qué se hizo con ella)

**Lo que se prometió, textualmente, en el anuncio de la operación (10/1/2022):** las sinergias
declaradas incluían *"cross-marketing a través de una base de datos de clientes compartida más
grande"* y *"mejorar las economías de los juegos mediante analítica de datos y modelos de
machine learning más efectivos"*, además del uso de la plataforma publicitaria **Chartboost**
para mejorar la adquisición de usuarios vía mejor targeting de audiencia [23]. La cuantificación
fue **USD 100 M de sinergias de costo en dos años y al menos USD 500 M de Net Bookings
incrementales en el tiempo** [23].

**Lo que Zynga efectivamente sabe hacer** (dato reportado y observable en su operación):
- Operar decenas de títulos free-to-play con ciclos de contenido de días, no de años.
- Segmentar por comportamiento y valor en tiempo real y ejecutar ofertas personalizadas.
- Correr experimentación continua sobre economías virtuales.
- Operar una red de cross-promotion entre títulos propios.

**Lo que efectivamente se materializó — y esta es la parte incómoda.** Take-Two **no publica
ninguna métrica que permita verificar sinergia de datos entre etiquetas**. No reporta DAU, MAU,
ARPU ni usuarios pagos, ni consolidado ni por etiqueta [datapack §11]. No existe un solo título
de Rockstar operado por Zynga. Y dos de las piezas que sostenían la tesis de sinergia
**fueron desinvertidas**: *Private Division* se vendió en noviembre de 2024 y **Chartboost fue
vendida a LoopMe en diciembre de 2024** [24][25]. *Inferencia propia:* la capacidad analítica de
Zynga existe y funciona **dentro de Zynga**; la evidencia pública de que haya cruzado hacia
Rockstar o 2K es, a la fecha, nula.

### 3.1.3 🔴 LA TENSIÓN CENTRAL: modelo autoral vs. modelo de datos
#### *Dos formas opuestas de responder "qué quiere el cliente", en la misma empresa*

Este es el hallazgo de mayor valor estratégico del bloque. Merece formularse con precisión,
porque la versión simplificada ("Rockstar es analógico, Zynga es digital") es **falsa** y no
resistiría una pregunta del Directorio.

#### (a) La doctrina explícita de Rockstar/Take-Two

Strauss Zelnick es inusualmente directo sobre esto. Su argumento tiene dos partes:

1. **Los sistemas basados en datos son estructuralmente incapaces de producir un hit.** Sobre la
   IA generativa: *"está construida sobre datos que ya existen. Es retrospectiva"* [8]. La
   extensión lógica —y él la hace— es que cualquier sistema que optimiza sobre comportamiento
   observado sólo puede reproducir variantes de lo que ya funcionó.
2. **El proceso de pitch se organiza contra la analogía.** *"Nosotros no hacemos eso acá;
   queremos algo que nunca hayas visto"* [8], en contraste explícito con la práctica de Hollywood
   de vender proyectos como combinaciones de éxitos previos.

Es una doctrina, no una omisión. Y tiene resultados: la franquicia GTA acumula **~475 millones
de unidades**, *GTA V* superó las **230 millones** trece años después de su lanzamiento, y
*Red Dead Redemption 2* las **87 millones** [datapack §11.2].

#### (b) La contra-evidencia: Rockstar SÍ opera una máquina de datos

Tres pruebas independientes, todas nuevas respecto del data pack:

| Evidencia | Qué demuestra | Estatus |
|---|---|---|
| **El incidente de seguridad de abril de 2026.** El grupo ShinyHunters accedió al **data warehouse Snowflake** de Rockstar explotando una vulnerabilidad en **Anodot**, una herramienta de analítica cloud de terceros, y sustrajo un dataset multi-dominio *"enfocado en performance de la economía in-game y tracking de monetización"* [16][17] | Rockstar corre una infraestructura de analítica de monetización de nivel empresarial, con proveedores especializados | **Dato filtrado / cobertura de prensa.** Rockstar caracterizó el episodio como *"una cantidad limitada de información no material"* [17] |
| **Vacantes públicas de Rockstar** en *Analytics*, *Data Design Analyst* y *UX Research* (Edimburgo), con descripciones que hablan de *"proveer insights y resultados accionables"* y de *"medir y mejorar el éxito de nuestros juegos"* [10][11] | Existe una función de analítica y de investigación de usuario formalizada e institucional | Dato público (job listings) |
| **La operación de GTA Online**: doce años de actualizaciones con cadencia semanal, eventos por tiempo limitado y ajustes de economía [26] | Es imposible operar eso sin telemetría de comportamiento y de economía | Dato público observable |

#### (c) La formulación correcta de la tensión

> ***Tesis.*** La diferencia entre Rockstar y Zynga **no es que uno tenga datos y el otro no**.
> Ambos los tienen. La diferencia es **dónde se le concede autoridad al dato dentro del proceso
> de decisión**.

| | **Rockstar** | **Zynga** |
|---|---|---|
| **¿Qué decide el dato?** | La **operación** del servicio: qué evento sale esta semana, cómo se calibra la economía, dónde hay fricción | **El producto entero**: qué se construye, para quién, cómo se monetiza, qué se mata |
| **¿Qué decide el autor?** | **La obra**: el mundo, la narrativa, el tono, el sistema. Innegociable | El diseño se subordina a la métrica |
| **Unidad de tiempo del ciclo** | **~13 años** entre entregas principales de GTA (2013 → 2026) | **Semanas** |
| **Riesgo asumido** | Binario y gigantesco. Un solo producto define un año fiscal | Distribuido en decenas de títulos y experimentos |
| **Modo de fallo** | Retraso o recepción tibia mueve la compañía entera | Erosión lenta por dependencia de plataforma (ATT) y saturación de canal |
| **Qué produce** | IP que dura décadas y genera **1.400 millones de horas de visionado anual en Twitch** sin costo de medios [27] | Flujo de caja recurrente predecible: **USD 3.300,9 M** de Net Bookings mobile en FY2026 [datapack §4.1] |

#### (d) La consecuencia estratégica para el Directorio

*Inferencia propia, en tres movimientos:*

1. **La coexistencia no es un accidente histórico: es la mejor cobertura de portafolio del
   sector.** Un modelo produce opcionalidad de altísimo payoff con alta varianza; el otro produce
   base recurrente con baja varianza. Financieramente, es exactamente la estructura que un
   Directorio querría. En FY2026 Zynga y 2K financiaron —84% de los Net Bookings— la espera de
   un producto de Rockstar que aportó apenas el 16% del mix [datapack §3.1].

2. **Pero la sinergia entre ambos no está capturada, y la evidencia de eso es la propia
   contabilidad.** Take-Two escribió a pérdida **USD 6.638,9 M** —el 70% de lo que pagó por
   Zynga— sobre un activo que en FY2026 tuvo su mejor año desde la compra [datapack §9]. Se pagó
   por una sinergia que no se cobró.

3. **El punto de decisión concreto es GTA VI.** Es el primer producto de Rockstar concebido
   íntegramente dentro de un grupo que ya es dueño de la mejor operación de datos de mobile del
   mercado occidental. Si el modo online de GTA VI se opera con la disciplina analítica de Zynga
   manteniendo la autoría de Rockstar en la obra, la asimetría se convierte en arquitectura. Si
   se opera como se operó GTA Online, la compra de Zynga habrá sido —a diez años vista— una
   diversificación financiera cara, no una integración.

### 3.1.4 Cómo se usan efectivamente los datos en GTA Online y NBA 2K

**GTA Online.** Las únicas cuantificaciones existentes provienen del incidente de abril de 2026,
y describen una operación intensamente instrumentada [16][17] — *dato filtrado, no reportado por
la empresa:*

| Métrica (dato filtrado) | Valor | Período |
|---|---:|---|
| Ingreso semanal promedio de *GTA Online* | **~USD 9,6 M** | sep-2025 a abr-2026 |
| Ingreso anualizado implícito | **~USD 500 M** | — |
| Participación de Shark Cards en el ingreso | **~74-75%** (el resto, GTA+) | — |
| Proporción de la base que genera el gasto | **~4% de los jugadores** | sep-2025 a mar-2026 |
| MAU PS5 / PS4 | **~3,47 M / ~1,89 M** | principios de 2026 |
| MAU Xbox Series X\|S / Xbox One | **~1,13 M / ~1,03 M** | principios de 2026 |
| Usuarios activos semanales en PC | **~895.000** | principios de 2026 |
| Ingreso semanal PS5 vs PC | **~USD 4,5 M vs ~USD 264.000** | principios de 2026 |
| *Red Dead Online* — ingreso semanal | **~USD 508.000** (~USD 26,4 M anualizados) | jun-2024 a abr-2026 |
| Shark Cards — acumulado histórico | **USD 5.083.191.048** | 12/11/2014 a 2/4/2024 |

***Inferencia propia sobre el dato más revelador:*** PC aporta ~895.000 usuarios activos
semanales y **USD 264.000 semanales**, contra los **USD 4,5 M de PS5**. Eso es un ratio de
ingreso por usuario de aproximadamente **1 a 17** a favor de la consola. Si esa relación se
sostiene, **la ausencia de una versión de PC de GTA VI en el lanzamiento no es sólo una decisión
de calidad o de anti-piratería: es una decisión de monetización defendible con datos.** Es,
paradójicamente, el argumento más data-driven que se le puede atribuir a Rockstar.

**NBA 2K.** Acá sí hay métricas reportadas por la empresa, y son las **únicas métricas de
engagement que Take-Two divulga** [datapack §11.1]: en Q1 FY2027, DAU **+15%**, DAU de MyCAREER
**+25%** y partidas promedio por usuario **+35%** interanual. *Inferencia propia:* que la empresa
elija divulgar exactamente estas tres —y ninguna de GTA, ni de mobile— indica que 2K es hoy la
etiqueta donde el vocabulario de la operación data-driven ya está normalizado hacia afuera. El
modelo de **temporadas de seis semanas** de *NBA 2K26*, con dos pases premium (*Pro Pass* y
*Hall of Fame Pass*) y hasta **45.000 VC ganables** por temporada [28], es literalmente un
sistema de calibración de recompensa por cohorte.

---

## 3.2 SELECT TARGET
### *De un producto para un público, a una economía de cohortes*

### 3.2.1 La comparación estructural

| Dimensión | **ANTES** | **DESPUÉS** |
|---|---|---|
| **Unidad de segmentación** | Demográfica gruesa: "hombres 18-34" | **Comportamiento y valor**: cohorte de instalación, patrón de sesión, propensión a pagar |
| **Instrumento de clasificación** | Clasificación etaria ESRB + intuición de marketing | Modelos de **LTV predicho**, scoring de propensión, segmentación por RFM |
| **Granularidad** | Un producto → un público | **Un producto → n segmentos con oferta, precio y contenido distintos** |
| **Objetivo del targeting** | Maximizar alcance de la campaña de lanzamiento | **Identificar al 1-4% que genera la mayoría del ingreso** y retenerlo |
| **Adquisición** | Compra de medios masivos | **User acquisition medido por cohorte contra LTV** |
| **Cross-selling** | Inexistente o por catálogo impreso | Cross-promotion entre títulos y entre plataformas |
| **Consecuencia económica** | Ingreso proporcional a unidades | **Ingreso proporcional a la calidad del targeting**, no al volumen |

### 3.2.2 La demografía real del jugador en 2026 — el segmento tradicional ya no es el mercado

Datos de la **Entertainment Software Association** (Estados Unidos, relevamiento 2026) — *dato
nuevo, no presente en el data pack* [12][13]:

| Métrica | Valor |
|---|---:|
| Estadounidenses que juegan regularmente (5 a 90 años) | **205,1 millones** (~2/3 de la población) |
| Estadounidenses que juegan semanalmente | **212,3 millones** (+3% i.a., +7,2 M) |
| **Edad promedio del jugador (EE.UU.)** | **36 años** |
| Antigüedad promedia jugando | **18 años** |
| **Reparto por género (EE.UU.)** | **53% hombres / 46% mujeres** |
| Cohorte boomer | **52% de las mujeres juega vs 46% de los hombres** |
| Edad promedio global | **41 años**; el grupo 25-44 es el **49%** de los jugadores |

> **Lectura para el Directorio (*inferencia propia*).** El público al que Rockstar habla —el
> núcleo joven y masculino del core gaming— **sigue existiendo y sigue siendo el más rentable
> por hora**, pero pasó de ser *el mercado* a ser *un segmento del mercado*. Dos consecuencias
> concretas: (i) el crecimiento incremental de la industria no está en ese segmento, lo que
> obliga a que la expansión de Take-Two venga de mobile o de formatos nuevos, no de más AAA para
> el mismo público; (ii) la clasificación ESRB "M" de GTA, que era una restricción administrativa,
> hoy es también una restricción de mercado direccionable, y se está volviendo una restricción
> **regulatoria** con la ola europea de protección de menores.

### 3.2.3 La concentración del gasto: los "whales"

Este es el punto donde hay que ser riguroso, porque las cifras que circulan son viejas y se
re-citan como si fueran actuales.

**Lo que circula como estándar de industria** (y hay que citarlo con su fecha real): la cifra
canónica de que **el 1% superior de los que gastan genera ~29% de los ingresos** y **el 10%
superior genera dos tercios** proviene de un estudio de **Everyplay de octubre de 2014** sobre
más de 3.000 encuestados [29]. Sigue re-citándose en informes de 2025-2026 [30] **sin
actualización metodológica**. *No debe presentarse como dato de 2026.*

**Lo que sí es verificable y reciente** es la concentración a nivel de *título*, no de jugador
(Sensor Tower, 2026) — *dato nuevo*: el **top 10 de juegos captura 23,2%** de todo el gasto en
compras in-app, el **top 50 el 51,0%** y el **top 100 el 64,5%**; en cambio el top 10 explica
apenas **4,7% de las instalaciones** [31]. *Inferencia propia:* la industria concentra ingreso
mucho más de lo que concentra atención — un mismo jugador se distribuye entre muchos títulos
pero paga en muy pocos.

**Y lo que existe específicamente para Take-Two** es el dato filtrado de GTA Online: **~4% de la
base generó prácticamente la totalidad del gasto entre septiembre de 2025 y marzo de 2026**
[16][17]. **Estatus: dato filtrado, no auditado, no confirmado por la empresa.** Si se usa en la
slide, debe ir con esa etiqueta.

> ***Consecuencia estratégica (inferencia propia).*** Si el 4% paga por el 96%, entonces
> "elegir el valor" en un live service no significa elegir qué quiere *el jugador*: significa
> elegir qué quiere **el jugador que paga**, que es una población distinta con preferencias
> distintas. Ese es el conflicto de diseño estructural de la industria — el que la regulación
> europea está apuntando — y es el que explica por qué las críticas de la comunidad a la
> monetización de NBA 2K conviven con crecimiento récord de esa misma franquicia.

### 3.2.4 El cruce de audiencias entre consola y mobile: la sinergia que no aparece

La tesis de la adquisición de Zynga incluía explícitamente *"crear juegos mobile y nuevas
experiencias cross-platform para muchas de las franquicias icónicas del portafolio de
Take-Two"*, con **al menos USD 500 M de Net Bookings incrementales** atribuidos a eso [23].

**Estado a agosto de 2026:**

| Vector de cruce | Estado verificable |
|---|---|
| Franquicia de Rockstar operada por Zynga en mobile | **Ninguna** |
| *GTA* en mobile | Sólo la *GTA Trilogy* clásica, distribuida **vía Netflix Games** — *GTA: San Andreas* alcanzó **48 millones de descargas** en esa plataforma [7]. **No la opera Zynga** |
| Cruce de audiencias core ↔ casual | La propia documentación de la operación reconocía la duda: Take-Two servía a *hardcore y midcore*, Zynga a *casual e hypercasual* [23][32] |
| Métrica pública que permita verificar cross-selling | **Ninguna.** Take-Two no reporta usuarios [datapack §11] |
| Deportivas como puente | *Top Eleven* (manager mobile, Zynga) **+15% i.a.** en Q1 FY2027 y *Top Goal* en soft launch [datapack] — pero son productos nativos de Zynga, no extensiones de 2K |

***Inferencia propia:*** el único puente consola→mobile con volumen demostrado que tiene hoy la
compañía **no pasa por Zynga: pasa por Netflix**. Eso es una señal doble — dice que la IP de
Rockstar sí viaja a audiencias masivas fuera del core, y dice que la infraestructura para
hacerla viajar la puso un tercero. Es exactamente el mismo patrón que se repite en el bloque
*Communicate* con el estreno del 27/8/2026 (ver documento 05).

---

## 3.3 DEFINE BENEFITS & PRICE
### *Del SKU único a una arquitectura de precios de varias capas*

### 3.3.1 La comparación estructural

| Dimensión | **ANTES** | **DESPUÉS** |
|---|---|---|
| **Estructura de oferta** | **Un SKU**, un precio, sin cambios posteriores | **Ediciones múltiples** (standard / deluxe / ultimate), bundles, temporadas |
| **Precio de referencia AAA** | USD 50-60, estable por más de una década | **USD 70-80**, en escalada activa desde 2020 |
| **Unidad de cobro** | El juego | **Moneda virtual** que desacopla el gasto de su percepción |
| **Momento del cobro** | Una vez, en la compra | Continuo: **microtransacciones, battle pass, suscripción** |
| **Personalización del precio** | Ninguna | **Ofertas segmentadas** por cohorte, precio dinámico, descuentos personalizados |
| **Quién fija el beneficio** | El diseñador, antes del lanzamiento | La operación, contra métricas, de forma continua |
| **Qué compra el cliente** | Un producto terminado | **Acceso, progresión y estatus** dentro de un sistema vivo |
| **Naturaleza jurídica de lo vendido** | Una copia de software | Una licencia sobre *"ficciones creadas por el publisher"* — argumento judicial literal de Take-Two [22] |

### 3.3.2 El estado del debate sobre el precio del AAA

*Datos nuevos, no presentes en el data pack.*

| Hito | Qué pasó | Estatus |
|---|---|---|
| **60 → 70 USD** | Transición de generación (2020). Hoy **plenamente aceptada** en PlayStation, Xbox y Nintendo [14] | Consolidado |
| **70 → 80 USD — Nintendo abre** | *Mario Kart World* (lanzamiento de Switch 2, 2025) a **USD 80**. Los datos tempranos de ventas indicaron que **el precio no dañó el desempeño**: superó a *Mario Kart 8* en sus primeros meses [14] | Reportado por prensa |
| **Microsoft intenta y matiza** | *The Outer Worlds 2* a **USD 79,99** (29/10/2025), pero **entrando a Game Pass el día uno**, lo que neutraliza parcialmente el precio [14][15] | Reportado |
| **Sony no acompaña** | No subiría el precio de sus títulos first-party de PS5 en el corto plazo [14] | Reportado |
| **Electronic Arts se abstiene** | Se mantuvo fuera de la carrera a USD 80 [33] | Reportado |
| **Take-Two entra con el producto más caro de vender** | GTA VI a **USD 79,99 / 99,99**, preventas desde el 25/6/2026 [datapack] | **Dato confirmado** |
| **Reacción del mercado** | Negativa en el discurso público, pero **sin evidencia de daño en volumen** en los casos medidos [14] | Mixto |

> ***Tesis (inferencia propia).*** El salto a USD 80 no lo hizo el líder de la categoría: lo hizo
> **Nintendo**, con el producto de menor riesgo de rechazo del mercado, y recién después se movió
> el resto. Take-Two llega al nuevo precio **con el activo que menos elasticidad-precio tiene de
> toda la industria**, lo cual convierte a GTA VI en el test definitivo del techo. Si un juego
> con la intención de compra más alta jamás registrada valida los USD 80, el precio de referencia
> del AAA queda fijado ahí para el resto de la década — y el principal beneficiario no es
> Take-Two, que lo cobra una vez, sino todo publisher con un catálogo anual (que es EA, ahora
> privada). *La empresa que asume el costo político del cambio de precio no es la que más lo
> capitaliza.*

### 3.3.3 Las cuatro capas de precio de Take-Two hoy

**Capa 1 — Precio de entrada (full game).** GTA VI USD 79,99 / 99,99; NBA 2K a USD 69,99 con
ediciones superiores. Aporta el **16%** de los ingresos GAAP en Q1 FY2027 ("full game and
other") [datapack §2.2], y subirá a ~36% en FY2027 por la dilución de GTA VI.

**Capa 2 — Suscripción: GTA+.** *Datos nuevos* [18][19]:

| Ítem | Detalle |
|---|---|
| Lanzamiento | **29 de marzo de 2022**, USD **5,99**/mes |
| Aumento | **11 de abril de 2024** a USD **7,99**/mes → **+33%** |
| Qué incluye hoy | GTA$500.000 mensuales; Shark Cards exclusivas con **15% de bonus**; Vinewood Car Club (garage de 100 autos); taller con descuentos; catálogo de clásicos de Rockstar (*GTA Trilogy*, *Red Dead Redemption*); ofertas y descuentos |
| Cambio estructural relevante | **En consolas de generación actual, GTA+ incluye el acceso completo a GTA Online sin comprar el juego** [34] |
| Suscriptores | **No divulgados** [datapack §15.4] |

***Inferencia propia:*** incluir el acceso al juego dentro de la suscripción convierte a GTA+ de
un programa de fidelidad en un **canal de entrada alternativo**: baja el precio de acceso de
USD 79,99 a USD 7,99 mensuales. Es la primera vez que Rockstar opera un modelo de acceso, y es
el ensayo natural de lo que puede hacer con GTA VI. *Riesgo simétrico: es también el mecanismo
por el cual el ingreso de lanzamiento se puede canibalizar a sí mismo.*

**Capa 3 — Moneda virtual y microtransacciones.**

- ***GTA Online* / Shark Cards.** La denominación más alta ("Megalodon") cuesta **USD 99,99**,
  es decir **más que el juego** [35]. Los datos filtrados indican un acumulado de
  **USD 5.083 M** entre noviembre de 2014 y abril de 2024, y ~74-75% del ingreso del servicio
  hoy [16][17]. *Dato filtrado.*
- ***NBA 2K* / Virtual Currency.** La VC es requisito para progresar en MyCAREER (atributos,
  ropa, calzado) y la prensa especializada estima el costo de un jugador competitivo en el orden
  de **USD 100** por ciclo, o "cientos de horas" de juego como alternativa [20][21]. La VC **no
  compra el pase de temporada ni saltos de nivel**, lo que crea una segunda moneda de facto [20].

**Capa 4 — Pase de temporada.** *NBA 2K26*: temporadas de **seis semanas**, dos pases premium
(*Pro Pass* y *Hall of Fame Pass*), hasta **45.000 VC ganables**, boosters de XP y saltos de
nivel; el pase unifica la progresión de MyCAREER y MyTEAM en un solo tracker [28].

### 3.3.4 La controversia — y por qué es un asunto de Directorio, no de comunidad

Tres frentes simultáneos, todos *datos nuevos*:

1. **Litigio de propiedad sobre la moneda virtual.** En una acción de clase iniciada por un menor
   en California, Take-Two y 2K argumentaron para pedir el desestimiento que
   **"la VC no es propiedad del demandante; la VC in-game son ficciones creadas por los
   publishers, sujetas a sus términos de servicio y acuerdos de usuario"** [22]. Es la defensa
   correcta jurídicamente y **es un problema de comunicación estratégica**: describe con
   exactitud lo que la compañía vende.
2. **Litigio por diseño adictivo.** Reclamos que apuntan a MyTEAM y MyCAREER por mecánicas de
   tipo casino (sobres aleatorios, ruletas, revelaciones tipo jackpot en material promocional),
   con foco en menores [21]. A 2025-2026 **no hay clase certificada**; los reclamos avanzan
   individualmente [21]. *Estatus: litigio en curso, sin resolución.*
3. **El frente regulatorio europeo.** El pedido del Parlamento Europeo de que el *Digital
   Fairness Act* prohíba loot boxes, **monedas in-app** y mecánicas pay-to-progress en juegos
   accesibles a menores [ver `01-industria-perimetro.md` §7.1] apunta simultáneamente a las
   cuatro capas descritas arriba.

> ***Consecuencia (inferencia propia).*** Take-Two es, por diseño de portafolio, **el publisher
> occidental cotizante con mayor exposición combinada a moneda virtual**: la tiene en mobile
> (Zynga, 46% del mix FY2026), en deportivos (VC de NBA 2K) y en Rockstar (Shark Cards y GTA+).
> Su excelencia en este sub-proceso *es* su exposición regulatoria. Un Directorio no debería leer
> "Define benefits & price" como una fortaleza sin leer, en la misma slide, el riesgo que la
> acompaña.

---

## TESIS DE CIERRE
### *Qué cambió estructuralmente y qué tan bien posicionado está Take-Two*

**Qué cambió, en una frase:** *elegir el valor pasó de ser una hipótesis previa a la producción,
verificada una sola vez por las ventas, a ser un sistema de medición continua sobre una base
instalada viva — y en ese tránsito el activo estratégico dejó de ser el catálogo y pasó a ser la
relación operada con el jugador que ya se tiene.*

Los tres desplazamientos que lo componen:

1. **De lo declarativo a lo revelado.** Ya no se pregunta qué quiere el jugador: se observa qué
   hace. Eso destruyó el valor de la investigación de mercado tradicional y creó valor en la
   telemetría.
2. **De la demografía al comportamiento.** El segmento útil dejó de ser un rango de edad y pasó
   a ser una cohorte de valor. La consecuencia extrema es que la industria diseña, cada vez más,
   para el 1-4% que paga.
3. **Del precio a la arquitectura de precios.** El número de la caja se volvió la capa menos
   importante de un sistema de cuatro capas superpuestas.

### Evaluación de Take-Two por sub-proceso

| Sub-proceso | Posición | Justificación | Etiqueta para la slide |
|---|---|---|---|
| **Understand value desires** | **Capacidad de primer nivel, gobierno fragmentado** | Zynga aporta ciclo semanal y experimentación; Rockstar tiene infraestructura de datos (Snowflake/Anodot) pero la subordina deliberadamente a la autoría. Cero evidencia pública de transferencia de capacidad entre etiquetas | ⚠️ **Oportunidad de innovar**: la capacidad existe, la integración no |
| **Select target** | **Excelente en mobile, sin evidencia en el cruce** | Segmentación por valor de clase mundial dentro de Zynga; el cross-selling consola↔mobile que justificó USD 9.521,8 M **no tiene evidencia pública de materialización**; el único puente masivo demostrado pasa por Netflix, no por Zynga | ⚠️ **Oportunidad de innovar** |
| **Define benefits & price** | **Líder de la industria — y por eso el más expuesto** | Cuatro capas de precio operando simultáneamente en tres etiquetas; 78% de Net Bookings recurrentes en FY2026. Contracara: máxima exposición al *Digital Fairness Act* y litigio activo sobre moneda virtual | ✅ **Ventaja que ya posee** (con riesgo regulatorio declarado) |

### La pregunta que este bloque le deja al Directorio

> **¿GTA VI se va a operar con el sistema de escucha de Rockstar o con el de Zynga?**
> La respuesta define si la compra de Zynga fue una integración o una diversificación financiera
> cara. Y la ventana para decidirlo **se cierra en el momento del lanzamiento**, porque la
> arquitectura de datos y de economía de un live service se fija en el diseño, no se
> retro-instala.

---

## MATERIAL PARA LA SLIDE 3
### *VDS — Choose the Value · Antes / Después*

| Sub-proceso | **ANTES** | **DESPUÉS** | Take-Two hoy |
|---|---|---|---|
| **Understand value desires** | Focus groups y prensa · ventas retail como único feedback · aprendizaje en **años** | Telemetría censal · A/B testing · escucha de comunidad · aprendizaje en **días** | ⚠️ **Dos sistemas sin integrar**: Zynga decide con datos en ciclo semanal; Rockstar tiene los datos pero decide por autoría, en ciclo de 13 años |
| **Select target** | "Hombres 18-34" · clasificación ESRB · un producto, un público | Cohortes de valor · modelos de LTV · el **1-4% que paga** define el diseño | ⚠️ Segmentación de élite en mobile · **el cross-selling consola↔mobile prometido no tiene evidencia pública** |
| **Define benefits & price** | **Un SKU · USD 60 · sin cambios posteriores** | 4 capas: entrada + suscripción + moneda virtual + pase de temporada | ✅ **78% de Net Bookings recurrentes (FY2026)** · GTA VI a USD 79,99/99,99 · GTA+ +33% · máxima exposición regulatoria del sector |

**Cinco cifras para el pie de la slide:**
1. **Edad promedio del jugador estadounidense: 36 años. Género: 53% / 46%.** El segmento
   "hombres 18-34" ya no es el mercado [12][13].
2. **~4% de los jugadores de GTA Online generó prácticamente el 100% del gasto** entre sep-2025 y
   mar-2026 — *dato filtrado, no confirmado por la empresa* [16][17].
3. **GTA VI: USD 79,99 / 99,99.** El salto a USD 80 lo abrió Nintendo en 2025; Take-Two lo valida
   con el activo de menor elasticidad-precio del sector [14][datapack].
4. **GTA+ pasó de USD 5,99 a USD 7,99 (+33%)** e incluye hoy el acceso completo a GTA Online en
   consolas actuales [18][34].
5. **Take-Two, en tribunales: la moneda virtual son "ficciones creadas por los publishers"** [22].

**Frase de cierre de la slide:**
> *La industria dejó de preguntarle al cliente qué quiere y empezó a medírselo. Take-Two tiene
> las dos formas de hacerlo bajo el mismo techo — y todavía no las hizo hablar entre sí.*

---

## FUENTES

**A. Take-Two: filings, comunicados y transcripciones**
*(las cifras financieras se toman del data pack `00-datapack-numerico.md`, que consolida estas fuentes)*

[1] Take-Two Interactive Software, Inc. — *"Reports Results for Fiscal First Quarter 2027"*, comunicado de prensa / Form 8-K, 6-7 de agosto de 2026. https://www.take2games.com/ir/news/take-two-interactive-software-inc-reports-results-fiscal-first-6

[2] Take-Two Interactive Software, Inc. — *"Reports Results for Fourth Quarter and Fiscal Year 2026"*, 21 de mayo de 2026. https://www.take2games.com/ir/news/take-two-interactive-software-inc-reports-results-fourth-2

[3] The Motley Fool — *"Take-Two (TTWO) Q1 2027 Earnings Call Transcript"*, agosto de 2026. https://www.fool.com/earnings/call-transcripts/2026/08/14/take-two-ttwo-q1-2027-earnings-call-transcript/

[4] Take-Two Interactive Software, Inc. — **Form 10-K, ejercicio cerrado el 31/3/2026**. SEC EDGAR. https://www.sec.gov/Archives/edgar/data/0000946581/000162828026037434/ttwo-20260331.htm · Resumen estructurado: StockTitan, https://www.stocktitan.net/sec-filings/TTWO/10-k-take-two-interactive-software-inc-files-annual-report-cd41fd29443b.html

**B. GTA VI: precio, fecha y comunicación**

[5] Forbes (Paul Tassi) — *"Rockstar Reveals GTA 6's Price Is $80, Confirms Preorder Time And Bonuses"*, 24 de junio de 2026. https://www.forbes.com/sites/paultassi/2026/06/24/rockstar-reveals-gta-6s-price-is-80-confirms-preorder-time-bonuses/

[6] Variety — *"'GTA 6' Pre-Orders Reach 'Unprecedented and Astonishing' Level in June Quarter"*, agosto de 2026. https://variety.com/2026/gaming/news/gta-6-preorder-sales-take-two-earnings-1236829396/

[7] GTA BOOM — *"Why Rockstar Is Letting Netflix Show GTA 6 Footage First"*, agosto de 2026 (incluye el dato de 48 millones de descargas de *GTA: San Andreas* en Netflix Games). https://www.gtaboom.com/why-rockstar-games-netflix-deal-for-gta-6-is-a-big-deal-e795

**C. La doctrina autoral: declaraciones de Take-Two**

[8] Creative Entrepreneurs — *"Why the next GTA 6 can't be generated: Strauss Zelnick on AI and the future of creativity"*, 4 de abril de 2025. https://creativeentrepreneurs.co/journal/why-the-next-gta-6-cant-be-generated-strauss-zelnick-on-ai-and-the-future-of-creativity/

[9] VentureBeat / GamesBeat — *"Take-Two CEO Strauss Zelnick: 'I'm charged with making hard decisions'"*. https://venturebeat.com/games/take-two-ceo-strauss-zelnick-im-charged-with-making-hard-decisions

**D. La contra-evidencia: la capacidad analítica de Rockstar**

[10] Rockstar Games — vacantes públicas de *Analytics* y *Data Design Analyst* (Greenhouse / Built In), consultadas en agosto de 2026. https://job-boards.greenhouse.io/rockstargames/ · https://builtin.com/job/data-design-analyst/4702094

[11] GTAVice.net — *"Rockstar Hiring for UX Research – GTA VI Playtesting To Start Soon?"*. https://www.gtavice.net/news/rockstar-hiring-for-ux-research-gta-vi-playtesting-to-start-soon

**E. Demografía del jugador**

[12] Entertainment Software Association — *"Two-Thirds of Americans Play Video Games Every Week"* (relevamiento anual 2026). https://www.theesa.com/two-thirds-of-americans-play-video-games-every-week-according-tonew-report-from-the-entertainment-software-association/ · PR Newswire: https://www.prnewswire.com/news-releases/two-thirds-of-americans-play-video-games-every-week-according-to-new-report-from-the-entertainment-software-association-302789137.html

[13] Entertainment Software Association — *"Annual ESA Study Reveals Video Games' Universal Appeal Across Generations"*. https://www.theesa.com/annual-esa-study-reveals-video-games-universal-appeal-across-generations/

**F. El debate del precio del AAA**

[14] Windows Central — *"Game prices rose higher in 2025, but is AAA losing out to budget titles?"*, 2026. https://www.windowscentral.com/gaming/prices-rose-in-2025-aaa-losing-to-budget · GAMES.GG — *"Will Video Game Prices Rise in 2026?"*. https://games.gg/news/will-video-game-prices-rise-in-2026/

[15] Eastern Herald — *"GTA 6 $80 Price Debate Could Reshape Gaming Industry"*, 6 de mayo de 2026. https://easternherald.com/2026/05/06/gta-6-80-dollar-price-gaming-industry-shift/

**G. El incidente de seguridad de abril de 2026 y los datos de GTA Online (⚠️ DATO FILTRADO)**

[16] BigGo Finance — *"Rockstar Hack Reveals GTA Online's $500M Annual Revenue, PS5 Dominance, and PC's Surprising Lag"*, 14 de abril de 2026. https://finance.biggo.com/news/202604142226_Rockstar_Hack_Reveals_GTA_Online_Revenue_and_Player_Data

[17] RockstarINTEL — *"GTA Online Leak Reveals $5 Billion In Revenue, Shocking Spending Habits"*, abril de 2026. https://rockstarintel.com/gta-online-leak-reveals-5-billion-in-revenue-shocking-spending-habits/ · Tech4Gamers — *"GTA Online Leaks Show Rockstar Made $5 Billion From Shark Cards Alone"*. https://tech4gamers.com/gta-online-rockstar-5-billion-shark-cards/

> ⚠️ **Advertencia de uso de [16][17]:** los datos provienen de una sustracción ilegal de
> información (grupo ShinyHunters, rescate de USD 200.000 no pagado, publicación el 13/4/2026).
> Rockstar los caracterizó como *"una cantidad limitada de información no material"*. **No son
> datos auditados ni reportados por la empresa.** Se citan por ser la única cuantificación
> pública existente y por haber sido replicados por múltiples medios especializados, siempre con
> esta etiqueta.

**H. GTA+ y monetización de Rockstar**

[18] GTA BOOM — *"Rockstar Raises GTA+ Subscription Price by 33%, Sparking Backlash from Fans"*. https://www.gtaboom.com/rockstar-raises-gta-subscription-price-by-33-sparking-backlash-from-fans-355b

[19] Rockstar Games — *GTA+ Benefits* (página oficial), consultada en agosto de 2026. https://www.rockstargames.com/gta-plus/benefits · GTA Intel — *"GTA+ in 2026: What the $7.99 Subscription Actually Gets You"*. https://gtaintel.com/news/gta-online-plus-subscription-explained

[34] GameSpot — *"GTA Online Is Now Included With GTA+ Membership"*. https://www.gamespot.com/articles/gta-online-is-now-included-with-gta-membership/1100-6535997/

[35] Sportskeeda — *"Are GTA Online Shark Cards worth buying? All you need to know"* (denominaciones y precios de Shark Cards). https://www.sportskeeda.com/gta/are-gta-online-shark-cards-worth-buying-all-need-know

**I. NBA 2K: monetización y litigios**

[20] Game Informer — *"NBA 2K26 Review: Putting It Together"*, 2025. https://gameinformer.com/review/nba-2k26/putting-it-together · GameTyrant — *"Is NBA 2K26 Pay-To-Win?"*. https://gametyrant.com/news/is-nba-2k26-pay-to-win

[21] TruLaw — *"NBA 2K Lawsuit [March 2026 Update]"* (estado procesal de los reclamos por diseño adictivo y loot boxes). https://trulaw.com/video-game-addiction-lawsuit/2k-lawsuit/nba-2k-lawsuit/

[22] Game File (Stephen Totilo) — *"Take Two denies NBA 2K microtransaction theft claim, says virtual currency is a 'fiction'"*. https://www.gamefile.news/p/nba-2k-microtransaction-lawsuit-response

[28] 2K Games — *NBA 2K26 Seasons* (página oficial) y *NBA 2K Support: Season Pass*. https://nba.2k.com/2k26/seasons/ · https://support.nba2k.com/hc/en-us/articles/41843861488659-NBA-2K-Season-Pass

**J. La adquisición de Zynga y sus sinergias declaradas**

[23] Businesswire / Take-Two y Zynga — *"Take-Two and Zynga to Combine..."*, 10 de enero de 2022 (sinergias declaradas: USD 100 M de costos, ≥ USD 500 M de Net Bookings incrementales, base de datos compartida, analítica y ML, Chartboost). https://www.businesswire.com/news/home/20220110005389/en/

[24] ExchangeWire — *"LoopMe Acquires Chartboost from Zynga"*, 11 de diciembre de 2024. https://www.exchangewire.com/blog/2024/12/11/loopme-acquires-chartboost-from-zynga/ · Businesswire: https://www.businesswire.com/news/home/20241210493233/en/

[25] PocketGamer.biz — *"Former Annapurna employees take over Private Division portfolio"*, enero de 2025. https://www.pocketgamer.biz/former-annapurna-employees-take-over-private-division-portfolio/

[32] MergerSight — *"Take-Two's $12.7bn Acquisition of Zynga"* (análisis de la tesis de sinergia y de la brecha entre audiencias core y casual). https://www.mergersight.com/post/take-two-s-12-7bn-acquisition-of-zynga

**K. Operación de GTA Online y benchmarks de concentración de gasto**

[26] GTA Wiki — *"Updates in Grand Theft Auto Online"* (historial completo de actualizaciones desde 2013). https://gta.fandom.com/wiki/Updates_in_GTA_Online

[27] GTA BOOM — *"GTA V Tops Twitch Charts with 1.4 Billion Hours Watched"*, abril de 2025 (datos del informe anual de Twitch 2024). https://www.gtaboom.com/gta-v-tops-twitch-charts-with-14-billion-hours-watched-9396 · Tubefilter: https://www.tubefilter.com/2025/04/24/twitch-2024-most-streamed-video-games-grand-theft-auto-v/

[29] Game Developer — *"Report: 29% of mobile game revenue generated by top 1% of spenders"*, **14 de octubre de 2014** (estudio de Everyplay, >3.000 encuestados). https://www.gamedeveloper.com/business/report-29-of-mobile-game-revenue-generated-by-top-1-of-spenders

[30] VoxBooster — *"Gacha Game Statistics (2026)"* (recopila y re-cita las series de Swrve y Everyplay). https://voxbooster.com/blog/gacha-game-statistics-2026/

[31] Sensor Tower — *"State of Gaming 2026"*, vía GameDev Reports, febrero de 2026 (concentración por título: top 10 = 23,2% del gasto IAP; top 100 = 64,5%). https://gamedevreports.substack.com/p/sensor-tower-the-gaming-market-in · Informe: https://investgame.net/wp-content/uploads/2026/02/2026-02-26-sensor_tower__state_of_gaming_2026__en_wp.pdf

**L. Precio del AAA — abstenciones**

[33] TechPowerUp — *"EA Sits Out $80 AAA Game Price Race for Now"*. https://www.techpowerup.com/339425/ea-sits-out-usd-80-aaa-game-price-race-for-now

---

*Documento preparado el 27 de agosto de 2026. Las cifras financieras de Take-Two provienen de
`00-datapack-numerico.md`. Los datos marcados como "dato nuevo" no están en ese documento y se
recomienda incorporarlos.*
