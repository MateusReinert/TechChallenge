import DashboardClient from "./DashboardClient";

import { getTransactions } from "@/services/transactionService";

export default async function DashboardPage() {
  const transactions = await getTransactions();

  return <DashboardClient initialTransactions={transactions} />;
}
