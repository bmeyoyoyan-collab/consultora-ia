# 09 — CORE COMPETENCE Y ARQUITECTURA DE NEGOCIO
### Framework de Gharajedaghi · ¿Cambiaron los factores clave de éxito? · Material para la slide 9

> **Documento de investigación · TP1 Digitalización de Industrias · UTDT**
> **Fecha de corte: 27 de agosto de 2026.** Cifras de Take-Two tomadas del data pack
> `00-datapack-numerico.md` (corte 26/8/2026), leída previamente su sección 15 (advertencias de
> uso). Todo dato no presente ahí está marcado como **"dato nuevo"**.
> **Advertencia de año fiscal:** el FY de Take-Two cierra el 31 de marzo. FY2026 = 1/4/2025 – 31/3/2026.
> ***Grand Theft Auto VI* NO fue lanzado.** Fecha vigente: **19 de noviembre de 2026**.
> ***GTA VI* sale como "experiencia de un solo jugador", sin modo online al lanzamiento y sin
> ventana anunciada para él.** A la fecha de corte Rockstar **nunca reconoció públicamente la
> existencia** de un GTA Online para VI [24][25].
>
> **Convención de estatus, aplicada en todo el documento:** *dato reportado* (empresa o filing) ·
> *estimación de tercero* · *inferencia propia:*.

---

## SÍNTESIS EJECUTIVA

**1. La hipótesis de las dos arquitecturas se confirma, pero la formulación correcta es más dura: no son dos arquitecturas en pie de igualdad, es una arquitectura de holding definida por el producto que contiene, sin integrar, una segunda definida por el mercado y una tercera que nadie estaba mirando.** La prueba más limpia no hay que buscarla: está en la frase con la que la propia compañía define su estrategia en su perfil corporativo. *"Nuestra estrategia es crear experiencias de entretenimiento exitosas, entregadas en toda plataforma relevante para nuestra audiencia, a través de una variedad de modelos de negocio sólidos"* [6]. Leída con el framework de Gharajedaghi en la mano, esa oración es un diagrama: **el producto ("hit experiences") es el sujeto; el mercado ("toda plataforma relevante") y la tecnología/know-how ("variedad de modelos de negocio") son complementos que se subordinan a él.** No es una interpretación: es la sintaxis.

**2. La tercera arquitectura que la hipótesis omite es la de 2K, y es la más avanzada de la casa.** *NBA 2K* no está gobernado por el producto sino por un calendario externo (la temporada de la NBA), un contrato de licencia y una audiencia que llega por la liga antes que por el juego; sobre eso corre live ops continuo, y desde junio de 2025 una sociedad conjunta —**NBA Take-Two Media**— cuyo negocio declarado es contenido social-first, eventos y creadores, no un videojuego [39]. Es el único lugar de Take-Two donde los tres ejes se gestionan juntos. *Inferencia propia: el prototipo de arquitectura interactiva de la compañía ya existe, y no está en Rockstar ni en Zynga.*

**3. La evidencia de no-integración es abrumadora y una parte es evidencia de silencio.** En la conferencia de resultados del **Q1 FY2027 (agosto de 2026)** —la última publicada— no hay discusión sustantiva del modo online de *GTA VI*, ni de sinergias tecnológicas Rockstar–Zynga, ni del Cfx Marketplace, ni del ecosistema FiveM [7]. En el call de **Q3 FY2026** la conducción define su ambición como *"ser la compañía más creativa, más innovadora y más eficiente del negocio del entretenimiento"* [8]: tres adjetivos sobre el eje producto, ninguno sobre la interacción entre ejes. Y los dos intentos verificables de cruzar el eje producto (IP core) con el eje mercado (mobile) **murieron los dos**: *NFL 2K Playmakers* cerró el **30/6/2025** [28] y *Star Wars: Hunters* el **1/10/2025** [29], ambos a poco más de un año de vida.

**4. El hallazgo central del documento: la arquitectura interactiva de Take-Two ya existe, funciona, es la más grande de Occidente en su categoría — y la compañía no la nombra, no la mide y no la monetiza materialmente.** Sobre *GTA V*, un producto de 2013, corre una economía de creadores que la empresa compró (Cfx.re/FiveM, 11/8/2023 [16]), institucionalizó (**Cfx Marketplace, 12 de enero de 2026**, tienda oficial curada con pagos reales a creadores [17][18]) y hasta endosó nominalmente (**NoPixel V, 23/9/2025**, primer servidor de roleplay con apoyo oficial de Rockstar y acceso desde el Rockstar Games Launcher [24]). Esa economía produce: **215.265 jugadores concurrentes de FiveM en Steam (récord, 12/4/2026)** [25], **1.400 millones de horas vistas en Twitch en 2024 —el juego más visto del año, ~9% de toda la audiencia de gaming de la plataforma—** [27] y el **puesto #1 de Twitch en 2026 con 133.277 espectadores concurrentes promedio** [26]. **Ninguna de esas cifras aparece en un filing, en una guía o en un earnings call de Take-Two.**

**5. Corrección obligatoria al documento 06, y hay que hacerla con precisión.** La afirmación "Take-Two paga USD 0 a creadores" **ya no es literalmente cierta** desde el 12 de enero de 2026: el Cfx Marketplace canaliza pagos reales a creadores de FiveM/RedM vía Tebex [17][18][doc 05]. Pero la sustancia se sostiene, y el detalle es demoledor: el marketplace arrancó con **~16 creadores**, la empresa **nunca divulgó el reparto de ingresos ni el volumen**, y el *Rockstar Mission Creator* de GTA Online (**30/4/2026**) premia a los creadores seleccionados con **GTA$10.000.000 —moneda virtual—, una campera y un trofeo dentro del juego** [23]. Contra eso: Roblox pagó **USD 1.503,1 M en dinero real** a creadores en 2025 [41]. *Inferencia propia: la diferencia entre las dos compañías no es que una tenga creadores y la otra no. Es que una les paga y la otra les da una campera.*

**6. El core competence, formulado como atributo de la organización entera y no de un área: Take-Two es excepcionalmente bueno en construir mundos que la gente elige habitar durante una década y en mantenerlos económicamente vivos todo ese tiempo — y llevar eso a su máximo potencial significa dejar de ser el único autor de lo que pasa adentro.** Es la única fortaleza que sobrevive el test de "las tres etiquetas a la vez": *GTA V* con 13 años y **>230 M de unidades**, *Red Dead Redemption 2* con 8 años y **>87 M**, *NBA 2K* con más de dos décadas de iteración anual, *Zynga Poker* con **18 años** y recién ahora estrenando en Steam [30], *Top Eleven* con su mejor trimestre en 16 años, *Toon Blast* con **más de USD 3.000 M de Net Bookings de por vida** [doc 00][doc 02]. Es, además, un competence razonablemente **context-free**: sobrevivió al cambio de disco a digital, de premium a free-to-play y de consola a mobile.

**7. ¿Cambiaron los factores clave de éxito? Sí, dos veces — y la respuesta al enunciado es que la segunda vez importa mucho más que la primera.** El primer cambio (de *"hacer el mejor juego y venderlo"* a *"operar el mejor sistema vivo de engagement y monetización"*) **ya ocurrió y Take-Two ya lo ganó**: 78% de recurrent consumer spending, 97% del canal digitalizado, y una franquicia de 2013 que aporta el **12,4% de los ingresos netos** [doc 00]. Ese KSF dejó de discriminar porque hoy lo ejecuta todo el mundo. El segundo cambio es el que está abierto: **el factor clave de éxito ya no es producir contenido ni siquiera operarlo, sino ser dueño del sustrato sobre el que otros producen el contenido que captura la atención.** La restricción es tiempo, no dinero: los jugadores de la Gen Z y millennials dedican **~8 horas semanales a videojuegos** dentro de **~6 horas diarias de consumo total de medios** [35], y el propio **10-K FY2026 de Take-Two nombra como competidores a Roblox y a "el video de formato corto, las redes sociales y las aplicaciones online"** [5].

**8. Y el veredicto sobre el alineamiento es el que da vuelta la pregunta del enunciado: el core competence histórico NO quedó desalineado con los KSF actuales — quedó topeado por la arquitectura que lo gobierna.** "Construir mundos que la gente habita una década" es, literalmente, la definición de un activo de atención duradero: es exactamente la competencia que los nuevos KSF premian. El problema es que bajo una arquitectura definida por el producto, esa competencia está limitada por la capacidad de producción del estudio y cuesta **~USD 1.932 M anuales de contenido fijo y pre-pagado (29,0% de los ingresos)** [doc 07]. Bajo una arquitectura interactiva, la renovación del mundo la financia la comunidad y la empresa se queda con una parte. **La competencia es la correcta; la arquitectura la está usando a una fracción de su potencial.** La decisión que resuelve esto —qué es el online de *GTA VI*— sigue sin tomarse y sin comunicarse: Jason Schreier reporta que Rockstar *"no dijo nada, ni planea decir nada pronto"* sobre cómo será el nuevo GTA Online [25-b].

---

## 1. EL MARCO, EN UNA PÁGINA (y por qué no es decorativo)

Gharajedaghi sostiene que todo negocio se define sobre tres ejes —**producto**, **mercado** y **tecnología/know-how**— y que con el tiempo uno se vuelve dominante y **relega a los otros dos a la condición de restricciones**. De ahí las cuatro arquitecturas posibles [1][2]:

| Arquitectura | Lógica | Pregunta que la delata |
|---|---|---|
| **Definida por el producto** | Las características del producto determinan qué tecnología se usa y a qué mercados se sirve. Se buscan nuevas tecnologías **para el mismo producto** y nuevos mercados **para el mismo producto** | "¿Cómo llevamos *este juego* a más gente y con mejor tecnología?" |
| **Definida por el mercado** | Las características del mercado determinan el mix de productos y la tecnología necesaria | "¿Qué producto hay que hacer para *este comportamiento de usuario*?" |
| **Definida por la tecnología** | Se desarrollan productos alrededor de una tecnología, con el mismo expertise, y se sirven distintos mercados | "¿Qué más podemos hacer con *esto que sabemos construir*?" |
| **Interactiva** | Usa los tres ejes de forma simultánea buscando ventaja en cada uno; el objetivo es capitalizar **la sinergia entre las tres dimensiones**, porque es en la interacción donde aparecen las oportunidades nuevas | "¿Qué se vuelve posible cuando los tres ejes se mueven a la vez?" |

Dos advertencias del framework que este documento va a usar como criterio de corrección y no como adorno:

1. **El enfoque unidimensional se vuelve ineficiente a medida que aumenta la competencia.** No es que sea malo: es que su rendimiento se degrada exactamente cuando el entorno se pone difícil. La industria de 2026 es el caso de manual: el mercado crece 6,1% en dólares mientras la base de jugadores se estanca y el tiempo de juego cae en los mercados maduros [doc 01][34].
2. **La innovación como core competence requiere arquitectura interactiva**, e implica interpretar el potencial de las tecnologías **con un nivel de abstracción mayor** que el del grupo de productos que las originó [2].

*Inferencia propia: ese segundo punto es la acusación entera de este documento. Take-Two compró en 2022 una capacidad tecnológica de USD 9.521,8 M y la interpretó al nivel de abstracción más bajo posible —"sirve para hacer mejores juegos mobile"—, en vez de al nivel que Gharajedaghi pide: "sirve para operar economías de usuarios a escala, sobre cualquier producto".*

---

## 2. MAPEO DE LOS TRES EJES — EL INVENTARIO COMPLETO

> **Regla de lectura.** A cada ítem se le agrega la columna **"dónde vive"**, porque en un holding
> de etiquetas autónomas un eje puede estar poblado y aun así no ser un eje *de la compañía*.
> Esa columna es la que hace visible la arquitectura.

### 2.1 Eje PRODUCTO — *qué vendemos*

