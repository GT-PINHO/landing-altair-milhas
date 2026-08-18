/**
 * Todo o texto da página vive aqui.
 * Motivo: o cliente troca copy com frequência (e vai substituir os PLACEHOLDERS
 * por depoimentos reais) sem precisar abrir nenhum componente React.
 */

export type IconName =
  | 'card'
  | 'compass'
  | 'clock'
  | 'search'
  | 'chart'
  | 'ticket'
  | 'shield'
  | 'calendar'
  | 'plane'

export interface PainCard {
  readonly title: string
  readonly body: string
  readonly icon: IconName
}

export interface MethodStep {
  readonly step: string
  readonly title: string
  readonly body: string
  readonly icon: IconName
}

export interface Testimonial {
  readonly quote: string
  readonly name: string
  readonly role: string
  readonly photoLabel: string
}

export interface OfferItem {
  readonly title: string
  readonly body: string
  readonly icon: IconName
}

export interface FaqItem {
  readonly question: string
  readonly answer: string
}

/* -------------------------------------------------------------------------- */
/* 1. HERO                                                                    */
/* -------------------------------------------------------------------------- */

export const hero = {
  eyebrow: 'Milhas e pontos para dentistas e profissionais da saúde',
  headline:
    'Sua clínica já paga suas próximas viagens de executiva. Você só ainda não sabe disso.',
  subheadline:
    'Eu analiso os gastos recorrentes da sua clínica e mostro como transformá-los em passagens de classe executiva e viagens de alto padrão. Sem custo extra, sem jargão técnico.',
  ctaLabel: 'Quero meu diagnóstico gratuito',
  ctaHelper: 'Resposta pelo WhatsApp, direto comigo.',
  badges: [
    { label: 'Sem custo extra', detail: 'Você usa o gasto que já existe' },
    { label: 'Diagnóstico gratuito', detail: 'Análise inicial sem compromisso' },
    { label: 'Método direto ao ponto', detail: 'Zero jargão, zero enrolação' },
  ],
} as const

/* -------------------------------------------------------------------------- */
/* 2. DOR                                                                     */
/* -------------------------------------------------------------------------- */

export const pain = {
  eyebrow: 'O ponto cego',
  title:
    'Você pode estar errando no controle financeiro da sua clínica e perdendo dinheiro todos os meses.',
  intro:
    'Não é só sobre números. É o mapa de onde seu dinheiro passa... e onde você está deixando milhas na mesa.',
  cards: [
    {
      title: 'Você paga o cartão da clínica e não acumula nada',
      body: 'Fornecedor, laboratório, aluguel, folha, material de consumo. Todo mês o mesmo volume passa pelo mesmo cartão, e volta para você como zero. O gasto acontece de qualquer forma; a diferença é se ele deixa rastro ou não.',
      icon: 'card',
    },
    {
      title: 'Você tem pontos, mas não sabe transformar em executiva',
      body: 'Acumular é a parte fácil. O erro caro está no resgate: quem troca ponto por passagem econômica no balcão do programa queima anos de gasto da clínica em uma única emissão mal planejada.',
      icon: 'compass',
    },
    {
      title: 'Você trabalha demais e não tira férias de verdade',
      body: 'Agenda cheia, faturamento bom, e a família esperando há três anos por uma viagem que nunca sai do grupo do WhatsApp. Sucesso também precisa te dar liberdade para viver o que você construiu.',
      icon: 'clock',
    },
  ] satisfies readonly PainCard[],
} as const

/* -------------------------------------------------------------------------- */
/* 3. MÉTODO                                                                  */
/* -------------------------------------------------------------------------- */

export const method = {
  eyebrow: 'O método',
  title:
    'Três passos entre o gasto que você já tem e o assento que você ainda não usou.',
  intro:
    'Nada de planilha genérica de internet. O caminho é o mesmo para todo mundo, mas os números são os da sua clínica.',
  steps: [
    {
      step: '01',
      title: 'Diagnóstico financeiro e de cartões',
      body: 'Mapeamos juntos para onde vai o dinheiro da clínica: fornecedores, recorrências, impostos, folha e despesas pessoais. Depois olhamos os cartões que você já tem e o que eles realmente entregam por real gasto.',
      icon: 'search',
    },
    {
      step: '02',
      title: 'Estratégia de acúmulo',
      body: 'Definimos quais gastos migram, para quais produtos, em qual ordem e com qual meta de pontos por mês. O objetivo não é gastar mais: é fazer o mesmo gasto passar pelo caminho certo.',
      icon: 'chart',
    },
    {
      step: '03',
      title: 'Planejamento de emissão',
      body: 'A hora que decide tudo. Escolhemos destino, rota, companhia e janela de datas, e planejamos a emissão para o seu ponto valer o máximo, em classe executiva, com a família junto.',
      icon: 'ticket',
    },
  ] satisfies readonly MethodStep[],
} as const

