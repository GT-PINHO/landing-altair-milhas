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
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.97.24 2.67.51.72.28 1.33.66 1.94 1.27.61.61.99 1.22 1.27 1.94.27.7.46 1.5.51 2.67.06 1.25.07 1.65.07 4.85s-.01 3.6-.07 4.85c-.05 1.17-.24 1.97-.51 2.67a5.38 5.38 0 01-1.27 1.94c-.61.61-1.22.99-1.94 1.27-.7.27-1.5.46-2.67.51-1.25.06-1.65.07-4.85.07s-3.6-.01-4.85-.07c-1.17-.05-1.97-.24-2.67-.51a5.38 5.38 0 01-1.94-1.27 5.38 5.38 0 01-1.27-1.94c-.27-.7-.46-1.5-.51-2.67C2.21 15.6 2.2 15.2 2.2 12s.01-3.6.07-4.85c.05-1.17.24-1.97.51-2.67.28-.72.66-1.33 1.27-1.94A5.38 5.38 0 015.99 1.27c.7-.27 1.5-.46 2.67-.51C9.91 2.2 10.31 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.73.07-.94.04-1.45.2-1.79.33-.45.18-.77.39-1.11.73-.34.34-.55.66-.73 1.11-.13.34-.29.85-.33 1.79C3.25 9.26 3.24 9.6 3.24 12s.01 2.74.07 3.97c.04.94.2 1.45.33 1.79.18.45.39.77.73 1.11.34.34.66.55 1.11.73.34.13.85.29 1.79.33 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c.94-.04 1.45-.2 1.79-.33.45-.18.77-.39 1.11-.73.34-.34.55-.66.73-1.11.13-.34.29-.85.33-1.79.06-1.23.07-1.58.07-3.97s-.01-2.74-.07-3.97c-.04-.94-.2-1.45-.33-1.79a2.98 2.98 0 00-.73-1.11 2.98 2.98 0 00-1.11-.73c-.34-.13-.85-.29-1.79-.33C15.5 4.01 15.15 4 12 4zm0 3.05a4.95 4.95 0 110 9.9 4.95 4.95 0 010-9.9zm0 1.8a3.15 3.15 0 100 6.3 3.15 3.15 0 000-6.3zm6.3-2.02a1.16 1.16 0 11-2.32 0 1.16 1.16 0 012.32 0z" />
              </svg>
              <span>{finalCta.instagramLabel}</span>
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
