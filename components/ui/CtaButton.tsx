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
      {/* Ícone do WhatsApp desenhado localmente para não carregar biblioteca externa */}
      <svg viewBox="0 0 24 24" className="h-[1.15em] w-[1.15em] shrink-0" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.02h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.04-.19-.31a8.19 8.19 0 01-1.26-4.36c0-4.54 3.7-8.23 8.23-8.23 2.2 0 4.26.86 5.81 2.41a8.16 8.16 0 012.41 5.82c0 4.54-3.7 8.22-8.23 8.22zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29z" />
      </svg>
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
