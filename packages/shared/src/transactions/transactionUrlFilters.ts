export type TransactionFilters = {
  search: string;
  category: string;
  type: string;
  account: string;
  status: string;
  dateRange: string;
  amountRange: string;
};

export type TransactionUrlState = {
  filters: TransactionFilters;
  page: number;
};

type SearchParamsReader = {
  get: (name: string) => string | null;
};

const TRANSACTION_FILTER_KEYS: Array<
  keyof TransactionFilters
> = [
  "search",
  "category",
  "type",
  "account",
  "status",
  "dateRange",
  "amountRange",
];

export const INITIAL_TRANSACTION_FILTERS: TransactionFilters = {
  search: "",
  category: "",
  type: "",
  account: "",
  status: "",
  dateRange: "",
  amountRange: "",
};

function getPageFromSearchParams(
  searchParams: SearchParamsReader
) {
  const page = Number(searchParams.get("page"));

  if (!Number.isInteger(page) || page < 1) {
    return 1;
  }

  return page;
}

export function getTransactionUrlState(
  searchParams: SearchParamsReader
): TransactionUrlState {
  const filters = TRANSACTION_FILTER_KEYS.reduce<TransactionFilters>(
    (currentFilters, key) => ({
      ...currentFilters,
      [key]: searchParams.get(key) ?? "",
    }),
    { ...INITIAL_TRANSACTION_FILTERS }
  );

  return {
    filters,
    page: getPageFromSearchParams(searchParams),
  };
}

export function createTransactionSearchParams(
  filters: TransactionFiltersInput,
  page = 1
) {
  const searchParams = new URLSearchParams();

  TRANSACTION_FILTER_KEYS.forEach((key) => {
    const value = filters[key]?.trim() ?? "";

    if (value) {
      searchParams.set(key, value);
    }
  });

  if (page > 1) {
    searchParams.set("page", String(page));
  }

  return searchParams;
}
export function createTransactionsUrl(
  filters: TransactionFiltersInput,
  page = 1
) {
  const searchParams = createTransactionSearchParams(
    filters,
    page
  );

  const queryString = searchParams.toString();

  return queryString
    ? `/transactions?${queryString}`
    : "/transactions";
}

type TransactionFiltersInput = Partial<
  Record<keyof TransactionFilters, string>
>;