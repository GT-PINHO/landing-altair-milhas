import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  /** `measure` limita a largura de leitura (~66 caracteres) em blocos de texto corrido. */
  width?: 'content' | 'measure'
}

/** Container horizontal padrão: gutter mobile-first + largura máxima tokenizada. */
export function Container({ children, className = '', width = 'content' }: ContainerProps) {
  const widthClass = width === 'measure' ? 'max-w-measure' : 'max-w-content'

  return (
    <div className={`mx-auto w-full ${widthClass} px-gutter sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  )
}
