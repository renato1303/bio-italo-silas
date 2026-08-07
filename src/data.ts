import { FeatureCardData, QuizQuestion, Testimonial, FAQItem } from './types';

export const HERO_DATA = {
  title: "TESTE SEU NÍVEL DE INGLÊS!",
  subtitle: "Faça agora seu teste de inglês e descubra em qual nível você está nesse momento de forma gratuita e instantânea.",
  ctaLine1: "EU QUERO TESTAR",
  ctaLine2: "MEU NÍVEL DE INGLÊS",
  ctaText: "EU QUERO TESTAR MEU NÍVEL DE INGLÊS",
  ctaLink: "https://form.respondi.app/rSvhtPJP",
  heroBgImage: "/bg-hero.png",
  stats: [
    { label: "Alunos Testados", value: "+10.000" },
    { label: "Precisão do Teste", value: "98.5%" },
    { label: "Tempo de Resposta", value: "3 min" },
  ]
};

export const FEATURE_CARDS: FeatureCardData[] = [
  {
    id: "aeroporto",
    title: "Inglês para Aeroporto",
    description: "Viaje tranquilo e sem medo. Domine os termos, imigração, compras e situações de emergência sem travar no aeroporto.",
    tag: "NOVIDADE",
    badgeIcon: "Plane",
    bgImage: "https://italosilas.com.br/wp-content/uploads/2025/08/card12.png",
    buttonText: "CLIQUE AQUI PARA CONHECER",
    link: "https://chk.eduzz.com/swru6lrt",
    highlights: [
      "Diálogos reais de imigração e alfândega",
      "Frases essenciais para embarque e extravio de bagagem",
      "Vocabulário prático e pronúncia rápida"
    ],
    ctaVariant: "blue"
  },
  {
    id: "mentoria",
    title: "Mentoria",
    description: "Alcance seu próximo nível de fluência em 12 meses. Acompanhamento direto e plano personalizado para acelerar seus resultados.",
    tag: "NOVIDADE",
    badgeIcon: "Award",
    bgImage: "https://italosilas.com.br/wp-content/uploads/2025/08/card11.png",
    buttonText: "CLIQUE AQUI PARA CONHECER",
    link: "https://form.respondi.app/cuKciSUG",
    highlights: [
      "Mentoria individual com itinerário personalizado",
      "Feedback contínuo de pronúncia e conversação",
      "Suporte de alta performance em 12 meses"
    ],
    ctaVariant: "purple",
    popular: true
  },
  {
    id: "grupovip",
    title: "Grupo VIP",
    description: "Aulas e Lives Gratuitas diretamente no seu WhatsApp. Conteúdos práticos semanais e networking com quem quer evoluir.",
    tag: "NOVIDADE",
    badgeIcon: "Users",
    bgImage: "https://italosilas.com.br/wp-content/uploads/2025/08/card4.png",
    buttonText: "CLIQUE AQUI PARA CONHECER",
    link: "https://chat.whatsapp.com/LUKsggPtWtd5USEwNRnZpf",
    highlights: [
      "Acesso instantâneo a lives exclusivas",
      "Materiais em PDF e exercícios em áudio",
      "Comunidade engajada e focada em falar inglês"
    ],
    ctaVariant: "green"
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Como você diria 'Eu moro aqui há 3 anos' em inglês?",
    options: [
      { text: "I live here for 3 years", level: "A1" },
      { text: "I have been living here for 3 years", level: "B2" },
      { text: "I am living here since 3 years", level: "A2" },
      { text: "I lived here since 3 years ago", level: "B1" }
    ]
  },
  {
    id: 2,
    question: "Qual frase soaria mais natural ao fazer um pedido em um restaurante no exterior?",
    options: [
      { text: "I want a coffee please", level: "A1" },
      { text: "Could I get a coffee, please?", level: "B1" },
      { text: "Give me one coffee right now", level: "A1" },
      { text: "I would appreciate if you bring coffee", level: "B2" }
    ]
  },
  {
    id: 3,
    question: "Se o oficial de imigração perguntar 'What is the purpose of your visit?', o que ele quer saber?",
    options: [
      { text: "Quanto dinheiro você tem na carteira", level: "A1" },
      { text: "O motivo principal da sua viagem", level: "B1" },
      { text: "Onde você comprou sua passagem de avião", level: "A2" },
      { text: "Quantas horas durou o seu vôo", level: "A1" }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Mariana Costa",
    role: "Viajante e Médica",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    content: "Fazer o teste me mostrou exatamente onde eu travava. Com a mentoria do Ítalo passei pela imigração nos EUA no mês passado conversando sem gaguejar!",
    rating: 5,
    highlight: "Passou na imigração dos EUA sem travar!"
  },
  {
    id: "2",
    name: "Lucas Andrade",
    role: "Engenheiro de Software",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    content: "O material do Grupo VIP é sensacional. Lives objetivas e práticas sem enrolação gramatical chata.",
    rating: 5,
    highlight: "Lives semanais práticas e diretas ao ponto"
  },
  {
    id: "3",
    name: "Patricia Silveira",
    role: "Empresária",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    content: "O treinamento de Inglês para Aeroporto salvou minhas férias na Europa. Valeu cada segundo investido!",
    rating: 5,
    highlight: "Viagem dos sonhos sem medo de falar"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: "teste",
    question: "O teste de nível de inglês é realmente gratuito?",
    answer: "Sim! O teste é 100% gratuito e online. Leva em média 3 a 5 minutos para ser concluído e você recebe o resultado com a recomendação ideal para o seu momento."
  },
  {
    category: "cursos",
    question: "Para quem é indicado o curso de 'Inglês para Aeroporto'?",
    answer: "É ideal para qualquer pessoa que pretenda viajar para o exterior e queira ter total autonomia em aeroportos, voos, conexões, hotéis, compras e alfândega, mesmo que esteja começando do zero."
  },
  {
    category: "mentoria",
    question: "Como funciona a Mentoria de 12 Meses com Ítalo Silas?",
    answer: "A mentoria oferece um plano personalizado de aprendizado focado no seu objetivo pessoal ou profissional. Você tem acompanhamento próximo, feedbacks contínuos e encontros para acelerar sua fluência."
  },
  {
    category: "cursos",
    question: "Como faço para entrar no Grupo VIP do WhatsApp?",
    answer: "Basta clicar no botão do 'Grupo VIP' nesta página. O acesso é instantâneo e gratuito, permitindo que você participe das lives, receba dicas de áudio e baixe PDFs de estudo."
  }
];

export const ENGLISH_LEVELS_INFO = [
  { level: "A1/A2", title: "Iniciante / Básico", desc: "Compreende frases simples do dia a dia. Precisa de apoio para manter diálogos fluídos.", color: "from-blue-500 to-cyan-400" },
  { level: "B1/B2", title: "Intermediário / Independente", desc: "Consegue se comunicar bem em viagens e trabalho. Busca falar sem pensar na tradução.", color: "from-purple-500 to-indigo-500" },
  { level: "C1/C2", title: "Avançado / Fluente", desc: "Expressa-se espontaneamente e com extrema precisão em qualquer contexto.", color: "from-emerald-500 to-teal-400" },
];
