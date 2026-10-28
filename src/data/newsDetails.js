// Contenido completo de las notas individuales de Novedades, copiado uno por uno
// desde baic.com.ar. Se va completando nota por nota (ver src/data/news.js para el listado).

// Logo "Premios PIA" (bj30-suv-importado-del-anio).
import piaLogoImg from '../assets/images/news/badges/logo-pia.png'
// Segunda foto de la nota "bj30-suv-importado-del-anio" (BJ30 con los Premios PIA), va
// entre el párrafo "Fecha de publicación" y la aclaración final en cursiva (ya guardada por el usuario).
import bj30PremiosPiaImg from '../assets/images/news/badges/bj30-premios-pia.jpg'

// Foto de tapa real de la nota "nominaciones-bj30-auto-del-anio" en alta resolución
// (1600x900, la miniatura de la card es de 600x400 y se veía borrosa a todo el ancho).
import nominacionesBj30CoverImg from '../assets/images/news/detail/nominaciones-bj30-cover.jpg'
// Foto de tapa real de la nota "baic-group-entro-en-el-top-de-las-marcas-mas-valiosas" en alta
// resolución (2560x1440, la miniatura de la card es de 600x400 y se veía borrosa a todo el ancho).
import baicGroupCoverImg from '../assets/images/news/detail/baic-group-cover.jpg'
// Foto de tapa real de la nota "nuevo-baic-x55" en alta resolución (1920x1080).
import nuevoX55CoverImg from '../assets/images/news/detail/nuevo-x55-cover.jpg'
// Foto de tapa real de la nota "baic-lider-en-autos-electricos-en-china" en calidad original (634x534).
import baicLiderElectricosCoverImg from '../assets/images/news/detail/baic-lider-electricos-cover.jpg'
// Foto de tapa real de la nota "baic-senova" (misma foto que en la card de Novedades).
import baicSenovaCoverImg from '../assets/images/news/detail/baic-senova-cover.jpg.png'
// Foto de tapa real de la nota "nuevos-concesionarios-de-baic" (misma foto que en la card de Novedades).
import nuevosConcesionariosCoverImg from '../assets/images/news/detail/nuevos-concesionarios-de-baic.png'
// Foto de tapa real de la nota "baic-eu-5" (misma foto que en la card de Novedades).
import baicEu5CoverImg from '../assets/images/news/detail/baic-eu-5.jpg'
// Foto de tapa real de la nota "baic-apuesta-al-futuro-electrico" (misma foto que en la card de Novedades).
import baicFuturoElectricoCoverImg from '../assets/images/news/detail/baic-apuesta-al-futuro-electrico.jpg'

