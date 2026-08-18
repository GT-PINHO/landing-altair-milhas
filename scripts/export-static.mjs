/**
 * Gera a versão estática do site na pasta `out/`.
 *
 * O resultado é HTML, CSS e JS puros: sobe em qualquer hospedagem (Hostinger,
 * cPanel, Netlify, GitHub Pages, Vercel...) arrastando a pasta, sem Node.js
 * instalado no servidor e sem etapa de build.
 *
 * Uso: npm run build:static
 * Funciona igual no Windows, macOS e Linux.
 */
import { spawn } from 'node:child_process'
import { existsSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const outDir = resolve(root, 'out')

// Limpa o resultado anterior para não misturar arquivos de builds diferentes
if (existsSync(outDir)) {
  rmSync(outDir, { recursive: true, force: true })
}

const child = spawn('npx', ['next', 'build'], {
  cwd: root,
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, NEXT_OUTPUT: 'export' },
})

child.on('exit', (code) => {
  if (code !== 0) {
    console.error('\nFalha ao gerar a versão estática.')
    process.exit(code ?? 1)
  }

  console.log('\n' + '='.repeat(64))
  console.log('Versão estática gerada com sucesso na pasta:  out/')
  console.log('')
  console.log('Para publicar, envie o CONTEÚDO da pasta out/ para a hospedagem.')
  console.log('Para testar no computador:  npx serve out')
  console.log('='.repeat(64))
})
