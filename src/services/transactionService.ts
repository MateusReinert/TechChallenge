import fs from "fs/promises";
import path from "path";

import { Transaction } from "@/types/transaction";

const filePath = path.join(
  process.cwd(),
  "src",
  "data",
  "transactions.json"
);

async function readFile(): Promise<Transaction[]> {
  try {
    const file = await fs.readFile(filePath, "utf-8");

    const parsed = JSON.parse(file);

    if (!Array.isArray(parsed)) {
      throw new Error();
    }

    return parsed;
  } catch {
    throw new Error(
      "Não foi possível carregar as transações."
    );
  }
}

async function writeFile(data: Transaction[]) {
  try {
    await fs.writeFile(
      filePath,
      JSON.stringify(data, null, 2),
      "utf-8"
    );
  } catch {
    throw new Error(
      "Não foi possível salvar os dados das transações."
    );
  }
}

export async function getTransactions() {
  return await readFile();
}

export async function createTransaction(
  transaction: Transaction
) {
  const transactions = await readFile();

  const updated = [transaction, ...transactions];

  await writeFile(updated);

  return transaction;
}

export async function updateTransaction(
  transaction: Transaction
) {
  const transactions = await readFile();

  const exists = transactions.some(
    (item) => item.id === transaction.id
  );

  if (!exists) {
    throw new Error("Transação não encontrada.");
  }

  const updated = transactions.map((item) =>
    item.id === transaction.id ? transaction : item
  );

  await writeFile(updated);

  return transaction;
}

export async function deleteTransaction(id: string) {
  const transactions = await readFile();

  const exists = transactions.some(
    (item) => item.id === id
  );

  if (!exists) {
    throw new Error("Transação não encontrada.");
  }

  const updated = transactions.filter(
    (item) => item.id !== id
  );

  await writeFile(updated);
}