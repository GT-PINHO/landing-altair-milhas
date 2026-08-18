import { About } from '@/components/sections/About'
import { Faq } from '@/components/sections/Faq'
import { FinalCta } from '@/components/sections/FinalCta'
import { Footer } from '@/components/sections/Footer'
import { Hero } from '@/components/sections/Hero'
import { Method } from '@/components/sections/Method'
import { Offer } from '@/components/sections/Offer'
import { PainPoints } from '@/components/sections/PainPoints'
import { SocialProof } from '@/components/sections/SocialProof'
import { site, siteUrl } from '@/lib/config'
import { faq } from '@/lib/content'

/**
 * Dados estruturados (schema.org).
 * FAQPage habilita o rich result de perguntas no Google; ProfessionalService
 * descreve o negócio. Sem métrica inventada: só o que é verificável.
 */
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#negocio`,
      name: site.brand,
      description: site.description,
      url: siteUrl,
      areaServed: { '@type': 'Country', name: 'Brasil' },
      availableLanguage: 'pt-BR',
      sameAs: [site.instagram.url],
      founder: { '@type': 'Person', name: site.authorName },
      audience: {
        '@type': 'Audience',
        audienceType: 'Dentistas e profissionais da saúde',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: faq.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD estático gerado no servidor a partir do próprio conteúdo da página
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main id="conteudo">
        <Hero />
        <PainPoints />
        <Method />
        <SocialProof />
        <About />
        <Offer />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
