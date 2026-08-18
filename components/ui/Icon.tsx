import type { IconName } from '@/lib/content'

interface IconProps {
  name: IconName
  className?: string
}

/**
 * Conjunto de ícones desenhado à mão (traço de 1.5, estilo linear premium).
 * Feito localmente de propósito: nenhuma dependência de biblioteca de ícones
 * e nenhum peso extra de bundle além do SVG realmente usado.
 */
const paths: Record<IconName, JSX.Element> = {
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 9.5h19" />
      <path d="M6 14.5h4" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M14.9 9.1l-1.7 4.1-4.1 1.7 1.7-4.1z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M12 7v5.3l3.4 2" />
    </>
  ),
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="M15.8 15.8L21 21" />
    </>
  ),
  chart: (
    <>
      <path d="M3.5 20.5h17" />
      <path d="M6.5 20.5v-6" />
      <path d="M11.5 20.5V8" />
      <path d="M16.5 20.5v-9" />
      <path d="M4.5 6.5l6-2.5 5 3 4-3.5" />
    </>
  ),
  ticket: (
    <>
      <path d="M3 8.5V6.5A1.5 1.5 0 014.5 5h15A1.5 1.5 0 0121 6.5v2a2.2 2.2 0 000 7v2a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 17.5v-2a2.2 2.2 0 000-7z" />
      <path d="M12 8v1.8M12 12v1.8M12 16v1.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.6c0 4.3-3 7.9-7.5 9.4-4.5-1.5-7.5-5.1-7.5-9.4V6z" />
      <path d="M9.2 12.2l2 2 3.6-3.9" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17" />
      <path d="M8 3.5V6M16 3.5V6" />
      <path d="M7.8 14h2.4M13.8 14h2.4" />
    </>
  ),
  plane: (
    <>
      <path d="M10.4 13.6L3 11.4l1-1.7 4.6.6 3.1-3.1-6.2-3.6L7 2l8.2 3.1 2.2-2.2a2 2 0 112.8 2.8l-2.2 2.2L21 16.1l-1.6 1.5-3.6-6.2-3.1 3.1.6 4.6-1.7 1z" />
    </>
  ),
}

/** Ícone decorativo: sempre acompanhado de texto, por isso aria-hidden. */
export function Icon({ name, className = 'h-6 w-6' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {paths[name]}
    </svg>
  )
}
