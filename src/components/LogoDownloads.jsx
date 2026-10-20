import {
  downloadPngFile,
  downloadSvgFile,
  lockupSvg,
  markSvg,
} from '../brand/logoAssets'

const files = [
  {
    title: 'Emblem — colour',
    note: 'NB mark on a transparent field. Use on light backgrounds.',
    svg: () => markSvg({ reverse: false }),
    name: 'NABE-emblem-colour',
    png: [1000, 840],
  },
  {
    title: 'Emblem — reverse',
    note: 'NB mark on charcoal. Use on dark backgrounds.',
    svg: () => markSvg({ reverse: true }),
    name: 'NABE-emblem-reverse',
    png: [1000, 840],
  },
  {
    title: 'Lockup — colour',
    note: 'Emblem + NABE + legal name on paper.',
    svg: () => lockupSvg({ reverse: false }),
    name: 'NABE-lockup-colour',
    png: [1900, 500],
  },
  {
    title: 'Lockup — reverse',
    note: 'Emblem + NABE + legal name on charcoal.',
    svg: () => lockupSvg({ reverse: true }),
    name: 'NABE-lockup-reverse',
    png: [1900, 500],
  },
]

export default function LogoDownloads() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Downloads</p>
          <h2>Logo files</h2>
          <p>
            Download the emblem and the full lockup as SVG (for print and
            editing) or PNG (for presentations and web).
          </p>
        </div>
        <div className="download-grid">
          {files.map((file) => (
            <article className="download-card" key={file.name}>
              <div
                className={`download-preview${file.name.includes('reverse') ? ' is-dark' : ''}`}
                dangerouslySetInnerHTML={{ __html: file.svg() }}
              />
              <h3>{file.title}</h3>
              <p>{file.note}</p>
              <div className="download-actions">
                <button
                  className="btn btn-navy"
                  type="button"
                  onClick={() => downloadSvgFile(`${file.name}.svg`, file.svg())}
                >
                  SVG
                </button>
                <button
                  className="btn btn-gold"
                  type="button"
                  onClick={() =>
                    downloadPngFile(
                      `${file.name}.png`,
                      file.svg(),
                      file.png[0],
                      file.png[1],
                    )
                  }
                >
                  PNG
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
