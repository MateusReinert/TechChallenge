export const TRANSACTION_STATUS_LABEL = {
  success: "Sucesso",
  error: "Falha",
  pending: "Pendente",
};

export const TRANSACTION_TYPE_LABEL = {
  income: "Entrada",
  expense: "Saída",
};

export const TRANSACTION_TYPE_OPTIONS = [
  { label: "Todas as naturezas", value: "" },
  { label: "Entrada", value: "income" },
  { label: "Saída", value: "expense" },
];

export const TRANSACTION_OPERATION_LABEL = {
  deposit: "Depósito",
  transfer: "Transferência",
  payment: "Pagamento",
  purchase: "Compra",
  receipt: "Recebimento",
};

export const TRANSACTION_OPERATION_OPTIONS = [
  { label: "Todos os tipos", value: "" },
  { label: "Depósito", value: "deposit" },
  { label: "Transferência", value: "transfer" },
  { label: "Pagamento", value: "payment" },
  { label: "Compra", value: "purchase" },
  { label: "Recebimento", value: "receipt" },
];

export const TRANSACTION_STATUS_OPTIONS = [
  { label: "Todos os status", value: "" },
  { label: "Sucesso", value: "success" },
  { label: "Falha", value: "error" },
  { label: "Pendente", value: "pending" },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  { label: "Todas as categorias", value: "" },
  { label: "Alimentação", value: "Alimentação" },
  { label: "Transporte", value: "Transporte" },
  { label: "Salário", value: "Salário" },
  { label: "Lazer", value: "Lazer" },
  { label: "Moradia", value: "Moradia" },
  { label: "Saúde", value: "Saúde" },
  { label: "Investimentos", value: "Investimentos" },
  { label: "Extra", value: "Extra" },
  { label: "Venda", value: "Venda" },
  { label: "Benefício", value: "Benefício" },
];

export const TRANSACTION_ACCOUNT_OPTIONS = [
  { label: "Todas as contas", value: "" },
  { label: "Conta corrente", value: "Conta corrente" },
  { label: "Cartão de crédito", value: "Cartão de crédito" },
  { label: "Carteira", value: "Carteira" },
  { label: "Investimentos", value: "Investimentos" },
];

export const TRANSACTION_MODAL_TYPE_OPTIONS =
  TRANSACTION_TYPE_OPTIONS.filter((option) => option.value !== "");

export const TRANSACTION_MODAL_OPERATION_OPTIONS =
  TRANSACTION_OPERATION_OPTIONS.filter((option) => option.value !== "");

export const TRANSACTION_MODAL_CATEGORY_OPTIONS =
  TRANSACTION_CATEGORY_OPTIONS.filter((option) => option.value !== "");

export const TRANSACTION_MODAL_ACCOUNT_OPTIONS =
  TRANSACTION_ACCOUNT_OPTIONS.filter((option) => option.value !== "");

export const TRANSACTION_ITEMS_PER_PAGE = 10;

export const TRANSACTION_BREADCRUMB = [
  "Movimentações",
  "Transações",
];

export const TRANSACTION_SEARCH_PLACEHOLDER =
  "Buscar transação";

export const TRANSACTION_ATTACHMENT_ACCEPT =
  ".pdf,.png,.jpg,.jpeg";

export const TRANSACTION_ATTACHMENT_MAX_SIZE =
  5 * 1024 * 1024;

export const TRANSACTION_ATTACHMENT_MAX_SIZE_LABEL =
  "5 MB";