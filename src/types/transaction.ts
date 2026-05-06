export type TransactionStatus = "success" | "error" | "pending";

export type TransactionType = "income" | "expense";

export type TransactionOperation =
  | "deposit"
  | "transfer"
  | "payment"
  | "purchase"
  | "receipt";

export type Transaction = {
  id: string;
  description: string;
  amount: number;
  date: string;
  type: TransactionType;
  operation: TransactionOperation;
  category: string;
  account: string;
  status?: TransactionStatus;
  note?: string;
};

export type CreateTransactionData = {
  description: string;
  amount: string;
  date: string;
  type: TransactionType;
  operation: TransactionOperation;
  category: string;
  account: string;
  note?: string;
};