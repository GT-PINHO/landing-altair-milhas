# Landing Page — Altair | Milhas para Dentistas

Landing page de conversão para consultoria de milhas aéreas e pontos voltada a dentistas e
profissionais da saúde. Construída em **Next.js 14 (App Router) + TypeScript + Tailwind CSS**,
pronta para deploy na Vercel.

- CTA principal em WhatsApp com mensagem pré-preenchida (via variável de ambiente)
- CTAs identificados por `data-cta`, prontos para o rastreamento que o cliente usar
- Design system próprio (tokens de cor, tipografia e espaçamento) — nenhum template de terceiros
- Animações sutis com Framer Motion, respeitando "reduzir movimento" do sistema
- Acessibilidade: navegação por teclado no FAQ, skip link, contraste AA, `alt` em toda imagem

---

## 1. Rodando localmente

Requisitos: **Node.js 18.17+** (recomendado 20 ou superior) e npm.

```bash
# 1. instalar dependências
npm install

# 2. criar o arquivo de variáveis de ambiente
cp .env.example .env.local     # no Windows/PowerShell: Copy-Item .env.example .env.local

# 3. abrir em modo desenvolvimento (http://localhost:3000)
npm run dev
```

Outros comandos:

| Comando             | O que faz                                                        |
| ------------------- | ---------------------------------------------------------------- |
| `npm run dev`       | Servidor de desenvolvimento com hot reload                       |
| `npm run build`     | Build de produção (o mesmo que a Vercel executa)                 |
| `npm start`         | Sobe o build de produção localmente                              |
| `npm run lint`      | ESLint (regras `next/core-web-vitals`)                           |
| `npm run typecheck` | Checagem de tipos TypeScript, sem gerar arquivos                 |

---

## 2. Variáveis de ambiente

Todas ficam em `.env.local` no desenvolvimento e nas *Environment Variables* do projeto na Vercel
em produção. O prefixo `NEXT_PUBLIC_` significa que o valor é visível no navegador — **nunca**
coloque senha ou token privado aqui.

| Variável                       | Obrigatória | Descrição                                                                                                   |
| ------------------------------ | ----------- | ----------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER`  | **Sim**     | Número em formato internacional, só dígitos: `55` + DDD + número. Ex.: `5511999999999`.                     |
| `NEXT_PUBLIC_WHATSAPP_MESSAGE` | Não         | Mensagem pré-preenchida do WhatsApp. Se vazia, usa o texto padrão definido em `lib/config.ts`.              |
| `NEXT_PUBLIC_SITE_URL`         | Não         | URL canônica de produção. Usada em SEO, Open Graph e `sitemap.xml`. Ex.: `https://www.altairdasmilhas.com.br`. |

> **Importante:** variáveis `NEXT_PUBLIC_*` são embutidas no build. Ao alterar qualquer uma delas na
> Vercel, é necessário um **novo deploy** (Redeploy) para o valor entrar em vigor.

### 2.1 Segurança: o que pode e o que NÃO pode virar variável pública

Regra que vale para todo projeto Next.js:

| Prefixo | Onde o valor fica | Pode guardar segredo? |
| ------- | ----------------- | --------------------- |
| `NEXT_PUBLIC_ALGO` | **Embutido no JavaScript enviado ao navegador.** Qualquer visitante consegue ler. | **Nunca** |
| `ALGO` (sem prefixo) | Só no servidor. Não sai no HTML nem no bundle. | Sim |

**Hoje este projeto não guarda nenhum segredo.** As três variáveis existentes são públicas por
natureza — o número de WhatsApp precisa estar no HTML para o botão funcionar, e a URL do site é
pública por definição. Não há token, chave de API nem senha em lugar nenhum do código.

O cuidado vale para o futuro. Se um dia for adicionado formulário com envio de e-mail, integração
com CRM, API de pagamento ou token de qualquer serviço:

1. **Não** use o prefixo `NEXT_PUBLIC_`. Um token com esse prefixo vaza para qualquer visitante que
   abrir o código-fonte da página.
2. Leia a variável apenas no servidor — em Route Handler (`app/api/.../route.ts`) ou Server Action.
3. Cadastre o valor nas *Environment Variables* da hospedagem, nunca dentro do código.

**Separação dos arquivos, já configurada:**

| Arquivo | Vai para o Git / repositório? | Função |
| ------- | ----------------------------- | ------ |
| `.env.example` | **Sim** | Modelo com os nomes das variáveis, sem nenhum valor real |
| `.env.local` | **Não** — bloqueado no `.gitignore` | Os valores reais, só na máquina de quem desenvolve |

Ou seja: quem clonar o repositório recebe o modelo, nunca os valores. Antes de subir para um
repositório público, confira que o `.gitignore` continua com as linhas `.env` e `.env.local`.

---

## 3. O que precisa ser substituído antes de publicar

O projeto foi entregue **sem depoimentos, nomes ou números inventados**. Os espaços estão marcados
como `[PLACEHOLDER: ...]` e aparecem visualmente como quadros tracejados.

