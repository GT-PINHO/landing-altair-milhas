import { Container } from '@/components/ui/Container'
import { CtaButton } from '@/components/ui/CtaButton'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { sectionIds } from '@/lib/config'
import { offer } from '@/lib/content'

export function Offer() {
  return (
    <Section id={sectionIds.offer} surface="dark">
      <Container>
        <SectionHeading
          eyebrow={offer.eyebrow}
          title={offer.title}
          intro={offer.intro}
          surface="dark"
        />

        <ul className="mt-14 grid gap-px overflow-hidden rounded-card border border-ivory-100/10 bg-ivory-100/10 sm:grid-cols-2">
          {offer.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.09} className="h-full bg-navy-800">
              <li className="flex h-full flex-col gap-4 p-7 sm:flex-row sm:gap-5 md:p-9">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>

                <div>
                  <h3 className="text-lg font-semibold leading-snug text-ivory">{item.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ivory-300/80">
                    {item.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

        {/* CTA secundário */}
        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <CtaButton label={offer.ctaLabel} source="oferta" variant="onDark" size="lg" />
            <p className="text-sm text-ivory-300/70">{offer.ctaHelper}</p>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
