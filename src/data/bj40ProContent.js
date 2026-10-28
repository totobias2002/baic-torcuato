// Contenido real extraído del microsite Nuxt (https://baic.com.ar/bj40pro/) que BAIC usa
// para el BJ40 Pro. A diferencia del resto de los modelos (páginas WordPress/Elementor con
// scroll normal), esta página es un slideshow a pantalla completa: cada "page" ocupa toda
// la pantalla y se avanza de a una con la rueda del mouse / touch, nunca con scroll libre.
// Por eso este modelo tiene su propio componente (Bj40ProPage.jsx) en vez de reusar el
// VehicleDetailPage genérico.

const NUXT = '/media/baic/bj40pro/_nuxt'
const STATIC = '/media/baic/bj40pro/static/bj40'

// Secuencia de estudio (auto girando 360°) que en el sitio real se controla con el scroll.
// Ojo: son 271 fotos en total (0000-0270), no 43 -las primeras ~150 frenan casi todas en el
// mismo ángulo 3/4 (por eso alcanzaba con las primeras ~43 para el hero/4WD/ATS), pero record
// recién más adelante en la vuelta -cerca del frame 125- el auto pasa por el perfil puro
// (90°) que usa la pantalla "Datos Geométricos".
export const bj40ProReveal = {
  frames: Array.from({ length: 271 }, (_, i) => `${STATIC}/frame/${String(i).padStart(4, '0')}.webp`),
  // A medida que el auto gira con el scroll, se van mostrando sus especificaciones -igual
  // que en el sitio real-, un dato distinto por tramo de frames en vez de tirarlas todas
  // juntas al final.
  specStops: [
    { from: 6, to: 14, items: [{ label: 'Potencia', value: '241.38 HP' }, { label: 'Par', value: '386 N·M' }] },
    { from: 15, to: 22, items: [{ label: 'Motor', value: '2.0T Turbo' }, { label: 'Modos de conducción', value: '11' }] },
    { from: 23, to: 30, items: [{ label: 'Ángulo de aproximación', value: '37°' }, { label: 'Ángulo de salida', value: '31°' }] },
    { from: 31, to: 42, items: [{ label: 'Altura al suelo', value: '220 mm' }, { label: 'Profundidad de vadeo', value: '750 mm' }] }
  ]
}

// El auto se queda grande a la izquierda mientras a la derecha va cambiando una tarjeta más
// chica con la foto + título + texto de cada sistema. Frame 21 = 3/4 frontal, el ángulo por
// default para las pantallas de contenido que no definen su propio carFrameIndex (Estructura,
// Chasis, Luces, Libertad, Puerta -no forman parte del tramo "giro continuo" hero→Geo).
export const DEFAULT_CAR_FRAME_INDEX = 21

