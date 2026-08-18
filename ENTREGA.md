# Como continuar este site

Este pacote contém o site completo e funcionando. Ele foi construído em **Next.js 14 + React +
TypeScript + Tailwind CSS**, que é a base usada por boa parte dos sites profissionais hoje.

Você tem quatro caminhos para colocar no ar. Escolha o que combina com quem vai tocar o projeto.

---

## Caminho 0 — Publicar sem mexer em nada (o mais simples)

Junto deste material existe o arquivo **`site-altair-PRONTO-PARA-HOSPEDAR.zip`**. Dentro dele está o
site já montado, em HTML puro. Não precisa de programador, não precisa instalar nada.

É só descompactar e enviar o conteúdo para qualquer hospedagem: Hostinger, KingHost, HostGator,
Locaweb, Netlify, Vercel, GitHub Pages. Em painel de hospedagem tradicional, o destino costuma ser a
pasta `public_html`.

O site sobe funcionando: vídeo, animações, perguntas que abrem e fecham, botões de WhatsApp, tudo.

**A limitação:** para mudar textos ou fotos depois, é preciso gerar o site de novo a partir do código
(caminho 1) ou editar o HTML na mão. Se você pretende mexer no conteúdo com frequência, prefira o
caminho 1.

---

## Caminho 1 — Você contratou um programador (o mais barato e rápido)

Entregue esta pasta para ele e diga: *"é um projeto Next.js 14 com App Router"*. Isso basta.

Para ele, são literalmente 3 comandos:

```bash
npm install
npm run dev          # abre em http://localhost:3000
npm run build        # confere que está tudo certo para publicar
```

Depois é subir na Vercel, na Netlify ou onde preferir. O passo a passo completo, incluindo como
apontar um domínio próprio, está no arquivo **`README.md`**.

O que ele precisa fazer antes de publicar:

- Preencher o número de WhatsApp em `.env.local` (já está com o número atual)
- Trocar os `[PLACEHOLDER]` por depoimentos e fotos reais — instruções na seção 3 do `README.md`
- Publicar

**Tempo estimado para alguém da área: entre 30 minutos e 2 horas**, dependendo do material que
você já tiver pronto (fotos, depoimentos).

---

## Caminho 2 — Você contratou alguém que trabalha com Framer, Webflow, Wix ou similar

Essas ferramentas **não abrem este código**. Elas funcionam de outro jeito: a pessoa monta a
página arrastando blocos, dentro da plataforma.

Nesse caso o site não é reaproveitado, mas **nada do trabalho se perde** — porque o que mais
importa não está preso ao código:

| O que entregar para essa pessoa | Onde está |
| ------------------------------- | --------- |
| Todos os textos da página, prontos para copiar | `CONTEUDO-TEXTOS.md` |
| Como o site fica no computador | `entrega/preview-desktop-1440.png` |
| Como o site fica no celular | `entrega/preview-mobile-390.png` |
| Cores, fontes e tamanhos exatos | seção "Identidade visual" abaixo |

Com esses quatro itens, qualquer designer reconstrói a página fielmente na ferramenta dele. Peça
para seguir a **mesma ordem de seções** — ela não é decoração, é a sequência que leva a pessoa da
dor até o botão do WhatsApp.

Atenção a um ponto: essas plataformas cobram mensalidade (normalmente por site, mais o domínio à
parte). O caminho 1 costuma sair mais barato no longo prazo.

---

## Caminho 3 — Você quer usar Lovable, Bolt, v0 ou outra ferramenta de IA

Esse caminho funciona bem, e é o mais próximo de aproveitar tudo. O motivo é que essas ferramentas
usam **a mesma base deste site**: React + TypeScript + Tailwind CSS. Muda só o "empacotador"
(elas usam Vite, este projeto usa Next.js).

Na prática, os arquivos das seções são reaproveitados quase sem alteração.

**O que fazer:** crie o projeto na ferramenta, envie os arquivos das pastas `components/`, `lib/` e o
`tailwind.config.ts`, e cole o pedido abaixo:

