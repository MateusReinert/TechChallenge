import { useMemo } from "react";

import type { FilterBarItem } from "@finance/ui";
import {
  DASHBOARD_AMOUNT_RANGE_OPTIONS,
  DASHBOARD_DATE_RANGE_OPTIONS,
  DASHBOARD_STATUS_OPTIONS,
  DASHBOARD_TYPE_OPTIONS,
} from "@/constants/dashboardFilterOptions";
import { Transaction } from "@/types/transaction";
import { getUniqueOptions } from "@/utils/dashboardFiltersUtils";

export function useTransactionFilterItems(transactions: Transaction[]) {
  return useMemo<FilterBarItem[]>(() => {
    const categoryOptions = getUniqueOptions(
      transactions.map((transaction) => transaction.category)
    );

    const accountOptions = getUniqueOptions(
      transactions.map((transaction) => transaction.account)
    );

    return [
      {
        key: "category",
        label: "Categoria",
        ariaLabel: "Filtrar por categoria",
        options: [{ label: "Todas", value: "" }, ...categoryOptions],
      },
      {
        key: "type",
        label: "Operação",
        ariaLabel: "Filtrar por natureza",
        options: DASHBOARD_TYPE_OPTIONS,
      },
      {
        key: "account",
        label: "Conta",
        ariaLabel: "Filtrar por conta",
        options: [{ label: "Todas", value: "" }, ...accountOptions],
      },
      {
        key: "status",
        label: "Status",
        ariaLabel: "Filtrar por status",
        options: DASHBOARD_STATUS_OPTIONS,
      },
      {
        key: "dateRange",
        label: "Período",
        ariaLabel: "Filtrar por período",
        options: DASHBOARD_DATE_RANGE_OPTIONS,
      },
      {
        key: "amountRange",
        label: "Faixa de valor",
        ariaLabel: "Filtrar por valor",
        options: DASHBOARD_AMOUNT_RANGE_OPTIONS,
      },
    ];
  }, [transactions]);
}