| # | Ítem del eje | Dónde vive | Escala / evidencia |
|---|---|---|---|
| P1 | **Mundo abierto narrativo AAA** (*GTA*, *Red Dead*) | Rockstar | Franquicia GTA ~**475 M** de unidades; *GTA V* **>230 M**; franquicia Red Dead ~**116 M**; *RDR2* **>87 M** [doc 00] |
| P2 | **Live service de mundo persistente** (*GTA Online*) | Rockstar | 13 años en operación; RCS de la serie GTA **+3% i.a. en Q1 FY2027** [3] |
| P3 | **Suscripción de franquicia** (*GTA+*) | Rockstar | **USD 7,99/mes** desde el 11/4/2024 (antes 5,99); GTA$500.000 mensuales y biblioteca rotativa [42] |
| P4 | **Simulación deportiva anual licenciada** (*NBA 2K*, *WWE 2K*, *PGA TOUR 2K*) | 2K | *NBA 2K26* **>12 M** de unidades (**+9%** vs *2K25*); *NBA 2K27* el 4/9/2026 [3][doc 02] |
| P5 | **Catálogo core no deportivo** (*Borderlands*, *BioShock*, *Civilization*, *Mafia*) | 2K | Desempeño irregular: *Borderlands 4* "más suave de lo esperado"; *BioShock 4* reprobó revisión interna; *Mafia: The Old Country* superó expectativas [doc 02] |
| P6 | **Puzzle/casual free-to-play de vida larga** (*Toon Blast*, *Match Factory!*, *Toy Blast*, *Empires & Puzzles*) | Zynga | *Toon Blast* **>USD 3.000 M** de Net Bookings de por vida; *Match Factory!* **+33%** en FY2026 [doc 02] |
| P7 | **Hyper-casual industrial** (Rollic) | Zynga | **>1.000 prototipos descartados por año**, ~40 llegan a soft launch; *Color Block Jam* **66,7 M** de descargas [doc 06] |
| P8 | **Social / word / casino** (*Words With Friends*, *Zynga Poker*) | Zynga | *Zynga Poker*: **18 años**, primer título de Zynga en Steam (15/8/2025), con cuenta unificada y progresión cruzada mobile↔web↔PC [30] |
| P9 | **Manager deportivo mobile** (*Top Eleven*) | Zynga | **+15%** i.a. en Q1 FY2027; mejor trimestre en **16 años** en Q4 FY2026 [doc 02] |
| P10 | **⭐ Contenido producido por terceros sobre producto propio** (FiveM, RedM, Cfx Marketplace, Rockstar Mission Creator) | Rockstar / Cfx.re | **215.265 concurrentes de FiveM en Steam (récord, 12/4/2026)**; Cfx Marketplace desde el **12/1/2026** con ~16 creadores iniciales y precios de hasta **USD 389,99** por bundle [17][18][25] |

> **P10 es el ítem que rompe el inventario.** Es un producto que Take-Two **no produce, no
> presupuesta, no reporta y apenas monetiza**, y que sin embargo sostiene el activo de atención
> más grande del portafolio. *Inferencia propia: es el único renglón del eje producto que no
> obedece a la lógica del eje producto.*

### 2.2 Eje MERCADO — *a quién le vendemos*

| # | Ítem del eje | Dónde vive | Escala / evidencia |
|---|---|---|---|
| M1 | **Core gamer de consola premium** | Rockstar / 2K | Consola = **40%** de los Net Bookings FY2026 (USD 2.687,0 M). Edad promedio del jugador de EE.UU.: **36 años**; género 53%/46% [doc 00][doc 03] |
| M2 | **Fandom deportivo** (llega por la liga, no por el juego) | 2K | *NBA 2K* DAU **+15%**, MyCAREER **+25%**, partidas/usuario **+35%** (Q1 FY2027) [3] |
| M3 | **Jugador casual mobile de alta frecuencia y bajo ARPU** | Zynga | Mobile = **49%** de los bookings FY2026 (USD 3.300,9 M); **−7%** en Q1 FY2027 [doc 00] |
| M4 | **La minoría pagadora** (segmentación por valor) | Zynga | El **1-4% que paga** define el diseño de la economía; top 10 de juegos = **23,2%** del gasto IAP global [doc 03] |
| M5 | **⭐ Comunidad de roleplay: creadores + operadores de servidores + jugadores** | Rockstar / Cfx.re | FiveM récord de **215.265** concurrentes (12/4/2026); NoPixel V con apoyo oficial de Rockstar desde el **23/9/2025** [24][25] |
| M6 | **⭐ Audiencia de espectadores que no juega** | Rockstar (no monetizada) | *GTA V*: **1.400 M de horas vistas en Twitch en 2024**, el juego más visto del año, ≈**9%** de toda la audiencia de gaming de la plataforma; **#1 de Twitch en abril de 2026** con **133.277** concurrentes promedio y 51 M de horas en 30 días [26][27] |
| M7 | **Audiencia de video generalista vía streaming** | Rockstar × Netflix | *GTA VI: An Extended Look* estrenó **en exclusiva en Netflix el 27/8/2026**, seis horas antes que YouTube — primer gran tráiler de un juego que debuta en un servicio de streaming [38]. Antecedente: *GTA: The Trilogy* en Netflix Games (dic. 2023) |
| M8 | **Anunciantes** (publicidad in-game) | Zynga | Mercado estimado en **USD 10.290–12.500 M en 2026**; Take-Two **vendió Chartboost a LoopMe en diciembre de 2024** [32][doc 07] |
| M9 | **Geografía** | Compañía | EE.UU. **60%** de los bookings FY2026; internacional 40%. Zelnick declara ambición de llevar el internacional del ~35% actual a **75-80% en diez años** [10][doc 00] |

### 2.3 Eje TECNOLOGÍA / KNOW-HOW — *qué sabemos hacer*

| # | Ítem del eje | Dónde vive | Escala / evidencia |
|---|---|---|---|
| T1 | **Motor propietario RAGE + estate Euphoria** | Rockstar — **no compartido** | 18 años de acumulación desde *GTA IV* (2008); **USD 2.346,3 M** de desarrollo de software capitalizado = **25,0% de los activos** [doc 00] |
| T2 | **Diseño de mundo abierto, narrativa, dirección de arte, performance capture** | Rockstar | *"Muchos lo intentaron, incluidos ex-Rockstar. Y hasta ahora no pudieron"* — Zelnick, TD Cowen, 27/5/2026 [15] |
| T3 | **Operación de live service de larga duración** | Las tres etiquetas | *GTA Online* 13 años; temporadas continuas de 2K; **9.998 de 12.909 empleados** en desarrollo de producto (77,4%) [doc 00] |
| T4 | **Analítica de portafolio y machine learning** (modelos de propensión, LTV, churn) | **Zynga** | "Miles de millones de eventos, decenas de millones de usuarios, cientos de señales predictivas, decenas de juegos" [doc 06] |
| T5 | **Experimentación industrial** | **Zynga** (Rollic) | >1.000 prototipos/año contra **un lanzamiento de la franquicia insignia cada 13 años** [doc 06] |
| T6 | **Diseño de economía y monetización free-to-play** | **Zynga** | RCS = **78%** de los bookings FY2026; **84%** en Q1 FY2027 [doc 00] |
| T7 | **User acquisition y ad tech** | Zynga (degradado) | Ventas y marketing **USD 1.770,8 M = 26,6%** de los ingresos; Chartboost vendido en dic-2024 [32][doc 07] |
| T8 | **Canal directo al consumidor (web shops)** | Zynga → **compañía** | "Un driver significativo de ingresos y de mejora de margen" (Zelnick). **La única capacidad de Zynga que cruzó verificablemente al P&L consolidado** [7][doc 06] |
| T9 | **⭐ Infraestructura de servidores comunitarios y marketplace de UGC** (Cfx.re: FiveM, RedM, Cfx Marketplace, Tebex) | Rockstar / Cfx.re | Adquirida el **11/8/2023**; marketplace lanzado el **12/1/2026**; vacantes de "Creator Platform" en Londres, NY y Escocia que describen **servidores dedicados totalmente personalizados en PS5 y Xbox Series X\|S** [16][17][21][22] |
| T10 | **Gestión de licencias deportivas y de marca** | 2K | **USD 463,5 M en FY2026 (7,0% de los ingresos), +26,7% i.a.**; términos y vencimientos **no públicos** [doc 00][doc 08] |
| T11 | **Marketing de escasez: el estreno como evento cultural** | Rockstar | Estreno en Netflix (27/8/2026); campaña declarada "corta e impactante"; Newzoo atribuye a *GTA VI* **+17,5%** del gasto global en juegos completos de 2026 [38][doc 06] |
| T12 | **Asignación de capital paciente y estructura de labels con regalías internas** | **Compañía** | **USD 417,4 M** de regalías internas en FY2026 (6,3% de los ingresos): el precio explícito de la autonomía creativa [doc 00] |
| T13 | **IA generativa** | **Zynga sí, Rockstar no** — por decisión declarada | Jefferies (16/6/2026): la IA agiliza "la creación de niveles en juegos mobile y la publicidad de adquisición". Zelnick: *"la IA generativa no participa en absoluto de lo que Rockstar está construyendo"* [doc 06][doc 08] |

### 2.4 Lectura del inventario

**Tesis de la sección.** Los tres ejes están **poblados**, y densamente. Ninguno está vacío. Pero al leer la columna "dónde vive" aparece el hallazgo estructural: **no hay un solo ítem de los tres ejes que sea simultáneamente propiedad operativa de más de una etiqueta, con dos excepciones —T3 (live ops) y T8 (D2C)—.** El eje tecnología está partido en dos mitades que no se tocan: la mitad de Rockstar (T1, T2, T9, T11) y la mitad de Zynga (T4, T5, T6, T7, T13). El eje mercado está partido en tres audiencias que no se cruzan. Y el eje producto contiene diez ítems que comparten holding, dominio de nombre y CFO, y ningún componente técnico.

**Consecuencia estratégica.** Un inventario de tres ejes poblados no prueba una arquitectura interactiva; prueba que hay materia prima para construirla. Gharajedaghi es explícito: **el valor no está en tener los tres ejes, está en la interacción entre ellos.** La sección 3 mide esa interacción.

---

## 3. VEREDICTO: ¿QUÉ ARQUITECTURA TIENE TAKE-TWO?

### 3.1 El test: no preguntar qué ejes tiene, preguntar cuál manda

La pregunta operativa que resuelve la clasificación es una sola: **cuando dos ejes entran en conflicto, ¿cuál cede?** Si el mercado pide algo que el producto no quiere dar y gana el producto, la arquitectura está definida por el producto. Si el producto se rediseña porque el dato dice otra cosa, está definida por el mercado.

### 3.2 Prueba de las cuatro opciones a nivel del holding

**(a) ¿Definida por el producto? — SÍ, y está declarado por escrito.**

La estrategia oficial, en el perfil corporativo de la compañía: *"Our strategy is to create hit entertainment experiences, delivered on every platform relevant to our audience through a variety of sound business models"* [6]. Descompuesta:

| Fragmento | Eje | Rol gramatical |
|---|---|---|
| "create hit entertainment experiences" | **PRODUCTO** | **Sujeto y objetivo** |
| "delivered on every platform relevant to our audience" | MERCADO | Complemento circunstancial |
| "through a variety of sound business models" | TECNOLOGÍA / KNOW-HOW | Complemento instrumental |

*Inferencia propia: es la definición textual de una arquitectura definida por el producto según Gharajedaghi —nuevas plataformas para el mismo producto, nuevos modelos de negocio para el mismo producto—. No hay que inferirla: la compañía la publicó.*

La corroboración en la conducción es igual de directa. Zelnick, marzo de 2026: **"Hits cure all ills. In the absence of making hits, you won't have a successful entertainment business"** [10]. Y en el call de Q3 FY2026, la ambición declarada es *"ser la compañía más creativa, más innovadora y más eficiente del negocio del entretenimiento"* [8] — tres adjetivos que califican la producción, ninguno que califique la relación entre ejes.

Las cuatro pruebas de comportamiento, todas del período FY2026–FY2027:

1. **El producto subordina al mercado.** *GTA VI* sale **sin versión de PC, sin beta pública, sin early access y sin modo online**, en un mercado donde el 48% del ingreso de PC ya es microtransacción y el live service es el estándar [24][doc 01]. El mercado pedía otra cosa; ganó la obra.
2. **El producto subordina a la tecnología.** El CEO declara que la IA generativa **no participa en absoluto** de lo que Rockstar construye y califica de *"laughable"* la idea de que la IA pueda hacer un juego de esa escala [10][doc 08]. La tecnología entra sólo donde el producto la autoriza.
3. **El producto subordina al calendario financiero.** Dos postergaciones formales, ~14 meses de desplazamiento acumulado, con caídas de **−5%** y **−8,1%** en la acción, y **>USD 3.000 M de capitalización** perdidos por filtraciones en 48 horas [doc 02]. La empresa aceptó ese costo antes que degradar el producto.
4. **Y el producto define el resultado del holding entero.** Rockstar pasa del **16% al 37%** del mix guiado de bookings y explica el **139% del crecimiento guiado de FY2027** [doc 00]. *Inferencia propia: un holding cuyo crecimiento entero depende de una sola obra no tiene una arquitectura de portafolio; tiene una arquitectura de producto con un portafolio adosado.*

