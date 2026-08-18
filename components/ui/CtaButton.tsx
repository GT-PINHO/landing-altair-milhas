import { BrandIcon } from '@/components/ui/BrandIcon'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

type CtaVariant = 'primary' | 'onDark' | 'onLight'

interface CtaButtonProps {
  label: string
  /** Identifica a origem do CTA no atributo data-cta (ex.: "hero", "oferta"). */
  source: string
  variant?: CtaVariant
  size?: 'md' | 'lg'
  /** Sobrescreve a mensagem pré-preenchida do WhatsApp para este CTA. */
  message?: string
  className?: string
}

const variantClasses: Record<CtaVariant, string> = {
  primary:
    'bg-gold text-navy-900 shadow-gold hover:bg-gold-300 hover:-translate-y-0.5 active:translate-y-0',
  onDark:
    'border border-gold/70 text-gold-100 hover:bg-gold hover:text-navy-900 hover:border-gold',
  onLight:
    'border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-ivory',
}

const sizeClasses = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-4 text-base sm:px-9',
} as const

/**
 * CTA de WhatsApp.
 * Não embarca nenhum script de rastreamento: cada botão apenas se identifica pelo
 * atributo `data-cta`, que o cliente pode usar para plugar o rastreamento dele.
 */
export function CtaButton({
  label,
  source,
  variant = 'primary',
  size = 'lg',
  message,
  className = '',
}: CtaButtonProps) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={source}
      className={[
        'group inline-flex items-center justify-center gap-2.5 rounded-pill font-sans font-semibold',
        'tracking-wide transition-all duration-300 ease-premium',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(' ')}
    >
      <BrandIcon name="whatsapp" className="h-[1.15em] w-[1.15em] shrink-0" />
      <span>{label}</span>
      <span
        aria-hidden="true"
        className="translate-x-0 transition-transform duration-300 ease-premium group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </a>
  )
}
