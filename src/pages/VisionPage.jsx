import { visionSections } from '../data/visionSections.js'

export default function VisionPage() {
  return (
    <>
      {visionSections.map((section) => (
        <section
          key={section.id}
          className={`vision-section ${section.align === 'right' ? 'vision-section--right' : ''}`}
          style={section.image ? { backgroundImage: `url(${section.image})` } : undefined}
        >
          {!section.image && <div className="ph">{section.title}</div>}
          <div className="vision-section__inner">
            <h2>{section.title}</h2>
            <p>{section.subtitle}</p>
          </div>
        </section>
      ))}
    </>
  )
}