**(b) ¿Definida por el mercado? — SÍ, pero un nivel abajo, y sólo en Zynga.**

Rollic descarta **más de 1.000 prototipos por año** y deja que la métrica elija cuáles sobreviven; ~40 llegan a soft launch [doc 06]. Los productos son variables dependientes del comportamiento observado. Es arquitectura definida por el mercado en estado puro, y funciona: Zynga alcanzó en FY2026 **su mayor nivel de Net Bookings desde la adquisición** [doc 00].

**(c) ¿Definida por la tecnología? — NO, y su ausencia es informativa.**

Take-Two tiene el activo técnico para intentarlo —RAGE, con USD 2.346,3 M de desarrollo capitalizado— y **no lo comparte con 2K ni con Zynga** [doc 06]. La comparación duele: los actores que construyeron arquitecturas interactivas en esta industria llegaron **desde el eje tecnológico**. Epic desarrolló Unreal, lo licenció a terceros mercados (cine, automotriz, arquitectura), construyó Fortnite encima y después abrió UEFN para que terceros produzcan — hoy las islas de creadores son el **47% del playtime de Fortnite** y Epic superó **USD 1.000 M acumulados** en pagos [40]. Roblox hizo lo mismo desde el motor hacia afuera. *Inferencia propia: la arquitectura definida por la tecnología es el camino histórico hacia la interactiva, porque una tecnología abstraída del producto que la originó puede servir a mercados que el producto no alcanza. Take-Two es el único de los tres grandes activos de mundo abierto de Occidente que nunca tomó ese camino.*

**(d) ¿Interactiva? — NO como arquitectura declarada. SÍ como fenómeno emergente no gobernado.** Es la sección 3.4.

### 3.3 Las seis pruebas de que las arquitecturas no se integran

| # | Prueba | Evidencia | Estatus |
|---|---|---|---|
| 1 | **Silencio en el último earnings call** | El call de **Q1 FY2027 (agosto de 2026)** no contiene discusión sustantiva del modo online de *GTA VI*, ni de sinergias tecnológicas Rockstar–Zynga, ni del Cfx Marketplace, ni del ecosistema FiveM [7] | Dato reportado (ausencia verificable) |
| 2 | **Los dos cruces IP core → mobile murieron** | *NFL 2K Playmakers* cerró servidores el **30/6/2025**, ~14 meses después de lanzar [28]. *Star Wars: Hunters* cerró el **1/10/2025**, menos de 18 meses después [29] | Dato reportado |
| 3 | **Los ocho contribuyentes mobile de FY2026 son todos legacy de Zynga** | *Toon Blast*, *Match Factory!*, *Empires & Puzzles*, *Color Block Jam*, *Toy Blast*, *Words With Friends*, *Top Eleven*, *Zynga Poker*. Ninguno viene de IP de Rockstar o 2K [4][doc 02] | Dato reportado |
| 4 | **Una de las cinco sinergias prometidas fue vendida** | Chartboost, citada explícitamente en el anuncio de la fusión de enero de 2022, **vendida a LoopMe en diciembre de 2024** [31][32] | Dato reportado |
| 5 | **Sin motor, herramientas ni plataforma técnica compartida** | El análisis del call de Q3 FY2026 no encuentra evidencia de motores, herramientas o plataformas técnicas compartidas entre Rockstar y Zynga; cada una opera en segmentos separados [8] | Inferencia sobre transcript |
| 6 | **La arquitectura de reporting hace la sinergia inverificable** | **Un solo segmento reportable.** El único desglose por etiqueta es el mix porcentual **guiado**, dado verbalmente, nunca auditado [5][doc 00] | Dato reportado |

### 3.4 La contra-evidencia honesta: lo que SÍ cruza — y la sorpresa

Un veredicto de "no hay sinergia" sería una caricatura. Hay cinco cruces reales, y hay que ordenarlos por lo que prueban:

| Cruce | Ejes que conecta | Estatus | Magnitud |
|---|---|---|---|
| **Canal directo al consumidor (D2C)** | Tecnología (Zynga) → compañía | ✅ Funciona | "Driver significativo de ingresos y de mejora de margen"; **sin cifra divulgada** [7] |
| ***Zynga Poker* en Steam** (15/8/2025) | Producto (Zynga) → Mercado (PC) | ✅ Funciona | Primer título de Zynga en Steam; cuenta unificada mobile↔web↔PC [30] |
| **NBA Take-Two Media** (JV creada el 17/6/2025) | Producto × Mercado × Tecnología, en 2K | ✅ Funciona | Negocio de contenido social-first, eventos y creadores; relanzamiento de la NBA 2K League con **planteles que mezclan jugadores NBA, creadores de contenido y fans** [39][doc 05] |
| **Netflix como canal de mercado** | Producto (Rockstar) → Mercado (audiencia de video) | ✅ Funciona | *An Extended Look* en exclusiva el 27/8/2026, seis horas antes que YouTube [38] |
| **⭐ Economía de creadores sobre FiveM/RedM** | **Los tres ejes a la vez** | ⚠️ **Funciona sin gobierno** | Ver 3.5 |

**La sorpresa que refina la hipótesis del encargo: la arquitectura más interactiva de Take-Two está en 2K, no en Rockstar ni en Zynga.** *NBA 2K* no está gobernado por el producto: está gobernado por un calendario externo (la temporada de la NBA), un contrato (la licencia) y una audiencia que preexiste al juego. Sobre eso corre live ops continuo (tecnología), una JV de contenido y creadores (mercado nuevo) y una extensión por adyacencia —básquet universitario incorporado en febrero de 2026, después de que EA se retirara de la negociación— que amplía el foso sin cambiar de producto [doc 08]. *Inferencia propia: es la única unidad de la compañía donde los tres ejes se mueven juntos y ninguno manda del todo. La hipótesis del encargo lo omitía, y es un dato relevante para el Directorio: el prototipo de lo que hay que construir ya está adentro de la casa.*

### 3.5 El hallazgo central: la arquitectura interactiva que ya existe y nadie declara

Sobre un producto de 2013 corre, hoy, una interacción completa de los tres ejes:

- **Eje producto:** *GTA V* y su mundo, más el contenido que crean terceros encima.
- **Eje mercado:** dos audiencias que la compañía nunca buscó — creadores/operadores de servidores de roleplay, y una audiencia de **espectadores que no compran el juego**.
- **Eje tecnología:** Cfx.re/FiveM/RedM, comprada el 11/8/2023, más el Cfx Marketplace y el Rockstar Mission Creator.

Las cifras del fenómeno:

| Métrica | Valor | Fecha | Estatus |
|---|---:|---|---|
| *GTA V* — horas vistas en Twitch | **1.400 millones** (el juego más visto del año, ≈**9%** de toda la audiencia de gaming de la plataforma) | 2024 | Estimación de tercero (informe anual de Twitch) [27] |
| *GTA V* — posición y audiencia en Twitch | **#1 de la plataforma**; **133.277** espectadores concurrentes promedio y **51 M** de horas en 30 días | abril 2026 | Estimación de tercero (agregador) [26] |
| *GTA V* — horas vistas en Twitch | **50,5 millones** | julio 2026 | Estimación de tercero [26] |
| **FiveM — récord de concurrentes en Steam** | **215.265** (~203.000 en marzo) | **12/4/2026** | Dato de plataforma (SteamDB) [25] |
| **Cfx Marketplace** — creadores al lanzamiento | **~16** (más 6 "próximamente"); precios de hasta **USD 389,99** por bundle | **12/1/2026** | Dato reportado [17][18] |
| **NoPixel V** — primer servidor de RP con apoyo oficial de Rockstar | Acceso desde el **Rockstar Games Launcher**; invitación con creadores como xQc, Pokimane, Valkyrae | **23/9/2025** | Dato reportado (post oficial de Rockstar) [24] |
| **Rockstar Mission Creator** — premio al creador seleccionado | **GTA$10.000.000 (moneda virtual)** + campera + trofeo en el juego | **30/4/2026** | Dato reportado [23] |
| Roblox — pagos a creadores | **USD 1.503,1 M** (dinero real) | CY2025 | Dato reportado [41] |

**Y la posición declarada de la conducción, que es lo que cierra el argumento.** Zelnick, en el call posterior a la compra de Cfx.re (noviembre de 2023), explicó la lógica con una precisión notable —y una conclusión que la contradice—:

> *"Si la gente está consumiendo nuestra propiedad intelectual, nos gustaría monetizarla si podemos."* La adquisición era interesante por dos comunidades: *"número uno, la gente que efectivamente juega en los servidores de roleplay; y número dos, la gente que mira lo que ellos hacen en Twitch."* Y entonces: **"esta es una oportunidad económica pequeña por ahora, y un costo pequeño para nosotros."** [13]

En el call de **Q3 FY2026 (3/2/2026)**, tras el lanzamiento del Cfx Marketplace, la formulación sigue siendo la misma: *"siempre hemos dado la bienvenida al contenido generado por usuarios"*, y las herramientas que lo hagan más viable y accesible **"podrían ser una oportunidad para nosotros"** [8]. Condicional, sin cifra, sin fecha, sin nombre de producto.

> ### La tesis del documento
> **Take-Two identificó correctamente la interacción de los tres ejes en 2023, compró la
> infraestructura que la habilita, la institucionalizó en 2026 con un marketplace y un endoso
> oficial a un servidor de terceros — y la clasificó como "una oportunidad económica pequeña".**
> No es un error de ejecución ni un problema cultural entre Rockstar y Zynga: es **exactamente
> lo que una arquitectura definida por el producto tiene que concluir**, porque en esa
> arquitectura todo lo que no es la obra es accesorio de la obra. El framework de Gharajedaghi
> no describe el problema: lo predice.

### 3.6 Discusión del veredicto del analista del tema 6

El documento 06 concluye que Rockstar y Zynga son *"dos arquitecturas de decisión incompatibles conviviendo bajo un mismo holding, y la sinergia sólo puede materializarse en la capa donde ambas coinciden: la operación de una economía de creadores sobre un mundo que la compañía ya posee"* [doc 06].

**Se confirma la conclusión y se le hacen tres correcciones de precisión:**

1. **No son dos arquitecturas simétricas: hay una que gobierna al holding.** El nivel corporativo no es neutral entre Rockstar y Zynga. Adopta explícitamente la lógica de producto en su propia declaración de estrategia [6], y la refrenda con el capital (Rockstar = 139% del crecimiento guiado de FY2027). Zynga no es una arquitectura par: es una subsidiaria con lógica propia dentro de una arquitectura de producto.
2. **Falta la tercera, y es la buena noticia.** 2K opera una arquitectura híbrida licencia/mercado/producto que es lo más cercano a interactiva que tiene la compañía (sección 3.4). Cualquier recomendación al Directorio debería usarla como prototipo interno en lugar de proponer un modelo importado de Roblox.
3. **La capa de coincidencia no es un proyecto futuro: ya está operando, y por eso el diagnóstico es peor de lo que parecía.** El documento 06 la describe como la oportunidad; la evidencia de 2026 muestra que **ya existe, ya genera la mayor masa de atención del portafolio y ya tiene marketplace con pagos reales** — y aun así no aparece en la guía, ni en el mix por etiqueta, ni en el call. *Inferencia propia: el problema no es que falte construir la sinergia. Es que la sinergia se construyó sola y la arquitectura de decisión no la reconoce como negocio.*

**Consecuencia estratégica de la sección 3.** Take-Two no tiene una arquitectura interactiva; tiene una arquitectura de producto que **contiene** una interacción de tres ejes sin gobernarla. La diferencia importa porque determina qué hay que hacer: no hay que inventar la capacidad ni comprarla —ya se compró en 2023— hay que **subirla de nivel de abstracción**, que es literalmente la instrucción de Gharajedaghi sobre innovación como core competence.

---

## 4. FORMULACIÓN DEL CORE COMPETENCE

> **Definición de la cátedra.** *"Una fortaleza particular del emprendimiento con relación a otras
> empresas de la industria y que provee la base para el valor agregado. Debe entenderse como un
> **atributo de la organización en su conjunto, y no de un sector o área en particular**"* [2].
> **Técnica:** la suma de las respuestas a *¿en qué somos realmente buenos?* y *¿qué significaría
> llevar esto en lo que somos buenos a su máximo potencial?*

### 4.1 Pregunta 1 — ¿En qué somos realmente buenos?

