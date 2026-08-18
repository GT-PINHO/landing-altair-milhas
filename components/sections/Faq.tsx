'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useRef, useState } from 'react'

import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { sectionIds } from '@/lib/config'
import { faq } from '@/lib/content'

/**
 * Accordion do FAQ.
 * Acessibilidade:
 * - cada pergunta é um <button> real (Tab / Enter / Espaço funcionam nativamente);
 * - aria-expanded + aria-controls ligam gatilho e painel;
 * - setas ↑/↓ e Home/End navegam entre as perguntas (padrão WAI-ARIA de accordion);
 * - apenas um painel aberto por vez, conforme especificado.
 */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const triggersRef = useRef<Array<HTMLButtonElement | null>>([])
  const prefersReducedMotion = useReducedMotion()

  const focusTrigger = (index: number) => {
    const total = faq.items.length
    const target = (index + total) % total
    triggersRef.current[target]?.focus()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        focusTrigger(index + 1)
        break
      case 'ArrowUp':
        event.preventDefault()
        focusTrigger(index - 1)
        break
      case 'Home':
        event.preventDefault()
        focusTrigger(0)
        break
      case 'End':
        event.preventDefault()
        focusTrigger(faq.items.length - 1)
        break
      default:
        break
    }
  }

  return (
    <Section id={sectionIds.faq} surface="light">
      <Container>
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />

        <div className="mx-auto mt-14 max-w-3xl divide-y divide-navy/10 border-y border-navy/10">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const triggerId = `faq-trigger-${index}`

            return (
              <div key={item.question}>
                <h3>
                  <button
                    ref={(node) => {
                      triggersRef.current[index] = node
                    }}
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-gold-700"
                  >
                    <span className="font-serif text-lg leading-snug text-navy md:text-xl">
                      {item.question}
                    </span>

                    {/* Ícone +/− puramente decorativo: o estado real está em aria-expanded */}
                    <span
                      aria-hidden="true"
                      className={[
                        'mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ease-premium',
                        isOpen
                          ? 'rotate-45 border-gold bg-gold/10 text-gold-700'
                          : 'border-navy/20 text-navy-400',
                      ].join(' ')}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        className="h-4 w-4"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="painel"
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                      animate={prefersReducedMotion ? undefined : { height: 'auto', opacity: 1 }}
                      exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-measure pb-7 pr-6 text-[0.975rem] leading-relaxed text-navy-500">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
