// Contenido real extraído de arcfox.com.ar (textos/fotos de marketing) y de
// baic.icars.com.ar (fichas técnicas / colores) para los 4 modelos ARCFOX.
// Mismo esquema que src/data/modelDetails.js (BAIC) para poder reusar el mismo
// VehicleDetailPage.jsx sin duplicar el template.
import t1Nav from '../assets/images/arcfox/arcfox-t1.png'
import t1EspacioFlexibleHd from '../assets/images/arcfox/t1-espacio-flexible-hd-v2.png'
import s5Nav from '../assets/images/arcfox/arcfox-s5.png'
import t5Nav from '../assets/images/arcfox/arcfox-t5.png'
import kaolaSNav from '../assets/images/arcfox/arcfox-kaola-s.png'

const CDN = '/media/arcfox/wp-content/uploads'
const ICARS_CDN = '/media/icars/wp-content/uploads'

export const arcfoxModelDetails = {
  'arcfox-t1': {
    heroImage: t1Nav,
    hero: {
      title: 'ARCFOX T1',
      tagline: ['Alta capacidad & Libertad sin límites', 'SUV Subcompacto completamente eléctrico'],
    },
    colors: [
      { hex: '#3c5f8a', image: `${ICARS_CDN}/2026/04/AZUL-768x512.webp` },
      { hex: '#f2f2f2', image: `${ICARS_CDN}/2026/04/Blanco-768x512.webp` },
      { hex: '#77797c', image: `${ICARS_CDN}/2026/04/Gris-768x512.webp` },
      { hex: '#c7c9cc', image: `${ICARS_CDN}/2026/04/Plateado-768x512.webp` },
      { hex: '#5c7a63', image: `${ICARS_CDN}/2026/04/Verde-768x512.webp` },
      { hex: '#6d5b7a', image: `${ICARS_CDN}/2026/04/Violeta-768x512.webp` }
    ],
    sections: [
      { type: 'text', heading: 'IMPACTANTE EXTERIOR', hoverReveal: true, body: ['Estética de vanguardia con líneas limpias y minimalistas.'], bg: `${CDN}/2026/02/Arcfox_KaolaT1-21-scaled-e1771787035584.jpg` },
      { type: 'text', heading: 'FAROS DELANTEROS TIPO PASANTE', hoverReveal: true, body: ['Dynamic Ice Brilliance: firma lumínica continua de un extremo al otro del frente.'], bg: `${CDN}/2026/02/Arcfox_KaolaT1-22-scaled.jpg` },
      { type: 'text', heading: 'LLANTAS DE ALEACIÓN DE 18"', hoverReveal: true, body: ['Mecanizadas con precisión, en línea con el diseño minimalista de la carrocería.'], bg: `${CDN}/2026/02/Arcfox_KaolaT1-4.png` },
      { type: 'stats', counters: true, items: [
        { label: 'LONGITUD', value: '4337', suffix: 'MM' },
        { label: 'ANCHO', value: '1860', suffix: 'MM' },
        { label: 'ALTO', value: '1572', suffix: 'MM' },
        { label: 'DISTANCIA ENTRE EJES', value: '2770', suffix: 'MM' }
      ], bg: `${CDN}/2026/02/Arcfox_KaolaT1-1.png`, contain: true },
      { type: 'text', heading: 'ASIENTOS DELANTEROS "LIE-FLAT"', hoverReveal: true, body: ['Modo de reclinado plano con un solo botón, ángulo de reclinación de 180° y pista ajustable de 260 mm.'], bg: `${CDN}/2026/02/Arcfox_KaolaT1-3-scaled.jpg` },
      { type: 'list', heading: 'ESPACIO FLEXIBLE DE 459 A 1352 L', hoverReveal: true, items: [
        'Asientos de la segunda fila plegables en segundos',
        'Compartimento oculto hundido de 74 litros',
        'Configuración plegable dividida 4/6',
        '32 soluciones de almacenamiento inteligentes'
      ], bg: t1EspacioFlexibleHd },
      { type: 'stats', counters: true, items: [
        { label: 'CARGA RÁPIDA 30-80%', value: '25', suffix: 'MINUTOS' },
        { label: 'AUTONOMÍA NEDC', value: '375', suffix: 'KM' },
        { label: 'CONSUMO', value: '11.2', suffix: 'KWH/100KM' }
      ], bg: `${CDN}/2026/02/Arcfox_KaolaT1-14-scaled.jpg`, mobilePhotoPosition: '0% center' },
      { type: 'list', heading: 'SMART ASSISTS', hoverReveal: true, items: [
        '360° vista panorámica + 180° chasis transparente',
        'Asistente de estacionamiento inteligente',
        'Asistencia al conductor combinada de Nivel 2',
        '12 asistencias de manejo de seguridad + 6 de manejo crucero',
        'Pantalla dual inteligente de 15,6" + asistente de voz con IA'
      ], bg: `${CDN}/2026/02/Arcfox_KaolaT1-47-scaled.jpg` },
      { type: 'stats', counters: true, items: [
        { label: 'POTENCIA MÁXIMA', value: '95', suffix: 'CV' },
        { label: 'PAR MÁXIMO', value: '176', suffix: 'NM' },
        { label: 'VELOCIDAD MÁXIMA', value: '140', suffix: 'KM/H' }
      ], bg: `${CDN}/2026/02/Arcfox_KaolaT1-48-scaled-e1772219316663.jpg`,
        mobileContain: true,
        specTable: {
          heading: 'FICHA TÉCNICA ARCFOX T1',
          sections: [
            { title: 'Rendimiento y batería', rows: [
              { label: 'Motor', value: 'Síncrono de imanes permanentes' },
              { label: 'Potencia máxima', value: '70 kW / 95 CV' },
              { label: 'Par máximo', value: '176 Nm' },
              { label: 'Autonomía NEDC / WLTC', value: '375 / 310 km' },
              { label: 'Composición de batería', value: 'LFP' },
              { label: 'Carga rápida CC (30-80%)', value: '≤ 25 min' },
              { label: 'Peso en vacío', value: '1420 kg' }
            ] },
            { title: 'ADAS y seguridad', rows: [
              { label: 'Control de crucero adaptativo (ACC)', value: '•' },
              { label: 'Estacionamiento automático (APA)', value: '•' },
              { label: 'Frenado automático de emergencia (AEB)', value: '•' },
              { label: 'Alerta de salida de carril (LDW)', value: '•' },
              { label: 'Cámara periférica 540° (AVM)', value: '•' },
              { label: 'ABS + EBD + ESP + TCS', value: '•' },
              { label: 'Anclaje ISOFIX', value: '•' }
            ] },
            { title: 'Interior', rows: [
              { label: 'Pantalla LCD central', value: '15,6"' },
              { label: 'Sistema de sonido', value: '6 altavoces' },
              { label: 'Interconexión', value: 'CarPlay + YiLian' },
              { label: 'Techo solar panorámico', value: '•' },
              { label: 'Asientos delanteros calefaccionados', value: '•' },
              { label: 'Material de asientos', value: 'Cortex' }
            ] },
            { title: 'Colores', rows: [
              { label: 'Exterior', value: 'Blanco, Azul, Plata, Verde, Púrpura, Gris' },
              { label: 'Interior', value: 'Blanco suave, Sandy Brown, Gris Oscuro' }
            ] }
          ]
        }
      }
    ],
    brochure: { pdf: '/brochures/arcfox-t1.pdf' }
  },

  'arcfox-s5': {
    heroImage: s5Nav,
    hero: {
      title: 'ARCFOX S5',
      tagline: ['Alto Rendimiento & Lujo Inteligente', 'Sedán Sportback Eléctrico'],
    },
    colors: [
      { hex: '#8a8d90', image: `${ICARS_CDN}/2026/04/Gris-2-768x512.webp` },
      { hex: '#1c1c1e', image: `${ICARS_CDN}/2026/04/Negro-1-768x512.webp` },
      { hex: '#e6c7ce', image: `${ICARS_CDN}/2026/04/Rosado-768x512.webp` },
      { hex: '#3f5c8a', image: `${ICARS_CDN}/2026/04/Azul-1-768x512.webp` },
      { hex: '#f2f2f2', image: `${ICARS_CDN}/2026/04/Blanco-3-768x512.webp` }
    ],
    sections: [
      { type: 'stats', counters: true, items: [
        { label: 'AUTONOMÍA NEDC', value: '530', suffix: 'KM' },
        { label: 'ADAS', value: 'Nivel 2+', suffix: '' },
        { label: 'SONIDO', value: '15', suffix: 'PARLANTES + SUBWOOFER' }
      ], bg: `${CDN}/2026/02/S5_Banner_1_web.jpg`, mobileFullPhoto: '1920/1080', mobileTextLeft: true },
      { type: 'text', heading: 'DISEÑO DE CARROCERÍA AERODINÁMICO', hoverReveal: true, body: ['El coeficiente de resistencia (Cd) más bajo entre los automóviles producidos en masa.'], bg: `${CDN}/2026/02/Arcfox_S5-1.jpg` },
      { type: 'text', heading: 'LUJO E INTERIOR DINÁMICO', hoverReveal: true, body: ['Cobertura de material suave al tacto del 80%. Volante de microfibra, casi cero formaldehído y benceno.'], bg: `${CDN}/2026/02/Arcfox_S5-29.jpg` },
      { type: 'stats', counters: true, items: [
        { label: 'AISLAMIENTO TÉRMICO', value: '99', suffix: '%' },
        { label: 'PROTECCIÓN UV', value: '99', suffix: '%' },
        { label: 'TRANSMISIÓN DE LUZ', value: '78.7', suffix: '%' }
      ], bg: `${CDN}/2026/02/Arcfox_S5-11.jpg` },
      { type: 'list', heading: 'ASIENTOS SUAVES Y CÓMODOS', hoverReveal: true, items: [
        'Asiento apilado de 8 capas',
        'Ventilación y calefacción estándar',
        'Memoria del asiento',
        'Aire acondicionado automático independiente de doble zona',
        'Cuatro lámparas esterilizadoras UV-C (99,99% desinfección)'
      ], bg: `${CDN}/2026/02/Arcfox_S5-34.jpg` },
      { type: 'text', heading: 'CINE EN CASA INMERSIVO', hoverReveal: true, body: ['Pantalla táctil HD de 15,6" y AR-HUD HD de 68", con sistema de sonido de 7.1 canales y 15 altavoces.'], bg: `${CDN}/2026/02/Arcfox_S5-18.jpg` },
      { type: 'stats', counters: true, items: [
        { label: '0-100 KM/H', value: '3.7', suffix: 'S' },
        { label: 'POTENCIA MÁXIMA', value: '250', suffix: 'KW' },
        { label: 'PAR MÁXIMO', value: '360', suffix: 'NM' }
      ], bg: `${CDN}/2026/02/Arcfox_S5-20.jpg` },
      { type: 'list', heading: 'SISTEMAS AVANZADOS DE ASISTENCIA AL CONDUCTOR L2+', hoverReveal: true, items: [
        '20 sensores de percepción del entorno',
        'Chip de estacionamiento inteligente TDA',
        'Cámara HD de 3 megapíxeles',
        'Radar ultrasónico AK2'
      ], bg: `${CDN}/2026/02/Arcfox_S5-28.jpg` },
      { type: 'stats', counters: true, items: [
        { label: 'CARGA RÁPIDA 30-80%', value: '30', suffix: 'MINUTOS' },
        { label: 'PLATAFORMA', value: '400', suffix: 'V' },
        { label: 'CAPACIDAD DE BATERÍA', value: '65', suffix: 'KWH' }
      ], bg: `${CDN}/2026/02/Arcfox_S5-30.jpg`,
        specTable: {
          heading: 'FICHA TÉCNICA ARCFOX S5',
          sections: [
            { title: 'Rendimiento y batería', rows: [
              { label: 'Motor', value: 'Imán permanente' },
              { label: 'Potencia máxima', value: '185 kW / 250 CV' },
              { label: 'Par máximo', value: '360 Nm' },
              { label: 'Autonomía CLTC / NEDC / WLTC', value: '560 / 530 / 420 km' },
              { label: 'Composición de batería', value: 'LFP (65 kWh)' },
              { label: 'Carga rápida CC (30-80%)', value: '≤ 30 min' },
              { label: 'Dimensiones (L x A x A)', value: '4820 x 1930 x 1480 mm' },
              { label: 'Peso en vacío', value: '1920 kg' }
            ] },
            { title: 'ADAS y seguridad', rows: [
              { label: 'Control de crucero adaptativo (ACC)', value: '•' },
              { label: 'Asistente de cambio de carril (LCA)', value: '•' },
              { label: 'Frenado automático de emergencia (AEB)', value: '•' },
              { label: 'Airbag lateral tipo cortina', value: '•' },
              { label: 'Cámara periférica 540° (AVM)', value: '•' },
              { label: 'ABS + EBD + ESP + TCS + CBC', value: '•' },
              { label: 'C-NCAP 5 estrellas (carrocería acero+aluminio)', value: '•' }
            ] },
            { title: 'Interior', rows: [
              { label: 'Chipset', value: 'Qualcomm 8155' },
              { label: 'Pantalla táctil', value: '15,6" HD' },
              { label: 'AR-HUD', value: '•' },
              { label: 'Sonido', value: '15 altavoces + subwoofer' },
              { label: 'Interconexión', value: 'Apple CarPlay + Yilian' },
              { label: 'Carga inalámbrica', value: '50 W' }
            ] },
            { title: 'Colores', rows: [
              { label: 'Exterior', value: 'Blanco, Negro, Gris, Rosa, Azul' },
              { label: 'Interior', value: 'Negro, Blanco, Marrón' }
            ] }
          ]
        }
      }
    ],
    brochure: { pdf: '/brochures/arcfox-s5.pdf' }
  },

  'arcfox-t5': {
    heroImage: t5Nav,
    hero: {
      title: 'ARCFOX T5',
      tagline: ['El automóvil que inspira tu vida', 'SUV Crossover Compacto Completamente Eléctrico'],
    },
    colors: [
      { hex: '#1c1c1e', image: `${ICARS_CDN}/2026/04/Negro-768x512.webp` },
      { hex: '#f2f2f2', image: `${ICARS_CDN}/2026/04/Blanco-1-768x512.webp` }
    ],
    sections: [
      { type: 'text', heading: 'IMPACTANTE EXTERIOR', hoverReveal: true, body: ['Un diseño audaz que hace que cada viaje sea imponente. Faros delanteros con forma de diamante y emblema luminoso.'], bg: `${CDN}/2026/01/Arcfox_Argentina_T5-3.png` },
      { type: 'list', heading: '26 CONFIGURACIONES INTELIGENTES', hoverReveal: true, items: [
        'Manija eléctrica de puerta invisible',
        'Volante calefaccionado',
        'Tapa eléctrica en puerto de carga',
        'Puerta del baúl eléctrica',
        'Espejos exteriores con memoria y plegado automático'
      ], bg: `${CDN}/2026/01/Arcfox_Argentina_T5-16.png`, bgPosition: 'center 78%' },
      { type: 'stats', counters: true, items: [
        { label: 'AISLAMIENTO TÉRMICO', value: '99', suffix: '%' },
        { label: 'COEFICIENTE AERODINÁMICO', value: '0.245', suffix: 'CD' }
      ], bg: `${CDN}/2026/01/Arcfox_Argentina_T5-17.png`, photoPosition: 'center 15%', mobileFullPhoto: '1226/672' },
      { type: 'stats', counters: true, items: [
        { label: 'ESPACIO INTERIOR', value: '69', suffix: '% aprovechamiento' },
        { label: 'CAPACIDAD DE CARGA', value: '1546', suffix: 'L (asientos abatidos)' },
        { label: 'ALMACENAMIENTO', value: '21', suffix: 'espacios' }
      ], bg: `${CDN}/2026/01/Arcfox_Argentina_T5-20.png` },
      { type: 'list', heading: 'CONFORT EN CAPAS', hoverReveal: true, items: [
        '8 capas de confort con tapizados de Alcantara',
        'Inclinación de descanso de 129° con memoria',
        'Asientos delanteros calefaccionados',
        'Inclinación adaptable de 30° en asientos traseros'
      ], bg: `${CDN}/2026/01/Arcfox_Argentina_T5-19.png` },
      { type: 'stats', counters: true, items: [
        { label: 'AUTONOMÍA NEDC', value: '475', suffix: 'KM' },
        { label: 'CONSUMO', value: '12.5', suffix: 'KWH/100KM' },
        { label: 'PLATAFORMA DE CARGA', value: '400', suffix: 'V' }
      ], bg: `${CDN}/2026/01/Arcfox_Argentina_T5-28.png`, photoPosition: 'center 8%', mobileFullPhoto: '1199/550', mobileTapReveal: true },
      { type: 'text', heading: 'MANEJO ÁGIL Y FLUIDO', hoverReveal: true, body: ['Sistema de frenado inteligente ONEBOX: frenado en menos de 0,15 segundos y distancia de frenado desde 100 km/h en solo 35,7 mts.'], bg: `${CDN}/2026/01/Arcfox_Argentina_T5-27.png` },
      { type: 'stats', counters: true, items: [
        { label: '0-100 KM/H', value: '7.5', suffix: 'S' },
        { label: 'POTENCIA MÁXIMA', value: '250', suffix: 'CV' },
        { label: 'PAR MÁXIMO', value: '360', suffix: 'NM' }
      ], bg: `${CDN}/2026/01/Arcfox_Argentina_T5-25.png`, mobilePhotoPosition: '78% center',
        specTable: {
          heading: 'FICHA TÉCNICA ARCFOX T5',
          sections: [
            { title: 'Rendimiento y batería', rows: [
              { label: 'Motor', value: 'Síncrono de imanes permanentes' },
              { label: 'Potencia máxima', value: '185 kW / 250 CV' },
              { label: 'Par máximo', value: '360 Nm' },
              { label: 'Autonomía CLTC / NEDC / WLTC', value: '520 / 475 / 405 km' },
              { label: 'Composición de batería', value: 'LFP (65 kWh)' },
              { label: 'Carga rápida CC (30-80%)', value: '≤ 30 min' },
              { label: 'Dimensiones (L x A x A)', value: '4690 x 1936 x 1650 mm' },
              { label: 'Peso en orden de marcha', value: '1974 kg' }
            ] },
            { title: 'ADAS y seguridad', rows: [
              { label: 'Control de crucero adaptativo (ACC)', value: '•' },
              { label: 'Asistente de mantenimiento de carril (LKA)', value: '•' },
              { label: 'Frenado automático de emergencia (AEB)', value: '•' },
              { label: 'Advertencia de tráfico cruzado (FCTA/RCTA)', value: '•' },
              { label: 'Cámara periférica 540° (AVM)', value: '•' },
              { label: 'Airbag lateral de cortina (SCAB)', value: '•' }
            ] },
            { title: 'Interior', rows: [
              { label: 'Chipset', value: 'Qualcomm 8155' },
              { label: 'Pantalla', value: '15,6" + AR-HUD' },
              { label: 'Sonido', value: '8 altavoces' },
              { label: 'Interconexión', value: 'CarPlay + Easy Link' },
              { label: 'Techo de cristal panorámico fijo', value: '•' },
              { label: 'Salida 220V para cabina', value: '•' }
            ] },
            { title: 'Colores', rows: [
              { label: 'Exterior', value: 'Negro, Blanco, Gris, Azul' },
              { label: 'Interior', value: 'Morado, Marrón' }
            ] }
          ]
        }
      }
    ],
    brochure: { pdf: '/brochures/arcfox-t5.pdf' }
  },

  'arcfox-kaola-s': {
    heroImage: kaolaSNav,
    hero: {
      title: 'ARCFOX KAOLA S',
      tagline: ['Lo que más amás de tu hogar, en tu auto', 'Minivan Compacto completamente eléctrico con elegante puerta lateral corrediza'],
    },
    colors: [
      { hex: '#77797c', image: `${ICARS_CDN}/2026/04/Gris-1-768x512.webp` },
      { hex: '#6d5b7a', image: `${ICARS_CDN}/2026/04/Violeta-1-768x512.webp` },
      { hex: '#f2f2f2', image: `${ICARS_CDN}/2026/04/Blanco-2-768x512.webp` }
    ],
    sections: [
      { type: 'text', heading: 'EQUIPADO CON BATERÍA CATL', hoverReveal: true, body: ['Doble seguridad con el fabricante líder. Batería segura en la nube a tiempo completo, con detección temprana de riesgos.'], bg: `${CDN}/2026/02/Arcfox_KaolaS-6.jpg` },
      { type: 'stats', counters: true, items: [
        { label: 'AUTONOMÍA NEDC', value: '470', suffix: 'KM' },
        { label: 'CARGA RÁPIDA 30-80%', value: '26', suffix: 'MINUTOS' }
      ], bg: `${CDN}/2026/02/Arcfox_KaolaS-1.jpg`, mobileFullPhoto: '1920/1080' },
      { type: 'list', heading: 'ESPACIO INTERIOR AMPLIO Y VERSÁTIL', hoverReveal: true, items: [
        '4500 mm de longitud, 1870 mm de ancho, 2820 mm entre ejes',
        'Piso completamente plano',
        'Asiento rebatible 4/6',
        '1025 mm de distancia entre filas'
      ], bg: `${CDN}/2026/02/Arcfox_KaolaS-7.jpg` },
      { type: 'text', heading: '29 ESPACIOS DE ALMACENAMIENTO', hoverReveal: true, body: ['Percha para abrigos, bolsillo para mapas, gancho oculto, estuche para gafas y gran volumen de carga.'], bg: `${CDN}/2026/02/Arcfox_KaolaS-9.jpg` },
      { type: 'text', heading: 'SUV DE GRAN ESPACIO CON PUERTAS CORREDIZAS', hoverReveal: true, body: ['Puerta deslizante eléctrica del lado derecho, con control de iluminación elegante y paso bajo de 340 mm.'], bg: `${CDN}/2026/02/Arcfox_KaolaS-12.jpg` },
      { type: 'stats', counters: true, items: [
        { label: 'RIGIDEZ TORSIONAL', value: '37400', suffix: 'NM/GRADO' }
      ], bg: `${CDN}/2026/02/Arcfox_KaolaS-13.jpg` },
      { type: 'list', heading: 'TECNOLOGÍA DE SEGURIDAD INTELIGENTE', hoverReveal: true, items: [
        'FCW: advertencia de colisión frontal con detección de peatones',
        'AEB: sistema de frenado autónomo de emergencia',
        'LDW: alerta de cambio de carril',
        'Acero de alta resistencia + acero conformado en caliente'
      ], bg: `${CDN}/2026/02/Arcfox_KaolaS-16.jpg` },
      { type: 'text', heading: 'ASIENTOS DE CUERO VEGANO', hoverReveal: true, body: ['Calidad premium: asiento del conductor con ajuste eléctrico de 6 posiciones y asiento del acompañante plegable hacia adelante.'], bg: `${CDN}/2026/02/Arcfox_KaolaS-8.jpg`,
        specTable: {
          heading: 'FICHA TÉCNICA ARCFOX KAOLA S',
          sections: [
            { title: 'Rendimiento y batería', rows: [
              { label: 'Motor', value: 'Imán permanente' },
              { label: 'Potencia máxima', value: '160 kW' },
              { label: 'Par máximo', value: '240 Nm' },
              { label: 'Velocidad máxima', value: '160 km/h' },
              { label: 'Autonomía CLTC / NEDC / WLTC', value: '500 / 470 / 370 km' },
              { label: 'Composición de batería', value: 'LFP (58,8 kWh)' },
              { label: 'Carga rápida CC (30-80%)', value: '26 min' },
              { label: 'Dimensiones (L x A x A)', value: '4500 x 1870 x 1655 mm' },
              { label: 'Peso en vacío', value: '1830 kg' }
            ] },
            { title: 'ADAS y seguridad', rows: [
              { label: 'Control de crucero adaptativo (ACC)', value: '•' },
              { label: 'Asistente de mantenimiento de carril (LKA)', value: '•' },
              { label: 'Frenado automático de emergencia (AEB-P)', value: '•' },
              { label: 'Cámara periférica 540° (AVM)', value: '•' },
              { label: 'Anclaje ISOFIX', value: '•' },
              { label: 'ABS + EBD + ESP + TCS', value: '•' }
            ] },
            { title: 'Interior', rows: [
              { label: 'Pantalla de entretenimiento', value: '14,6" HD' },
              { label: 'Tablero digital', value: '10,25"' },
              { label: 'Interconexión', value: 'CarPlay + Easy Link' },
              { label: 'Techo solar panorámico', value: '•' },
              { label: 'Asiento conductor calefaccionado y ventilado', value: '•' }
            ] },
            { title: 'Colores', rows: [
              { label: 'Exterior', value: 'Morado, Blanco, Gris' },
              { label: 'Interior', value: 'Morado, Gris' },
              { label: 'Asientos', value: '5 plazas' }
            ] }
          ]
        }
      }
    ],
    brochure: { pdf: '/brochures/arcfox-kaola-s.pdf' }
  }
}