### 3.1 Textos, depoimentos e FAQ

Todo o copy está em um único arquivo: **`lib/content.ts`**. Não é preciso abrir nenhum componente.

- `proof.testimonials` — 3 depoimentos (citação, nome, cargo/especialidade, rótulo da foto)
- `proof.gallery.slots` — 4 espaços para prints de emissão / fotos de viagem
- `about.photoLabel` — foto profissional do Altair
- `faq.items` — as 5 perguntas e respostas (redigidas no tom de voz do cliente; ajuste livremente)

### 3.2 Imagens

Coloque os arquivos em `public/images/` (veja `public/images/README.md`) e troque o componente
`<PlaceholderFrame />` por `<Image />` do `next/image`, sempre com `alt` descritivo:

```tsx
import Image from 'next/image'

<Image
  src="/images/altair.jpg"
  alt="Altair, especialista em milhas para profissionais da saúde"
  width={800}
  height={1000}
  className="rounded-card"
  sizes="(max-width: 1024px) 100vw, 40vw"
/>
```

### 3.3 Vídeo do hero

Salve o arquivo como **`public/video/hero.mp4`**. Enquanto ele não existir, o hero usa
automaticamente o gradiente institucional + poster — sem erro e sem imagem quebrada.

Recomendações: H.264 (mp4), **sem áudio**, 8–12s em loop, 1920×1080, alvo de 3–5 MB. Exporte
também o primeiro frame como `public/images/hero-poster.jpg` (é o fallback estático).

O vídeo é montado **após** a hidratação e não bloqueia a renderização do texto do hero. Usuários
com "reduzir movimento" ativo veem apenas o poster.

---

## 4. Deploy na Vercel

### 4.1 Pelo painel (recomendado)

1. Suba o projeto para um repositório no GitHub / GitLab / Bitbucket:

   ```bash
   git init
   git add .
   git commit -m "Landing page Altair - versão inicial"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```

