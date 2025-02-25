export const yearlyPrice = [
  {
    label: 'Prata',
    desc: 'Teste grátis por 30 dias e veja os números da sua empresa!',
    price: 'R$120',
    duration: 'Anual (Ganhe 2 Meses Grátis)',
    contentTitle: '',
    content: [
      'Gerenciador de Estoque',
      'Relatórios Completos',
      'Cadastro de Clientes',
      'Agenda Básica',
      'Contas a Pagar',
      'Até 5 Usuários',
    ],
  },
  {
    label: 'Ouro',
    desc: 'Para Você que quer crescer e expandir o seu negócio',
    price: 'R$1.800',
    duration: 'Anual (Ganhe 2 Meses Grátis)',
    contentTitle: 'Tudo do Plano Prata e',
    content: [
      'Emissão de Notas Fiscais',
      'Demonstração do Resultado do Exercício',
      'Exemplo',
      'Agenda Inteligente',
      'Até 10 usuários',
    ],
    isMostPopular: true,
  },
  {
    label: 'Diamante',
    desc: 'For small teams to manage projects and team knowledge',
    price: 'R$425',
    duration: 'per member per month\n' + 'billed annually',
    contentTitle: 'Everything in Free +',
    content: [
      'Unlimited storage',
      'Up to 10 workspace members',
      'Unlimited AI responses',
      '10 AI images per month',
      'Unlimited file uploads',
      'Custom namespace',
    ],
  },
];

export const monthlyPrice = [
  yearlyPrice[0],
  {
    ...yearlyPrice[1],
    price: 'R$180',
    duration: 'per member per month\n' + 'billed monthly',
  },
];