/* -------------------------------------------------------------------------- */
/* 4. PROVA SOCIAL: placeholders. Não inventar conteúdo.                      */
/* -------------------------------------------------------------------------- */

export const proof = {
  eyebrow: 'Prova real',
  title: 'Quem já trocou gasto de clínica por assento na frente do avião.',
  intro:
    'Os espaços abaixo são reservados para depoimentos e resultados verdadeiros de clientes, com autorização de uso de imagem.',
  testimonials: [
    {
      quote: '[PLACEHOLDER: inserir depoimento real do cliente aqui]',
      name: '[PLACEHOLDER: nome do cliente]',
      role: '[PLACEHOLDER: especialidade e cidade]',
      photoLabel: '[PLACEHOLDER: foto do cliente]',
    },
    {
      quote: '[PLACEHOLDER: inserir depoimento real do cliente aqui]',
      name: '[PLACEHOLDER: nome do cliente]',
      role: '[PLACEHOLDER: especialidade e cidade]',
      photoLabel: '[PLACEHOLDER: foto do cliente]',
    },
    {
      quote: '[PLACEHOLDER: inserir depoimento real do cliente aqui]',
      name: '[PLACEHOLDER: nome do cliente]',
      role: '[PLACEHOLDER: especialidade e cidade]',
      photoLabel: '[PLACEHOLDER: foto do cliente]',
    },
  ] satisfies readonly Testimonial[],
  gallery: {
    title: 'Resultados reais',
    caption:
      'Grid reservado para prints de emissão, cartões de embarque e fotos de viagem, sempre com dado verdadeiro.',
    slots: [
      '[PLACEHOLDER: print de emissão 1]',
      '[PLACEHOLDER: print de emissão 2]',
      '[PLACEHOLDER: foto de viagem 1]',
      '[PLACEHOLDER: foto de viagem 2]',
    ],
  },
} as const

/* -------------------------------------------------------------------------- */
/* 5. SOBRE                                                                   */
/* -------------------------------------------------------------------------- */

export const about = {
  eyebrow: 'Quem fala com você',
  title: 'Eu não vendo sonho de viagem. Eu organizo o que sua clínica já gasta.',
  photoLabel: '[PLACEHOLDER: foto profissional do Altair]',
  paragraphs: [
    'Sou Altair. Trabalho com milhas aéreas e pontos para dentistas e profissionais da saúde. Um público que gasta muito, gasta certo e quase nunca é recompensado por isso.',
    'Comecei a olhar para isso pelo lado menos glamouroso: extrato. Fatura de cartão, contrato de fornecedor, recorrência esquecida. E, olhando extrato de clínica atrás de extrato de clínica, a mesma cena se repetia. Faturamento saudável, controle frouxo, e um volume enorme de gasto passando por lugares que não devolvem nada.',
    'Não é só sobre números. É o mapa de onde seu dinheiro passa... e onde você está deixando milhas na mesa. Quando esse mapa fica claro, a conversa muda: deixa de ser "quanto custa a viagem" e passa a ser "quando a gente vai".',
    'Seus filhos estão aprendendo com você qual é o preço do sucesso. Espero que esse preço não seja viver exausto. Minha parte nisso é técnica e pequena: cuidar para que o dinheiro que já sai da sua clínica volte em forma de tempo com quem você ama.',
  ],
  credentials: [
    'Foco exclusivo em dentistas e profissionais da saúde',
    'Análise individual de cada clínica, nada de receita de bolo',
    'Acompanhamento do diagnóstico até a emissão do bilhete',
  ],
} as const

/* -------------------------------------------------------------------------- */
/* 6. OFERTA                                                                  */
/* -------------------------------------------------------------------------- */

