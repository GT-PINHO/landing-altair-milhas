'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { CtaButton } from '@/components/ui/CtaButton'
import { Container } from '@/components/ui/Container'
import { heroMedia, sectionIds } from '@/lib/config'
import { hero } from '@/lib/content'

/** Garante volume zero mesmo se o atributo muted falhar no Safari/iOS. */
function silenceAndPlay(video: HTMLVideoElement | null) {
  if (!video) return
  video.muted = true
  video.defaultMuted = true
  video.volume = 0
  void video.play().catch(() => {
    /* Autoplay recusado: o poster permanece visivel, ainda sem som. */
  })
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  /**
   * O vídeo só é montado após a hidratação: o texto do hero (headline, CTA)
   * pinta primeiro e nunca disputa banda com a mídia de fundo.
   */
  const [mountVideo, setMountVideo] = useState(false)
  /** Se o arquivo de vídeo ainda não existe em /public/video, caímos no gradiente + poster. */
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) return
    const id = window.setTimeout(() => setMountVideo(true), 100)
    return () => window.clearTimeout(id)
  }, [prefersReducedMotion])

  const showVideo = mountVideo && !videoFailed && !prefersReducedMotion

  // Animação de entrada escalonada do bloco de texto (respeita reduzir movimento).
  const rise = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section
      id={sectionIds.hero}
      data-surface="dark"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-depth"
    >
      {/* Camada 1: poster estático, fallback sempre presente sob o vídeo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-navy-950 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroMedia.posterSrc})` }}
      />

      {/* Camada 2: vídeo em loop, decorativo e fora da ordem de tabulação */}
      {showVideo ? (
        <video
          ref={silenceAndPlay}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          poster={heroMedia.posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          tabIndex={-1}
          aria-hidden="true"
          disablePictureInPicture
          onError={() => setVideoFailed(true)}
        >
          <source src={heroMedia.videoSrc} type={heroMedia.videoType} />
        </video>
      ) : null}

      {/* Camada 3: véu escuro que garante contraste AA do texto sobre qualquer frame */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-veil" />

      <Container className="relative py-section-md md:py-section-lg">
        <div className="max-w-3xl">
          <motion.p {...rise(0)} className="text-eyebrow uppercase text-gold-200">
            {hero.eyebrow}
          </motion.p>

          <motion.h1 {...rise(0.08)} className="mt-6 text-display-xl text-ivory">
            {hero.headline}
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-7 max-w-measure text-body-lg text-ivory-300/90"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-10 flex flex-col items-start gap-4">
            <CtaButton label={hero.ctaLabel} source="hero" size="lg" />
            <p className="text-sm text-ivory-300/70">{hero.ctaHelper}</p>
          </motion.div>

          {/* Selos de confiança */}
          <motion.ul
            {...rise(0.32)}
            className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-6"
          >
            {hero.badges.map((badge) => (
              <li
                key={badge.label}
                className="flex items-start gap-3 border-t border-ivory-100/15 pt-4"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                >
                  <path d="M5 12.5l4.2 4.2L19 7" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-ivory">{badge.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ivory-300/70">{badge.detail}</p>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  )
}