El filtro decisivo es el de la definición: **atributo de la organización entera, no de un área.** Aplicado con rigor, elimina a casi todos los candidatos obvios:

| Candidato | ¿Sobrevive el filtro? | Por qué |
|---|---|---|
| "Hacer juegos de mundo abierto insuperables" | ❌ | Es de **Rockstar**, no de Take-Two. 2K falló dos veces en el mismo período (*BioShock 4* reprobó revisión interna; NFL de 2K cancelado) [doc 02] |
| "Monetizar comportamiento con datos a escala" | ❌ | Es de **Zynga**. No cruzó a las otras dos etiquetas en cuatro años [sección 3.3] |
| "Operar franquicias deportivas licenciadas" | ❌ | Es de **2K**, y además es una barrera **alquilada**: USD 463,5 M/año, términos no públicos [doc 08] |
| "Hacer hits" (la formulación del propio CEO) | ⚠️ | Verdadero pero **inutilizable como core competence**: describe el resultado, no la capacidad, y es la definición **menos context-free posible** — un "hit" es lo que el mercado premia en un momento dado. Ver 4.4 |
| "Adquirir e integrar empresas" | ❌ | Refutado por los propios números: **USD 6.638,9 M de impairments** sobre USD 9.521,8 M pagados [doc 00] |
| **"Construir mundos que la gente elige habitar durante una década y mantenerlos económicamente vivos todo ese tiempo"** | ✅ | **Único candidato con evidencia en las tres etiquetas simultáneamente** |

**La evidencia del candidato que sobrevive, etiqueta por etiqueta:**

| Etiqueta | Activo | Antigüedad | Vitalidad hoy |
|---|---|---:|---|
| Rockstar | *GTA V* / *GTA Online* | **13 años** | **>230 M** de unidades; **12,4% de los ingresos netos de FY2026** sin ningún lanzamiento; RCS **+3%** i.a. en el año 13; **#1 de Twitch en 2026** [3][5][26] |
| Rockstar | *Red Dead Redemption 2* | **8 años** | **>87 M** de unidades (~+8 M en ~7 meses) [3] |
| 2K | *NBA 2K* | **>25 años** de iteración anual | *NBA 2K26* **>12 M** unidades (+9%); DAU **+15%** [3] |
| 2K | *Civilization* | **35 años** | *Civilization VII* (feb-2025) con soporte activo [doc 02] |
| Zynga | *Zynga Poker* | **18 años** | Debut en **Steam** con progresión cruzada (15/8/2025) [30] |
| Zynga | *Top Eleven* | **16 años** | **Mejor trimestre de su historia** en Q4 FY2026; **+15%** i.a. en Q1 FY2027 [doc 02] |
| Zynga | *Toon Blast* | 9 años | **>USD 3.000 M** de Net Bookings de por vida [doc 02] |

Y el contexto de industria que convierte esa capacidad en la más valiosa disponible: **el 67% del playtime de PC va a juegos de seis o más años de antigüedad**, y los lanzamientos nuevos capturan de forma consistente sólo el **12-13%** del playtime anual [33][doc 01].

> **Respuesta 1.** *Somos realmente buenos en crear mundos con identidad propia lo bastante fuerte
> como para que la gente elija seguir habitándolos durante una década, y en sostener su vida
> económica todo ese tiempo sin degradarlos.*

### 4.2 Pregunta 2 — ¿Qué significaría llevar eso a su máximo potencial?

La respuesta ingenua es "hacer más mundos". Está aritméticamente descartada: un mundo de clase GTA cuesta, según el propio CEO, **USD 1.000 a 1.500 M a lo largo de siete a diez años sin un dólar de ingreso** [15]. Escalar por esa vía es lineal, carísimo y binario.

El máximo potencial de "sostener un mundo durante una década" no es hacer más mundos: es **eliminar el techo de la década**. Y ese techo tiene una causa identificable: hoy la vida del mundo está limitada por **la capacidad de producción del estudio que lo mantiene**. Take-Two produce ~7 títulos en FY2027 con 9.998 personas de desarrollo; Roblox tiene **>44 millones de experiencias publicadas** que no le costaron una nómina [doc 07][doc 08].

Llevarlo al máximo significa, entonces, una sola cosa: **que el mundo se renueve sin que la empresa pague por renovarlo.** Es decir, dejar de ser el único autor de lo que pasa adentro y pasar a ser el operador del lugar donde otros lo escriben — cobrando por hacerlo.

Y no es una hipótesis de laboratorio: **es la única parte del portafolio donde ya está demostrado que funciona.** *GTA V* llegó a ser el juego más visto de Twitch **en su año número once**, y no por contenido de Rockstar: por contenido de la comunidad de roleplay corriendo sobre FiveM [25][27].

> **Respuesta 2.** *Llevarlo a su máximo potencial significa que nuestros mundos dejen de tener
> fecha de vencimiento, porque quien produce su renovación deja de ser nuestro estudio y pasa a
> ser su propia comunidad — y nosotros operamos y cobramos esa economía.*

### 4.3 La formulación (suma de las dos respuestas)

> ## CORE COMPETENCE DE TAKE-TWO
> ### **La capacidad de construir mundos ficcionales con identidad propia lo bastante fuerte como para que la gente elija habitarlos durante una década, y de sostener su vida económica todo ese tiempo — cuyo máximo potencial se alcanza cuando la empresa deja de ser el único autor de lo que ocurre adentro y pasa a operar la economía de quienes lo escriben.**
>
> **Versión corta, para la slide:**
> **"Hacemos mundos que la gente habita una década. El techo de esa capacidad es que hoy los
> escribimos solos."**

**Tres verificaciones de que la formulación cumple el requisito de la cátedra:**

1. **Es un atributo de la organización, no de un área.** Se verifica en las tres etiquetas simultáneamente (tabla de 4.1) y en el balance: **USD 2.346,3 M de desarrollo de software capitalizado, el 25,0% de los activos totales**, es el balance de una empresa que financia la vida larga del contenido, no de una que compra empresas [doc 00].
2. **Es una fortaleza *relativa a la industria*.** El contraste es EA: anualiza y cobra todos los años lo que Take-Two cobra cada década, con margen operativo de **15,4%** contra **−1,6%** [doc 07]. Son dos competencias distintas, no una mejor y una peor — y la de Take-Two es la que el mercado de 2026 premia, porque el 67% del playtime va a juegos viejos.
3. **Provee la base del valor agregado.** *GTA* aportó el **12,4% de los ingresos netos de FY2026 (~USD 825 M)** en un año **sin lanzamientos**, sobre un costo original estimado de **USD 265 M**: **3,1x el costo total del proyecto recuperado en un solo año fiscal, trece años después** [doc 07].

### 4.4 Test de context-free: ¿qué tan independiente del contexto es?

El criterio de la cátedra: **cuanto más independiente del contexto sea el core competence, mayores las ventajas competitivas y más difícil de imitar** [2]. El test consiste en preguntar de qué condiciones externas depende que la competencia siga siendo válida.

| Dimensión de contexto | ¿La competencia sobrevive si cambia? | Evidencia |
|---|:---:|---|
| **Generación de hardware** | ✅ Sí | *GTA V* atravesó tres generaciones de consola (PS3 → PS4 → PS5) sin perder vigencia |
| **Modelo de negocio** | ✅ Sí | La misma competencia produjo un premium de USD 79,99 (*GTA VI*), un free-to-play (*Toon Blast*) y una suscripción (*GTA+*) |
| **Plataforma** | ✅ Sí | *Zynga Poker* sobrevivió 18 años y saltó de Facebook a mobile y a Steam [30] |
| **Canal de distribución** | ✅ Sí | Sobrevivió el paso del retail físico al 97% digital sin degradarse [doc 00] |
| **Género** | ⚠️ Parcial | "Mundo" es una metáfora forzada para un puzzle. La versión honesta y más abstracta —*"espacios de permanencia con identidad propia"*— es la que abarca las tres etiquetas |
| **Tecnología de producción** | ❌ No | Hoy la competencia está atada a un estudio propio grande y caro. **Ese es exactamente el vínculo que la pregunta 2 propone cortar** |
| **Régimen de propiedad de la IP** | ❌ No en 2K | Un tercio de los mundos son **alquilados**: sin licencia de la NBA no hay mundo. USD 463,5 M/año, vencimiento no público [doc 08] |
| **Régimen regulatorio de la monetización** | ⚠️ Parcial | El *Digital Fairness Act* europeo, con propuesta esperada en el 2º semestre de 2026, apunta a moneda virtual y loot boxes: afecta el "sostener la vida económica", no el "construir el mundo" [doc 08] |

**Veredicto: el core competence es context-free en cinco de ocho dimensiones — un grado alto, y superior al de cualquier formulación alternativa que se le pueda oponer.**

Y el contraste es el que hay que llevar al Directorio. La formulación que la propia conducción usa —**"Hits cure all ills"** [10]— es **la menos context-free posible**: un "hit" no es una capacidad, es un veredicto que emite el mercado en un momento dado y con los estándares de ese momento. Un core competence definido como "hacer hits" no puede fundar ventaja porque **no dice qué hay que saber hacer**; sólo dice qué hay que lograr. *Inferencia propia: la brecha entre la formulación del CEO y la que sostiene este documento no es semántica. Una justifica seguir haciendo lo mismo más grande; la otra obliga a preguntarse quién debería escribir el contenido.*

**Consecuencia estratégica de la sección 4.** El core competence correcto de Take-Two no es "hacer los mejores juegos": es **la longevidad gobernada de mundos habitados**. Esa formulación tiene una propiedad que la otra no tiene: **contiene su propia instrucción de crecimiento.** Si somos buenos en que la gente se quede una década, la pregunta obligatoria es qué la haría quedarse dos — y la única respuesta económicamente viable es que el contenido nuevo no lo paguemos nosotros.

---

## 5. ¿CAMBIARON LOS FACTORES CLAVE DE ÉXITO?

> Pregunta explícita del enunciado. Respuesta corta: **sí, dos veces — y el primer cambio ya lo
> ganamos, mientras el segundo todavía no lo estamos jugando con el nombre correcto.**

### 5.1 Tabla comparativa de KSF de la industria

| # | Factor clave de éxito | **ANTES** (era retail-premium, ~1995–2012) | **AHORA** (2026) | Evidencia del cambio | Posición de Take-Two |
|---|---|---|---|---|:---:|
| 1 | **Acceso a la demanda** | **Estante físico y relación con el retailer.** En 2004 se lanzaron **>850 juegos de consola** y los grandes retailers limitaban el estante a **~200 títulos** [37] | **Descubrimiento en un estante infinito.** Steam recibe **~70 lanzamientos por día** en 2026 (~24.000 proyectados); la oferta crece **1,7x más rápido** que la audiencia [doc 08] | La barrera se mudó de la distribución al descubrimiento | ✅ IP reconocida + USD 1.770,8 M de marketing |
| 2 | **Permiso para publicar** | **Licencia del fabricante de consola** y cupo de fabricación | **Ninguno.** Cualquiera publica; la fricción es la comisión (30% en consola; 0% en link-outs de iOS en EE.UU., con Apple proponiendo 15% el 14/8/2026) [doc 08] | Deja de ser barrera; pasa a ser costo | ✅ D2C ya capturando margen |
| 3 | **Calidad en el día 1** | **Determinante e irreversible.** El *gold master* iba a fábrica y no se corregía | **Necesaria pero insuficiente.** El parche corrige; lo que no se corrige es la ausencia de razones para volver | El producto pasó de evento a proceso [doc 04] | ✅ Rockstar; ⚠️ 2K irregular |
| 4 | **Monetización** | **Un pago, una vez, en la ventana de lanzamiento** | **Ingreso recurrente sostenido durante años.** RCS = **78% de los Net Bookings de FY2026** (~USD 5.242 M) | Cambio consumado | ✅ Y con ventaja |
| 5 | **Vida útil del activo** | **Meses.** El título salía del estante | **Década.** **67% del playtime de PC** va a juegos de 6+ años; los lanzamientos nuevos capturan **12-13%** [33] | Cambio consumado | ✅ **Es el core competence** |
| 6 | **Fuente del contenido nuevo** | **El estudio.** No había alternativa | **El estudio o la comunidad.** Roblox: **>44 M de experiencias**, **USD 1.503,1 M** pagados a creadores en 2025. UEFN: **>USD 1.000 M** acumulados, islas = **47% del playtime de Fortnite** [40][41] | **KSF nuevo, sin equivalente en la era anterior** | ⚠️ **Terreno abierto** |
| 7 | **Dato y velocidad de aprendizaje** | **Ventas retail trimestrales.** Ciclos de aprendizaje de años | **Telemetría continua y experimentación industrial.** Rollic: **>1.000 prototipos/año** | Cambio consumado | ⚠️ Existe, pero **fragmentado por etiqueta** |
| 8 | **Competidor relevante** | **Otros publishers.** Perímetro cerrado | **Todo lo que consume tiempo.** El **10-K FY2026** de Take-Two nombra a **Roblox** como competidor y agrega el cine, la TV, **las redes sociales, las aplicaciones online y el video de formato corto** [5] | **La empresa lo declara en su propio filing** | ⚠️ **KSF emergente** |
| 9 | **Licencia social y regulatoria de la monetización** | **Marginal.** Sólo clasificación etaria (ESRB) | **Determinante.** *Digital Fairness Act*: propuesta esperada en el 2º semestre de 2026 sobre loot boxes y moneda virtual accesible a menores [doc 08] | KSF nuevo | ⚠️ Exposición alta (49% mobile + VC de *NBA 2K*) |
| 10 | **Talento** | Escaso pero reemplazable | **Concentrado e irreemplazable**, y sindicalizándose. Juicio del IWGB del **10/9 al 15/10/2026** | Aumenta su peso | ⚠️ En riesgo |

