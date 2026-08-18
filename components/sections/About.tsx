import { Container } from '@/components/ui/Container'
import { PlaceholderFrame } from '@/components/ui/PlaceholderFrame'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { sectionIds } from '@/lib/config'
import { about } from '@/lib/content'

export function About() {
  return (
    <Section id={sectionIds.about} surface="light">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Foto de autoridade: substituir pelo retrato profissional real */}
          <Reveal direction="right" className="lg:col-span-5">
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 hidden h-full w-full rounded-card border border-gold/40 lg:block"
              />
              <PlaceholderFrame
                label={about.photoLabel}
                ratio="portrait"
                className="relative bg-ivory-200"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-eyebrow uppercase text-gold-700">{about.eyebrow}</p>

              <h2 className="mt-5 text-display-md">{about.title}</h2>
            </Reveal>

            <div className="mt-7 space-y-5">
              {about.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 24)} delay={0.06 * index}>
                  <p className="text-[1.0125rem] leading-relaxed text-navy-500">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <ul className="mt-9 space-y-3 border-t border-navy/10 pt-7">
                {about.credentials.map((credential) => (
                  <li key={credential} className="flex items-start gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-gold-600"
                    >
                      <path d="M5 12.5l4.2 4.2L19 7" />
                    </svg>
                    <span className="text-[0.95rem] text-navy-700">{credential}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}