export const offer = {
  eyebrow: 'A consultoria',
  title: 'O que acontece quando a gente senta para olhar a sua clínica.',
  intro:
    'Atendimento individual, conduzido por mim, do diagnóstico até o bilhete emitido na mão.',
  items: [
    {
      title: 'Diagnóstico completo dos gastos da clínica',
      body: 'Levantamento das despesas recorrentes e pessoais, com o mapa de onde seu dinheiro passa hoje e quanto disso está virando ponto.',
      icon: 'search',
    },
    {
      title: 'Estratégia de cartões e programas sob medida',
      body: 'Quais produtos fazem sentido para o seu volume, em qual ordem entrar e para qual programa direcionar cada tipo de gasto.',
      icon: 'shield',
    },
    {
      title: 'Plano de acúmulo com meta mensal',
      body: 'Quanto você passa a acumular por mês, em quanto tempo isso vira passagem e o que precisa mudar na operação para chegar lá.',
      icon: 'calendar',
    },
    {
      title: 'Planejamento e apoio na emissão',
      body: 'Escolha de destino, rota e datas, simulação de resgate e acompanhamento na hora de emitir, inclusive para a família toda.',
      icon: 'plane',
    },
  ] satisfies readonly OfferItem[],
  ctaLabel: 'Falar com o Altair no WhatsApp',
  ctaHelper: 'Começamos pelo diagnóstico gratuito. Sem compromisso.',
} as const

/* -------------------------------------------------------------------------- */
/* 7. FAQ                                                                     */
/* -------------------------------------------------------------------------- */

export const faq = {
  eyebrow: 'Perguntas frequentes',
  title: 'O que os dentistas costumam me perguntar antes de começar.',
  items: [
    {
      question: 'Preciso gastar mais para acumular milhas?',
      answer:
        'Não. O ponto de partida é exatamente o oposto: o gasto que a sua clínica já tem. Fornecedor, laboratório, material, aluguel, folha, impostos. O trabalho é redirecionar esse volume para os caminhos que devolvem pontos, mantendo o mesmo custo. Se a estratégia exige gastar mais para "compensar", ela não serve.',
    },
    {
      question: 'Isso funciona com o volume da minha clínica?',
      answer:
        'Volume maior acelera o resultado, mas não é ele que decide se vale a pena. Consultório pequeno com recorrência organizada costuma render mais que clínica grande com gasto espalhado em cinco meios de pagamento. No diagnóstico eu te mostro, com os seus números, quanto tempo levaria para chegar na primeira executiva. E digo com franqueza se ainda não é o seu momento.',
    },
    {
      question: 'Quanto tempo leva para eu viajar de executiva?',
      answer:
        'Depende do seu volume mensal, dos programas escolhidos e do destino. Não trabalho com promessa de prazo: trabalho com meta. No diagnóstico a gente calcula quantos pontos por mês a sua operação gera e qual a janela realista para o destino que você quer. E aí você decide com número na mão, não com expectativa.',
    },
    {
      question: 'Isso é seguro e regular para a contabilidade da clínica?',
      answer:
        'Sim. A estratégia usa produtos bancários e programas de fidelidade dos próprios emissores, dentro das regras de cada programa. Nada de conta de terceiro, compra de milha irregular ou atalho que coloca o seu CNPJ em risco. Toda mudança de meio de pagamento passa pelo seu contador. Eu inclusive prefiro que passe.',
    },
    {
      question: 'Eu preciso entender de milhas para começar?',
      answer:
        'Não, e essa é a ideia. Você não precisa virar especialista em transferência bonificada nem acompanhar promoção de programa. Você cuida dos pacientes; eu cuido do mapa. A parte técnica chega para você como decisão simples: passa esse gasto para cá, emite nessa data, para esse destino.',
    },
  ] satisfies readonly FaqItem[],
} as const

/* -------------------------------------------------------------------------- */
/* 8. CTA FINAL                                                               */
/* -------------------------------------------------------------------------- */

export const finalCta = {
  eyebrow: 'Última chamada',
  title:
    'A próxima fatura da sua clínica vai fechar de qualquer jeito. A pergunta é para onde ela vai.',
  body:
    'Sucesso também precisa te dar liberdade para viver o que você construiu. Vamos começar pelo diagnóstico: você me mostra os gastos, eu te mostro as milhas que estão ficando na mesa.',
  ctaLabel: 'Quero meu diagnóstico gratuito',
  instagramLabel: 'Ver conteúdo no Instagram',
} as const
