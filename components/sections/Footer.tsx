import { BrandIcon } from '@/components/ui/BrandIcon'
import { Container } from '@/components/ui/Container'
import { sectionIds, site } from '@/lib/config'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

const navLinks = [
  { label: 'O ponto cego', href: `#${sectionIds.pain}` },
  { label: 'O método', href: `#${sectionIds.method}` },
  { label: 'Resultados', href: `#${sectionIds.proof}` },
  { label: 'Sobre o Altair', href: `#${sectionIds.about}` },
  { label: 'Consultoria', href: `#${sectionIds.offer}` },
  { label: 'Dúvidas', href: `#${sectionIds.faq}` },
] as const

/** Rótulo das colunas do rodapé, no mesmo padrão dos eyebrows das seções. */
function ColumnLabel({ children }: { children: string }) {
  return <p className="text-eyebrow uppercase text-gold-200">{children}</p>
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer data-surface="dark" className="bg-navy-900 text-ivory-300/80">
      <Container className="pb-10 pt-16">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Marca */}
          <div className="md:col-span-5">
            <p className="font-serif text-2xl leading-none text-ivory">{site.brand}</p>

            <p className="mt-5 max-w-measure-sm text-sm leading-relaxed">
              Milhas aéreas e pontos para dentistas e profissionais da saúde: o gasto que a sua
              clínica já tem, transformado em viagem de alto padrão.
            </p>
          </div>

          {/* Navegação interna */}
          <nav aria-label="Seções da página" className="md:col-span-3">
            <ColumnLabel>Navegar</ColumnLabel>

            <ul className="mt-6 space-y-3.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato: cada canal com ícone, rótulo e o destino explícito */}
          <div className="md:col-span-4">
            <ColumnLabel>Fale comigo</ColumnLabel>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory-100/15 text-gold transition-all duration-300 ease-premium group-hover:border-gold group-hover:bg-gold group-hover:text-navy-900">
                    <BrandIcon name="whatsapp" className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-ivory transition-colors duration-300 group-hover:text-gold">
                      WhatsApp
                    </span>
                    <span className="block text-xs text-ivory-300/65">
                      Diagnóstico gratuito, direto comigo
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivory-100/15 text-gold transition-all duration-300 ease-premium group-hover:border-gold group-hover:bg-gold group-hover:text-navy-900">
                    <BrandIcon name="instagram" className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-ivory transition-colors duration-300 group-hover:text-gold">
                      Instagram
                    </span>
                    <span className="block truncate text-xs text-ivory-300/65">
                      {site.instagram.handle}
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior: aviso legal, assinatura e atalho para o topo */}
        <div className="mt-14 border-t border-ivory-100/10 pt-7">
          <div className="flex flex-col gap-5 text-xs leading-relaxed md:flex-row md:items-start md:justify-between md:gap-10">
            <p className="max-w-measure text-ivory-300/60">{site.legal}</p>

            <div className="flex shrink-0 items-center gap-6">
              <p className="text-ivory-300/50">
                &copy; {year} {site.brand}
              </p>

              <a
                href={`#${sectionIds.hero}`}
                className="group inline-flex items-center gap-2 text-ivory-300/60 transition-colors duration-300 hover:text-gold"
              >
                <span>Voltar ao topo</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform duration-300 ease-premium group-hover:-translate-y-0.5"
                >
                  <path d="M12 19V5M6.5 10.5L12 5l5.5 5.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
