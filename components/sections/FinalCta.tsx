import { BrandIcon } from '@/components/ui/BrandIcon'
import { Container } from '@/components/ui/Container'
import { CtaButton } from '@/components/ui/CtaButton'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { sectionIds, site } from '@/lib/config'
import { finalCta } from '@/lib/content'

export function FinalCta() {
  return (
    <Section id={sectionIds.finalCta} surface="deep" className="overflow-hidden">
      {/* Halo dourado sutil ao fundo, sem imagem extra para carregar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[42rem] max-w-none -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
      />

      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-eyebrow uppercase text-gold-200">{finalCta.eyebrow}</p>

          <h2 className="mt-6 text-display-lg text-ivory">{finalCta.title}</h2>

          <p className="mx-auto mt-6 max-w-measure text-body-lg text-ivory-300/85">
            {finalCta.body}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <CtaButton label={finalCta.ctaLabel} source="cta-final" size="lg" />

            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-pill border border-ivory-100/25 px-6 py-4 text-sm font-semibold text-ivory-100 transition-all duration-300 ease-premium hover:border-gold hover:text-gold"
            >
              <BrandIcon name="instagram" className="h-5 w-5" />
              <span>{finalCta.instagramLabel}</span>
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
