import TransactionsClient from "./TransactionsClient";

import { getTransactions } from "@/services/transactionService";

export default async function TransactionsPage() {
  const transactions = await getTransactions();

  return <TransactionsClient initialTransactions={transactions} />;
}