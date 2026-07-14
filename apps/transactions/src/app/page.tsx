import { Suspense } from "react";

import TransactionsClient from "@/app/TransactionsClient";
import { getTransactions } from "@/services/transactionService";

export default async function TransactionsPage() {
  const transactions = await getTransactions();

  return (
    <Suspense fallback={null}>
      <TransactionsClient initialTransactions={transactions} />
    </Suspense>
  );
}