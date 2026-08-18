'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { BrandIcon } from '@/components/ui/BrandIcon'
import { sectionIds } from '@/lib/config'
import { buildWhatsAppUrl } from '@/lib/whatsapp'

/**
 * Barra de ação fixa, exclusiva do celular.
 *
 * Motivo: no mobile o CTA do hero sai da tela logo no primeiro scroll, e o
 * próximo botão só reaparece na seção de consultoria. Esta barra mantém o
 * WhatsApp sempre a um toque de distância no meio da leitura.
 *
 * Ela some nos dois extremos da página: enquanto o hero está visível (o CTA
 * principal já está ali) e da chamada final em diante, onde tanto aquela seção
 * quanto o rodapé já oferecem o WhatsApp e a barra passaria a cobrir o aviso
 * legal.
 */
export function MobileCta() {
  const [visible, setVisible] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const hero = document.getElementById(sectionIds.hero)
    const finalCta = document.getElementById(sectionIds.finalCta)
    const footer = document.querySelector('footer')
    if (!hero || !finalCta) return

    const state = { hero: true, final: false, footer: false }

    const sync = () => setVisible(!state.hero && !state.final && !state.footer)

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        state.hero = entry.isIntersecting
        sync()
      },
      { rootMargin: '-25% 0px 0px 0px' },
    )

    const finalObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        state.final = entry.isIntersecting
        sync()
      },
      { rootMargin: '0px 0px -20% 0px' },
    )

    const footerObserver = new IntersectionObserver(([entry]) => {
      if (!entry) return
      state.footer = entry.isIntersecting
      sync()
    })

    heroObserver.observe(hero)
    finalObserver.observe(finalCta)
    if (footer) footerObserver.observe(footer)

    return () => {
      heroObserver.disconnect()
      finalObserver.disconnect()
      footerObserver.disconnect()
    }
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={prefersReducedMotion ? false : { y: '110%' }}
          animate={{ y: 0 }}
          exit={prefersReducedMotion ? undefined : { y: '110%' }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-ivory-100/10 bg-navy-900/92 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden"
        >
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="barra-mobile"
            /* min-h-[3.25rem]: alvo de toque confortável, acima do mínimo de 44px */
            className="flex min-h-[3.25rem] w-full items-center justify-center gap-2.5 rounded-pill bg-gold px-6 text-[0.95rem] font-semibold text-navy-900 shadow-gold active:scale-[0.99]"
          >
            <BrandIcon name="whatsapp" className="h-5 w-5 shrink-0" />
            Falar com o Altair no WhatsApp
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