> Converta este projeto Next.js 14 (App Router) para React + Vite, mantendo **exatamente** o mesmo
> design, os mesmos textos e a mesma estrutura de seções. Não redesenhe nada, não troque cores,
> fontes ou espaçamentos, não substitua meus componentes por componentes de biblioteca.
> Ajustes necessários na conversão:
> 1. trocar `next/font` por Playfair Display e Inter carregadas do Google Fonts no `index.html`;
> 2. transformar as metatags de `app/layout.tsx` em tags `<head>` no `index.html`, mantendo título,
>    descrição, Open Graph e o JSON-LD;
> 3. remover as diretivas `'use client'`, que não existem no Vite;
> 4. trocar `process.env.NEXT_PUBLIC_WHATSAPP_NUMBER` por `import.meta.env.VITE_WHATSAPP_NUMBER`;
> 5. trocar o `Link` do `next/link` por `<a>` na página 404;
> 6. mover `robots.ts` e `sitemap.ts` para arquivos estáticos `robots.txt` e `sitemap.xml`
>    na pasta `public/`;
> 7. manter o `tailwind.config.ts` exatamente como está — ele é o design system do projeto.

O Framer Motion, o Tailwind e todos os componentes funcionam igual, sem adaptação.

**Dois pontos de atenção:**

- Essas ferramentas tendem a "melhorar" o design por conta própria durante a conversão. Por isso o
  pedido acima insiste em *não redesenhar*. Compare com os prints em `entrega/` depois de converter.
- Um site em Vite é renderizado no navegador, enquanto este aqui é entregue já pronto pelo servidor.
  Para o Google, a versão atual (Next.js) é melhor posicionada. Se a maior parte da sua audiência vem
  do Instagram e de anúncios, a diferença é pequena; se você quer aparecer em busca por "milhas para
  dentistas", vale manter o Next.js.

---

## Caminho 4 — Você quer que quem fez continue

Fale com quem te entregou este material. Ele conhece o projeto e resolve mais rápido.

---

## Identidade visual (para reconstruir em qualquer ferramenta)

**Cores**

| Uso | Cor |
| --- | --- |
| Azul institucional (fundos escuros, títulos) | `#0A2E4D` |
| Azul mais profundo (degradês, rodapé) | `#041522` |
| Dourado (botões, destaques, detalhes) | `#C9A15A` |
| Off-white (fundo das seções claras) | `#FAF8F4` |
| Off-white alternativo (seção de depoimentos) | `#F2EDE4` |

**Fontes** (ambas gratuitas no Google Fonts)

| Uso | Fonte |
| --- | --- |
| Títulos e destaques | **Playfair Display** (serifada) |
| Textos, botões e legendas | **Inter** (sem serifa) |

**Detalhes que dão o acabamento**

- Títulos grandes e com pouco espaço entre linhas; corpo de texto com bastante respiro
- Rótulos de seção ("O PONTO CEGO", "O MÉTODO") em caixa alta, dourado, com letras espaçadas
- Cantos arredondados nos cartões (20px) e botões totalmente arredondados (formato pílula)
- As seções alternam fundo claro e fundo azul escuro, criando ritmo ao rolar a página
- Animação suave de entrada quando cada bloco aparece na tela

---

## O que já está pronto e funcionando

- As 8 seções da página, na ordem definida
- Botões de WhatsApp com mensagem já escrita, prontos para o cliente só apertar enviar
- Vídeo de fundo no topo, com fallback caso o vídeo não carregue
- Perguntas frequentes que abrem e fecham, uma por vez
- Layout adaptado para celular, tablet e computador
- Otimização para o Google (títulos, descrição, imagem de compartilhamento, sitemap)
- Página de erro 404 na identidade da marca
- Acessibilidade: navegação por teclado e contraste adequado

## O que falta

- Trocar os `[PLACEHOLDER]` por depoimentos reais de clientes, com autorização de uso de imagem
- Foto profissional para a seção "Sobre"
- Imagem de capa do vídeo (`public/images/hero-poster.jpg`)
- Publicar e apontar o domínio
- **Política de Privacidade (LGPD).** O site hoje não usa cookies nem rastreadores, o que já é uma
  boa posição de partida. Mas se for instalado Meta Pixel, Google Analytics ou similar, passa a ser
  necessário banner de consentimento e política de privacidade publicada.
