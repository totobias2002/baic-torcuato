// Contenido real extraído de cada página de modelo en baic.com.ar.
// Las fotos ambientales/de detalle se referencian directo desde el CDN de BAIC
// (no forman parte de los assets locales del proyecto).
import x35 from '../assets/images/models/x35.png'
import x55ii from '../assets/images/models/x55-ii.png'
import x55plus from '../assets/images/models/x55-plus.webp'
import bj304x2 from '../assets/images/models/bj30-4x2.png'
import bj304x4 from '../assets/images/models/bj30-4x4.png'
import bj40plus from '../assets/images/models/bj40-plus.png'
import bj60 from '../assets/images/models/bj60.webp'
import u5plus from '../assets/images/models/u5-plus.png'
import eu5 from '../assets/images/models/eu5.png'

const CDN = '/media/baic/wp-content/uploads'

export const modelDetails = {
  'x35': {
    heroImage: x35,
    hero: {
      title: 'X35',
      tagline: ["La nueva tendencia de SUV's.", 'Experiencia de conducción segura, agradable y de alta calidad.']
    },
    colors: [
      { hex: '#c91c1d', image: `${CDN}/2023/07/roja-1-1024x452.png` },
      { hex: '#ffffff', image: `${CDN}/2023/07/blanca-1-1024x452.png` },
      { hex: '#1b61d0', image: `${CDN}/2023/07/azul-1-1024x452.png` },
      { hex: '#480807', image: `${CDN}/2023/07/marron-1-1024x452.png` }
    ],
    sections: [
      { type: 'text', heading: 'DINÁMICO, ÚNICO Y VANGUARDISTA', hoverReveal: true, body: ['La combinación perfecta de potencia, tecnología y confort, libera tu experiencia de conducción.'], bg: `${CDN}/2024/02/X35-ImagenWeb-5.jpg` },
      { type: 'text', heading: 'FAROS OJOS DE HALCÓN BIÓNICOS', hoverReveal: true, body: ['205 LED de alta calidad y diseño.'], bg: `${CDN}/2024/02/X35-ImagenWeb-2.jpg` },
      { type: 'text', heading: 'EXPERIENCIA DE MANEJO PREMIUM', hoverReveal: true, body: ['La tecnología simplifica el proceso de conducción y te hace sentir más cómodo y seguro.'], bg: `${CDN}/2024/02/X35-ImagenWeb-4.jpg` },
      { type: 'text', heading: 'TECNOLOGÍA, DISEÑO Y UN AMPLIO ESPACIO INTERIOR', hoverReveal: true, body: ['Los viajes familiares se disfrutan al máximo, gracias al amplio espacio interior y a su diseño envolvente. La consola central es fácil de utilizar y en conjunto con su pantalla de 8” garantizan una excelente experiencia audiovisual.'], bg: `${CDN}/2024/02/X35-ImagenWeb-3.jpg` },
      { type: 'stats', heading: 'MOTOR 1.5 TURBO', hoverReveal: true, items: [
        { label: '', value: '150', suffix: 'CV de pura potencia' },
        { label: '', value: '11.2', suffix: 'segundos de 0 a 100 km/h' },
        { label: '', value: '', suffix: 'Caja automática CVT' }
      ], bg: `${CDN}/2024/02/X35-ImagenWeb-6.jpg` },
      { type: 'list', heading: 'SEGURIDAD Y ASISTENCIA A LA CONDUCCIÓN', hoverReveal: true, items: [
        'ABS + EBD (Anti-lock Braking System + Electronic Brake Distribution)',
        'EBA (Electronic Brake Assistant)',
        'ESP (Electronic Stability Program)',
        'TCS (Traction Control System)',
        'HHC (Hill Hold Assist)'
      ], bg: `${CDN}/2024/02/X35-ImagenWeb-7.jpg` }
    ],
    view360: {
      images: Array.from({ length: 36 }, (_, i) => `${CDN}/2024/07/BAIC-X35-360-${i + 1}.png`),
      bgText: 'YOUR           BAIC'
    },
    footnote: '*El modelo de las llantas es de carácter ilustrativo.',
    brochure: { pdf: '/brochures/x35.pdf' }
  },

  'x55-ii': {
    heroImage: x55ii,
    hero: {
      title: 'X55 II',
      tagline: ['La SUV que llegó para cambiarlo todo.', 'Diseño vanguardista, conducción confortable y múltiples sistemas avanzados de asistencia al conductor (ADAS). Configuración inteligente.']
    },
    colors: [
      { hex: '#e8e62a', image: `${CDN}/2023/07/Amarillo-1024x452.png` },
      { hex: '#ff3b30', image: `${CDN}/2023/07/Rojo-1024x452.png` },
      { hex: '#26bfa0', image: `${CDN}/2023/07/Verde-1024x452.png` },
      { hex: '#3a3c3f', image: `${CDN}/2023/07/Gris-Oscuro-1024x452.png` },
      { hex: '#b3b5b8', image: `${CDN}/2023/07/Gris-1024x452.png` },
      { hex: '#eef1f4', image: `${CDN}/2023/07/Blanco-1024x452.png` }
    ],
    sections: [
      { type: 'text', heading: 'DISEÑO FUTURISTA', hoverReveal: true, body: ['Grilla frontal de diseño paramétrico con siluetas de diamantes.'], bg: `${CDN}/2024/02/X55II-ImagenWeb-1.jpg` },
      { type: 'text', heading: 'ÓPTICAS', hoverReveal: true, body: ['Leds de colores para crear una iluminación ambiental estilo halo de estrellas.'], bg: `${CDN}/2024/02/X55II-ImagenWeb-3.jpg` },
      { type: 'text', heading: 'MANIJAS OCULTAS INDUCTIVAS', hoverReveal: true, body: ['Con sistema "pop out" totalmente automático.'], bg: `${CDN}/2024/02/X55II-ImagenWeb-7.jpg` },
      { type: 'text', heading: 'INTERIOR', hoverReveal: true, body: ['Diseño envolvente, iluminación LED, tecnología y acabados premium para vivir una experiencia de lujo.'], bg: `${CDN}/2024/02/X55II-ImagenWeb-5.jpg` },
      { type: 'text', heading: 'TECHO SOLAR PANORÁMICO INTUITIVO', hoverReveal: true, body: ['Cierre automático durante los días de lluvia.'], bg: `${CDN}/2024/02/X55II-ImagenWeb-6.jpg` },
      { type: 'stats', heading: 'MOTOR MAGIC CORE 1.5 TGV', hoverReveal: true, items: [
        { label: '', value: '183', suffix: 'Potencia Máxima: HP' },
        { label: '', value: '305', suffix: 'Máximo par: Nm' },
        { label: '', value: '7.84', suffix: 'Aceleración de 0-100 Km: s' }
      ], bg: `${CDN}/2024/02/X55II-ImagenWeb-8.jpg` },
      { type: 'list', heading: 'MÚLTIPLES SENSORES Y ASISTENCIA A LA CONDUCCIÓN', hoverReveal: true, items: [
        'Control Crucero Adaptativo e Inteligente',
        'Estacionamiento Autónomo',
        'Imagen 3D Panorámica de 360°',
        'Frenado de Emergencia Autónomo',
        'Asistencia autónoma en Embotellamientos'
      ], bg: `${CDN}/2024/02/X55II-ImagenWeb-9-e1707244164921.jpg` },
      { type: 'text', heading: '8 AIRBAGS', hoverReveal: true, body: ['Sistema de seguridad pasiva en todas las direcciones para minimizar lesiones en casos de emergencia.'], bg: `${CDN}/2024/02/X55II-ImagenWeb-11.jpg` }
    ],
    view360: {
      images: Array.from({ length: 36 }, (_, i) => `${CDN}/2024/07/BAIC-X55II-360-${i + 1}.png`),
      bgText: 'YOUR           BAIC'
    },
    footnote: '*El modelo de las llantas es de carácter ilustrativo.',
    brochure: { pdf: '/brochures/x55-ii.pdf' }
  },

  'x55-plus': {
    heroImage: x55plus,
    hero: {
      title: 'X55 PLUS',
      tagline: ['Un SUV pensado para aquellos que buscan la excelencia.']
    },
    colors: [
      { hex: '#d8d9db', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-2-1024x529.png` },
      { hex: '#808285', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-1-1024x529.png` },
      { hex: '#1c1c1e', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-3-1024x529.png` },
      { hex: '#f5f6f8', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-7-1024x529.png` },
      { hex: '#e0483e', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-8-1024x529.png` },
      { hex: '#3f7fd1', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-9-1024x529.png` }
    ],
    gallery: {
      images: [23, 24, 25, 26].map((n) => `${CDN}/2025/01/X55-Plus_BAIC-Argentina-${n}-scaled.jpg`)
    },
    sections: [
      { type: 'stats', logo: `${CDN}/2025/01/Logo-X55Plus-Shadow.png`, counters: true, items: [
        { label: 'POTENCIA', value: '180', suffix: 'HP' },
        { label: 'TORQUE', value: '305', suffix: 'NM' },
        { label: '0 - 100 KM/H', value: '9.87', suffix: 'S' },
        { label: 'MOTOR', value: '1498', suffix: 'CC' },
        { label: 'DISTANCIA ENTRE EJES', value: '2888', suffix: 'MM' }
      ], bg: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-28.jpg` },
      { type: 'photo-grid', layout: 'big-left-2top-1bottom', items: [
        { title: 'Llantas', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-29.jpg`, text: 'Su tamaño de 19 pulgadas está acompañado de un exclusivo diseño que combina líneas delgadas y delicadas, con detalles en color negro brillante, proporcionando gran personalidad.' },
        { title: 'Diseño', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-30.jpg`, text: 'El modelado de este vehículo se adhiere perfectamente al lenguaje que caracteriza a la marca y que es mundialmente conocido como "Capital Beauty".' },
        { title: 'Faros Traseros', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-31.jpg`, text: 'El diseño se enmarca dentro del concepto Digital Matrix, delineando lo que la marca define como "Kylin Wing".' },
        { title: 'Modernas Salidas de Escape', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-32.jpg`, text: 'El diseño de escape cuádruple y bilateral resalta la dinámica y la potencia del X55 Plus.' }
      ] },
      { type: 'text', heading: 'INTERIOR', hoverReveal: true, body: ['La calidad de los materiales y el aprovechamiento al máximo del espacio interior, garantizan que cada centímetro esté optimizado para ofrecer las mejores soluciones de almacenamiento y un inmejorable confort tanto para el conductor como sus acompañantes.'], bg: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-19.jpg` },
      { type: 'photo-grid', layout: 'equal', items: [
        { title: 'Altavoces Flotantes', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-33.jpg`, text: 'Con un diseño futurista, ofrecen una experiencia de sonido que desafía la gravedad.' },
        { title: 'Iluminación Ambiental', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-36.jpg`, text: 'Con 64 colores y funciones de bienvenida, proporciona una experiencia integrada para todos los pasajeros.' },
        { title: 'Salida de Aire Transversal', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-34.jpg`, text: 'Este diseño ofrece una excelente filtración del aire y un sistema de aire acondicionado que brinda diversas opciones de confort.' }
      ] },
      { type: 'photo-grid', layout: 'big-left-2-stack', items: [
        { title: 'Asientos Ergonómicos', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-10.jpg`, text: 'Incluyendo un asiento premium para cada pasajero, ofrecen una experiencia de lujo, adaptándose al cuerpo y reduciendo la fatiga muscular.' },
        { title: 'Panel Texturizado en Negro', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-37.jpg`, text: 'Este elemento distintivo crea una estética moderna y audaz, elevando la sensación general del interior.' },
        { title: 'Experiencia de lujo en la fila trasera', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-35.jpg`, text: 'Sienta la diferencia a medida que el asiento ergonómico se adapta a su cuerpo, reduciendo la fatiga muscular.' }
      ] },
      { type: 'text', heading: 'TECHO SOLAR PANORÁMICO', hoverReveal: true, body: ['Con un tamaño líder en su clase de 1320 x 850 mm, ofrece una experiencia visual inmersiva y cinematográfica.'], bg: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-21.jpg` },
      { type: 'text', heading: 'INTELIGENCIA', hoverReveal: true, body: ['Embárquese en un viaje hacia el futuro con las funciones de conducción inteligente de nuestro vehículo. Disfrute de la libertad que ofrece la conducción inteligente, cuando cada decisión y maniobra se ve mejorada por tecnología de vanguardia.'], bg: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-20.jpg` },
      { type: 'photo-grid', layout: 'big-left-2x2', items: [
        { title: 'Control de Crucero Adaptativo Integrado (IACC)', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-11.jpg`, text: 'Se ajusta de manera inteligente a la velocidad preestablecida y cambia automáticamente de objetivo, permitiendo una conducción más relajada.' },
        { title: 'Advertencia de Salida de Carril (LDW)', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-12.jpg`, text: 'Ayuda a minimizar el riesgo de salidas involuntarias del carril en autopistas y rutas principales mediante alertas visuales y auditivas.' },
        { title: 'Detección de Punto Ciego (BSD)', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-13.jpg`, text: 'Utiliza un radar de ondas milimétricas para detectar puntos ciegos en la parte trasera del vehículo, reduciendo el riesgo de accidentes.' },
        { title: 'Advertencia de Colisión Frontal (FCW)', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-14.jpg`, text: 'Alerta al conductor cuando la distancia con el vehículo delantero es peligrosamente cercana, ayudando a mantener una distancia segura y prevenir accidentes.' },
        { title: 'Frenado Autónomo de Emergencia (AEB)', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-15.jpg`, text: 'Detecta peatones o vehículos al frente, emitiendo alarmas y controlando la seguridad, para minimizar cualquier tipo de accidente.' }
      ] },
      { type: 'photo-grid', layout: 'single', items: [
        { title: 'Asistencia de Arranque en Pendientes (HHC)', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-16.jpg`, text: 'Evita que el vehículo se deslice al arrancar en una pendiente, mejorando la seguridad en la conducción.' }
      ] },
      { type: 'photo-grid', layout: 'equal-2', items: [
        { title: 'Asistente de Luz de Carretera (HMA)', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-17.jpg`, text: 'Enciende o apaga automáticamente las luces altas y bajas para evitar encandilar a otros conductores.' },
        { title: 'Control de Descenso de Pendientes (HDC)', image: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-18.jpg`, text: 'Permite un descenso gradual para promover la seguridad y el confort, controlando automáticamente la velocidad.' }
      ] },
      { type: 'text', heading: 'MOTORIZACIÓN', hoverReveal: true, body: ['Es el resultado de una innovadora combinación de tecnología de vanguardia con ingeniería de excelencia para crear el equilibrio perfecto entre potencia y precisión.'], bg: `${CDN}/2025/01/X55-Plus_BAIC-Argentina-22.jpg` },
      { type: 'grid', wide: true, items: [
        { title: 'Motor 1.5T "Magic Core"', video: '/videos/x55-plus-motor.mp4', text: 'Galardonado con el premio "China Heart" Top Ten Engine en 2021, cuenta con una eficiencia térmica del 39.2%, 21 tecnologías de reducción de ruido y una relación de flujo de más de 350 bar.' },
        { title: 'Turbocompresor VGT', video: '/videos/x55-plus-turbo.mp4', text: 'Mejora en un 43% la respuesta dinámica a baja velocidad. Su diseño ligero y de configuración eficiente brindan un rendimiento excepcional, ofreciendo una experiencia de conducción emocionante.' }
      ] }
    ],
    view360: {
      mobileTop: 47,
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]
        .map((n) => {
          const ext = (n >= 1 && n <= 3) || (n >= 17 && n <= 21) || (n >= 35 && n <= 37) ? 'webp' : 'png'
          return `/media/baic/wp-content/uploads/2025/01/X55-Plus_BAIC-Argentina-360-${n}.${ext}`
        }),
      bgText: 'YOUR           BAIC'
    },
    footnote: '*El modelo de las llantas es de carácter ilustrativo.',
    brochure: { pdf: '/brochures/x55-plus.pdf' }
  },

  'bj30-4x2': {
    heroImage: bj304x2,
    hero: {
      title: 'BJ30 4x2',
      tagline: ['Un SUV híbrido, calidad premium y seguridad.']
    },
    colors: [
      { hex: '#8ca890', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-29-1024x497.png` },
      { hex: '#f4f5f7', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-28-1024x497.png` },
      { hex: '#8fb4c9', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-26-1024x497.png` },
      { hex: '#26282a', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-30-1024x497.png` },
      { hex: '#b0b3b6', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-27-1024x497.png` },
      { hex: '#4b4e52', image: `${CDN}/2025/04/BJ30-Color-GrisOscuro-1024x497.png` },
      { hex: '#151517', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-31-1024x497.png` }
    ],
    video: {
      src: '/videos/bj30-4x2-hibrida.mp4',
      poster: `${CDN}/2025/01/BJ30_BAIC-Argentina-Centro_De_Descargas-5.jpg`
    },
    gallery: {
      images: [22, 23, 26].map((n) => `${CDN}/2025/05/BIAC-BJ30-${n}.jpg`)
    },
    sections: [
      { type: 'stats', counters: true, items: [
        { label: 'POTENCIA', value: '330', suffix: 'PH' },
        { label: 'TRACCIÓN', value: '4', suffix: 'x 2' },
        { label: 'TRANSMISIÓN', value: '2', suffix: 'DHT' },
        { label: 'AUTONOMÍA', value: '1000', suffix: 'KM' }
      ], bg: `${CDN}/2025/01/BJ30_BAIC-Argentina-16.jpg` },
      { type: 'text', heading: 'ILUMINACIÓN DELANTERA', hoverReveal: true, body: ['Presenta una parrilla frontal con cinco faros incorporados.'], bg: `${CDN}/2025/05/BJ30_BAIC-Argentina-37.jpg` },
      { type: 'photo-grid', layout: 'equal-2', items: [
        { title: 'Diseño Frontal Familiar', image: `${CDN}/2025/05/BJ30-1-1.jpg`, text: 'Combina un diseño robusto con tecnología avanzada para ofrecer una experiencia de conducción versátil y eficiente.' },
        { title: 'Diseño Trasero Elegante', image: `${CDN}/2025/05/BJ30-7-1.jpg`, text: 'La luz trasera vertical cuenta con un patrón en doble-D, lo que la hace aún más reconocible.' }
      ] },
      { type: 'text', heading: 'SELECTOR DE MARCHAS ELECTRÓNICO', hoverReveal: true, body: ['Adopta un diseño inspirado en un propulsor aeroespacial, haciéndolo más avanzado tecnológicamente.'], bg: `${CDN}/2025/01/BJ30_BAIC-Argentina-22-V2.jpg` },
      { type: 'photo-grid', layout: 'equal-2', items: [
        { title: 'Panel de Instrumentos Integrados', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-Centro_De_Descargas-6.jpg`, text: 'Combinación de doble pantalla de 10.25 pulgadas + 14.6 pulgadas.' },
        { title: 'Espacio de Combinación Flexible', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-Centro_De_Descargas-8.jpg`, text: 'Los asientos delanteros y traseros se pueden reclinar libremente, adaptándose a cualquier necesidad, creando un espacio versátil.' }
      ] },
      { type: 'text', heading: 'TECHO SOLAR PANORÁMICO', hoverReveal: true, body: ['Eléctrico con protección UV y apertura ajustable, integrado en la carrocería para reducir el ruido aerodinámico.'], bg: `${CDN}/2025/05/BJ30_BAIC-Argentina-36.jpg` },
      { type: 'text', heading: 'ROBUSTA ESTRUCTURA DE SEGURIDAD', hoverReveal: true, body: ['La optimización del chasis y la aplicación de tecnologías de seguridad, garantizan que la carrocería permanezca sin distorsiones y libre de deformaciones. La estructura frontal de absorción de energía en tres etapas asegura que el compartimento de pasajeros se mantenga firme y confiable.'], bg: `${CDN}/2025/01/BJ30_BAIC-Argentina-23.jpg` },
      { type: 'stats', counters: true, items: [
        { label: 'ACERO DE ALTA RESISTENCIA', value: '63.4', suffix: '%' },
        { label: 'MÁXIMA RIGIDEZ DE TORSIÓN', value: '25420', suffix: 'NM' },
        { label: 'ACERO FORMADO TÉRMICAMENTE', value: '20', suffix: 'POSICIONES' }
      ], bg: `${CDN}/2025/01/BJ30_BAIC-Argentina-20.jpg` },
      { type: 'text', heading: 'CÁMARA CON VISIÓN 360°', hoverReveal: true, body: ['Diseñada para eliminar puntos ciegos y facilitar maniobras en cualquier entorno.'], bg: `${CDN}/2025/05/BJ30_BAIC-Argentina-35.jpg` }
    ],
    view360: {
      mobileTop: 56,
      images: Array.from({ length: 36 }, (_, i) => `${CDN}/2025/01/BJ30_BAIC-Argentina_360-${i + 1}.webp`),
      bgText: 'YOUR           BAIC'
    },
    brochure: { pdf: '/brochures/bj30-4x2.pdf' }
  },

  'bj30-4x4': {
    heroImage: bj304x4,
    hero: {
      title: 'BJ30 4x4',
      tagline: ['Un todoterreno moderno, híbrido y muy confortable.']
    },
    colors: [
      { hex: '#8ca890', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-29-1024x497.png` },
      { hex: '#f4f5f7', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-28-1024x497.png` },
      { hex: '#8fb4c9', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-26-1024x497.png` },
      { hex: '#26282a', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-30-1024x497.png` },
      { hex: '#b0b3b6', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-27-1024x497.png` },
      { hex: '#4b4e52', image: `${CDN}/2025/04/BJ30-Color-GrisOscuro-1024x497.png` },
      { hex: '#151517', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-31-1024x497.png` }
    ],
    video: {
      src: '/videos/bj30-4x4-hibrida.mp4',
      poster: `${CDN}/2025/01/BJ30_BAIC-Argentina-Centro_De_Descargas-5.jpg`
    },
    gallery: {
      images: [
        `${CDN}/2025/01/BJ30_BAIC-Argentina-1.jpg`,
        `${CDN}/2025/01/BJ30_BAIC-Argentina-2.jpg`,
        `${CDN}/2025/01/BJ30_BAIC-Argentina-3.jpg`,
        `${CDN}/2025/01/BJ30_BAIC-Argentina-Centro_De_Descargas-14.jpg`
      ]
    },
    sections: [
      { type: 'stats', counters: true, items: [
        { label: 'POTENCIA', value: '404', suffix: 'HP' },
        { label: 'TRACCIÓN', value: '4x4', suffix: '' },
        { label: 'TRANSMISIÓN', value: 'Doble DHT', suffix: '' },
        { label: '0 - 100 KM/H', value: '6.9', suffix: 'S' }
      ], bg: `${CDN}/2025/01/BJ30_BAIC-Argentina-16.jpg` },
      { type: 'text', heading: 'ILUMINACIÓN DELANTERA', hoverReveal: true, body: ['Presenta una parrilla frontal con cinco faros integrados.'], bg: `${CDN}/2025/01/BJ30_BAIC-Argentina-Centro_De_Descargas-9.jpg` },
      { type: 'photo-grid', layout: 'equal-2', items: [
        { title: 'Diseño Frontal Familiar', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-9.jpg`, text: 'Combina un diseño robusto con tecnología avanzada para ofrecer una experiencia de conducción versátil y eficiente.' },
        { title: 'Diseño Trasero Elegante', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-19.jpg`, text: 'La luz trasera vertical cuenta con un patrón en doble-D, lo que la hace aún más reconocible.' }
      ] },
      { type: 'text', heading: 'SELECTOR DE MARCHAS ELECTRÓNICO', hoverReveal: true, body: ['Adopta un diseño inspirado en un propulsor aeroespacial, haciéndolo más avanzado tecnológicamente.'], bg: `${CDN}/2025/01/BJ30_BAIC-Argentina-22-V2.jpg` },
      { type: 'photo-grid', layout: 'equal-2', items: [
        { title: 'Panel de Instrumentos Integrados', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-Centro_De_Descargas-6.jpg`, text: 'Combinación de doble pantalla de 10.25 pulgadas + 14.6 pulgadas.' },
        { title: 'Espacio de Combinación Flexible', image: `${CDN}/2025/01/BJ30_BAIC-Argentina-Centro_De_Descargas-8.jpg`, text: 'Los asientos delanteros y traseros se pueden reclinar libremente, adaptándose a cualquier necesidad, creando un espacio versátil.' }
      ] },
      { type: 'text', heading: 'EXCELENTE RENDIMIENTO TODOTERRENO', hoverReveal: true, body: ['El chasis sólido le otorga al vehículo una excelente capacidad todoterreno.', 'Ha pasado rigurosas pruebas y verificaciones, garantizando un rendimiento confiable en condiciones extremas.'], bg: `${CDN}/2025/01/BJ30_BAIC-Argentina-15.jpg` },
      { type: 'text', heading: 'ROBUSTA ESTRUCTURA DE SEGURIDAD', hoverReveal: true, body: ['La optimización del chasis y la aplicación de tecnologías de seguridad, garantizan que la carrocería permanezca sin distorsiones y libre de deformaciones. La estructura frontal de absorción de energía en tres etapas asegura que el compartimento de pasajeros se mantenga firme y confiable.'], bg: `${CDN}/2025/01/BJ30_BAIC-Argentina-23.jpg` },
      { type: 'stats', counters: true, items: [
        { label: 'ACERO DE ALTA RESISTENCIA', value: '63.4', suffix: '%' },
        { label: 'MÁXIMA RIGIDEZ DE TORSIÓN', value: '25420', suffix: 'NM' },
        { label: 'ACERO FORMADO TÉRMICAMENTE', value: '20', suffix: 'POSICIONES' }
      ], bg: `${CDN}/2025/01/BJ30_BAIC-Argentina-20.jpg` },
      { type: 'text', heading: 'SISTEMA DE CONTROL TODOTERRENO (ATS)', hoverReveal: true, body: ['Puede optimizar automáticamente los diversos sistemas de control del vehículo, permitiendo que se adapte a diferentes tipos de terrenos.'], bg: `${CDN}/2025/01/BJ30_BAIC-Argentina-7.jpg` }
    ],
    view360: {
      mobileTop: 56,
      images: Array.from({ length: 36 }, (_, i) => `${CDN}/2025/01/BJ30_BAIC-Argentina_360-${i + 1}.webp`),
      bgText: 'YOUR           BAIC'
    },
    brochure: { pdf: '/brochures/bj30-4x4.pdf' }
  },

  'bj40-pro': {
    heroImage: '/media/baic/bj40pro/static/bj40/bg1.webp',
    hero: {
      title: 'BJ40 PRO',
      tagline: ['Elegancia se encuentra con expedición.']
    },
    sections: [
      { type: 'stats', counters: true, items: [
        { label: 'POTENCIA', value: '241.38', suffix: 'HP' },
        { label: 'PAR', value: '386', suffix: 'N·M' },
        { label: 'MOTOR', value: '2.0 T', suffix: '' },
        { label: 'MODOS DE CONDUCCIÓN', value: '11', suffix: '' }
      ], bg: '/media/baic/bj40pro/_nuxt/esargument-img.BbaYZZVg.webp' },
      { type: 'text', heading: 'SISTEMA DE 4WD A TIEMPO PARCIAL', hoverReveal: true, body: ['Equipado con un sistema de tracción integral inteligente, soporta el cambio de cuatro modos de 2H, 4H, 4L, 4A mediante un selector electrónico, adaptándose a las diferentes necesidades de conducción.'], bg: '/media/baic/bj40pro/_nuxt/page2_cover.Cs_lHSfs.webp' },
      { type: 'text', heading: 'SISTEMA DE ATS', hoverReveal: true, body: ['El sistema de control todo terreno de ATS soporta hasta 11 modos de conducción. Mediante un cambio inteligente, el sistema ofrece la mejor distribución de potencia al vehículo.'], bg: '/media/baic/bj40pro/_nuxt/page3_cover.EcHOjjTm.webp' },
      { type: 'photo-grid', layout: 'equal', items: [
        { title: 'Rocoso', image: '/media/baic/bj40pro/static/bj40/ats/yanshi_orange.webp' },
        { title: 'Nevado', image: '/media/baic/bj40pro/static/bj40/ats/xuehua_orange.webp' },
        { title: 'Desierto', image: '/media/baic/bj40pro/static/bj40/ats/shamo_orange.webp' }
      ] },
      { type: 'stats', counters: true, items: [
        { label: 'ÁNGULO DE APROXIMACIÓN', value: '37', suffix: '°' },
        { label: 'ÁNGULO DE SALIDA', value: '31', suffix: '°' },
        { label: 'ALTURA AL SUELO', value: '220', suffix: 'MM' },
        { label: 'PROFUNDIDAD DE VADEO', value: '750', suffix: 'MM' }
      ], bg: '/media/baic/bj40pro/_nuxt/esargument-img.BbaYZZVg.webp' },
      { type: 'text', heading: 'ESTRUCTURA TUBULAR DE ALTA RESISTENCIA', hoverReveal: true, body: ['Estructura de la jaula diseñada con exigencia militar, reduciendo eficazmente las deformaciones por colisión. Proporción de acero de alta resistencia conformado en caliente: 79.8%. Coeficiente de ligereza: 4.34.'], bg: '/media/baic/bj40pro/_nuxt/page5_cover.DXzACCtP.webp' },
      { type: 'text', heading: 'CHASIS TODOTERRENO DE GRADO MILITAR', hoverReveal: true, body: ['Diseño de chasis con viga integral de dos vigas longitudinales y ocho transversales, combinando acero de alta resistencia y acero ultra alto. Proporción de acero de hasta el 52% que asegura estabilidad incluso en condiciones extremas de conducción off-road.'], bg: '/media/baic/bj40pro/_nuxt/page6_cover.CQYV3Jlp.webp' },
      { type: 'text', heading: 'TECNOLOGÍA LUMÍNICA DE ALTA INTENSIDAD: VISIBILIDAD TOTAL', hoverReveal: true, body: ['Parrilla LED de cinco orificios integra un sistema de iluminación envolvente de última generación. Proyecta una potencia lumínica superior para enfrentar terrenos nocturnos con total confianza, mientras que optimiza la refrigeración del motor.'], bg: '/media/baic/bj40pro/_nuxt/page7_cover.CvuK3ecd.webp' },
      { type: 'text', heading: 'SENSACIÓN DE LIBERTAD TOTAL', hoverReveal: true, body: ['La ausencia de marcos superiores te regala una vista lateral más amplia y despejada para dominar cada sendero, combinada con una estructura robusta garantizando seguridad y aventura.'], bg: '/media/baic/bj40pro/_nuxt/page8_cover.CynH4R7H.webp' },
      { type: 'text', heading: 'PUERTA TRASERA DIVIDIDA', hoverReveal: true, body: ['La puerta trasera dividida ofrece dos formas de acceder a tu mundo. Este sistema maximiza la funcionalidad en cada situación, demostrando que la verdadera belleza del off-road está en la versatilidad.'], bg: '/media/baic/bj40pro/_nuxt/page9_cover.CXQUpRUY.webp' },
      { type: 'grid', heading: 'DISEÑO DE INTERIORES', items: [
        { title: 'Habitáculo Panorámico, Tecnología y Visión', image: '/media/baic/bj40pro/static/bj40/trim/img1.webp', text: 'Interior diseñado para ofrecer una visibilidad panorámica excepcional, además de un espacio amplio y cómodo.' },
        { title: 'Central de Mando Digital: Primera Configuración Quíntuple del Off-Road', image: '/media/baic/bj40pro/static/bj40/trim/img2.webp', text: 'Sistema de cinco pantallas integradas, con una distribución pensada para que cada ocupante tenga el control que necesita. Equipado con el procesador más avanzado de la industria, el SD 8155 garantiza una fluidez absoluta incluso en las condiciones más extremas.' },
        { title: 'Techo Panorámico con Mandos Inteligentes', image: '/media/baic/bj40pro/static/bj40/trim/img3.webp', text: 'Techo panorámico ultra amplio con interruptores inteligentes permiten su operación con movimientos precisos e intuitivos, sin apartar la vista del camino.' },
        { title: 'Infinity: El Audio que Evoluciona con la Velocidad', image: '/media/baic/bj40pro/static/bj40/trim/img4.webp', text: 'Equipado con un sistema de 12 altavoces de alta eficiencia más un amplificador externo que entrega la potencia necesaria para llenar el amplio habitáculo sin distorsión, marcando la diferencia con una ecualización dinámica por velocidad.' },
        { title: 'Asientos con Abatimiento: Baúl con Gran Capacidad', image: '/media/baic/bj40pro/static/bj40/trim/img5.webp', text: 'Con un único botón, los asientos traseros se abaten completamente, transformando el área de carga en un piso perfectamente plano. Versatilidad para ampliar la capacidad de guardado o facilitar un espacio de acampe.' },
        { title: 'Central de Energía: Carga Rápida de 50W y 10 Puertos a Bordo', image: '/media/baic/bj40pro/static/bj40/trim/img6.webp', text: 'El cargador inalámbrico integrado de 50W es de los más potentes del mercado, compatible con carga rápida para los últimos modelos de smartphones. Además, 10 puertos de carga distribuidos por el interior.' }
      ] },
      { type: 'grid', heading: 'EXPERIENCIA DE CONDUCCIÓN', items: [
        { title: 'Volante Multifunción: Tres Modos, Cuatro Movimientos', image: '/media/baic/bj40pro/static/bj40/driving/img1.webp', text: 'Seleccioná entre tres modos de asistencia: Ligero, Estándar y Deportivo. Para que cada conductor encuentre su posición ideal, el volante cuenta con ajuste eléctrico en 4 direcciones (arriba, abajo, adentro, afuera) memorizando tu preferencia.' },
        { title: 'Giro Asistido con Radio Reducido', image: '/media/baic/bj40pro/static/bj40/driving/img2.webp', text: 'Al activarlo, el vehículo bloquea electrónicamente la rueda trasera interna, generando un punto de giro sobre sí misma mientras las demás ruedas siguen avanzando. El resultado: un radio de giro reducido que te permite rotar sobre terreno complicado con una facilidad asombrosa.' },
        { title: '2.5 T de Capacidad de Remolque', image: '/media/baic/bj40pro/static/bj40/driving/img3.webp', text: 'Incorpora una toma de remolque reforzada y una toma de electricidad dedicada (para luces y freno del trailer). La capacidad máxima de tracción es de 2.5 toneladas (2.500 kg).' }
      ] }
    ],
    view360: {
      images: Array.from({ length: 43 }, (_, i) => `/media/baic/bj40pro/static/bj40/frame/${String(i).padStart(4, '0')}.webp`),
      bgText: 'YOUR           BAIC'
    }
  },

  'bj40-plus': {
    heroImage: bj40plus,
    colors: [
      { hex: '#404544', image: '/media/baic/wp-content/uploads/2023/10/BJ40Plus.png' },
      { hex: '#000000', image: '/media/baic/wp-content/uploads/2023/11/Bj40-negra.png' }
    ],
    hero: {
      title: 'BJ40 PLUS',
      tagline: ['Tanto en la ciudad como en la naturaleza extrema, un Todoterreno que personaliza todas tus exigencias.'],
      note: 'Motor nafta 2.0T, 221 caballos de fuerza, alta capacidad de carga y excelente rendimiento.'
    },
    sections: [
      { type: 'text', heading: 'SILUETA ROBUSTA CON ESTILO URBANO', hoverReveal: true, body: ['Diseñado para ser completamente funcional.', 'No hay caminos que no puedas explorar con BAIC.'], bg: `${CDN}/2023/11/BJ40-1.jpg` },
      { type: 'text', heading: 'PERFORMANCE', body: [
        'El nuevo BJ40 PLUS cuenta con un motor de 2.0L Turbo, 221 caballos de fuerza y un torque de 380 (Nm/rpm) de rápida aceleración, baja velocidad de rotación, ahorro de energía y excelente rendimiento.'
      ], iconList: [
        { icon: `${CDN}/2024/01/Icono-5-BJ40-BaicAR-Ene24.png`, text: 'Ángulo de entrada 37°' },
        { icon: `${CDN}/2024/01/Icono-6-BJ40-BaicAR-Ene24.png`, text: 'Ángulo de salida 31°' },
        { icon: `${CDN}/2024/01/Icono-4-BJ40-BaicAR-Ene24.png`, text: 'Ángulo ventral 23°' },
        { icon: `${CDN}/2024/01/Icono-3-BJ40-BaicAR-Ene24.png`, text: 'Profundidad máxima de vadeo >600 mm' },
        { icon: `${CDN}/2024/01/Icono-2-BJ40-BaicAR-Ene24.png`, text: 'Anchura máxima de cruce de zanjas >500 mm' },
        { icon: `${CDN}/2024/01/Icono-1-BJ40-BaicAR-Ene24.png`, text: 'Altura de cruce de barricada 350 mm' }
      ], bodyAfter: [
        'VEHÍCULO MILITAR · Más de 1.000.000 km de Road Tests con los más altos estándares de calidad y tecnología militar.'
      ], bg: `${CDN}/2024/01/BJ40-3-BaicAR-Ene24-e1704769600997.jpg` },
      { type: 'text', heading: 'DISEÑO · ANILLOS LUMINOSOS', hoverReveal: true, body: ['Potentes luces con 200 LED para explorar con total visibilidad los terrenos más salvajes y en condiciones meteorológicas adversas. Faros traseros full led con efecto "túnel".'], bg: `${CDN}/2023/11/BJ40-3.jpg` },
      { type: 'list', heading: 'EXPLORÁ UN NUEVO MUNDO OUTDOOR', items: [
        'Jaula antivuelco de alta resistencia de diseño reticular, garantizando al máximo la seguridad de los pasajeros.',
        'Chasis unido de forma flexible a la carrocería, lo que permite absorber mejor la energía y los impactos.',
        'Ganchos de remolque delanteros y traseros, pintados de rojo, otorgando gran personalidad y gran resistencia.',
        'Suspensión delantera y trasera optimizada para off road.',
        'Techo desmontable en 3 piezas.'
      ], cornerGraphic: `${CDN}/2024/01/RemovableRoof-BJ40-BaicAR-Ene24.png`, bg: `${CDN}/2024/01/BJ40-4-B-BaicAR-Ene24.jpg` },
      { type: 'grid', heading: 'CONFIGURACIÓN INTELIGENTE', rows: true, wide: true, items: [
        { title: 'Motor 2.0T – 221CV – 380Nm', image: `${CDN}/2024/01/BJ40-11-BaicAR-Ene24.jpg`, text: 'Inyección directa, variador árbol de levas y escape integral ofreciendo torque, potencia, bajo consumo y bajas emisiones.' },
        { title: 'Sistema de Tracción 2WD o 4WD', image: `${CDN}/2024/01/BJ40-8-BaicAR-Ene24.jpg`, text: 'Modos de conducción: Snow, Sport, Comfort y Economy. Gracias a los 4 modos de conducción, podrá enfrentarse fácilmente a una gran variedad de condiciones meteorológicas y terrenos.' },
        { title: 'Caja de Cambios 8AT (marca ZF)', image: `${CDN}/2024/01/BJ40-9-BaicAR-Ene24.jpg`, text: 'Ahorro de energía de alta eficiencia. Con un cambio suave y un rendimiento fiable, puede explorar todos los terrenos off road y on-road con estilo y comodidad.' },
        { title: 'Neumáticos Anchos 265/R17', image: `${CDN}/2024/01/BJ40-10-BaicAR-Ene24.jpg`, text: 'De alta resistencia, fuerte absorción de impactos y alta capacidad de carga que mejoran la tracción de manera efectiva.' }
      ], bg: `${CDN}/2024/01/BJ40-6-BaicAR-Ene24.jpg` },
      { type: 'photo-grid', layout: 'equal', cards: true,
        heading: 'BJ40, DISEÑADO PARA SER COMPLETAMENTE FUNCIONAL. PARA QUE SIEMPRE DISFRUTES DEL RECORRIDO.',
        headingAccent: 'BJ40',
        bg: `${CDN}/2024/01/BJ40-PLUS-INTERIOR-1.jpg`,
        items: [
        { title: 'Pantalla Central Touch de 10”', image: `${CDN}/2024/01/BJ40-13-BaicAR-Ene24.jpg`, text: 'Mirror Link, Bluetooth y puerto USB para reproducción de video. Comando de voz. Imagen de marcha atrás en alta definición (HD).' },
        { title: 'Tablero LCD de 12.3”', image: `${CDN}/2024/01/BJ40-14-BaicAR-Ene24.jpg`, text: 'Con Survival y Off Road System. Muestra información de navegación como ángulo de inclinación, dirección, presión de neumáticos, altitud y presión atmosférica. Para dar rienda suelta a tus aventuras.' },
        { title: 'Panel de Control Multimedia', image: `${CDN}/2024/01/BJ40-15-BaicAR-Ene24.jpg`, text: 'Estilo moderno y suave al tacto. Comandos de calefacción de asientos. Freno de mano eléctrico y modo AutoHold. Todas las funciones al alcance de tu mano.' }
      ] },
      { type: 'text', heading: 'INTERIOR', hoverReveal: true, body: ['Cabina de amplias dimensiones diseñada con asientos electrónicos y calefaccionados, volante de cuero multifunción calefaccionado, iluminación LED multicolor aportando vitalidad y espíritu deportivo al ambiente. Espejo retrovisor con cámara de transmisión multimedia para maximizar el ángulo de visón trasera. Sistema inteligente de control de temperatura.'], bg: `${CDN}/2024/01/BJ40-PLUS-INTERIOR-1.jpg` },
      { type: 'text', heading: 'Conectá con tu estilo', hoverReveal: true, staticReveal: true, captionTop: true, titlePlain: true, body: ['Off Road.'], logo: `${CDN}/2024/01/Logo-BJ40-BaicAR-Ene24-2.png`, bg: `${CDN}/2024/01/BJ40-2-BaicAR-Ene24.jpg` },
      { type: 'text', heading: 'NUEVAS DIMENSIONES', hoverReveal: true, body: ['Nuevas dimensiones del BJ40 Plus con una mayor distancia entre ejes garantizando una experiencia de conducción más estable y cómoda.', 'Para recorrer todo tipo de terrenos sin restricciones.'], bg: `${CDN}/2024/01/BJ40-PLUS-EXTERIOR.jpg` }
    ],
    view360: {
      mobileTop: 26,
      images: Array.from({ length: 36 }, (_, i) => `${CDN}/2024/07/BAIC-BJ40PLUS-360-${i + 1}.png`),
      bgText: 'YOUR           BAIC'
    },
    footnote: '*El modelo de las llantas es de carácter ilustrativo.',
    brochure: { pdf: '/brochures/bj40-plus.pdf' }
  },

  'bj60': {
    heroImage: bj60,
    hero: {
      title: 'BJ60',
      tagline: ['Un todoterreno híbrido', 'del más alto nivel.']
    },
    colors: [
      { hex: '#ffffff', image: `${CDN}/2025/01/BJ60_BAIC-Argentina-30-1024x497.png` },
      { hex: '#000000', image: `${CDN}/2025/01/BJ60_BAIC-Argentina-27-1024x497.png` }
    ],
    video: {
      src: '/videos/bj60-hibrida.mp4',
      poster: `${CDN}/2025/01/BJ60_BAIC-Argentina-24.jpg`
    },
    gallery: {
      images: [
        `${CDN}/2025/01/BJ60_BAIC-Argentina-19.jpg`,
        `${CDN}/2025/01/BJ60_BAIC-Argentina-21.jpg`,
        `${CDN}/2025/01/BJ60_BAIC-Argentina-22.jpg`,
        `${CDN}/2025/01/BJ60_BAIC-Argentina-23.jpg`
      ]
    },
    sections: [
      { type: 'stats', counters: true, items: [
        { label: 'POTENCIA', value: '263', suffix: 'HP' },
        { label: 'TORQUE', value: '406', suffix: 'NM' },
        { label: 'MOTOR', value: '2000', suffix: 'CC' },
        { label: 'MILD HYBRID', value: '48', suffix: 'V' },
        { label: 'DISTANCIA ENTRE EJES', value: '2820', suffix: 'MM' }
      ], bg: `${CDN}/2025/01/BJ60_BAIC-Argentina-25.jpg` },
      { type: 'photo-grid', layout: 'big-left-2top-1bottom', items: [
        { title: 'Llantas', text: 'Su tamaño de 20 pulgadas y su diseño moderno, logran que este todoterreno se destaque en cualquier situación.', image: `${CDN}/2025/01/BJ60_BAIC-Argentina-3.jpg` },
        { title: 'Luces Traseras LED', text: 'Presentan un patrón abstracto que mejora la visibilidad y aporta un toque distintivo al diseño.', image: `${CDN}/2025/01/BJ60_BAIC-Argentina-4.jpg` },
        { title: 'Luz de Freno', text: 'Inspirada en los baluartes de flechas de la Gran Muralla, simboliza fuerza y protección.', image: `${CDN}/2025/01/BJ60_BAIC-Argentina-5_V2.jpg` },
        { title: 'Parrilla Frontal Iluminada', text: 'En este modelo se incorpora una iluminación especial, heredando elementos característicos de la familia de los vehículos todoterreno de BAIC.', image: `${CDN}/2025/01/BJ60_BAIC-Argentina-6.jpg` }
      ] },
      { type: 'text', heading: 'INTERIOR', textBottom: true, body: ['El sistema de sonido premium Infinity, en combinación con los asientos de primera clase, lujosos y cómodos, proporcionan una experiencia de confort inigualable.'], bg: `${CDN}/2025/01/BJ60_BAIC-Argentina-16.jpg` },
      { type: 'photo-grid', layout: '2stack-big-left', items: [
        { title: 'Interfaz de Cuatro Pantallas', text: 'Incorpora un sistema de visualización frontal W-HUD, ideal para escenarios todoterreno, con una distancia de proyección de hasta 2.2 metros.', image: `${CDN}/2025/01/BJ60_BAIC-Argentina-7.jpg` },
        { title: 'Amplio Espacio · 7 asientos', text: 'Este modelo cuenta con una tercera fila de asientos, de muy fácil acceso, para adaptarse a diversas necesidades.', image: `${CDN}/2025/01/BJ60_BAIC-Argentina-8.jpg` },
        { title: 'Techo Solar Panorámico', text: 'Incluye de serie un techo panorámico transparente de 0.82 m², ofreciendo una agradable sensación de amplitud y conexión con el exterior.', image: `${CDN}/2025/01/BJ60_BAIC-Argentina-9.jpg` }
      ] },
      { type: 'text', heading: 'PERFORMANCE', hoverReveal: true, fullPhoto: true, body: ['El BJ60 es un todoterreno que combina un diseño robusto con tecnología de última generación para ofrecer una experiencia de conducción superior.'], bg: `${CDN}/2025/01/BJ60_BAIC-Argentina-17-scaled.jpg` },
      // Chequeado contra baic.com.ar/baic-bj60/ real: estas 3 tarjetas tienen foto +
      // texto real propios (no es una única foto con texto horneado como se había
      // armado antes) - se reconstruyen con su contenido real.
      { type: 'list', heading: 'TRACCIÓN 4WD', hoverReveal: true, fullPhoto: true, items: [
        'Tracción 4WD Parcial: permite una transición suave entre 2H, 4H y 4L, adaptándose a diversas condiciones de conducción.',
        'Tres Bloqueos de Diferencial: cuando una rueda motriz pierde tracción, pueden transferir el torque del motor a la rueda opuesta, ayudando al vehículo a salir de situaciones difíciles.',
        'Sistema de Control de Arrastre: desarrollado específicamente para conducir en terrenos desafiantes, con un rango de velocidad controlable de 1 a 12 km/h.'
      ], bg: `${CDN}/2025/01/BJ60_BAIC-Argentina-24.jpg` },
      { type: 'list', heading: 'CONTROL INTELIGENTE', hoverReveal: true, fullPhoto: true, items: [
        'Sistema Global de Control Inteligente: ofrece 9 modos de conducción y 17 combinaciones de manejo, optimizando el rendimiento del vehículo de acuerdo al terreno que esté transitando.',
        'Neumáticos: 275/50 R20-HT.'
      ], bg: `${CDN}/2025/01/BJ60_BAIC-Argentina-11.jpg` },
      // "Tecnología" (360°/chasis transparente/vista aérea/estacionamiento autónomo)
      // y "ADAS" también tienen texto real en el sitio (antes se habían dejado como
      // foto sola horneada). Se reconstruyen como listas con foto de fondo. Las fotos
      // originales de estas dos eran verticales de 597x785 (se veían borrosas a pantalla
      // completa), así que van sobre fotos grandes del mismo modelo.
      { type: 'list', heading: 'TECNOLOGÍA', hoverReveal: true, fullPhoto: true, items: [
        'Imágenes Panorámicas 360°: cámaras de alta definición que utilizan tecnología avanzada para proporcionar una vista completa alrededor del vehículo.',
        'Chasis Transparente 180°: muestra información precisa de los puntos ciegos debajo del chasis, reduciendo los riesgos durante la conducción.',
        'Vista Aérea: ofrece una visión del entorno, brindando una experiencia de conducción más segura.',
        'Estacionamiento Autónomo: con un solo clic, el vehículo puede estacionarse automáticamente, facilitando las maniobras en espacios reducidos.'
      ], bg: `${CDN}/2025/01/BJ60_BAIC-Argentina-23.jpg` },
      { type: 'list', heading: 'SISTEMAS AVANZADOS DE ASISTENCIA A LA CONDUCCIÓN', hoverReveal: true, fullPhoto: true, items: [
        'Advertencia de Apertura de Puertas',
        'Frenado de Emergencia Activo',
        'Advertencia de Tráfico Cruzado en Reversa',
        'Control de Crucero Adaptativo',
        'Reconocimiento de Señales de Tráfico',
        'Advertencia de Colisión Frontal',
        'Asistente de Mantenimiento de Carril'
      ], bg: `${CDN}/2025/01/BJ60_BAIC-Argentina-21.jpg` }
    ],
    view360: {
      mobileTop: 51, // px de aire arriba en mobile para que el techo no toque "YOUR BAIC"
      images: Array.from({ length: 36 }, (_, i) => `${CDN}/2025/01/BJ60_BAIC-Argentina_360-${i + 1}.webp`),
      bgText: 'YOUR           BAIC'
    },
    footnote: '*Las imágenes publicadas son de carácter ilustrativo y con fin publicitario.',
    brochure: { pdf: '/brochures/bj60.pdf' }
  },

  'u5-plus': {
    heroImage: u5plus,
    hero: {
      title: 'U5 PLUS',
      tagline: ['Es posible tener todo en un sedán.', 'Performance, Confort y Tecnología.']
    },
    colors: [
      { hex: '#ffffff', image: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-4-1024x452.png` },
      { hex: '#c81e2c', image: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-3-1024x452.png` },
      { hex: '#1c1c1e', image: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-2-1024x452.png` },
      { hex: '#b0b3b6', image: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-1-1024x452.png` }
    ],
    sections: [
      { type: 'text', heading: 'EXTERIOR ELEGANTE, INTERIOR ESPACIOSO', hoverReveal: true, body: ['Dimensiones (largo x ancho x alto): 4.660 x 1.820 x 1.480 mm', 'Distancia entre ejes: 2.670 mm'], bg: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-8.webp` },
      { type: 'text', heading: 'EXCELENTE COEFICIENTE AERODINÁMICO (0.28)', hoverReveal: true, body: ['Disminución del consumo de combustible de manera eficiente y una mejor estabilidad en el camino.'], bg: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-7.webp` },
      { type: 'text', heading: 'ESTRUCTURA DE SEGURIDAD ULTRA RESISTENTE', hoverReveal: true, body: ['Acero de alta resistencia de hasta 1.500 MPa, para una mayor seguridad de los ocupantes ante una colisión.'], bg: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-6.webp` },
      { type: 'text', heading: 'FAROS LED DE ÚLTIMA GENERACIÓN', hoverReveal: true, body: ['Ajuste de altura y apagado retardado.'], bg: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-9.webp` },
      { type: 'text', heading: 'DISEÑO INTERIOR ENVOLVENTE', hoverReveal: true, body: ['Pantalla táctil central de 12,3”, conexión inalámbrica mirrorlink y bluetooth. Volante de cuero con comandos multifunción.'], bg: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-10.webp` },
      { type: 'text', heading: 'CÓMODOS ASIENTOS MULTIFUNCIONALES', hoverReveal: true, body: ['Tapizados en ecocuero con espuma engrosada y alargada.', 'Asientos integrados de gravedad cero.'], bg: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-12.webp` },
      { type: 'text', heading: 'CABINA SILENCIOSA "TIPO BIBLIOTECA"', hoverReveal: true, body: ['Gracias a una novedosa incorporación, el habitáculo logra obtener un volumen interior del ralentí de 40dB.'], bg: `${CDN}/2025/01/U5-Plus_BAIC-Argentina-5.jpg` }
    ],
    view360: {
      images: Array.from({ length: 37 }, (_, i) => `${CDN}/2025/01/U5-Plus_BAIC-Argentina-360-${i + 1}.webp`),
      bgText: 'YOUR           BAIC'
    },
    brochure: { pdf: '/brochures/u5-plus.pdf' }
  },

  'eu5': {
    heroImage: eu5,
    hero: {
      title: 'EU5',
      tagline: ['100% Eléctrico. Excelente Rendimiento, Potencia y Tecnología.'],
      note: 'Conducción confortable y sistemas avanzados de asistencia al conductor.'
    },
    colors: [
      { hex: '#c81e2c', image: `${CDN}/2024/11/BAIC-EU5-16-1024x452.png` },
      { hex: '#f5f6f8', image: `${CDN}/2024/11/BAIC-EU5-12-1024x452.png` },
      { hex: '#1c1c1e', image: `${CDN}/2024/11/BAIC-EU5-15-1024x452.png` },
      { hex: '#808285', image: `${CDN}/2024/11/BAIC-EU5-11-1024x452.png` },
      { hex: '#3f7fd1', image: `${CDN}/2024/11/BAIC-EU5-13-1024x452.png` },
      { hex: '#d8d9db', image: `${CDN}/2024/11/BAIC-EU5-14-1024x452.png` }
    ],
    sections: [
      { type: 'text', heading: 'ÚNICO EN SU ESTILO', hoverReveal: true, body: ['Desde su diseño aerodinámico hasta sus líneas elegantes, este vehículo cautiva con su presencia.'], bg: `${CDN}/2024/11/BAIC-EU5-5.jpg` },
      { type: 'text', heading: 'GRAN DISTANCIA ENTRE EJES', hoverReveal: true, body: ['|- 2670 MM -|', 'Además para mayor confort en la conducción, cuenta con suspensión multibrazo.'], bg: `${CDN}/2024/12/BAIC-EU5-17.jpg` },
      { type: 'text', heading: 'ÓPTICAS LED', hoverReveal: true, body: ['Una estética moderna, logrando un equilibrio perfecto entre forma y funcionalidad.'], bg: `${CDN}/2024/11/BAIC-EU5-10.jpg` },
      { type: 'text', heading: 'FAROS TRASEROS', hoverReveal: true, body: ['Los faros LED de alta tecnología proporcionan una iluminación nítida y potente, además de garantizar un menor consumo de energía, contribuyendo a su eficiencia.'], bg: `${CDN}/2024/11/BAIC-EU5-7.jpg` },
      { type: 'text', heading: 'ESPACIO INTERIOR CONFORTABLE', hoverReveal: true, body: ['Una experiencia inigualable para cada uno de sus ocupantes.'], bg: `${CDN}/2024/11/BAIC-EU5-6.jpg` },
      { type: 'text', heading: 'PANTALLA MULTIMEDIA DE 9"', hoverReveal: true, body: ['Con una interfaz intuitiva y funciones inteligentes, disfrutá del control total mientras navegás con estilo y seguridad.'], bg: `${CDN}/2024/11/BAIC-EU5-3.jpg` },
      { type: 'text', heading: 'MÁXIMO TORQUE QUE ALCANZA LOS 240 NM', hoverReveal: true, body: ['Potencia de 120kw y una aceleración de 0 a 100 km/h en 8,8".'], bg: `${CDN}/2024/11/BAIC-EU5-9.jpg` },
      { type: 'list', heading: 'BATERÍA DE ALTA ENERGÍA DE NUEVA GENERACIÓN DE CATL 151WH/KG', hoverReveal: true, bgPosition: 'center 15%', items: [
        'Buen rendimiento de trabajo en condiciones de temperatura baja.',
        'El grado de protección del sello de toda la estructura alcanzó IP67.',
        'Más de 30 estándares de pruebas internacionales.'
      ], bg: `${CDN}/2024/11/BAIC-EU5-1.jpg` }
    ],
    view360: {
      images: Array.from({ length: 36 }, (_, i) => `${CDN}/2024/11/BAIC-EU5-360-${i + 1}.png`),
      bgText: 'YOUR           BAIC'
    },
    brochure: { pdf: '/brochures/eu5.pdf' }
  }
}