### 5.2 Hipótesis (a): "de hacer el mejor juego y venderlo, a operar el mejor sistema vivo de engagement y monetización"

**Veredicto: CONFIRMADA como descripción histórica, DESCARTADA como diagnóstico actual.**

La hipótesis es correcta y está probada por los KSF 3, 4 y 5 de la tabla. Pero tiene un problema de fecha: **ese cambio se consumó entre 2013 y 2020, y Take-Two ya lo ganó.** 78% de RCS, 97% del canal digitalizado, una franquicia de trece años aportando el 12,4% de los ingresos y *GTA Online* operando con actualizaciones semanales desde 2013 [doc 00][doc 07]. No es un frente donde la compañía esté atrasada.

Y hay algo peor para la hipótesis: **ese KSF dejó de discriminar, y el live service está mostrando fatiga.** Newzoo documenta para 2025-2026 que el playtime **cae en todas las plataformas** de los mercados occidentales, con **el playtime free-to-play en descenso y el buy-to-play en crecimiento** [33]. Fortnite pasó de **29 horas mensuales por jugador en 2023 a 15,4 en 2025** [doc 01]. Roblox, el mejor operador de la categoría, reportó en su **Q2 2026** bookings **+8%** contra revenue **+36%**, con **DAU de 123 M (vs. un pico de 152 M en Q3 2025)**, **29.000 M de horas (vs. un pico de 40.000 M)** y **horas por DAU por día −4,7%** [36]. *Inferencia propia: "operar el mejor live service" era el KSF ganador de la década pasada. Hoy es un requisito de entrada con rendimientos decrecientes.*

### 5.3 Hipótesis (b): "el KSF emergente ya no es producir contenido sino capturar tiempo de atención — un juego que Take-Two no está jugando"

**Veredicto: la primera mitad es CORRECTA y está declarada por la propia empresa. La segunda mitad es FALSA, y su refutación es el hallazgo más valioso del documento.**

**Lo que confirma la primera mitad:**

- La restricción es tiempo, no dinero. Deloitte (2026): los jugadores de la Gen Z y millennials dedican **~8 horas semanales** a videojuegos, dentro de **~6 horas diarias** de consumo total de medios y entretenimiento. **El 73% de la Gen Z descubre contenido nuevo por redes sociales**; el **55%** considera el contenido de redes más relevante que el tradicional y el **52%** siente conexión más fuerte con creadores que con actores de TV [35].
- Matthew Ball documenta que el gaming **viene perdiendo la guerra de la atención desde hace media década**, y no ante otros juegos: ante video social, apuestas deportivas y plataformas de creadores. En EE.UU. la cantidad de personas que juega **cayó por debajo de niveles pre-pandemia** [34][doc 01].
- Y la evidencia definitiva es de la propia compañía: **el 10-K FY2026 nombra a Roblox como competidor** junto a EA, Epic, Playrix, Playtika, Savvy, Tencent y Ubisoft, y declara que compite **"con otras formas de entretenimiento como el cine, la televisión, las redes sociales, las aplicaciones online, el video de formato corto y otras formas de entretenimiento, que pueden ser menos costosas o proveer otras ventajas al consumidor"** [5]. **El KSF de atención no es una tesis de consultora: está en el filing.**

**Lo que refuta la segunda mitad:** Take-Two **sí** está jugando el juego de la atención, y de hecho **lo está ganando** — en el único lugar donde nadie se lo cuenta.

| | Producir contenido | Capturar atención |
|---|---|---|
| **Lo que Take-Two mide y reporta** | Unidades vendidas, Net Bookings, RCS, pipeline de 29 títulos | **Nada.** No reporta DAU, MAU, ARPU, horas ni suscriptores de ningún título [doc 00, sección 11] |
| **Lo que Take-Two realmente tiene** | 7 títulos en FY2027 | ***GTA V*, el juego más visto de Twitch en 2024 con 1.400 millones de horas (≈9% de toda la audiencia de gaming de la plataforma) y #1 en 2026** [26][27] |

*Inferencia propia:* la formulación correcta del KSF emergente no es "capturar atención" —eso es el objetivo, no el factor— sino **ser dueño del sustrato sobre el que otros producen el contenido que captura la atención.** Take-Two es dueño de ese sustrato: compró Cfx.re en 2023, montó el marketplace en enero de 2026 y endosó NoPixel V en septiembre de 2025. Lo que no hace es **contarlo, medirlo ni cobrarlo a escala.**

**El matiz obligatorio que impide la conclusión fácil.** No todo el frente de atención juega en contra de Take-Two. Los datos de Newzoo para 2026 muestran que **el playtime de sandbox creció 36% interanual**, mientras el battle royale cayó **27%**, los shooters **5%** y los deportivos **5%**; que la concentración de playtime **está bajando** (80% del playtime de PC repartido en 79 juegos, contra 52 en 2022); y que en consola el **50% del ingreso sigue siendo venta de juego**, con **76-79%** proveniente de títulos por encima de USD 50 [33]. *Inferencia propia: el entorno de atención de 2026 es hostil para el free-to-play de Zynga y para el modelo de GTA Online, y **favorable** para el lanzamiento premium de un sandbox single-player. Eso hace que FY2027 sea un año fácil de leer mal: el éxito de GTA VI va a validar la arquitectura equivocada.*

### 5.4 ¿Sigue alineado el core competence histórico con los KSF actuales?

Cruce directo de la formulación de la sección 4 contra la columna "AHORA" de la tabla 5.1:

| KSF actual | ¿El core competence responde? | Comentario |
|---|:---:|---|
| Descubrimiento en estante infinito | ✅ Sí | Un mundo con identidad propia **es** el mecanismo de descubrimiento |
| Ingreso recurrente sostenido | ✅ Sí | Es la mitad literal de la competencia ("sostener su vida económica") |
| Vida útil de década | ✅ **Perfecto** | Es la definición de la competencia |
| Captura de tiempo de atención | ✅ Sí | Un mundo habitado durante una década **es** un activo de atención duradero |
| **Fuente del contenido nuevo** | ❌ **No** | Aquí la competencia **choca contra su propia arquitectura** |
| Dato y experimentación | ⚠️ Fragmentado | Existe, pero por etiqueta |
| Licencia social de la monetización | ⚠️ Expuesto | Vector regulatorio activo |

> ### La respuesta al enunciado
> **Los factores clave de éxito cambiaron, y el core competence histórico de Take-Two NO quedó
> desalineado: quedó topeado.**
>
> "Construir mundos que la gente habita una década" es, palabra por palabra, la competencia que
> los KSF de 2026 premian. El desalineamiento no está entre la competencia y los factores de
> éxito: está entre la **competencia** y la **arquitectura que la gobierna**.
>
> Bajo una arquitectura definida por el producto, mantener vivo el mundo cuesta **~USD 1.932 M
> anuales de contenido fijo y pre-pagado (29,0% de los ingresos), más USD 2.346,3 M
> capitalizados en balance** [doc 07], y su vida está topeada por la capacidad de producción del
> estudio. Bajo una arquitectura interactiva, la renovación la produce y la financia la
> comunidad, y la empresa cobra una parte: Roblox gasta una proporción **parecida** de sus
> bookings en contenido (~22%), pero **variable, ligada al ingreso y pagada después** [doc 07].
>
> **La competencia es la correcta. El techo se lo pone la arquitectura, no el mercado.**

**Consecuencia estratégica de la sección 5.** El KSF que Take-Two tiene que empezar a medir no es "unidades vendidas" ni "Net Bookings del año": es **horas de atención generadas por contenido que la empresa no pagó**, y su corolario financiero, **ingreso por dólar de costo de desarrollo medido a diez años**. Hoy la compañía no publica ninguno de los dos. Y mientras el indicador de gestión sea el primero, la arquitectura seguirá siendo la de producto, porque es la única que ese indicador premia.

---

## 6. EL DIAGRAMA DE TRES EJES — DESCRIPCIÓN PARA DIBUJAR LA SLIDE 9

> **Objetivo del gráfico:** que en cinco segundos se vea que los tres ejes están **llenos** y que
> las conexiones entre ellos están **rotas o punteadas**, salvo una zona central.

### 6.1 Estructura geométrica

Tres ejes que parten de un **origen común** ubicado en el centro de la slide:

| Eje | Dirección | Rótulo | Color sugerido |
|---|---|---|---|
| **Eje 1** | Horizontal hacia la derecha | **PRODUCTO** — *qué vendemos* | Azul |
| **Eje 2** | Vertical hacia arriba | **MERCADO** — *a quién* | Verde |
| **Eje 3** | Diagonal hacia abajo-izquierda (~225°) | **TECNOLOGÍA / KNOW-HOW** — *qué sabemos hacer* | Naranja |

Cada ítem se dibuja como una **etiqueta rectangular sobre su eje**, ordenada del origen hacia afuera. **Cada etiqueta lleva un distintivo de a qué label pertenece**: `R` (Rockstar), `2K`, `Z` (Zynga), `TT` (compañía). Ese distintivo es lo que hace visible la fractura y no debe omitirse.

### 6.2 Qué va en cada eje (versión condensada para slide — 6 ítems por eje)

**EJE PRODUCTO** (de adentro hacia afuera)
1. `R` Mundo abierto narrativo AAA — *GTA*, *Red Dead* · 475 M + 116 M unidades
2. `R` Live service persistente — *GTA Online*, 13 años · GTA+ USD 7,99/mes
3. `2K` Deportivo anual licenciado — *NBA 2K26* >12 M unidades
4. `2K` Catálogo core — *Borderlands*, *BioShock*, *Civilization*, *Mafia*
5. `Z` Casual F2P de vida larga + hyper-casual — 8 títulos, >1.000 prototipos/año
6. ⭐ `R/Cfx` **Contenido creado por terceros** — FiveM · Cfx Marketplace (12/1/2026) · Mission Creator (30/4/2026)

**EJE MERCADO** (de adentro hacia afuera)
1. `R/2K` Core gamer de consola premium — 40% de los bookings · edad promedio 36 años
2. `2K` Fandom deportivo — llega por la liga, no por el juego
3. `Z` Casual mobile de alta frecuencia — 49% de los bookings
4. ⭐ `R/Cfx` **Comunidad de roleplay: creadores y operadores de servidores** — FiveM 215.265 concurrentes
5. ⭐ `R` **Audiencia de espectadores que no juega** — 1.400 M de horas de Twitch en 2024
6. `R` Audiencia de video generalista — Netflix, 27/8/2026

**EJE TECNOLOGÍA / KNOW-HOW** (de adentro hacia afuera)
1. `R` Motor RAGE + Euphoria — **no compartido** · USD 2.346,3 M capitalizados
2. `R` Mundo abierto, narrativa, performance capture, marketing de escasez
3. `2K` Gestión de licencias — USD 463,5 M/año
4. `Z` Analítica de portafolio, ML, LTV, experimentación industrial, monetización F2P
5. `Z→TT` Canal directo al consumidor (D2C)
6. ⭐ `R/Cfx` **Infraestructura de servidores comunitarios y marketplace de UGC** — Cfx.re

> Los tres ítems marcados con ⭐ **están alineados a la misma distancia del origen, en el extremo
> externo de cada eje.** Esa alineación es deliberada: es lo que permite dibujar la zona central.

### 6.3 Las conexiones entre ejes — la parte que hace la slide