2. Em [vercel.com/new](https://vercel.com/new), importe o repositório. A Vercel detecta Next.js
   automaticamente — **não altere** Build Command nem Output Directory.
3. Ainda na tela de importação, abra **Environment Variables** e cadastre as variáveis da seção 2
   (marque os ambientes *Production*, *Preview* e *Development*).
4. Clique em **Deploy**. Ao terminar, o site fica disponível em `https://SEU-PROJETO.vercel.app`.

A partir daí, todo `git push` na branch `main` publica em produção, e cada Pull Request gera uma
URL de preview.

### 4.2 Pelo CLI (alternativa)

```bash
npm i -g vercel
vercel login
vercel            # cria o projeto e faz um deploy de preview
vercel --prod     # publica em produção
```

### 4.3 Checklist antes de anunciar o site

- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` preenchido e testado (clicar no CTA abre a conversa certa)
- [ ] `NEXT_PUBLIC_SITE_URL` com o domínio final
- [ ] Depoimentos reais no lugar dos `[PLACEHOLDER]`, com autorização de uso de imagem
- [ ] Foto do Altair, vídeo do hero e poster enviados
- [ ] `npm run build` passando sem erro

---

## 5. Conectando um domínio próprio

1. No painel da Vercel: **Project → Settings → Domains → Add**.
2. Digite o domínio (ex.: `altairdasmilhas.com.br`) e confirme. A Vercel mostra os registros DNS.
3. No painel do seu registrador (Registro.br, GoDaddy, Hostinger, Cloudflare...), crie:

   | Tipo    | Nome  | Valor                  |
   | ------- | ----- | ---------------------- |
   | `A`     | `@`   | `76.76.21.21`          |
   | `CNAME` | `www` | `cname.vercel-dns.com` |

   > Use sempre os valores exibidos na tela da Vercel — eles têm precedência sobre esta tabela.

4. Aguarde a propagação (normalmente minutos; pode levar até 48h). O certificado **HTTPS é emitido
   automaticamente**.
5. Em **Domains**, defina qual versão é a principal (recomendado: `www` redirecionando para o
   domínio raiz, ou o inverso — escolha uma e mantenha).
6. Atualize `NEXT_PUBLIC_SITE_URL` com o domínio final e faça **Redeploy**.

---

## 6. Estrutura do projeto

```
.
├── app/
│   ├── layout.tsx            # fontes, metadados de SEO/OG, skip link
│   ├── page.tsx              # composição das 8 seções + JSON-LD (schema.org)
│   ├── globals.css           # base do Tailwind, foco visível, prefers-reduced-motion
│   ├── opengraph-image.tsx   # imagem de compartilhamento gerada em código (1200×630)
│   ├── not-found.tsx         # página 404 na identidade da marca
│   ├── robots.ts             # /robots.txt
│   └── sitemap.ts            # /sitemap.xml
│
├── components/
│   ├── sections/             # uma seção da página por arquivo
│   │   ├── Hero.tsx          # 1. hero com vídeo em loop + fallback e 3 selos
│   │   ├── PainPoints.tsx    # 2. bloco de dor (3 cards)
│   │   ├── Method.tsx        # 3. método (3 passos com ícones)
│   │   ├── SocialProof.tsx   # 4. depoimentos + grid de resultados (placeholders)
│   │   ├── About.tsx         # 5. sobre o Altair (autoridade)
│   │   ├── Offer.tsx         # 6. oferta/consultoria (4 itens + CTA secundário)
│   │   ├── Faq.tsx           # 7. accordion acessível, um item aberto por vez
│   │   ├── FinalCta.tsx      # 8. CTA final + Instagram
│   │   └── Footer.tsx        # rodapé com navegação e aviso legal
│   ├── ui/                   # primitivos do design system
│   │   ├── Section.tsx       # superfícies (light/muted/dark/deep) e ritmo vertical
│   │   ├── Container.tsx     # largura máxima e gutter
│   │   ├── SectionHeading.tsx# eyebrow + título + intro
│   │   ├── CtaButton.tsx     # CTA de WhatsApp (com atributo data-cta)
│   │   ├── Reveal.tsx        # animação de entrada (fade/slide)
│   │   ├── Icon.tsx          # ícones em SVG, desenhados no projeto
│   │   └── PlaceholderFrame.tsx # espaço reservado para mídia real
│
├── lib/
│   ├── content.ts            # TODO o texto da página (edite aqui)
│   ├── config.ts             # env, identidade, âncoras das seções
│   └── whatsapp.ts           # montagem do link wa.me
│
├── public/images/            # fotos reais (ver README interno)
├── public/video/             # hero.mp4 (ver README interno)
├── tailwind.config.ts        # design system: cores, tipografia, espaçamentos, sombras
└── vercel.json               # headers de segurança e cache do vídeo
```

---

## 7. Design system

Definido em `tailwind.config.ts` — os componentes consomem **tokens**, nunca valores soltos.

**Cores**

| Token          | Hex       | Uso                                        |
| -------------- | --------- | ------------------------------------------ |
| `navy` (600)   | `#0A2E4D` | Azul aviação profundo — cor institucional  |
| `gold` (500)   | `#C9A15A` | Dourado premium — acentos e CTAs           |
| `ivory` (100)  | `#FAF8F4` | Off-white de fundo                         |
| `ink`          | `#0B1620` | Texto de máximo contraste                  |

Cada cor tem escala completa (`navy-50` … `navy-950`, `gold-50` … `gold-900`).

**Tipografia** — Playfair Display (serif) nos títulos, Inter (sans) no corpo, ambas carregadas por
`next/font` (self-hosted, sem request a CDN externo, sem CLS). A escala é fluida via `clamp()`:
`text-display-xl`, `text-display-lg`, `text-display-md`, `text-display-sm`, `text-body-lg`,
`text-eyebrow` — o mesmo token resolve mobile e desktop sem breakpoint extra.

**Espaçamento** — `py-section`, `py-section-md`, `py-section-lg` para o ritmo vertical;
`px-gutter` para as margens laterais; `max-w-content` e `max-w-measure` para largura de leitura.

---

## 8. Rastreamento e analytics

**O projeto não embarca nenhum script de rastreamento** (sem Meta Pixel, sem Google Analytics, sem
GTM). Essa configuração fica com o cliente, junto das contas de anúncio dele.

Para facilitar quando ele quiser medir conversão, cada CTA já se identifica no HTML com o atributo
`data-cta`, com estes valores: `hero`, `oferta`, `cta-final` e `pagina-404`. Basta apontar o
rastreador para esse seletor, sem tocar no código dos componentes:

```js
document.querySelectorAll('[data-cta]').forEach((el) => {
  el.addEventListener('click', () => {
    // exemplo: window.fbq?.('track', 'Lead', { content_name: el.dataset.cta })
  })
})
```

Para adicionar um CTA novo em qualquer seção:

```tsx
<CtaButton label="Falar agora" source="nome-da-secao" />
```

---

## 9. Qualidade verificada nesta entrega

- `npm run build` e `npm run typecheck` passando, TypeScript estrito e **sem nenhum `any`**
- Sem scroll horizontal em **375px, 768px e 1440px** (`scrollWidth === innerWidth` nos três)
- FAQ testado: um painel aberto por vez, `aria-expanded`/`aria-controls` corretos, navegação por
  `Tab`, `Enter`, `Espaço`, `↑`, `↓`, `Home` e `End`
- CTAs verificados: link `wa.me` correto, `target="_blank"` com `rel="noopener noreferrer"`
- 1 único `<h1>` na página, nenhuma imagem sem `alt`, skip link para o conteúdo principal
- Dados estruturados `ProfessionalService` + `FAQPage` (rich result de perguntas no Google)
- `robots.txt`, `sitemap.xml` e imagem de Open Graph gerados automaticamente

**Aviso legal exibido no rodapé:** "Conteúdo educacional. Resultados podem variar conforme o volume
de gastos de cada clínica."
