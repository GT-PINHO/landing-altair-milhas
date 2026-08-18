import { Icon } from '@/components/ui/Icon'

interface PlaceholderFrameProps {
  /** Texto do placeholder: deve deixar explícito o que entra no lugar. */
  label: string
  /** Proporção do quadro. `square` para retratos, `portrait` para foto de autoridade. */
  ratio?: 'square' | 'portrait' | 'landscape' | 'circle'
  surface?: 'light' | 'dark'
  className?: string
}

const ratioClasses = {
  square: 'aspect-square rounded-card',
  portrait: 'aspect-[4/5] rounded-card',
  landscape: 'aspect-[16/10] rounded-card',
  circle: 'aspect-square rounded-full',
} as const

/**
 * Espaço reservado para mídia real (fotos do Altair, depoimentos, prints de emissão).
 * Renderiza um quadro estilizado em vez de um <img> apontando para arquivo inexistente:
 * assim a página nunca mostra imagem quebrada antes de o cliente enviar o material.
 *
 * Ao substituir, troque este componente por <Image /> do next/image com `alt` descritivo.
 */
export function PlaceholderFrame({
  label,
  ratio = 'square',
  surface = 'light',
  className = '',
}: PlaceholderFrameProps) {
  const isDark = surface === 'dark'

  return (
    <div
      data-placeholder="media"
      role="img"
      aria-label={`Espaço reservado para mídia: ${label}`}
      className={[
        'flex flex-col items-center justify-center gap-3 border border-dashed p-6 text-center',
        ratioClasses[ratio],
        isDark
          ? 'border-gold/35 bg-navy-800/60 text-ivory-300/80'
          : 'border-navy/20 bg-ivory-200/70 text-navy-400',
        className,
      ].join(' ')}
    >
      <span
        className={[
          'flex h-10 w-10 items-center justify-center rounded-full',
          isDark ? 'bg-gold/10 text-gold' : 'bg-navy/5 text-navy-300',
        ].join(' ')}
      >
        <Icon name="plane" className="h-5 w-5" />
      </span>
      <span className="max-w-[22ch] text-xs font-medium leading-snug tracking-wide">{label}</span>
    </div>
  )
}
