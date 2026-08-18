import { Container } from '@/components/ui/Container'
import { PlaceholderFrame } from '@/components/ui/PlaceholderFrame'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { sectionIds } from '@/lib/config'
import { proof } from '@/lib/content'

/**
 * Prova social.
 * A estrutura está pronta (foto, citação, nome, cargo), porém o conteúdo é
 * intencionalmente placeholder: nada aqui deve ir ao ar sem depoimento real
 * e autorização de uso de imagem do cliente.
 */
export function SocialProof() {
  return (
    <Section id={sectionIds.proof} surface="muted">
      <Container>
        <SectionHeading eyebrow={proof.eyebrow} title={proof.title} intro={proof.intro} />

        {/* Depoimentos */}
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {proof.testimonials.map((item, index) => (
            <Reveal key={`depoimento-${index}`} delay={index * 0.1} className="h-full">
              <li className="h-full">
                <figure className="flex h-full flex-col rounded-card border border-navy/10 bg-white p-7 shadow-card">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-7 w-7 shrink-0 text-gold/60"
                    fill="currentColor"
                  >
                    <path d="M9.6 5.5C6.5 6.9 4.6 9.7 4.6 13v5.5h6V13H7.8c.1-2 1.2-3.6 3.2-4.6zm9.8 0c-3.1 1.4-5 4.2-5 7.5v5.5h6V13h-2.8c.1-2 1.2-3.6 3.2-4.6z" />
                  </svg>

                  <blockquote className="mt-5 flex-1 text-[1.05rem] leading-relaxed text-navy-700">
                    {item.quote}
                  </blockquote>

                  <figcaption className="mt-7 flex items-center gap-4 border-t border-navy/10 pt-5">
                    <PlaceholderFrame
                      label={item.photoLabel}
                      ratio="circle"
                      className="h-14 w-14 shrink-0 !p-1 [&_span:last-child]:hidden"
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-navy">{item.name}</p>
                      <p className="mt-0.5 truncate text-xs text-navy-400">{item.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </Reveal>
          ))}
        </ul>

        {/* Galeria de resultados reais */}
        <div className="mt-20">
          <Reveal className="mx-auto max-w-measure text-center">
            <h3 className="text-display-sm">{proof.gallery.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-400">{proof.gallery.caption}</p>
          </Reveal>

          <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {proof.gallery.slots.map((label, index) => (
              <Reveal key={label} delay={index * 0.08}>
                <li>
                  <PlaceholderFrame label={label} ratio="square" />
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}
