/**
 * Modo de exportação estática.
 * Ligado por `npm run build:static`, gera a pasta `out/` com HTML/CSS/JS puro,
 * que roda em qualquer hospedagem sem Node.js e sem etapa de build.
 */
const isStaticExport = process.env.NEXT_OUTPUT === 'export'

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isStaticExport ? { output: 'export', trailingSlash: true } : {}),
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // Formatos modernos primeiro: reduz peso das fotos reais que serao adicionadas em /public/images.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],
    // Na exportacao estatica nao existe servidor para otimizar imagem sob demanda.
    ...(isStaticExport ? { unoptimized: true } : {}),
  },
  // Remove os console.* do bundle de producao (mantem error/warn para observabilidade real).
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
}

export default nextConfig
