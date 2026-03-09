import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AgendarRecolhaPage from "./pages/AgendarRecolhaPage";

const detailPages = [
  {
    path: "/lavagem-diaria",
    ctaLabel: "Agendar Recolha",
    title: "Lavagem Diária",
    subtitle: "Serviço completo para roupa do dia a dia com recolha, lavagem, secagem e dobra.",
    cards: [
      {
        title: "Como funciona",
        items: [
          "Recolha no horário combinado.",
          "Separação por tipo de tecido e cor.",
          "Lavagem com produtos adequados.",
          "Entrega pronta a vestir."
        ]
      },
      {
        title: "Indicado para",
        text: "Famílias, estudantes e profissionais que precisam de roupa pronta sem perder tempo."
      },
      {
        title: "Prazos",
        text: "Entrega em 24h a 48h, com opção expressa no mesmo dia."
      },
      {
        title: "Preço base",
        text: "Desde 12 EUR por lote até 8kg.",
        action: "Pedir Orçamento",
        actionLink: "/agendar-recolha"
      }
    ]
  },
  {
    path: "/proprietarios",
    ctaLabel: "Falar com Equipa",
    title: "Empresas",
    subtitle: "Planos para alojamentos locais, hostels e empresas que precisam de rotação rápida.",
    cards: [
      {
        title: "Vantagens",
        items: [
          "Faturação mensal e relatórios por unidade.",
          "Prioridade de recolha e entrega.",
          "Padrão consistente de lavagem e dobra."
        ]
      },
      {
        title: "Ideal para",
        text: "Alojamento local, pequenos hotéis e equipas que necessitam de volume regular."
      },
      {
        title: "Operação",
        text: "Definimos janelas fixas de recolha e entrega para manter o stock sempre pronto."
      },
      {
        title: "Plano empresarial",
        text: "Condições personalizadas conforme volume semanal e tipo de roupa.",
        action: "Solicitar Proposta"
      }
    ]
  },
  {
    path: "/utilizadores",
    ctaLabel: "Marcar Serviço",
    title: "Fique em casa",
    subtitle: "Serviço pensado para quem quer praticidade total com recolha e entrega ao domicílio.",
    cards: [
      {
        title: "Passo a passo",
        items: [
          "Agenda por telefone ou WhatsApp.",
          "Recebemos a roupa no local indicado.",
          "Tratamos e devolvemos em 24h ou 48h."
        ]
      },
      {
        title: "Benefícios",
        text: "Mais tempo livre, previsibilidade de entrega e qualidade constante em cada pedido."
      },
      {
        title: "Atendimento",
        text: "Suporte rápido para ajustar horários, adicionar pedidos e acompanhar cada encomenda."
      },
      {
        title: "Preço e horário",
        text: "Valores por lote ou por peça, com horários flexíveis para recolha e entrega.",
        action: "Fazer Pedido",
        actionLink: "/agendar-recolha"
      }
    ]
  },
  {
    path: "/pecas-especiais",
    ctaLabel: "Pedir Avaliação",
    title: "Peças Especiais",
    subtitle: "Cuidado técnico para edredões, cortinas e tecidos delicados com tratamento específico.",
    cards: [
      {
        title: "Tipos de peça",
        items: [
          "Edredões e cobertores.",
          "Cortinas e capas decorativas.",
          "Roupas delicadas e tecidos sensíveis."
        ]
      },
      {
        title: "Processo técnico",
        text: "Análise do tecido, escolha do ciclo correto e secagem controlada para proteger as fibras."
      },
      {
        title: "Qualidade",
        text: "Acabamento premium com foco em higiene, preservação de cor e cheiro fresco."
      },
      {
        title: "Preço base",
        text: "Edredão de casal desde 15 EUR. Peças de grande volume sob avaliação.",
        action: "Pedir Orçamento",
        actionLink: "/agendar-recolha"
      }
    ]
  }
];

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/agendar-recolha" element={<AgendarRecolhaPage />} />
      {detailPages.map((page) => (
        <Route key={page.path} path={page.path} element={<DetailPage {...page} />} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
