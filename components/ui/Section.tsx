import type { ReactNode } from 'react'

export type Surface = 'light' | 'muted' | 'dark' | 'deep'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  /** Define a paleta do bloco. `dark`/`deep` invertem também o anel de foco. */
  surface?: Surface
  /** Espaçamento vertical: `lg` para blocos-âncora, `md` para blocos de apoio. */
  spacing?: 'md' | 'lg' | 'none'
  /** Rótulo acessível quando a seção não tem um heading visível próprio. */
  ariaLabel?: string
}

const surfaceClasses: Record<Surface, string> = {
  light: 'bg-ivory text-navy-800',
  muted: 'bg-ivory-200 text-navy-800',
  dark: 'bg-navy text-ivory-100',
  deep: 'bg-navy-depth text-ivory-100',
}

const spacingClasses = {
  none: '',
  md: 'py-section md:py-section-md',
  lg: 'py-section-md md:py-section-lg',
} as const

/**
 * Wrapper de seção: aplica superfície, ritmo vertical e o atributo
 * `data-surface`, que globals.css usa para ajustar o contraste do foco.
 */
export function Section({
  id,
  children,
  className = '',
  surface = 'light',
  spacing = 'lg',
  ariaLabel,
}: SectionProps) {
  const isDark = surface === 'dark' || surface === 'deep'

  return (
    <section
      id={id}
      aria-label={ariaLabel}
      data-surface={isDark ? 'dark' : 'light'}
      className={`relative ${surfaceClasses[surface]} ${spacingClasses[spacing]} ${className}`}
    >
      {children}
    </section>
  )
}
