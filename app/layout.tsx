import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import type { ReactNode } from 'react'

import './globals.css'

import { MobileCta } from '@/components/ui/MobileCta'
import { site, siteUrl } from '@/lib/config'

/**
 * Fontes servidas pelo próprio domínio via next/font: sem request a CDN externo,
 * sem FOUT e sem CLS. `display: swap` garante texto visível de imediato.
 */
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    template: `%s | ${site.brand}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.authorName }],
  creator: site.authorName,
  applicationName: site.brand,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: siteUrl,
    siteName: site.brand,
    title: site.title,
    description: site.description,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Altair | Milhas e pontos para dentistas e profissionais da saúde',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.shortTitle,
    description: site.description,
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'business',
  formatDetection: {
    telephone: false,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A2E4D',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-ivory">
        {/* Atalho de teclado para leitores de tela e navegação sem mouse */}
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-pill focus:bg-navy focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ivory"
        >
          Ir para o conteúdo
        </a>

        {children}

        <MobileCta />
      </body>
    </html>
  )
}
