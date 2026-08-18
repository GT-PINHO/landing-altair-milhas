'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Atraso em segundos, usado para escalonar itens de uma mesma grade. */
  delay?: number
  direction?: 'up' | 'left' | 'right'
  className?: string
}

const offset = {
  up: { x: 0, y: 24 },
  left: { x: -28, y: 0 },
  right: { x: 28, y: 0 },
} as const

/**
 * Animação de entrada sutil (fade + deslocamento curto), disparada uma única vez
 * quando o bloco entra na viewport. Com "reduzir movimento" ativo no sistema,
 * o conteúdo aparece estático, sem animação e sem salto de layout.
 */
export function Reveal({ children, delay = 0, direction = 'up', className }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  const from = offset[direction]

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: from.x, y: from.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
