import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { sectionIds } from '@/lib/config'
import { pain } from '@/lib/content'

export function PainPoints() {
  return (
    <Section id={sectionIds.pain} surface="light">
      <Container>
        <SectionHeading eyebrow={pain.eyebrow} title={pain.title} intro={pain.intro} />

        <ul className="mt-14 grid gap-6 md:grid-cols-3 md:gap-7">
          {pain.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.1} className="h-full">
              <li className="group flex h-full flex-col rounded-card border border-navy/10 bg-white p-7 shadow-card transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-gold/40 hover:shadow-card-hover md:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors duration-500 group-hover:bg-gold/15 group-hover:text-gold-700">
                  <Icon name={card.icon} className="h-6 w-6" />
                </span>

                <h3 className="mt-6 text-display-sm">{card.title}</h3>

                <p className="mt-4 text-base leading-relaxed text-navy-500">{card.body}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
