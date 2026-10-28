import x35 from '../assets/images/models/x35.png'
import x55ii from '../assets/images/models/x55-ii.png'
import x55plus from '../assets/images/models/x55-plus.webp'
import bj30 from '../assets/images/models/bj30-4x4.png'
import bj40plus from '../assets/images/models/bj40-plus.png'
import bj60 from '../assets/images/models/bj60.webp'
import u5plus from '../assets/images/models/u5-plus.png'
import eu5 from '../assets/images/models/eu5.png'
import arcfoxT1 from '../assets/images/arcfox/arcfox-t1.png'
import arcfoxS5 from '../assets/images/arcfox/arcfox-s5.png'
import arcfoxT5 from '../assets/images/arcfox/arcfox-t5.png'
import arcfoxKaolaS from '../assets/images/arcfox/arcfox-kaola-s.png'

// Centro de descargas: fotos y videos de prensa por modelo (contenido real de baic.com.ar/centro-de-descargas).
// `url: null` = todavía no tenemos la carpeta de Drive con material de prensa para ese modelo;
// el botón queda visible pero sin acción hasta que se cargue el link real.
export const downloads = [
  { id: 'x35', name: 'X35', brand: 'BAIC', image: x35, url: 'https://drive.google.com/drive/folders/1nbHGHF1gq8MsjXjIYUSyGR0e0HN6lvtX?usp=sharing' },
  { id: 'x55-ii', name: 'X55 II', brand: 'BAIC', image: x55ii, url: 'https://drive.google.com/drive/folders/1RICHi7I175Kr-rmibiZMkb5HYwz32PJo?usp=sharing' },
  { id: 'x55-plus', name: 'X55 PLUS', brand: 'BAIC', image: x55plus, url: 'https://drive.google.com/drive/folders/1H4IcuC1cvt03Sy5kuh-I8I3pShjRi8HF?usp=sharing' },
  { id: 'bj30', name: 'BJ30', brand: 'BAIC', image: bj30, url: 'https://drive.google.com/drive/folders/1fKJjX4MmdbUF10No6tk7YWcKtQmx1cAx?usp=sharing' },
  { id: 'bj40-plus', name: 'BJ40 PLUS', brand: 'BAIC', image: bj40plus, url: 'https://drive.google.com/drive/folders/1otCXBpqVWG4sUEb8-nlkj-sxsuEj5lay?usp=sharing' },
  { id: 'bj60', name: 'BJ60', brand: 'BAIC', image: bj60, url: 'https://drive.google.com/drive/folders/1Y8DdiCJPwKK2cEacFe6XESrX5mCyUTy7?usp=sharing' },
  { id: 'u5-plus', name: 'U5 PLUS', brand: 'BAIC', image: u5plus, url: 'https://drive.google.com/drive/folders/10X-lbBuQeV4jj_lE-G--YcnbCEzOdrzj?usp=sharing' },
  { id: 'eu5', name: 'EU5', brand: 'BAIC', image: eu5, url: 'https://drive.google.com/drive/folders/1lZvpeZrBccZD0WR8TXGoV3SWTcQ1tSA2?usp=sharing' },
  { id: 'arcfox-t1', name: 'ARCFOX T1', brand: 'ARCFOX', image: arcfoxT1, url: null },
  { id: 'arcfox-s5', name: 'ARCFOX S5', brand: 'ARCFOX', image: arcfoxS5, url: null },
  { id: 'arcfox-t5', name: 'ARCFOX T5', brand: 'ARCFOX', image: arcfoxT5, url: null },
  { id: 'arcfox-kaola-s', name: 'ARCFOX KAOLA S', brand: 'ARCFOX', image: arcfoxKaolaS, url: null }
]
