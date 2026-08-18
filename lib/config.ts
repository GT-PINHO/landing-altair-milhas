/**
 * Fonte única de verdade para configuração de ambiente e identidade do site.
 * Nenhum componente lê process.env diretamente.
 */

/** Número de WhatsApp em formato internacional, somente dígitos. */
export const whatsappNumber: string = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '').replace(
  /\D/g,
  '',
)

/** Mensagem padrão pré-preenchida no WhatsApp (sobrescrevível por variável de ambiente). */
export const whatsappDefaultMessage: string =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE?.trim() ||
  'Olá, Altair! Sou da área da saúde e quero entender como transformar os gastos da minha clínica em passagens de classe executiva.'

/** URL canônica de produção (usada em SEO, Open Graph e sitemap). */
export const siteUrl: string = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.altairdasmilhas.com.br'
).replace(/\/$/, '')

export const site = {
  brand: 'Altair das Milhas',
  authorName: 'Altair',
  title: 'Altair | Milhas para dentistas: sua clínica paga sua classe executiva',
  shortTitle: 'Altair | Milhas para Dentistas',
  description:
    'Consultoria de milhas aéreas para dentistas e profissionais da saúde. Analiso os gastos recorrentes da sua clínica e mostro como transformá-los em passagens de classe executiva. Diagnóstico gratuito.',
  keywords: [
    'milhas para dentistas',
    'milhas aéreas clínica odontológica',
    'pontos cartão empresarial saúde',
    'consultoria de milhas',
    'passagem classe executiva com milhas',
    'gestão financeira para clínicas',
  ],
  locale: 'pt_BR',
  instagram: {
    handle: '@altairdasmilhas',
    url: 'https://www.instagram.com/altairdasmilhas',
  },
  legal:
    'Conteúdo educacional. Resultados podem variar conforme o volume de gastos de cada clínica.',
} as const

/**
 * Mídia do hero.
 * O vídeo é opcional: enquanto o arquivo não existir em /public/video/hero.mp4,
 * o componente faz fallback silencioso para o poster + gradiente institucional.
 */
export const heroMedia = {
  videoSrc: '/video/hero.mp4',
  videoType: 'video/mp4',
  posterSrc: '/images/hero-poster.jpg',
} as const

/** Âncoras de navegação interna (centralizadas para não quebrar links). */
export const sectionIds = {
  hero: 'inicio',
  pain: 'diagnostico',
  method: 'metodo',
  proof: 'resultados',
  about: 'sobre',
  offer: 'consultoria',
  faq: 'faq',
  finalCta: 'contato',
} as const