Se dibujan **arcos** entre ítems de ejes distintos, con tres estilos que deben figurar en una leyenda:

| Estilo | Significado |
|---|---|
| **Línea llena gruesa** | Interacción real, gobernada y capturada |
| **Línea punteada** | Interacción que **ocurre de hecho** pero **no está gobernada ni monetizada ni reportada** |
| **Línea con una ✕ roja encima** | Interacción **prometida o intentada que no existe** |

**Las siete conexiones a dibujar:**

| # | Conexión | Estilo | Rótulo sobre el arco |
|---|---|---|---|
| **C1** | `Z` Analítica/ML/monetización **→** `R`/`2K` Producto core | **✕ roja** | *"Chartboost vendido 12/2024 · sin motor ni herramientas compartidas · IA generativa: 'no participa en absoluto' en Rockstar"* |
| **C2** | `R`/`2K` IP core **→** Mercado mobile | **✕ roja** | *"NFL 2K Playmakers cerró 30/6/2025 · Star Wars: Hunters cerró 1/10/2025 · los 8 contribuyentes mobile de FY2026 son legacy de Zynga"* |
| **C3** | `Z` D2C **→** compañía | **Llena fina** | *"La única capacidad de Zynga que cruzó al margen consolidado"* |
| **C4** | `Z` *Zynga Poker* **→** Mercado PC/Steam | **Llena fina** | *"15/8/2025 · progresión cruzada mobile↔web↔PC"* |
| **C5** | `R` *GTA VI* **→** Mercado de audiencia de video | **Llena fina** | *"Netflix, 27/8/2026 — seis horas antes que YouTube"* |
| **C6** | `2K` *NBA 2K* ↔ Fandom NBA ↔ Live ops + NBA Take-Two Media | **Llena gruesa — triángulo** | *"La única interacción de tres ejes ya gobernada. Y está en 2K."* |
| **C7** | ⭐ **Los tres ítems marcados: `R/Cfx` FiveM ↔ Comunidad de creadores ↔ Cfx Marketplace** | **Triángulo punteado grueso** | *"Existe, funciona, es la mayor masa de atención del portafolio — y no está en ninguna guía, mix ni earnings call"* |

### 6.4 Los tres elementos de cierre del gráfico

**(1) Tres flechas de dominancia**, pequeñas, en una esquina, que muestran qué eje subordina a los otros en cada etiqueta:

```
Rockstar :  PRODUCTO ──► mercado + tecnología        (arquitectura definida por el PRODUCTO)
Zynga    :  MERCADO  ──► producto + tecnología       (arquitectura definida por el MERCADO)
2K       :  MERCADO ◄──► PRODUCTO ◄──► TECNOLOGÍA    (lo más cercano a INTERACTIVA)
Take-Two :  PRODUCTO ──► mercado + tecnología        (el holding adopta la lógica de Rockstar)
```

**(2) La caja central**, ubicada en el triángulo punteado C7, en el centro geométrico de la slide:

> **ZONA DE SINERGIA NO CAPTURADA**
> Economía de creadores sobre mundos propios.
> *Ya existe. Ya funciona. No está gobernada.*

**(3) El reloj de la decisión**, en el pie del gráfico, con formato de línea de tiempo:

```
11/8/2023        23/9/2025        12/1/2026        30/4/2026        19/11/2026        ¿?
Compra de        NoPixel V con    Cfx              Rockstar         GTA VI:           GTA VI Online
Cfx.re/FiveM     apoyo oficial    Marketplace      Mission Creator  "experiencia de   ¿producto o
                 de Rockstar      (~16 creadores)  (paga en GTA$)   un solo jugador"  plataforma?
```

Con la leyenda: **"Rockstar nunca reconoció públicamente la existencia de un GTA Online para VI. La decisión de arquitectura de la década sigue sin tomarse."**

### 6.5 Nota de honestidad para la slide

Si el espacio obliga a recortar, **lo que no se puede sacar son tres cosas**: (i) los distintivos de etiqueta `R`/`2K`/`Z` en cada ítem, (ii) las dos ✕ rojas de C1 y C2, y (iii) el triángulo punteado C7 con su caja central. Sin esos tres elementos el gráfico se convierte en un inventario descriptivo, que es exactamente lo que la cátedra penaliza.

---

## MATERIAL PARA LA SLIDE 9

**Título sugerido:** *Core Competence: hacemos mundos que la gente habita una década — y los escribimos solos*

**Título alternativo (más filoso):** *Tenemos los tres ejes llenos y las conexiones rotas*

---

**Bloque A — El veredicto de arquitectura (una caja arriba a la izquierda)**

> **Nuestra propia estrategia, publicada, es un diagrama de Gharajedaghi:**
> *"Crear experiencias de entretenimiento **exitosas** [PRODUCTO], entregadas en toda **plataforma
> relevante para nuestra audiencia** [MERCADO], a través de una variedad de **modelos de negocio
> sólidos** [TECNOLOGÍA]."*
> El producto es el sujeto. Los otros dos ejes son complementos.
> **Arquitectura definida por el PRODUCTO. Declarada, no inferida.**

**Bloque B — El diagrama de tres ejes** (sección 6 de este documento)

**Bloque C — La formulación del core competence (caja central, tipografía grande)**

> **¿En qué somos realmente buenos?**
> En construir mundos con identidad propia lo bastante fuerte como para que la gente elija
> habitarlos **durante una década**, y en sostener su vida económica todo ese tiempo.
> *GTA V*: 13 años, **>230 M** de unidades, **12,4%** de los ingresos de FY2026 sin lanzamientos.
> *Zynga Poker*: **18 años**. *Top Eleven*: mejor trimestre en **16 años**.
>
> **¿Qué significaría llevarlo a su máximo potencial?**
> Que nuestros mundos **dejen de tener fecha de vencimiento**, porque quien produce su renovación
> deja de ser nuestro estudio y pasa a ser su comunidad — y nosotros operamos esa economía.
>
> **Context-free: alto (5 de 8 dimensiones).** Sobrevivió al disco, al retail, al free-to-play y
> al salto a mobile. **"Hacer hits" no es un core competence: es un veredicto del mercado.**

**Bloque D — ¿Cambiaron los factores clave de éxito? (tabla reducida a 5 filas)**

| KSF | ANTES | AHORA | Nosotros |
|---|---|---|:---:|
| Acceso a la demanda | **~200 lugares de estante** para >850 juegos (2004) | **~70 lanzamientos por día** en Steam | ✅ |
| Monetización | Un pago, una vez | **RCS = 78%** de los bookings | ✅ |
| Vida útil del activo | Meses en el estante | **67% del playtime va a juegos de 6+ años** | ✅ |
| **Fuente del contenido nuevo** | **El estudio, sin alternativa** | **El estudio o la comunidad.** Roblox pagó **USD 1.503,1 M** a creadores en 2025 | ⚠️ |
| **Competidor relevante** | Otros publishers | **Nuestro propio 10-K nombra a Roblox, las redes sociales y el video corto** | ⚠️ |

**Bloque E — La caja de cierre (abajo, ancho completo, la que se recuerda)**

> **Ya somos la mayor economía de creadores de Occidente. No lo sabemos porque no lo contamos.**
>
> ***GTA V* fue el juego más visto de Twitch en 2024: 1.400 millones de horas, ≈9% de toda la
> audiencia de gaming de la plataforma — en su año número once.** No lo produjo Rockstar: lo
> produjo una comunidad de roleplay que corre sobre **FiveM** (récord de **215.265 concurrentes**
> el 12/4/2026), una plataforma que primero litigamos, después compramos (2023) y en enero de
> 2026 convertimos en tienda oficial.
>
> **Le pagamos a esos creadores en moneda virtual.** El *Rockstar Mission Creator* premia con
> **GTA$10.000.000, una campera y un trofeo**. Roblox paga **USD 1.503,1 millones en dinero real**.
>
> **En el earnings call de agosto de 2026 no hay una sola mención sustantiva del tema.**
> El CEO lo clasificó en 2023 como *"una oportunidad económica pequeña"*.
>
> **El core competence no está desalineado con los factores de éxito. Está topeado por la
> arquitectura que lo gobierna. Y la decisión que lo destraba —qué es el online de GTA VI—
> todavía no está tomada.**

**Pie de slide:** *Los tres ejes están llenos. Las conexiones entre ellos, no. Take-Two reporta un solo segmento: la sinergia es, por diseño, inverificable desde afuera.*

---

## FUENTES

**A. Framework de la cátedra**

[1] Gharajedaghi, Jamshid — *Systems Thinking: Managing Chaos and Complexity. A Platform for Designing Business Architecture*, 3ª edición, Morgan Kaufmann / Elsevier, 2011. Ficha del editor: https://www.sciencedirect.com/book/monograph/9780123859150/systems-thinking · Perfil del autor: https://en.wikipedia.org/wiki/Jamshid_Gharajedaghi

[2] Cátedra Procesos de Innovación y Nuevos Negocios (UTDT), Clase 2 — desarrollo del framework de Gharajedaghi (cuatro arquitecturas, definición de core competence, técnica de las dos preguntas, criterio de *context-free*), reproducido en `BRIEF-TP1.md`, sección 3.2.

**B. Filings, comunicados y conferencias de resultados de Take-Two**

[3] Take-Two Interactive Software, Inc. — *"Reports Results for Fiscal First Quarter 2027"* (trimestre cerrado el 30/6/2026). Comunicado de prensa / Form 8-K, 6-7 de agosto de 2026. https://www.take2games.com/ir/news/take-two-interactive-software-inc-reports-results-fiscal-first-6

[4] Take-Two Interactive Software, Inc. — *"Reports Results for Fourth Quarter and Fiscal Year 2026"* (FY cerrado el 31/3/2026). Comunicado de prensa / Form 8-K, 21 de mayo de 2026. https://www.take2games.com/ir/news/take-two-interactive-software-inc-reports-results-fourth-2

[5] Take-Two Interactive Software, Inc. — **Form 10-K, año fiscal cerrado el 31/3/2026**. https://www.sec.gov/Archives/edgar/data/0000946581/000162828026037434/ttwo-20260331.htm ⚠️ **Acceso automatizado a sec.gov bloqueado (HTTP 403)**, tal como advierte el data pack (sección 15.4). El contenido de la sección *Competition* —lista de competidores incluyendo **Roblox**, y la frase sobre competir con *"motion pictures, television, social networking, online applications, short-form video and other forms of entertainment"*— fue confirmado por **dos búsquedas independientes** sobre el filing y por el resumen estructurado de StockTitan: https://www.stocktitan.net/sec-filings/TTWO/10-k-take-two-interactive-software-inc-files-annual-report-cd41fd29443b.html · **Recomendación: abrir el filing manualmente antes de citar la frase textual en la slide.**

[6] Take-Two Interactive Software, Inc. — *Corporate Profile* (sitio de relaciones con inversores). Declaración de estrategia: *"Our strategy is to create hit entertainment experiences, delivered on every platform relevant to our audience through a variety of sound business models"*; pilares "creativity, innovation, and efficiency". Consultado el 27/8/2026. https://www.take2games.com/ir

[7] The Motley Fool — *"Take-Two (TTWO) Q1 2027 Earnings Call Transcript"*, agosto de 2026. **Ausencia verificada de discusión sustantiva de: modo online de GTA VI, sinergias tecnológicas Rockstar–Zynga, Cfx Marketplace y ecosistema FiveM.** Sí contiene la mención del *Rockstar Mission Creator* y la caracterización del D2C. https://www.fool.com/earnings/call-transcripts/2026/08/14/take-two-ttwo-q1-2027-earnings-call-transcript/

[8] The Motley Fool — *"Take-Two (TTWO) Q3 2026 Earnings Call Transcript"*, **3 de febrero de 2026**. Contiene la respuesta de Zelnick sobre el Cfx Marketplace y el UGC (*"siempre hemos dado la bienvenida al contenido generado por usuarios"*, *"herramientas que lo hagan más viable y accesible podrían ser una oportunidad para nosotros"*) y la formulación de la ambición corporativa (*"ser la compañía más creativa, más innovadora y más eficiente del negocio del entretenimiento"*). https://www.fool.com/earnings/call-transcripts/2026/02/03/take-two-ttwo-q3-2026-earnings-call-transcript/

[9] The Motley Fool — *"Take-Two (TTWO) Q4 2026 Earnings Transcript"*, 21 de mayo de 2026. https://www.fool.com/earnings/call-transcripts/2026/05/21/take-two-ttwo-q4-2026-earnings-transcript/

**C. Declaraciones de la conducción**

