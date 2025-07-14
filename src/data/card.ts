import { Check, CircleSlash } from "lucide-react";

const produtivity = {
  before: [
    {
      content: "Lançamentos manuais de ponto em planilhas",
    },
    {
      content: "Cálculo de horas extras e faltas demorados",
    },
    {
      content: "Comunicação dispersa por e-mail e whatsapp",
    },
  ],
  after: [
    {
      content: "Registro de presença automática em tempo real",
    },
    {
      content: "Relatórios de horas e folha gerados em segundos",
    },
    {
      content: "Notificações e alertas instantâneos no próprio painel",
    },
  ],
};

const lgProdutivity = {
  before: [
    {
      id: 1,
      content: "Lançamentos manuais de ponto em planilhas",
      icon: CircleSlash,
    },
    {
      id: 2,
      content: "Registro de presença automática em tempo real",
      icon: Check,
    },
    {
      id: 3,
      content: "Cálculo de horas extras e faltas demorados",
      icon: CircleSlash,
    },
  ],
  after: [
    {
      id: 4,
      content: "Relatórios de horas e folha gerados em segundos",
      icon: Check,
    },
    {
      id: 5,
      content: "Comunicação dispersa por e-mail e whatsapp",
      icon: CircleSlash,
    },
    {
      id: 6,
      content: "Notificações e alertas instantâneos no próprio painel",
      icon: Check,
    },
  ],
};

const centralization = {
  before: [
    {
      content: "Dados de colaboradores espalhados entre sistemas distintos",
    },
    {
      content: "Vagas e currículos em e-mails e drives separados",
    },
    {
      content: "Dificuldade para obter visão única da equipe",
    },
  ],
  after: [
    {
      content: "Painel único com ponto, recrutamento e folha de pagamento",
    },
    {
      content: "Histórico completo de cada colaborador em um só lugar",
    },
    {
      content: "Acesso rápido a relatórios, documentos e métricas",
    },
  ],
};

const lgCentralization = {
  before: [
    {
      id: 7,
      content: "Dados de colaboradores espalhados entre sistemas distintos",
      icon: CircleSlash,
    },
    {
      id: 8,
      content: "Painel único com ponto, recrutamento e folha de pagamento",
      icon: Check,
    },
    {
      id: 9,
      content: "Vagas e currículos em e-mails e drives separados",
      icon: CircleSlash,
    },
  ],
  after: [
    {
      id: 10,
      content: "Histórico completo de cada colaborador em um só lugar",
      icon: Check,
    },
    {
      id: 11,
      content: "Dificuldade para obter visão única da equipe",
      icon: CircleSlash,
    },
    {
      id: 12,
      content: "Atualizações de regras trabalhistas integradas ao sistema",
      icon: Check,
    },
  ],
};

const compliance = {
  before: [
    {
      content: "Risco de multas por erros em cálculos ou documentação",
    },
    {
      content: "Falta de controle sobre quem vê o quê",
    },
    {
      content: "Auditoria e revisões manuais e demoradas",
    },
  ],
  after: [
    {
      content: "Logs de auditoria automáticos e rastreáveis",
    },
    {
      content: "Permissões de acesso granulares por usuário",
    },
    {
      content: "Atualizações de regras trabalhistas integradas ao sistema",
    },
  ],
};

const lgCompliance = {
  before: [
    {
      id: 13,
      content: "Risco de multas por erros em cálculos ou documentação",
      icon: CircleSlash,
    },
    {
      id: 14,
      content: "Logs de auditoria automáticos e rastreáveis",
      icon: Check,
    },
    {
      id: 15,
      content: "Falta de controle sobre quem vê o quê",
      icon: CircleSlash,
    },
  ],
  after: [
    {
      id: 16,
      content: "Permissões de acesso granulares por usuário",
      icon: Check,
    },
    {
      id: 17,
      content: "Auditoria e revisões manuais e demoradas",
      icon: CircleSlash,
    },
    {
      id: 18,
      content: "Atualizações de regras trabalhistas integradas ao sistema",
      icon: Check,
    },
  ],
};

export const cards = [
  {
    title: "Produtividade",
    before: produtivity.before,
    after: produtivity.after,
    image: "/images/dashboards/produtividade.webp",
  },
  {
    title: "Centralização",
    before: centralization.before,
    after: centralization.after,
    image: "/images/dashboards/centralizacao.webp",
  },
  {
    title: "Conformidade & Segurança",
    before: compliance.before,
    after: compliance.after,
    image: "/images/dashboards/conformidade.webp",
  },
];

export const lgCards = [
  {
    title: "Produtividade",
    before: lgProdutivity.before,
    after: lgProdutivity.after,
    image: "/images/dashboards/produtividade.webp",
  },
  {
    title: "Centralização",
    before: lgCentralization.before,
    after: lgCentralization.after,
    image: "/images/dashboards/centralizacao.webp",
  },
  {
    title: "Conformidade & Segurança",
    before: lgCompliance.before,
    after: lgCompliance.after,
    image: "/images/dashboards/conformidade.webp",
  },
];
