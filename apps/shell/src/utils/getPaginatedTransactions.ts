import { Transaction } from "@/types/transaction";
import { paginate } from "@/utils/paginate";

type GetPaginatedTransactionsParams = {
  transactions: Transaction[];
  currentPage: number;
  itemsPerPage: number;
};

export function getPaginatedTransactions({
  transactions,
  currentPage,
  itemsPerPage,
}: GetPaginatedTransactionsParams) {
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const paginatedTransactions = paginate(
    transactions,
    currentPage,
    itemsPerPage
  );

  return {
    totalPages,
    paginatedTransactions,
  };
}