export const bj40ProSlides = [
  // El auto NO gira "cuadro a cuadro con la rueda" -eso hacía falta scrollear muchas veces
  // para pasar de pantalla. Es al revés: UN solo scroll cambia de pantalla (como el resto del
  // sitio), y el auto hace un giro cortito, animado en el tiempo (no atado a la rueda), justo
  // en el momento de la transición -confirmado con el usuario comparando contra el original.
  { type: 'hero', carFrameIndex: 18 },

  {
    type: 'content',
    heading: 'Sistema De 4WD A Tiempo Parcial',
    body: 'Equipado con un sistema de tracción integral inteligente, soporta el cambio de cuatro modos de 2H, 4H, 4L, 4A mediante un selector electrónico, adaptándose a las diferentes necesidades de conducción.',
    bg: `${NUXT}/page2_cover.Cs_lHSfs.webp`,
    // Frame real (no espejado): a esta altura de la vuelta completa (271 frames) el auto ya
    // gira naturalmente hacia la izquierda -no hace falta truco de flip, es la foto genuina.
    carFrameIndex: 100
  },

  {
    type: 'ats',
    heading: 'Sistema De ATS',
    body: 'El sistema de control todo terreno de ATS soporta hasta 11 modos de conducción. Mediante un cambio inteligente, el sistema ofrece la mejor distribución de potencia al vehículo.',
    bg: `${NUXT}/page3_cover.EcHOjjTm.webp`,
    // Frame 103: todavía 3/4 clara (como el 100 del 4WD), un poco más girado.
    // El 110 quedaba casi de perfil (demasiado cerca del 125 de Geo) y el auto se veía
    // como "mirando para abajo/al costado" en vez de una pose 3/4 prolija -por eso se bajó.
    carFrameIndex: 103,
    // En el sitio real el fondo de ATS son 3 capas superpuestas (no una foto única): el mismo
    // fondo de estudio con humo de siempre (bg1, abajo de todo), encima la montaña/rockery
    // del terreno (arriba a la izquierda) y encima de eso las rocas del primer plano
    // (stone/snow/shamo_vista, abajo) -las dos últimas cambian según el terreno elegido.
    terrain: [
      { label: 'Rocoso', icon: `${STATIC}/ats/yanshi_orange.webp`, rockery: `${NUXT}/rockery.CuI74w1y.webp`, bg: `${NUXT}/stone_vista.DnnpBR5Q.webp` },
      { label: 'Nevado', icon: `${STATIC}/ats/xuehua_orange.webp`, rockery: `${NUXT}/snow_rockery.Bw4rsVSo.webp`, bg: `${NUXT}/snow_vista.DGDn_8jd.webp` },
      { label: 'Desierto', icon: `${STATIC}/ats/shamo_orange.webp`, rockery: `${NUXT}/shamo_rockery.B2Dlz0t0.webp`, bg: `${NUXT}/shamo_vista.CRkx3-DY.webp` }
    ]
  },

  // "Excelentes Datos Geométricos para Off-Road": el auto queda fijo (semi-perfil) y se van
  // superponiendo, paso a paso con el scroll, los diagramas técnicos (vadeo+altura, después
  // ángulos de aproximación/salida) y por último dos barras de datos, igual que en el original.
  {
    type: 'geo',
    heading: 'Excelentes Datos Geométricos Para Off-Road',
    // Frame real de perfil puro (90°) -no es un flip espejado, es el ángulo genuino de la
    // vuelta completa del turntable (ver nota en bj40ProReveal más arriba). Por eso acá va
    // sin flip: a esa altura de la vuelta el auto YA mira naturalmente para la izquierda.
    carFrameIndex: 125,
    carFlipped: false,
    steps: [
      { overlays: [`${NUXT}/es220mm.lHiou03R.webp`, `${NUXT}/es750mm.DHOIpX5S.webp`] },
      { overlays: [`${NUXT}/esargument-img.BbaYZZVg.webp`] },
      {
        stats: [
          { label: 'POTENCIA', value: '241.38', suffix: 'HP' },
          { label: 'PAR', value: '386', suffix: 'N·M' },
          { label: 'MOTOR', value: '2.0 T', suffix: '' },
          { label: 'MODOS DE CONDUCCIÓN', value: '11', suffix: '' }
        ]
      },
      {
        stats: [
          { label: 'ÁNGULO DE APROXIMACIÓN', value: '37°', suffix: '' },
          { label: 'ÁNGULO DE SALIDA', value: '31°', suffix: '' },
          { label: 'ALTURA AL SUELO', value: '220', suffix: 'MM' },
          { label: 'PROFUNDIDAD DE VADEO', value: '750', suffix: 'MM' }
        ]
      }
    ]
  },

  {
    type: 'content',
    heading: 'Estructura Tubular De Alta Resistencia',
    body: 'Estructura de la jaula diseñada con exigencia militar, reduciendo eficazmente las deformaciones por colisión. Proporción de acero de alta resistencia conformado en caliente: 79.8%. Coeficiente de ligereza: 4.34.',
    bg: `${NUXT}/page5_cover.DXzACCtP.webp`,
    pointer: { top: '66%', left: '43%', endTop: '15%', endLeft: '79%' },
    // Esta pantalla NO usa una foto más del turntable (271 fotos): en el sitio real es una
    // foto aparte, mitad carrocería pintada / mitad chasis tubular a la vista, que reemplaza
    // al auto compartido mientras esta pantalla está activa (ver carImage en Bj40ProPage.jsx).
    carImage: `${NUXT}/chejia.BSUQTL0g.webp`,
    // Esta foto no tiene el mismo recorte que las del turntable -ver nota en carImageLayout,
    // Bj40ProPage.jsx.
    carImageLayout: { left: -4, bottom: -4, width: 82 },
    // Frame explícito (igual al de Geo, la pantalla anterior): así el tween de frame de fondo
    // (invisible mientras carImage está activo) NO tiene que recorrer nada acá -si no, al
    // caer al default (21) se comía TODO el salto grande de una sola vez en esta pantalla, y
    // si el usuario scrolleaba rápido (menos de ~620ms en esta pantalla) el salto podía no
    // terminar de resolverse a tiempo y hacerse visible/raro al llegar a una pantalla con auto
    // real. Se reparte en 2 pantallas (ver Chasis) para tener más margen.
    carFrameIndex: 125
  },
  {
    type: 'content',
    heading: 'Chasis Todoterreno De Grado Militar',
    body: 'Diseño de chasis con viga integral de dos vigas longitudinales y ocho transversales, combinando acero de alta resistencia y acero ultra alto. Proporción de acero de hasta el 52% que asegura estabilidad incluso en condiciones extremas de conducción off-road.',
    bg: `${NUXT}/page6_cover.CQYV3Jlp.webp`,
    pointer: { top: '62%', left: '48%', endTop: '15%', endLeft: '79%' },
    // Misma idea que en "Estructura Tubular": el sitio real usa acá otra foto fija (no una más
    // del turntable), rayos-x mostrando el chasis/motor/transmisión -vista 3/4 trasera, no la
    // misma pose que chejia.webp (por eso carImageLayout propio también).
    carImage: `${NUXT}/dipan.Ct1UqJnZ.webp`,
    carImageLayout: { left: -12, bottom: -4, width: 82 },
    // Acá sí se hace el giro invisible completo de 125 (Geo/Estructura) a 21 (el que necesita
    // Tecnología Lumínica, la próxima pantalla real) -queda oculto por dipan.webp, y como es
    // la ÚLTIMA pantalla con foto fija antes de volver a mostrar el auto real, le da el mayor
    // margen posible para terminar el tween antes de que se vuelva visible.
    carFrameIndex: 21
  },
  {
    type: 'content',
    heading: 'Tecnología Lumínica De Alta Intensidad: Visibilidad Total',
    body: 'Parrilla LED de cinco orificios integra un sistema de iluminación envolvente de última generación. Proyecta una potencia lumínica superior para enfrentar terrenos nocturnos con total confianza, mientras que optimiza la refrigeración del motor.',
    bg: `${NUXT}/page7_cover.CvuK3ecd.webp`,
    // Confirmado con captura real de baic.com.ar/baic-bj40pro/ (no /bj40pro/, que muestra
    // otra versión distinta de esta misma pantalla): acá SÍ es el mismo mecanismo de punto+
    // línea en L+segundo punto que Estructura/Chasis, con el auto en pose 3/4 normal (frame
    // por default, sin carImage/carImageLayout especiales) -el primer punto queda sobre el
    // faro/paragolpes delantero.
    pointer: { top: '46%', left: '46%', endTop: '12%', endLeft: '59%', pulseFirstDot: true }
  },
  {
    type: 'content',
    heading: 'Sensación De Libertad Total',
    body: 'La ausencia de marcos superiores te regala una vista lateral más amplia y despejada para dominar cada sendero, combinada con una estructura robusta garantizando seguridad y aventura.',
    bg: `${NUXT}/page8_cover.CynH4R7H.webp`,
    // Corregido con captura real de baic.com.ar/baic-bj40pro/: NO es perfil puro, es una
    // pose 3/4 -pero mirando para el OTRO lado que el frame por default (21): acá el auto
    // está girado de manera que el frente/paragolpes queda a la IZQUIERDA de la pantalla (no
    // a la derecha como en Tecnología Lumínica). El 229 era el espejo exacto del 21 (simétrico
    // respecto del perfil puro en 125: 2*125-21=229); a pedido del usuario se giró un poco más
    // hacia ese mismo costado (238, entre el 3/4 espejado y el perfil puro del otro lado en
    // 250) -se usa un frame real del turntable en vez de espejar con CSS porque mezclar
    // espejado con el tween de frames reales se veía descontrolado (ver nota grande arriba de
    // CAR_LAYOUTS). Además el usuario pidió que el auto "salga" más -más grande y sangrado,
    // en vez del layout default (100% de ancho): con carImageLayout más grande.
    carFrameIndex: 238,
    // Corrido todavía más a la derecha (-2 seguía quedando muy pegado al borde izquierdo a
    // pedido del usuario) -queda de sobra margen hasta la tarjeta.
    carImageLayout: { left: 4, bottom: -6, width: 118 },
    // El primer punto tiene que salir de la MANIJA DE LA PUERTA delantera (no del guardabarros/
    // espejo) -pedido explícito del usuario, misma idea que en Estructura Tubular.
    // El 2do punto tiene que quedar arriba de la FOTO de la tarjeta (no del borde izquierdo) -
    // corregido con marca roja del usuario sobre su captura.
    pointer: { top: '46%', left: '43%', endTop: '17%', endLeft: '78%', pulseFirstDot: true }
  },
  {
    type: 'content',
    heading: 'Puerta Trasera Dividida',
    body: 'La puerta trasera dividida ofrece dos formas de acceder a tu mundo. Este sistema maximiza la funcionalidad en cada situación, demostrando que la verdadera belleza del off-road está en la versatilidad.',
    bg: `${NUXT}/page9_cover.CXQUpRUY.webp`,
    // Confirmado con captura real de baic.com.ar/baic-bj40pro/: acá el auto SÍ muestra la
    // parte de atrás (3/4 trasero, rueda de auxilio en el portón) -no es una pose 3/4
    // delantera como el resto. Buscado a mano probando frames del turntable: 265 es el que
    // muestra esa vista trasera (rueda de auxilio, patente, luces traseras) -sorprendió que
    // exista (con el resto de las pantallas parecía que el giro solo oscilaba entre 3/4
    // delantero y perfil sin pasar nunca por atrás, pero la vuelta completa SÍ llega hasta acá
    // más adelante en el array). Sigue siendo un frame real del turntable, no una foto aparte.
    carFrameIndex: 265,
    // Auto grande y sangrado (recorte parecido al hero) para que se vea como en la referencia.
    // Corrido más a la derecha a pedido del usuario.
    carImageLayout: { left: 2, bottom: -10, width: 122 },
    // Punto+anillo pulsante NARANJA (no blanco) saliendo del logo BAIC en el portón -pedido
    // explícito del usuario-, con el 2do punto arriba de la foto de la tarjeta (mismo
    // mecanismo en L que el resto).
    pointer: { top: '50%', left: '40%', endTop: '17%', endLeft: '78%', pulseFirstDot: true }
  },

  // Corregido de nuevo: son 6 fotos reales (no 3) y salen de /static/bj40/trim/, no de
  // /driving/ -el usuario confirmó las URLs exactas que carga la página original. El formato
  // del carrusel (3-photo peek circular, título arriba, dots abajo) queda igual, sólo cambian
  // las imágenes/textos de vuelta a los 6 de trim/.
  {
    type: 'carousel',
    heading: 'Diseño De Interiores',
    items: [
      { image: `${STATIC}/trim/img1.webp`, title: 'Habitáculo Panorámico, Tecnología y Visión', text: 'Interior diseñado para ofrecer una visibilidad panorámica excepcional, además de un espacio amplio y cómodo.' },
      { image: `${STATIC}/trim/img2.webp`, title: 'Central de Mando Digital: Primera Configuración Quíntuple del Off-Road', text: 'Sistema de cinco pantallas integradas, con una distribución pensada para que cada ocupante tenga el control que necesita. Equipado con el procesador más avanzado de la industria, el SD 8155 garantiza una fluidez absoluta incluso en las condiciones más extremas.' },
      { image: `${STATIC}/trim/img3.webp`, title: 'Techo Panorámico con Mandos Inteligentes', text: 'Techo panorámico ultra amplio con interruptores inteligentes permiten su operación con movimientos precisos e intuitivos, sin apartar la vista del camino.' },
      { image: `${STATIC}/trim/img4.webp`, title: 'Infinity: El Audio que Evoluciona con la Velocidad', text: 'Equipado con un sistema de 12 altavoces de alta eficiencia más un amplificador externo que entrega la potencia necesaria para llenar el amplio habitáculo sin distorsión, marcando la diferencia con una ecualización dinámica por velocidad.' },
      { image: `${STATIC}/trim/img5.webp`, title: 'Asientos con Abatimiento: Baúl con Gran Capacidad', text: 'Con un único botón, los asientos traseros se abaten completamente, transformando el área de carga en un piso perfectamente plano. Versatilidad para ampliar la capacidad de guardado o facilitar un espacio de acampe.' },
      { image: `${STATIC}/trim/img6.webp`, title: 'Central de Energía: Carga Rápida de 50W y 10 Puertos a Bordo', text: 'El cargador inalámbrico integrado de 50W es de los más potentes del mercado, compatible con carga rápida para los últimos modelos de smartphones. Además, 10 puertos de carga distribuidos por el interior.' }
    ]
  },

  // "Experiencia de Conducción": pedido explícito del usuario -tiene que modelarse IGUAL que
  // "Diseño De Interiores" (mismo carrusel circular de 3 fotos con peek, no la grilla que se
  // había armado antes). Por eso ahora usa type:'carousel' (CarouselSlide) en vez de 'grid3'.
  {
    type: 'carousel',
    heading: 'Experiencia De Conducción',
    items: [
      { image: `${STATIC}/driving/img1.webp`, title: 'Volante Multifunción: Tres Modos, Cuatro Movimientos', text: 'Seleccioná entre tres modos de asistencia: Ligero, Estándar y Deportivo. Para que cada conductor encuentre su posición ideal, el volante cuenta con ajuste eléctrico en 4 direcciones (arriba, abajo, adentro, afuera) memorizando tu preferencia.' },
      { image: `${STATIC}/driving/img2.webp`, title: 'Giro Asistido con Radio Reducido', text: 'Al activarlo, el vehículo bloquea electrónicamente la rueda trasera interna, generando un punto de giro sobre sí misma mientras las demás ruedas siguen avanzando. El resultado: un radio de giro reducido que te permite rotar sobre terreno complicado con una facilidad asombrosa.' },
      { image: `${STATIC}/driving/img3.webp`, title: '2.5 T de Capacidad de Remolque', text: 'Incorpora una toma de remolque reforzada y una toma de electricidad dedicada (para luces y freno del trailer). La capacidad máxima de tracción es de 2.5 toneladas (2.500 kg).' }
    ]
  },

  // Tabla final de especificaciones, igual que la última pantalla del original -antes sólo
  // tenía 12 filas de "Parámetros básicos"; el usuario pasó el contenido completo real de la
  // página (4 categorías, ~54 filas: Parámetros básicos / Tecnología y Seguridad / ADAS /
  // Interior + Exterior), así que ahora "rows" pasa a ser "sections" con esas 4 categorías.
  {
    type: 'spectable',
    heading: 'Especificaciones De BJ40 Pro',
    sections: [
      {
        title: 'Parámetros básicos',
        rows: [
          { label: 'Largo x Ancho x Alto (mm)', value: '4790*1940*1895' },
          { label: 'Distancia entre ejes (mm)', value: '2760' },
          { label: 'Distancia mínima al suelo (mm)', value: '≥220' },
          { label: 'Ángulo de entrada/ángulo de salida (°)', value: '≥36° / ≥31°' },
          { label: 'Suspensión delantera / trasera', value: 'Independiente con resorte helicoidal de doble brazo / No independiente de barra múltiple' },
          { label: 'Motor', value: '2.0T' },
          { label: 'Transmisión', value: '8AT (ZF)' },
          { label: 'Potencia máxima', value: '245 CV' },
          { label: 'Par máximo (Nm)', value: '386' },
          { label: 'Tipo de combustible', value: 'Gasolina 92 octanos' },
          { label: 'Tracción', value: '4WD' },
          { label: 'Sistema de frenos', value: 'Disco fijo y ventilado' },
          { label: 'Especificación del neumático', value: '265 / 65 R17' }
        ]
      },
      {
        title: 'Tecnología y Seguridad',
        rows: [
          { label: 'Tipo de dirección', value: 'DP-EPS' },
          { label: 'Modos de conducción', value: '7 opciones' },
          { label: 'Freno de estacionamiento', value: 'EPB' },
          { label: 'Zonas con airbags', value: '6' },
          { label: 'Radar de estacionamiento frontal y trasero', value: '6' },
          { label: 'Imagen panorámica de 360° (HD)', value: '•' },
          { label: 'Inmovilizador del motor', value: '•' },
          { label: 'Sistema de monitoreo de presión de los neumáticos', value: '•' },
          { label: 'ISOFIX', value: '2' },
          { label: 'Asistencia electrónica de frenado (BAS)', value: '•' },
          { label: 'Asistencia de frenado de emergencia (EBA)', value: '•' },
          { label: 'Advertencia de frenado de emergencia', value: '•' },
          { label: 'Sistema de frenado automático', value: '•' },
          { label: 'Control electrónico de estabilidad (ESP)', value: '•' },
          { label: 'Control de tracción (TCS)', value: '•' },
          { label: 'Asistencia electrónica antivuelco (RMI)', value: '•' },
          { label: 'Apertura sin llave / Keyless', value: '•' }
        ]
      },
      {
        title: 'Sistema avanzado de asistencia a la conducción (ADAS)',
        rows: [
          { label: 'Control de crucero adaptativo inteligente', value: '•' },
          { label: 'Asistencia de arranque en pendientes (HAC)', value: '•' },
          { label: 'Control de descenso en pendientes (HDC)', value: '•' },
          { label: 'Alerta de tráfico cruzado', value: '•' },
          { label: 'Advertencia de cambio de carril (LDW)', value: '•' },
          { label: 'Asistente de mantenimiento de carril (LKA)', value: '•' },
          { label: 'Alerta de cambio de carril (LCA)', value: '•' },
          { label: 'Detección de puntos ciegos (BSD)', value: '•' },
          { label: 'Advertencia de apertura de puerta (DOW)', value: '•' },
          { label: 'Asistente de luces altas en carretera (HMA)', value: '•' },
          { label: 'Advertencia de colisión frontal (FCW)', value: '•' },
          { label: 'Advertencia de colisión trasera (RCW)', value: '•' }
        ]
      },
      {
        title: 'Interior + Exterior',
        rows: [
          { label: 'Pantalla Instrumentos LCD de 10,25”', value: '•' },
          { label: 'Pantalla central LCD de 12,8”', value: '•' },
          { label: 'Conexión para smartphones (CARPLAY)', value: '•' },
          { label: 'Volante multifunción de cuero', value: '•' },
          { label: 'Alimentación (12 V)', value: 'Delantero / Baúl' },
          { label: 'Puerto de carga USB', value: 'Tipo A / Tipo C' },
          { label: 'Asiento del conductor con ajuste eléctrico de 8 posiciones', value: '•' },
          { label: 'Asiento del pasajero con ajuste eléctrico de 6 posiciones', value: '•' },
          { label: 'Faros LED regulables y automáticos', value: '•' },
          { label: 'Aire acondicionado automático bizona', value: '•' },
          { label: 'Pre-ventilación A/C', value: '•' },
          { label: 'Salida de A/C para asientos traseros', value: '•' }
        ]
      }
    ]
  }
]

// El hero real NO tiene un logo "BAIC" naranja centrado (eso era en realidad la pantalla de
// loading, un elemento aparte que se muestra antes de entrar). El page1 real muestra el auto
// grande a la izquierda y, a la derecha, una línea de tagline chica arriba de un wordmark
// "BJ40 PRO" enorme.
// El auto del hero usa un ángulo más frontal/dinámico (frame 18) que el de las pantallas de
// contenido (frame 21, más de perfil) -en el sitio real el auto gira un toque entre el hero
// y la siguiente pantalla en vez de quedarse fijo en el mismo ángulo todo el recorrido.
export const bj40ProHero = {
  car: bj40ProReveal.frames[18],
  model: 'BJ40 PRO',
  tagline: 'Elegancia se encuentra con expedición',
  bg: `${STATIC}/bg1.webp`
}
