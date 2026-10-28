import logo from '../components/icons/icon.png'
import { aboutHero } from '../data/aboutHero.js'

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" style={aboutHero ? { backgroundImage: `url(${aboutHero})` } : undefined}>
        {!aboutHero && <div className="ph">Foto institucional BAIC</div>}
        <div className="page-hero__inner">
          <h1>Nosotros</h1>
        </div>
      </section>

      <div className="container about-page">
        <p className="about-page__lead">
          Después de la llegada de las marcas chinas al país, de fabricantes generalistas, se sumó BAIC, la primera
          marca china de automóviles de lujo.
        </p>

        <img className="about-page__logo" src={logo} alt="BAIC" />

        <p>
          Después de la llegada de las marcas chinas al país, de fabricantes generalistas, se sumó BAIC, la primera
          marca china de automóviles de lujo.
        </p>
        <p>
          BAIC comenzó su actividad en la Argentina y desarrollará una red oficial de 40 concesionarios distribuidos
          en todo el país. Cada uno de ellos será un centro integral, con salón de ventas y áreas de servicios. La
          atención de posventa y la satisfacción del cliente, son aspectos claves en la filosofía de la empresa. La
          nueva marca premium china, ofrece vehículos de alta gama, incluyendo modelos totalmente eléctricos,
          poniéndose así en la vanguardia de los autos de alta tecnología.
        </p>
        <p>
          Los automóviles de BAIC se caracterizan por un completísimo equipamiento, materiales de altísima calidad,
          terminaciones de lujo, los más modernos sistemas de seguridad y un precio competitivo frente a sus rivales
          de cada segmento, lo que es posible por la escala de producción de China.
        </p>
        <p>
          Todos los modelos BAIC son claramente superiores en la relación precio/producto comparados con la
          totalidad de modelos con los que competirá. Además, la altísima calidad de fabricación permite que BAIC
          ofrezca en la Argentina una garantía de 7 años, inédita en el país y que equipara a las mejores garantías
          que se ofrecen hoy en Europa.
        </p>
      </div>
    </>
  )
}