export const newsDetails = {
  'bj30-suv-importado-del-anio': {
    // Imagen tipo "badge" chica, centrada, pegada arriba del título.
    media: { type: 'badge', src: piaLogoImg },
    body: [
      { text: 'La agrupación Periodistas de la Industria Automotriz (PIA) eligió a los autos del año 2025 en la Argentina, en la décimoquinta edición de los Premios PIA en sus 3 categorías:' },
      { text: '– Auto/SUV Regional', italic: true, align: 'center' },
      { text: '–  Auto/SUV Importado', italic: true, align: 'center' },
      { text: '– Vehículo Comercial', italic: true, align: 'center' },
      { html: 'La votación se realizó con la participación de 30 periodistas especializados en autos, pertenecientes a medios de todo el país. El criterio de votación sugerido fue el de <em>mejor relación entre <strong>precio, producto e innovación. </strong></em>' },
      { text: 'Los Premios PIA se entregan desde el año 2011 y destacan a los mejores vehículos lanzados a la venta cada año en la Argentina.' },
      { text: 'Los vehículos participantes fueron todos aquellos nuevos modelos (o actualizaciones de modelos ya existentes), que se lanzaron a la venta entre el 1° de enero y el 31 de diciembre de 2025.' },
      { text: 'El jurado que participó en esta edición de los Premios PIA estuvo integrado por los siguientes periodistas: Guillermo Ansaldi (M2 – Motorizados Argentina), Hernando Calaza (Autocosmos Argentina), Carlos Cristófalo (Autoblog Argentina), Orlando Cristófalo (Autoblog Argentina), Diego Cúneo (La Nación), Santiago Di Pardo (Minuto Motor), Martin Echaide (La Prensa), Martín Egozcue (TinchoEgozcue), Zofía Elhaiek (El Garage), Guillermina Fossati (iProfesional- Automas), Mariano Garbini (La Pareja Tester), Marcelo Ingaramo (Cadena 3), Norberto Lema (TV Pública- El Libertador de Corrientes), Tato Machuca (La Pareja Tester), Jimena Olazar (Mujeres al Volante), Pablo Olivieri (Crash Test Cesvi), Elvio Orellana (La Voz), Mauro Osorio (CarsDrive), Daniel Panzera (16 Válvulas), Andrés Pérez Loizeau (Visión Motor), Sebastián Diego Ramos (Mundo Motor- América TV), Daniel Revol (Cadena Brisas Mar del Plata-Infobrisas), Victor Russo (Noticias Sobre Ruedas, Radio Del Plata y Diario Los Andes), Carlos Saavedra (Visionauto Web), Federico Smith (Motorweb Argentina y Radio Con Vos), Camila Suhr (Moving Fast), Renato Tarditti (MiuraMag), René Villegas (Motorweb Argentina), Damián Weizman (Medios Cuyomotor – Canal 9- Telefé Mendoza), y Diego Zorrero (Infobae y P1).' },
      { text: 'Fecha de publicación: 13/1/26', align: 'right' },
      { type: 'image', src: bj30PremiosPiaImg, aspect: '16/9' },
      { type: 'divider' }
    ],
    footnote: '* Aclaración: Desde 2021, las categorías Auto y SUV se fusionaron en una sola, debido a la falta de novedades en el mercado automotor argentino.'
  },

  'nominaciones-bj30-auto-del-anio': {
    // Esta nota usa un título distinto (H2 40px/600, no H1 33px/700) y una
    // foto real de tapa a todo el ancho DEBAJO del título (no un badge arriba).
    titleSize: 40,
    titleWeight: 600,
    media: { type: 'full', src: nominacionesBj30CoverImg, aspect: '1346/757' },
    body: [
      { text: 'El mes de Diciembre está llegando a su fin y la industria comienza a hacer su balance para seleccionar a los autos más exitosos 2025 en el mercado automotor argentino.' },
      { html: 'No quedan dudas que este año el lanzamiento de la <strong>BJ30</strong> en Argentina fue un éxito rotundo (con más de 2200 unidades vendidas en su primer año) y consolidando a <strong>BAIC </strong>como <em>la marca china líder de ventas</em> con una amplia red de concesionarios de primer nivel que cuenta cada vez mayor presencia federal a lo largo y ancho de todo el país.' },
      { html: 'La agrupación <strong>Periodistas de la Industria Automotriz (PIA)</strong> integrado por un jurado de periodistas especializados en autos de medios gráficos, digitales, de TV y radio de todo el país que desde 2011 distinguen a los modelos más relevantes han seleccionado a <strong>BAIC</strong> como uno de los ternados en la categoría “Mejor Auto/SUV Importado 2025”.' },
      { html: 'Por su parte, el <strong>Grupo Premia </strong>-organización sin fines de lucro conformada por periodistas especializados como Matías Antico, Augusto Brugo Marcó, Gabriel Silveira, Martín Simacourbe, Eduardo Smok, Gabriel Tomich y Guido Tonelli, José Luis Denari y Walter Togneri- convocó a sus miembros para votar el “Auto del Año” donde se eligieron a los 7 finalistas de esta edición. El ganador será anunciado el 2 de enero.' },
      { text: 'Los 7 modelos ternados son:' },
      { type: 'list', items: ['BJ30', 'Fiat Titano', 'Ford Everest', 'Kia K3', 'Nissan Kicks', 'Renault Koleos', 'Volkswagen Tera'] },
      { html: 'El portal <strong>elcerokm.com </strong>en su segunda edición también entregó sus premios “El Cero KM Awards” y eligió a <strong>BJ30</strong> como “El 0 KM del Año”, el “SUV del Año”, “Premio Revelación” y “Chino del Año”.' },
      { html: 'Estos reconocimientos reafirman el impacto de <strong>BAIC</strong> en el mercado local destacándose <strong>BJ30 </strong>entre los lanzamientos más relevantes del último año, proyectando un 2026 con muchísimas más novedades para seguir consolidándonos entre las mejores opciones del mercado.' }
    ]
  },

  'baic-group-entro-en-el-top-de-las-marcas-mas-valiosas': {
    titleSize: 40,
    titleWeight: 600,
    media: { type: 'full', src: baicGroupCoverImg, aspect: '1346/757' },
    body: [
      { text: 'Recientemente, se publicó oficialmente el informe de análisis de Las 500 marcas más valiosas de China de 2023, publicado por World Brand Lab, en el que el Grupo BAIC ocupó el puesto 21 con un valor de marca de 342.959 millones de CNY, manteniendo la tercera posición en la industria automovilística de China y un aumento significativo de unos 22.400 millones de CNY en valor de marca en comparación con el año pasado.' },
      { text: 'Las 500 marcas más valiosas de China, publicado por vigésimo año consecutivo, es un informe anual basado en datos financieros, fuerza de marca y análisis del comportamiento del consumidor. Los buenos resultados del Grupo BAIC en el último ciclo demuestran plenamente la eficacia de construir la marca con las necesidades de clientes, potenciar la marca con tecnología e innovación y ampliar el desarrollo de alta calidad de la marca con una cooperación abierta.' },
      { text: 'En el futuro, BAIC se centrará en las tres necesidades básicas como: “Familia, Aire Libre y Diversión”, y las dividirá también en tres series: “Viajes todoterrenos de rendimiento con placer, Viajes al aire libre con placer y Viajes para uno mismo con placer” con el fin de llevar a cabo un concepto de “total nuevo” para el valor y la identidad de marca, el diseño de producto y la experiencia de usuario.' },
      { text: 'En enero de 2023, se lanzó oficialmente la marca BAIC TRUCKS (BEIJINGTRUCKS), el nuevo polo del segmento de vehículos comerciales de BAIC, con una estructura de producto que abarca tres plataformas. En marzo, se lanzó el primer vehículo de BAIC TRUCKS. En mayo, se lanzó globalmente la nueva generación de camión pesado “i-Beijing”de BAIC TRUCKS de gama media-alta.' },
      { text: 'En la parte de empresas conjuntas, Mercedes-Benz Beijing, como representante de la fabricación de gama alta, amplió aún más su gama de vehículos de nueva energía y siguió ofreciendo a los consumidores chinos productos y servicios acordes con los estándares mundiales de Mercedes-Benz. Por otro lado, Mercedes-Benz Fujian celebró su decimosexto aniversario y llevó la excelente calidad y el encanto de lujo del logo Estrella de Mercedes a más de 200.000 clientes chinos. Beijing Hyundai también lanzó oficialmente el “Plan 2025 hacia Nuevo”, que se centrará claramente en tres áreas principales: transformación del producto, renovación de la marca e innovación del servicio.' },
      { text: 'En el futuro, el Grupo BAIC seguirá centrándose en las necesidades de los clientes y el desarrollo tecnológico, promoverá la matriz de marcas para formar sinergias ascendentes, continuará ofreciendo a los consumidores productos y servicios de calidad y contribuirá a la construcción de la potencia automovilística de China.' }
    ]
  },

  'nuevo-baic-x55': {
    // En el original las 5 oraciones van en un solo <p> separadas por <br>,
    // no en párrafos separados (sin el margen extra de 14.4px entre ellas).
    titleSize: 40,
    titleWeight: 600,
    media: { type: 'full', src: nuevoX55CoverImg, aspect: '1346/757' },
    body: [
      { html: 'Oficialmente BAIC lanza el nuevo BAIC X55 para el territorio argentino. <br>El nuevo X55 se presenta un largo de 4,45 metros de largo y luce diseño renovado, con apariencia futurista. Equipa faros delanteros y luces diurnas LED, los faros posteriores también son LED. Su parrilla es nueva y muestra líneas más marcadas.<br>Tiene un motor de gasolina de origen Mitsubishi, con un turbocompresor, cuatro cilindros, 1,5 litros de cilindrada y una potencia máxima de 148 caballos. <br>La caja de cambios es manual de seis relaciones o automática de variador continuo (CVT). La tracción de la nueva BAIC X55 Honor es delantera. Cuenta pantalla multimedia de 9″ con acceso a todas las funciones, arranque sin llave, cámara posterior para retroceso, instrumentación con pantalla TFT, volante multifunción, asientos de cuero y muchos mas detalles.<br>En lo que se refiere a seguridad, incluye de serie seis airbags, control de tracción y estabilidad, anclajes ISOFIX, sensores de estacionamiento, faros antiniebla, sensor de luces, entre otros ítems de seguridad.' }
    ]
  },

  'baic-lider-en-autos-electricos-en-china': {
    // Esta nota usa una foto más chica (634x534), centrada (no a todo el ancho).
    titleSize: 40,
    titleWeight: 600,
    media: { type: 'full', src: baicLiderElectricosCoverImg, aspect: '634/534', maxWidth: 634 },
    body: [
      { html: '<strong>En las ventas acumuladas hasta agosto es primera en el mercado más grande del mundo; BAIC fabricará los autos eléctricos de Mercedes-Benz</strong>' },
      { text: 'BAIC, la marca china de autos premium y socia de Mercedes-Benz, sigue liderando las ventas de autos eléctricos en China, el mercado más grande del mundo.' },
      { text: 'Las ventas acumuladas entre enero y agosto del modelo eléctrico de BAIC EC-Series alcanzaron las 43.434 unidades, quedando en segundo lugar el BYD Qin, con 31.104 unidades y tercero el JAC iE/V con 25.850. Además, del modelo BAIC EX se vendieron entre enero y agosto 18.364 unidades. China es el mayor mercado de autos eléctricos del mundo (suma la mitad de las ventas del planeta) y se venden más modelos eléctricos que en Estados Unidos y la Unión Europea juntos.' },
      { text: 'BAIC es la primera marca en presentar en la Argentina un modelo totalmente eléctrico, el EX260, un crossover para cinco pasajeros, equipado con un motor eléctrico de 72 CV de potencia, que le permite alcanzar una velocidad máxima de 125 km/h. Gracias a su batería de 38 Kw/h de última generación tiene una autonomía de 250 kilómetros.' },
      { text: 'BAIC también comercializa en la Argentina los exitosos crossover Senova, X35 y X55, todos con motor naftero y un completo nivel de equipamiento, confort y seguridad.' },
      { text: 'Vale recordar que Daimler (Mercedes-Benz) y BAIC Motor anunciaron la inversión conjunta de 1.600 millones de euros para construir una nueva fábrica de autos eléctricos de la marca EQ de Mercedes.' }
    ]
  },

  'baic-senova': {
    // Foto mediana (1200x794), centrada. Todo el texto en un solo <p> con <br>.
    titleSize: 40,
    titleWeight: 600,
    media: { type: 'full', src: baicSenovaCoverImg, aspect: '1200/794', maxWidth: 1200 },
    body: [
      { html: 'Máximo confort, seguridad y un diseño joven y atractivo. Esas son las principales características del nuevo BAIC Senova, un crossover premiun deportivo y elegante que ya se comercializa en la Argentina.<br>Equipado con motor naftero 1.5 de 115 CV, y opciones de caja manual y automática, tiene tapizado de cuero y un completo equipamiento de serie que incluye, entre otras cosas, ABS, EDB, asistente al frenado de urgencia, control de estabilidad, anclajes Isofix, sensor de estacionamiento, cámara de retroceso, luces LED, tapizado de cuero, comandos al volante, techo solar, conectividad, pantalla touch de 7 pulgadas y puertos USB y HDMI.<br>Su relación precio/equipamiento y calidad es la mejor del segmento, lo que lo convierten en una de las mejores opciones del mercado.<br>El BAIC Senova tiene una garantía inédita en la Argentina de 7 años o 100.000 kilómetros.<br>Cabe recordar que BAIC es el socio estratégico de Mercedes-Benz (fabrica los modelos de la marca alemana en China) y es además uno de los mayores fabricantes de autos eléctricos de alta gama del mundo.<br>Ambos fabricantes, que son socios desde hace años, anunciaron en 2017 una inversión de 700 millones de euros para producir autos eléctricos (EV) y baterías. BAIC y Daimler sorprendieron este año con un nuevo anuncio: decidieron construir una nueva fábrica en Beijing con una inversión de 1.550 millones de euros para fabricar coches eléctricos de la marca eléctrica EQ de Mercedes.' }
    ]
  },

  'nuevos-concesionarios-de-baic': {
    // Foto centrada 734x796. Primer párrafo entero en negrita, otros con
    // fragmentos en negrita, un párrafo entero en negrita+cursiva ("Acerca de BAIC..."),
    // y un mini "subtítulo" en negrita ("Acerca de BAIC") que es solo texto, no un heading real.
    titleSize: 40,
    titleWeight: 600,
    media: { type: 'full', src: nuevosConcesionariosCoverImg, aspect: '734/796', maxWidth: 734 },
    body: [
      { html: '<strong>BAIC, la marca china de autos premium, sigue ampliando su presencia en la Argentina con la apertura de nuevos concesionarios en todo el país.</strong>' },
      { html: 'Acompañando el éxito de ventas de su familia de <strong>SUV X25, X35 y X55</strong>, ya están en funcionamiento los showrooms ubicados en Palermo, Núñez, Recoleta, Pilar, Avellaneda, Morón, Moreno y en las ciudades de La Plata, Trenque Lauquen, Concordia, Diamante (Entre Ríos), Córdoba, Rosario, Chaco, Salta y Ushuaia.' },
      { text: 'A esos locales, se sumarán próximamente los nuevos concesionarios ubicados en las ciudades de Tucumán, Munro, Villa Urquiza (CABA) y Mendoza. De este modo BAIC extiende su cobertura comercial y de servicios de posventa a todo el territorio argentino.' },
      { text: 'Cabe destacar que además de la familia de SUV, BAIC fue la primera automotriz en presentar un modelo totalmente eléctrico en la Argentina, el EV260, y que en los próximos meses está previsto el lanzamiento de nuevos modelos.' },
      { text: 'Por calidad y relación precio-producto, la familia de SUV X25, X35 y X55 son un éxito de ventas en la Argentina. Además, al moderno diseño y completo equipamiento de confort y seguridad, se le suma que todos los modelos de BAIC que se venden en el país tienen una garantía de 7 años o 100.000 kilómetros, inédita en el mercado local, lo que demuestra la confiabilidad de sus productos.' },
      { html: '<strong>Acerca de BAIC</strong>' },
      { html: '<strong><em>BAIC Motors es un gigante automotriz que se destaca por la calidad y la tecnología de avanzada de sus modelos. De hecho es el socio estratégico de Mercedes-Benz y fabrica en China los modelos Clase E de chasis largo, Clase C, el nuevo Clase A y los SUV Mercedes-Benz GLC y GLA.</em></strong>' },
      { html: 'Además, BAIC es <strong>líder mundial de ventas de vehículos totalmente eléctricos</strong>. En China, el mercado más grande del mundo de autos eléctricos, BAIC fue líder absoluto de ventas en 2017, con un total de 91.237 vehículos comercializados. También se quedó con récord mundial de ser el primer fabricante del planeta en superar las 10.000 ventas en un mes de un modelo totalmente eléctrico.' },
      { html: 'Esa enorme capacidad tecnológica y productiva del gigante chino sigue creciendo ya que a la inversión conjunta de <strong>BAIC y Mercedes-Benz de 700 millones de euros</strong> para producir autos eléctricos (EV) y baterías realizada en 2017, este año se sumó un nuevo anuncio: ambas compañías decidieron construir una nueva fábrica en Beijing con una inversión de 1.550 millones de euros para fabricar coches eléctricos de la marca eléctrica EQ de Mercedes-Benz.<br><br><strong>Más información en baic.com.ar</strong><br>Descarga de fotos: https://bit.ly/2Gul9LO' }
    ]
  },

  'baic-eu-5': {
    // Foto centrada (misma que la card de Novedades, 1559x1009). Subtítulo en negrita + copete en cursiva.
    titleSize: 40,
    titleWeight: 600,
    media: { type: 'full', src: baicEu5CoverImg, aspect: '1559/1009', maxWidth: 808 },
    body: [
      { html: '<strong>BAIC sorprende al mundo con su nuevo sedán de lujo eléctrico</strong>' },
      { text: 'Presentado en el Salón de Beijing, el EU 5 está equipado con un motor de 218 CV y una autonomía de 500 kilómetros. Con máximo confort y seguridad, ofrece conectividad total por comando de voz.', italic: true },
      { text: 'BAIC, la marca china premiun, sorprende al mundo desde el Salón de Beijing con la presentación de su nuevo sedán de lujo eléctrico EU 5, un vehículo equipado con un motor de 218 CV de potencia máxima que le permite acelerar de 0 a 100 km/h en 7,5 segundos y que tiene una autonomía de 500 kilómetros gracias a su batería de 54 Kwh.' },
      { text: 'Con un diseño elegante y deportivo, este sedán mide 4,65 metros de largo, 1,82 metros de ancho y 1.51 metro de alto, con una distancia entre ejes de 2,67 metros, lo que permitió el desarrollo de un interior amplio y confortable para cinco pasajeros adultos.' },
      { text: 'Con un interior de diseño moderno, que incorpora detalles de madera y metal, dispone de una pantalla táctil multifunción y conectividad total de última generación por comandos de voz.' },
      { text: 'Con el BAIC EU 5, la marca da un paso más consolidándose como la más importante del mundo y ratificando su expansión global.' },
      { text: 'Cabe recordar que, a poco de comenzar sus operaciones en la Argentina, donde comercializa con gran éxito la familia de crossover nafteros X25, X35 y X55, BAIC marcó un hito histórico al presentar en el país el primer vehículo totalmente eléctrico, el BAIC EX260.' }
    ]
  },

  'baic-apuesta-al-futuro-electrico': {
    // Foto centrada 834.5x667.6. Todo el texto en un solo <p> con <br>, sin formato.
    titleSize: 40,
    titleWeight: 600,
    media: { type: 'full', src: baicFuturoElectricoCoverImg, aspect: '834.5/667.6', maxWidth: 835 },
    body: [
      { html: 'BAIC, la marca china de autos premiun que presentó el primer auto eléctrico en la Argentina, trabaja en el desarrollo de una filial en Beijing para la producción anual de 100.000 conjuntos de sistema de conducción de vehículos eléctricos.<br>Con entregas de 103.199 automóviles eléctricos (NEV) en China en 2017, BAIC lideró el segmento de vehículos eléctricos puros durante cinco años consecutivos, y sus ventas fueron un 97% más altas que en 2016.<br>La marca china es socia de Mercedes-Benz y ambas compañías anunciaron hace pocas semanas una inversión de 1550 millones de euros para construir una nueva fábrica de autos eléctricos en China con la marca de la estrella.<br>BAIC también desarrolló un sistema llamado e-Motion Drive que junto con otros avances será parte del equipamiento de los próximos modelos de energías alternativas.<br>La marca comercializa en la Argentina su familia de crossover X25, X35 y X55, todos con motores nafteros y alto nivel de equipamiento, con opciones de caja manual y automática.<br>BAIC también marcó un hito en la Argentina, al ser la primera marca en presentar un modelo totalmente eléctrico en el país, el EX260. Tiene medidas similares al X25 pero está equipado con un motor eléctrico de 72 CV de potencia, que le permite alcanzar una velocidad máxima de 125 km/h. Gracias a su batería de 38 Kw/h de última generación tiene una autonomía de 250 kilómetros.' }
    ]
  }
}
