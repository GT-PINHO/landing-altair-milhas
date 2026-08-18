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

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer data-surface="dark" className="bg-navy-900 text-ivory-300/70">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Marca */}
          <div className="md:col-span-5">
            <p className="font-serif text-xl text-ivory">{site.brand}</p>
            <p className="mt-3 max-w-measure-sm text-sm leading-relaxed">
              Milhas aéreas e pontos para dentistas e profissionais da saúde: o gasto que a sua
              clínica já tem, transformado em viagem de alto padrão.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold transition-colors hover:text-gold-200"
              >
                WhatsApp
              </a>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Instagram {site.instagram.handle}
              </a>
            </div>
          </div>

          {/* Navegação interna */}
          <nav aria-label="Seções da página" className="md:col-span-4 md:col-start-9">
            <p className="text-eyebrow uppercase text-ivory-300/50">Navegar</p>
            <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Aviso legal + assinatura */}
        <div className="mt-12 flex flex-col gap-4 border-t border-ivory-100/10 pt-7 text-xs leading-relaxed md:flex-row md:items-center md:justify-between">
          <p className="max-w-measure text-ivory-300/60">{site.legal}</p>
          <p className="text-ivory-300/50">
            &copy; {year} {site.brand}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}