[10] The Game Business — *"Take-Two CEO Interview: 'The notion that AI can make GTA is laughable'"*, **17 de marzo de 2026**. Contiene: *"Hits cure all ills. In the absence of making hits, you won't have a successful entertainment business"*; sobre la economía de creadores, *"It doesn't supplant it. It doesn't replace it"*; y la proyección de llevar el ingreso internacional del ~35% al 75-80% en diez años. https://www.thegamebusiness.com/p/take-two-ceo-interview-the-notion

[11] Vice — *"Why the Publisher Behind GTA 6 Sees Roblox as a Real Threat"*. Declaraciones de Zelnick del **7 de agosto de 2025**: *"The impressive numbers that Roblox is delivering is something we are mindful of… We are looking over our shoulders. We are running scared"*, vinculadas explícitamente al componente online de *GTA VI*. https://www.vice.com/en/article/why-the-publisher-behind-gta-6-sees-roblox-as-a-real-threat/

[12] GTA BOOM — *"Take-Two Wants to Be the Biggest Entertainment Company on Earth and GTA 6 Is the Key"*. Declaraciones de Zelnick en **iicon, 28 de abril de 2026**: la ambición de *"become the No. 1 entertainment company"*. https://www.gtaboom.com/take-two-wants-to-be-the-biggest-entertainment-company-on-earth-and-gta-6-is-the-key-e94c

[13] Sports Illustrated (Video Games) — *"Take-Two CEO wants to monetize FiveM GTA Online RP servers"*, noviembre de 2023. Contiene: *"If people are consuming our intellectual property, we would like to monetize it if we can"*; las dos comunidades (jugadores de servidores de RP y espectadores de Twitch); y **"this is a small economic opportunity right now, and a small cost to us"**. https://www.si.com/videogames/news/gta-online-rp-servers-monetization-plans · Réplica: DSOGaming — *"Take-Two plans to monetize the GTA5 FiveM & RDR2 RedM Mods"*. https://www.dsogaming.com/pc-performance-analyses/take-two-plans-to-monetize-the-gta-5-fivem-and-redm-mods/

[14] GamesBeat — *"Take-Two CEO Strauss Zelnick isn't doing a victory lap before GTA VI sales start | exclusive interview"*, **7 de agosto de 2026**. *"We haven't sold one unit yet. You can cancel a preorder. We're allergic to victory laps."* · *"Interactive entertainment remains the world's pastime."* https://gamesbeat.com/take-two-ceo-strauss-zelnick-isnt-doing-a-victory-lap-before-gta-vi-sales-start-exclusive-interview/

[15] GTA BOOM — *"Strauss Zelnick Just Called GTA 6's Budget a Weapon, Not a Gamble"* (TD Cowen 54th Annual Technology, Media and Telecom Conference, **27 de mayo de 2026**): presupuesto de USD 1.000-1.500 M sobre 7-10 años como *"una ventaja y una barrera de entrada"*. https://www.gtaboom.com/zelnick-says-gta-6-development-budget-is-why-it-has-no-real-competition-8bd4

**D. Cfx.re, FiveM y la plataforma de creadores — el núcleo del hallazgo**

[16] Video Games Chronicle — *"Rockstar acquires GTA 5 roleplay devs Cfx.re"*, **11 de agosto de 2023**. https://www.videogameschronicle.com/news/rockstar-acquires-gta-5-roleplay-devs-cfx-re/ · PC Gamer — *"Rockstar buys the makers of the GTA Online FiveM mod it banned 8 years ago"*. https://www.pcgamer.com/rockstar-buys-the-makers-of-the-gta-online-fivem-mod-it-banned-8-years-ago/ ⚠️ **Monto de la adquisición: NO divulgado.** Circula una cifra de ~USD 20 M en prensa secundaria (GTA Focal) que **no está confirmada por las partes**; no usarla como dato.

[17] Game Developer — *"Rockstar Games launches an official mod marketplace"*, **12 de enero de 2026**. Cronología completa 2015 → 2017 → 2022 → 2023 → 2026; ~16 creadores al lanzamiento (más seis "próximamente"); descripción oficial: *"a curated digital storefront where talented FiveM/RedM creators can share and sell their work"*. https://www.gamedeveloper.com/business/rockstar-launches-an-official-mod-marketplace

[18] Wccftech — *"Rockstar Launches Cfx Marketplace, an Official Modding Store for FiveM and RedM"*, enero de 2026 (>314 productos al lanzamiento; precios hasta USD 129,99 por DLC y USD 389,99 por bundles). https://wccftech.com/rockstar-launches-cfx-marketplace-official-modding-store-fivem-redm/ · Sitio oficial: https://marketplace.cfx.re/ · Directorio de creadores: https://marketplace.cfx.re/creators ⚠️ **El reparto de ingresos con los creadores NO está publicado** ni en el sitio ni en la cobertura.

[19] Digiday — *"Ahead of GTA 6, Rockstar Games is staffing up its creator platform division with an eye toward UGC creators"*, **30 de julio de 2025**. Equipo de Creator Platform de ocho personas; búsquedas de Senior Product Manager y Associate Compliance Manager; responsabilidad declarada de construir *"creator monetization tools"*; **FiveM con ~200.000 jugadores activos diarios, con picos de 250.000**. Rockstar declinó comentar. https://digiday.com/media/rockstar-games-is-staffing-up-its-creator-platform-division-with-an-eye-towards-ugc-creators/

[20] Digiday — *"Rockstar Games talks with top metaverse creators, with an eye on making 'Grand Theft Auto' the next creator platform"*, febrero de 2025. Rockstar habría mantenido conversaciones con creadores top de Roblox y Fortnite sobre experiencias personalizadas dentro de *GTA VI*. https://digiday.com/media/rockstar-games-talks-with-top-metaverse-creators-with-an-eye-on-making-grand-theft-auto-the-next-creator-platform/ · Cobertura secundaria: Tubefilter — *"Move over, Roblox: Rockstar wants 'Grand Theft Auto VI' to be the next big creator platform"*, 19/2/2025. https://www.tubefilter.com/2025/02/19/rockstar-games-grand-theft-auto-gta-vi-creator-platform/ ⚠️ **Reporte periodístico, no anuncio de la empresa.**

[21] TweakTown — *"Rockstar Games expands new Creator Platform with six job listings"*, 2026. https://www.tweaktown.com/news/113233/rockstar-games-expands-new-creator-platform-with-six-job-listings/index.html · TechPowerUp — *"Rockstar Job Listings Point to GTA VI User-Generated Content Platform"*, abril de 2026. https://www.techpowerup.com/339439/rockstar-job-listings-point-to-gta-vi-user-generated-content-platform

[22] TheGamer — *"GTA 6 To Have 'Customised Dedicated Servers', New Rockstar Job Listings Suggest"*. https://www.thegamer.com/gta-6-online-dedicated-custom-servers-community-confirmed-job-listing/ · GamesHub — *"GTA 6 multiplayer: What clues Rockstar's job listings reveal about the new community platform and UGC"*. https://www.gameshub.com/news/news/rockstar-job-listings-gta-6s-multiplayer-community-platform-and-ugc-2874249/ ⚠️ **Estatus obligatorio: señal de contratación. NO hay programa de creadores de GTA VI anunciado, nombrado ni fechado.**

[23] Rockstar Games — *"Play Thrilling New GTA Online Experiences Built by the Community with the Rockstar Mission Creator"*, Newswire, **30 de abril de 2026**. https://www.rockstargames.com/newswire/article/39a3412379o79o/play-thrilling-new-gta-online-experiences-built-by-the-community-with · Shacknews — *"GTA Online launches Community Mission Series promoting its new Rockstar Mission Creator"*. https://www.shacknews.com/article/148931/gta-online-rockstar-mission-creator-community-mission-series · GTA BOOM (premios al creador seleccionado: GTA$10.000.000, campera Rockstar Community Series y trofeo Mansion). https://www.gtaboom.com/gta-online-mission-creator-community-series-1af7

[24] Rockstar Games (@RockstarGames) — post oficial del **23 de septiembre de 2025**: *"We're excited to support the nopixel team as they create the future of GTA RP."* https://x.com/RockstarGames/status/1970518900287721679 · Sportskeeda — *"GTA RP server nopixel reveals partnership with Rockstar Games"*. https://www.sportskeeda.com/gta/gta-rp-server-nopixel-reveals-partnership-rockstar-games · 6Charts — *"NoPixel V Coming to the Rockstar Games Launcher"*. https://6charts.com/news/nopixel-v-rockstar-launcher-official-gta-roleplay

[25] GamesRadar+ — *"Ahead of GTA 6, Rockstar-owned GTA 5 RP mega mod FiveM breaks its own Steam record with 200,000 concurrent players"*, 2026. https://www.gamesradar.com/games/grand-theft-auto/ahead-of-gta-6-rockstar-owned-gta-5-rp-mega-mod-fivem-breaks-its-own-steam-record-with-200-000-concurrent-players/ · SteamDB — *FiveM Steam Charts* (récord de **215.265** concurrentes el 12/4/2026). https://steamdb.info/app/2676230/charts/

[25-b] GosuGamers — *"Rockstar labels GTA VI a 'single-player experience', no mention of GTA Online at launch"* (tomado de la FAQ de PlayStation Store), 2026. https://www.gosugamers.net/entertainment/news/78678-rockstar-labels-gta-vi-a-single-player-experience-no-mention-of-gta-online-at-launch · **Jason Schreier (Bloomberg)**, reportado vía ResetEra: Rockstar *"no dijo nada, ni planea decir nada pronto"* sobre cómo será el nuevo GTA Online. https://www.resetera.com/threads/jason-schreier-rockstar-does-not-plan-on-talking-%E2%80%9Canytime-soon%E2%80%9D-about-gta-online-in-gta-6.1598485/

**E. Atención y audiencia del ecosistema GTA**

[26] Statista — *"GTA 5 Twitch hours watched 2026"* (50,5 M de horas en julio de 2026). https://www.statista.com/statistics/1109392/gta-5-hours-watched-twitch/ · Streams Charts — *"Top GTA V streamers 2025-2026"* (#1 de la plataforma en el período de 30 días de abril de 2026: **133.277 espectadores concurrentes promedio, 51 M de horas**). https://streamscharts.com/news/top-gta-streamers-2025 ⚠️ **Datos de agregadores de streaming; usar como orden de magnitud, no como cifra auditada.**

[27] GTA BOOM — *"GTA V Tops Twitch Charts with 1.4 Billion Hours Watched"*, abril de 2025 (informe anual de Twitch 2024; comparables: *League of Legends* 1.200 M, *Valorant* 804 M, *Fortnite* 539 M, *Call of Duty* 451 M). https://www.gtaboom.com/gta-v-tops-twitch-charts-with-14-billion-hours-watched-9396 · Tubefilter — *"Twitch's 2024 gaming data shows us why 'Grand Theft Auto VI' will be such a big deal"*, 24/4/2025 (15.600 M de horas totales de Twitch en 2024). https://www.tubefilter.com/2025/04/24/twitch-2024-most-streamed-video-games-grand-theft-auto-v/

**F. Los cruces fallidos entre ejes**

[28] Sports Gamers Online — *"After 1 Year, 2K Will Shut Down NFL 2K Playmakers"* (cierre de servidores el **30 de junio de 2025**, ~14 meses después del lanzamiento de abril de 2024). https://www.sportsgamersonline.com/games/football/after-1-year-2k-will-shut-down-nfl-2k-playmakers/ · Anuncio original: 2K Newsroom — *"NFL, NFLPA and 2K Announce Launch of NFL 2K Playmakers Mobile Game"*. https://newsroom.2k.com/news/nfl-nflpa-and-2k-announce-launch-of-nfl-2k-playmakers-mobile-game

[29] PocketGamer.biz — *"Zynga's Star Wars: Hunters set to shut down less than a year after launch"* (cierre de servidores el **1 de octubre de 2025**; última actualización de contenido el 15 de abril de 2025; port de PC cancelado). https://www.pocketgamer.biz/zyngas-star-wars-hunters-set-to-shut-down-less-than-a-year-after-launch/ · GameSpot — *"Zynga Boss Says Star Wars Hunters Was 'No Failure' Despite Imminent Shutdown"*. https://www.gamespot.com/articles/zynga-boss-says-star-wars-hunters-was-no-failure-despite-imminent-shutdown/1100-6533196/

