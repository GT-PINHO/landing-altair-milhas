import type { Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/ui/Container'
import { CtaButton } from '@/components/ui/CtaButton'

export const metadata: Metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main
      data-surface="dark"
      className="flex min-h-[100svh] items-center bg-navy-depth text-ivory-100"
    >
      <Container className="py-section-md text-center">
        <p className="text-eyebrow uppercase text-gold-200">Erro 404</p>

        <h1 className="mx-auto mt-6 max-w-measure text-display-lg text-ivory">
          Essa rota não existe. Mas a sua ainda pode ser planejada.
        </h1>

        <p className="mx-auto mt-6 max-w-measure-sm text-body-lg text-ivory-300/80">
          A página que você tentou abrir não está aqui. Volte para o início ou fale comigo
          diretamente no WhatsApp.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaButton label="Falar no WhatsApp" source="pagina-404" size="md" />

          <Link
            href="/"
            className="rounded-pill border border-ivory-100/25 px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            Voltar para o início
          </Link>
        </div>
      </Container>
    </main>
  )
}
