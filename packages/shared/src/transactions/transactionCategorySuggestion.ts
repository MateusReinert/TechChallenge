type TransactionCategoryRule = {
  category: string;
  keywords: string[];
};

const TRANSACTION_CATEGORY_RULES: TransactionCategoryRule[] = [
  {
    category: "Alimentação",
    keywords: [
      "mercado",
      "supermercado",
      "atacadão",
      "atacadao",
      "carrefour",
      "condor",
      "giassi",
      "fort",
      "komprão",
      "komprao",
      "ifood",
      "restaurante",
      "lanchonete",
      "lanche",
      "hamburguer",
      "hambúrguer",
      "pizza",
      "pizzaria",
      "padaria",
      "café",
      "cafe",
      "cafeteria",
      "açougue",
      "acougue",
      "comida",
      "alimentação",
      "alimentacao",
    ],
  },
  {
    category: "Transporte",
    keywords: [
      "uber",
      "99",
      "taxi",
      "ônibus",
      "onibus",
      "metrô",
      "metro",
      "combustível",
      "combustivel",
      "gasolina",
      "etanol",
      "diesel",
      "posto",
      "ipiranga",
      "shell",
      "petrobras",
      "estacionamento",
      "pedágio",
      "pedagio",
      "lavacar",
      "lava rápido",
      "lava rapido",
    ],
  },
  {
    category: "Salário",
    keywords: [
      "salário",
      "salario",
      "holerite",
      "pagamento",
      "folha",
      "empresa",
      "salário mensal",
      "salario mensal",
    ],
  },
  {
    category: "Lazer",
    keywords: [
      "netflix",
      "spotify",
      "amazon prime",
      "prime video",
      "disney",
      "disney+",
      "max",
      "hbo",
      "youtube",
      "cinema",
      "show",
      "bar",
      "pub",
      "viagem",
      "hotel",
      "airbnb",
      "steam",
      "xbox",
      "playstation",
      "nintendo",
      "jogo",
      "games",
    ],
  },
  {
    category: "Moradia",
    keywords: [
      "aluguel",
      "condomínio",
      "condominio",
      "energia",
      "luz",
      "água",
      "agua",
      "internet",
      "vivo",
      "claro",
      "tim",
      "oi",
      "gás",
      "gas",
      "iptu",
      "alarme",
    ],
  },
  {
    category: "Saúde",
    keywords: [
      "farmácia",
      "farmacia",
      "droga raia",
      "drogasil",
      "panvel",
      "hospital",
      "consulta",
      "médico",
      "medico",
      "dentista",
      "psicólogo",
      "psicologo",
      "exame",
      "laboratório",
      "laboratorio",
      "remédio",
      "remedio",
      "academia",
      "smart fit",
      "engenho",
      "gympass",
    ],
  },
  {
    category: "Investimentos",
    keywords: [
      "investimento",
      "investimentos",
      "ações",
      "acoes",
      "tesouro",
      "tesouro direto",
      "cdb",
      "lci",
      "lca",
      "renda fixa",
      "nubank investimentos",
      "inter investimentos",
      "xp",
      "rico",
      "clear",
    ],
  },
  {
    category: "Extra",
    keywords: [
      "freelance",
      "freela",
      "extra",
      "renda extra",
      "serviço",
      "servico",
      "bônus",
      "bonus",
      "comissão",
      "comissao",
    ],
  },
  {
    category: "Venda",
    keywords: [
      "venda",
      "vendido",
      "olx",
      "mercado livre",
      "enjoei",
      "facebook marketplace",
    ],
  },
  {
    category: "Benefício",
    keywords: [
      "benefício",
      "beneficio",
      "vale alimentação",
      "vale alimentacao",
      "vale refeição",
      "vale refeicao",
      "vr",
      "va",
      "flash",
      "caju",
      "alelo",
      "sodexo",
      "ticket",
      "pluxee",
    ],
  },
];

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function suggestTransactionCategory(description: string): string | null {
  const normalizedDescription = normalize(description);

  if (!normalizedDescription) {
    return null;
  }

  const rule = TRANSACTION_CATEGORY_RULES.find(({ keywords }) =>
    keywords.some((keyword) =>
      normalizedDescription.includes(normalize(keyword))
    )
  );

  return rule?.category ?? null;
}
