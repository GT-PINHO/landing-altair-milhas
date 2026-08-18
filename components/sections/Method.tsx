import { Container } from '@/components/ui/Container'
import { Icon } from '@/components/ui/Icon'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { sectionIds } from '@/lib/config'
import { method } from '@/lib/content'

export function Method() {
  return (
    <Section id={sectionIds.method} surface="deep">
      <Container>
        <SectionHeading
          eyebrow={method.eyebrow}
          title={method.title}
          intro={method.intro}
          surface="dark"
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {method.steps.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.12} className="relative">
              <li className="relative flex h-full flex-col">
                {/* Filete conectando este passo ao próximo: começa depois do número
                    e avança sobre o gap da grade, sem cruzar nenhum texto. */}
                {index < method.steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-[7rem] right-[-2rem] top-7 hidden h-px bg-gradient-to-r from-gold/50 to-gold/10 md:block"
                  />
                ) : null}

                <div className="flex items-center gap-4">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-navy-800 text-gold shadow-inset">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <span className="relative z-10 font-serif text-3xl text-gold/45">{item.step}</span>
                </div>

                <h3 className="mt-7 text-display-sm text-ivory">{item.title}</h3>

                <p className="mt-4 text-[0.975rem] leading-relaxed text-ivory-300/80">
                  {item.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
