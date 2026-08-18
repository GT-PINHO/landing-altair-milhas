import { Reveal } from '@/components/ui/Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  intro?: string
  surface?: 'light' | 'dark'
  align?: 'left' | 'center'
  className?: string
}

/**
 * Cabeçalho editorial padrão das seções: eyebrow com filete dourado,
 * título serif e linha de apoio. Mantém o ritmo tipográfico igual em toda a página.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  surface = 'light',
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isDark = surface === 'dark'
  const isCentered = align === 'center'

  return (
    <Reveal
      className={[
        isCentered ? 'max-w-measure text-left md:mx-auto md:text-center' : 'max-w-measure text-left',
        className,
      ].join(' ')}
    >
      <p className={['text-eyebrow uppercase', isDark ? 'text-gold-200' : 'text-gold-700'].join(' ')}>
        {eyebrow}
      </p>

      <h2
        className={[
          'mt-5 text-display-md',
          isDark ? 'text-ivory' : 'text-navy',
        ].join(' ')}
      >
        {title}
      </h2>

      {intro ? (
        <p
          className={[
            'mt-5 text-body-lg',
            isDark ? 'text-ivory-300/85' : 'text-navy-500',
          ].join(' ')}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  )
}
