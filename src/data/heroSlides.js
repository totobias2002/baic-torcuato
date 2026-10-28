// Fotos remodeladas/mejoradas (mismo encuadre, mayor nitidez y sin texto promocional
// "quemado" en la imagen -ver el campo `promo` de x55ii-hybrid más abajo).
import x55iiHybrid from '../assets/images/hero/x55ii-hybrid.png'
import arcfox from '../assets/images/hero/arcfox.png'
import bj40pro from '../assets/images/hero/bj40-pro.png'
import bj30 from '../assets/images/hero/bj30-v2.png'
import x55plus from '../assets/images/hero/x55-plus.png'
import x55ii from '../assets/images/hero/x55-ii.png'
import bj60 from '../assets/images/hero/bj60.png'
import u5plus from '../assets/images/hero/u5-plus.png'

// Versiones verticales (941x1672, ~9:16) generadas para que el auto se vea completo en el
// hero de mobile -en esa pantalla el contenedor es alto (100vh) y con la foto de desktop
// (16:9 horizontal) el object-fit:cover recortaba casi todo el ancho, dejando solo una tira
// angosta del auto. Estas fotos ya vienen compuestas en vertical con el auto centrado.
import x55iiHybridMobile from '../assets/images/hero/mobile/x55ii-hybrid-mobile.png'
import arcfoxMobile from '../assets/images/hero/mobile/arcfox-mobile.png'
import bj40proMobile from '../assets/images/hero/mobile/bj40-pro-mobile.png'
import bj30Mobile from '../assets/images/hero/mobile/bj30-mobile.png'
import x55plusMobile from '../assets/images/hero/mobile/x55-plus-mobile.png'
import x55iiMobile from '../assets/images/hero/mobile/x55-ii-mobile.png'
import bj60Mobile from '../assets/images/hero/mobile/bj60-mobile.png'
import u5plusMobile from '../assets/images/hero/mobile/u5-plus-mobile.png'

import logo1 from '../assets/images/hero/carousel/carousel-1.png'
import logo2 from '../assets/images/hero/carousel/carousel-2.png'
import logo3 from '../assets/images/hero/carousel/carousel-3.png'
import logo4 from '../assets/images/hero/carousel/carousel-4.png'
import logo5 from '../assets/images/hero/carousel/carousel-5.png'
import logo6 from '../assets/images/hero/carousel/carousel-6.png'
import logo7 from '../assets/images/hero/carousel/carousel-7.png'
import logo8 from '../assets/images/hero/carousel/carousel-8.png'

// position/logoClass/variant replican exactamente las clases pos-left/pos-right, logo-arcfox
// y el override especial de la slide x55hybrid tal como están en baic.com.ar (inspeccionado con devtools).
export const heroSlides = [
  { id: 'x55ii-hybrid', title: 'X55 II HYBRID', cta: 'DESCUBRILO', to: '/modelos/x55-ii', image: x55iiHybrid, mobileImage: x55iiHybridMobile, logo: logo1, position: 'left', variant: 'x55hybrid',
    // Antes este texto venía "quemado" en la propia foto de fondo; al remodelar la imagen
    // (más nítida, sin texto pegado) se perdió -ahora es texto real en HTML, así que se ve
    // bien nítido y en su lugar correcto sin importar la resolución de la foto o el dispositivo.
    promo: { top: 'Nueva versión', big: ['Ahora', 'Híbrido'], bottom: 'Preventa disponible' }
  },
  { id: 'arcfox', title: 'ARCFOX', cta: 'DESCUBRILOS', to: 'https://arcfox.com.ar/', image: arcfox, mobileImage: arcfoxMobile, logo: logo2, position: 'left', logoClass: 'logo-arcfox' },
  { id: 'bj40-pro', title: 'BJ40 PRO', cta: 'DESCUBRILO', to: '/modelos/bj40-pro', image: bj40pro, mobileImage: bj40proMobile, logo: logo3, position: 'left' },
  { id: 'bj30', title: 'BJ30', cta: 'DESCUBRILO', to: '/modelos/bj30-4x4', image: bj30, mobileImage: bj30Mobile, logo: logo4, position: 'right' },
  // x55-plus y u5-plus son fotos de perfil con el auto ocupando casi todo el ancho -no queda
  // margen limpio a los costados para el logo/botón sin tocarlo. Arriba de todo (el cielo /
  // la fachada, por encima del techo del auto) sí queda libre en todo el ancho, así que estas
  // dos van con variant:'topband' para fijar el bloque de texto pegado arriba en vez de centrado.
  { id: 'x55-plus', title: 'X55 PLUS', cta: 'DESCUBRILO', to: '/modelos/x55-plus', image: x55plus, mobileImage: x55plusMobile, logo: logo5, position: 'right', variant: 'topband' },
  { id: 'x55-ii', title: 'X55 II', cta: 'DESCUBRILO', to: '/modelos/x55-ii', image: x55ii, mobileImage: x55iiMobile, logo: logo6, position: 'left' },
  { id: 'bj60', title: 'BJ60', cta: 'DESCUBRILO', to: '/modelos/bj60', image: bj60, mobileImage: bj60Mobile, logo: logo7, position: 'left' },
  // u5-plus también es topband, pero al ir a la izquierda (como el logo BAIC/ARCFOX/PACHECO
  // del navbar) con el mismo top:9% de x55-plus quedaba pisando el navbar -esta foto tiene
  // mucho más margen limpio arriba del techo del auto, así que baja un poco más (topband-low).
  { id: 'u5-plus', title: 'U5 PLUS', cta: 'DESCUBRILO', to: '/modelos/u5-plus', image: u5plus, mobileImage: u5plusMobile, logo: logo8, position: 'left', variant: 'topband-low' }
]
