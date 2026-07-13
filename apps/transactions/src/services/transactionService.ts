import type { Transaction } from "@/types/transaction";

const API_URL = "http://localhost:3001/transactions";

async function request<T>(
  input: RequestInfo,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(input, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!response.ok) {
    const responseText = await response.text();

    throw new Error(
      responseText ||
        `Não foi possível realizar a operação. Código: ${response.status}.`
    );
  }

  return response.json();
}

export async function getTransactions(): Promise<Transaction[]> {
  return request<Transaction[]>(API_URL, {
    cache: "no-store",
  });
}

export async function getTransactionById(
  id: string
): Promise<Transaction | undefined> {
  const transactions = await getTransactions();

  return transactions.find(
    (transaction) => String(transaction.id) === String(id)
  );
}

export async function createTransaction(
  transaction: Transaction
): Promise<Transaction> {
  return request<Transaction>(API_URL, {
    method: "POST",
    body: JSON.stringify(transaction),
  });
}

export async function updateTransaction(
  transaction: Transaction
): Promise<Transaction> {
  return request<Transaction>(
    `${API_URL}/${transaction.id}`,
    {
      method: "PUT",
      body: JSON.stringify(transaction),
    }
  );
}

export async function deleteTransaction(
  id: string
): Promise<void> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const responseText = await response.text();

    throw new Error(
      responseText ||
        `Não foi possível excluir a transação. Código: ${response.status}.`
    );
  }
}