[30] StockTitan / Zynga — *"After 18 Years on Mobile, Zynga's Original Poker Game Makes Historic Jump to Steam with Cross-Platform Play"*, **15 de agosto de 2025**. Declaración de Yaron Leyvand (EVP of Mobile Games, Zynga). https://www.stocktitan.net/news/TTWO/your-poker-crew-just-got-bigger-zynga-poker-launches-on-jwmnwhx90osb.html

[31] Businesswire — *"Take-Two and Zynga to Combine…"*, **10 de enero de 2022** (sinergias declaradas: ~USD 100 M de costos en dos años, hasta USD 500 M de ingresos, base de datos de clientes compartida, analytics y ML, uso de Chartboost). https://www.businesswire.com/news/home/20220110005389/en/Take-Two-and-Zynga-to-Combine-Bringing-Together-Best-in-Class-Intellectual-Properties-and-a-Market-Leading-Diversified-Mobile-Publishing-Platform-to-Enhance-Positioning-as-a-Global-Leader-in-Interactive-Entertainment

[32] Businesswire — *"LoopMe Acquires Chartboost from Zynga…"*, **10 de diciembre de 2024**. https://www.businesswire.com/news/home/20241210493233/en/LoopMe-Acquires-Chartboost-from-Zynga-Accelerating-its-Mission-to-Power-Brand-Advertising-Across-the-Digital-Ecosystem

**G. Mercado, KSF y benchmarks**

[33] Newzoo — *The PC & Console Gaming Report 2026*, **6 de abril de 2026**, vía GameDev Reports y TechSpot. Playtime total −1% en 2025 (PC +3%, PlayStation −4%, Xbox −3%); 80% del playtime de PC en **79 títulos** (contra 52 en 2022); juegos fuera del top 20 pasan de 33% a **42%** del playtime de PC; **sandbox +36%**, battle royale −27%, shooters −5%, deportivos −5%; nuevos lanzamientos capturan de forma consistente **12-13%** del playtime; PC: microtransacciones = 48% del revenue; consola: venta de juego = 50%, con 76-79% del revenue en títulos de más de USD 50; **playtime F2P en descenso, B2P en crecimiento**. https://gamedevreports.substack.com/p/newzoo-pc-and-console-market-in-2026 · https://www.techspot.com/news/112092-2026-pc-console-gaming-report-shows-most-revenue.html · Informe: https://investgame.net/news/pdf/2026-03-12-newzoo_2026_pc_and_console_gaming_report_wp/

[34] Matthew Ball / Epyllion — *The State of Video Gaming in 2026*. https://www.matthewball.co/all/presentation-the-state-of-video-gaming-in-2026 · Cobertura: PocketGamer.biz — *"Matthew Ball's State of Video Gaming in 2026: 'China is eating the video games industry'"*. https://www.pocketgamer.biz/matthew-balls-state-of-video-gaming-in-2026-china-is-eating-the-video-games-industry/ · PC Gamer — *"Videogames are 'losing in the War for Attention'"*. https://www.pcgamer.com/gaming-industry/videogames-are-losing-in-the-war-for-attention-analyst-says-many-of-the-industrys-biggest-markets-are-spending-less-time-on-gaming/

[35] Deloitte Insights — *2026 Digital Media Trends*. Jugadores de la Gen Z y millennials: **~8 horas semanales** de videojuegos (varones adolescentes de la Gen Z: 12 h; mujeres: 9 h) contra **~6 horas diarias** de consumo total de medios; **73%** de la Gen Z descubre contenido nuevo por redes sociales; **55%** considera el contenido de redes más relevante que el tradicional; **52%** siente conexión más fuerte con creadores que con actores de TV. https://www.deloitte.com/us/en/insights/industry/technology/digital-media-trends-consumption-habits-survey.html

[36] Roblox Corporation — resultados del **Q2 2026** (trimestre calendario cerrado el 30/6/2026): revenue USD 1.500 M (+36%), bookings USD 1.600 M (+8%), **DAU 123 M (+10% i.a., contra un pico de 152 M en Q3 2025)**, **29.000 M de horas de engagement (contra un pico de 40.000 M)**, horas por DAU por día −4,7% a 2,59, **Developer Exchange fees USD 363 M (+15%) = 25% del revenue**. Form 10-Q: https://www.sec.gov/Archives/edgar/data/0001315098/000162828026051082/rblx-20260630.htm · Resumen: https://www.investing.com/news/company-news/roblox-q2-2026-slides-revenue-rises-36-as-bookings-growth-stalls-93CH-4826381

[37] NYU Stern School of Business — *"Playing the Game: Theory and Evidence"* (economía de la industria de videojuegos en la era retail: **>850 juegos de consola lanzados en 2004** contra ~**200 posiciones de estante** en los grandes retailers; dependencia de secuelas para extender la vida en el estante). https://www.stern.nyu.edu/sites/default/files/assets/documents/con_043310.pdf

[38] Variety — *"'GTA 6' to Debut 'Extended Look' on Netflix and YouTube on Aug. 27"*, 2026. https://variety.com/2026/gaming/news/gta-6-trailer-netflix-youtube-aug-27-1236789693/ · Netflix Tudum — *Grand Theft Auto VI: An Extended Look* (estreno **27 de agosto de 2026, 15:00 ET**, exclusivo por seis horas; ~26 minutos capturados íntegramente en PS5). https://www.netflix.com/tudum/articles/grand-theft-auto-6-extended-first-look · Antecedente: About Netflix — *"Grand Theft Auto: The Trilogy – The Definitive Edition Arrives on Netflix December 14"* (2023). http://about.netflix.com/en/news/grand-theft-auto-the-trilogy-the-definitive-edition-arrives-on-netflix

[39] Sports Video Group — *"NBA and Take-Two Interactive Announce New Venture: NBA Take-Two Media"*, **16 de junio de 2025**. https://www.sportsvideo.org/2025/06/16/nba-and-take-two-interactive-announce-new-venture-nba-take-two-media/ · NBA Communications — *"NBA, NBPA and 2K agree to extend multiyear partnership"*, 17/6/2025 (**términos y vencimiento NO divulgados**). https://pr.nba.com/nba-nbpa-2k-partnership · Net Influencer — *"NBA Take-Two Media Is Turning Basketball Culture Into A Creator-Led Entertainment Business"* (Andrew Perlmutter como CEO; negocio de entretenimiento social alrededor de la cultura del básquet). https://www.netinfluencer.com/nba-take-two-media-is-turning-basketball-culture-into-a-creator-led-entertainment-business/

[40] Tubefilter — *"Epic Games has now paid over $1 billion to the creators of Fortnite's 'Islands'"*, 17 de junio de 2026. https://www.tubefilter.com/2026/06/17/epic-games-unreal-editor-for-fortnite-creator-payouts/ · Tech Insider — *"Fortnite Creators Cross $1B Payout, 47% of Playtime [2026]"*. https://tech-insider.org/ca/fortnite-creator-economy-1-billion-2026/

[41] Roblox Corporation — Form 10-K CY2025 y Q4 2025 Shareholder Letter (**pagos a creadores 2025: USD 1.503,1 M**, +63% sobre los USD 922,8 M de 2024; >44 M de experiencias publicadas). https://s27.q4cdn.com/984876518/files/doc_financials/2025/q4/Q4-2025-Shareholder-Letter.pdf

[42] GTA BOOM — *"Rockstar Raises GTA+ Subscription Price by 33%"* · GTA Intel — *"GTA+ in 2026: What the $7.99 Subscription Actually Gets You"* (lanzamiento el 29/3/2022 a USD 5,99; suba a **USD 7,99 el 11/4/2024**; GTA$500.000 mensuales, garaje de 100 autos, biblioteca rotativa de clásicos). https://www.gtaboom.com/rockstar-raises-gta-subscription-price-by-33-sparking-backlash-from-fans-355b · https://gtaintel.com/news/gta-online-plus-subscription-explained

**H. Documentos internos del proyecto**

`[doc 00]` `00-datapack-numerico.md` · `[doc 01]` `01-industria-perimetro.md` · `[doc 02]` `02-take-two-por-dentro.md` · `[doc 03]` `03-vds-choose-the-value.md` · `[doc 04]` `04-vds-provide-the-value.md` · `[doc 05]` `05-vds-communicate-the-value.md` · `[doc 06]` `06-ventajas-competitivas.md` · `[doc 07]` `07-apalancamiento-economico.md` · `[doc 08]` `08-barreras-de-entrada.md`

---

## DATOS NUEVOS PARA INCORPORAR AL DATA PACK

1. **Cfx Marketplace, lanzado el 12 de enero de 2026** — tienda oficial curada de Rockstar para creadores de FiveM/RedM, con ~**16 creadores** al lanzamiento (más seis "próximamente") y precios de hasta **USD 389,99** por bundle. Pagos canalizados por Tebex. **El reparto de ingresos con los creadores NO está divulgado.** [17][18]
   > ⚠️ **Corrección al documento 06:** la afirmación *"Take-Two paga USD 0 a creadores"* dejó de ser literalmente cierta el 12/1/2026. La formulación correcta es: **"Take-Two paga a creadores desde enero de 2026, en un marketplace que arrancó con ~16 creadores y cuyo volumen y reparto la empresa nunca divulgó, mientras Roblox pagó USD 1.503,1 M en dinero real en 2025."**

2. ***Rockstar Mission Creator*, lanzado el 30 de abril de 2026** en *GTA Online*: herramientas de creación de misiones para hasta 8 jugadores, con *Community Mission Series*. **Los creadores seleccionados reciben GTA$10.000.000 (moneda virtual), una campera y un trofeo dentro del juego — no dinero.** Fue mencionado en el earnings call de Q1 FY2027. [7][23]

3. **NoPixel V, anunciado el 23 de septiembre de 2025** con apoyo oficial de Rockstar (*"We're excited to support the nopixel team as they create the future of GTA RP"*), accesible desde el **Rockstar Games Launcher**. Primer servidor de roleplay con endoso público del estudio. [24]

4. **FiveM: récord de 215.265 jugadores concurrentes en Steam el 12/4/2026** (~203.000 en marzo de 2026). Digiday reportaba en julio de 2025 ~**200.000 jugadores activos diarios** con picos de 250.000. [19][25]

5. ***GTA V*, el juego más visto de Twitch en 2024 con 1.400 millones de horas (~9% de toda la audiencia de gaming de la plataforma) y #1 en abril de 2026 con 133.277 espectadores concurrentes promedio.** *Estimaciones de agregadores de streaming; no auditadas.* [26][27]

6. **Dos cruces IP core → mobile cerrados en 2025:** *NFL 2K Playmakers* (servidores cerrados el **30/6/2025**, ~14 meses de vida) y *Star Wars: Hunters* de Zynga (cerrado el **1/10/2025**, <18 meses de vida). [28][29]

7. ***Zynga Poker* debutó en Steam el 15 de agosto de 2025**, primer título de Zynga en la plataforma, con cuenta y progresión unificadas entre mobile, web y PC. [30]

8. **El Form 10-K FY2026 nombra a Roblox como competidor** (junto a EA, Embracer, Epic, Playrix, Playtika, Savvy, Tencent y Ubisoft) y declara que la compañía compite con *"motion pictures, television, social networking, online applications, short-form video and other forms of entertainment"*. ⚠️ Verificado por dos búsquedas independientes sobre el filing; **sec.gov devuelve HTTP 403 al acceso automatizado**. Abrir el filing manualmente antes de citar textual en la slide. [5]

9. **Newzoo, PC & Console Gaming Report 2026 (6/4/2026):** playtime total **−1%** en 2025; **sandbox +36%**, battle royale −27%, shooters −5%, deportivos −5%; nuevos lanzamientos capturan de forma consistente **12-13%** del playtime; **playtime F2P en descenso y B2P en crecimiento**; 80% del playtime de PC repartido en **79 títulos** (contra 52 en 2022). [33]

10. **Roblox Q2 2026 (calendario):** DAU **123 M** contra un pico de 152 M en Q3 2025; **29.000 M de horas** contra un pico de 40.000 M; bookings **+8%** contra revenue **+36%**; pagos a creadores (DevEx) **USD 363 M = 25% del revenue**. *Relevante como contrapeso: el modelo UGC también está mostrando fatiga de engagement.* [36]

11. **Deloitte 2026:** jugadores de Gen Z y millennials dedican **~8 horas semanales** a videojuegos dentro de **~6 horas diarias** de consumo total de medios. [35]

12. **Declaración de estrategia corporativa de Take-Two, textual:** *"Our strategy is to create hit entertainment experiences, delivered on every platform relevant to our audience through a variety of sound business models"*, con pilares *"creativity, innovation, and efficiency"*. [6]
