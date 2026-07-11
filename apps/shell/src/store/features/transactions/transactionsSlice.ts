import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { Transaction } from "@/types/transaction";

type TransactionsState = {
  items: Transaction[];
  initialized: boolean;
};

const initialState: TransactionsState = {
  items: [],
  initialized: false,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    initializeTransactions(
      state,
      action: PayloadAction<Transaction[]>
    ) {
      if (state.initialized) return;

      state.items = action.payload;
      state.initialized = true;
    },

    setTransactions(
      state,
      action: PayloadAction<Transaction[]>
    ) {
      state.items = action.payload;
      state.initialized = true;
    },

    addTransaction(
      state,
      action: PayloadAction<Transaction>
    ) {
      state.items.unshift(action.payload);
      state.initialized = true;
    },

    updateTransaction(
      state,
      action: PayloadAction<Transaction>
    ) {
      const transactionIndex = state.items.findIndex(
        (transaction) => transaction.id === action.payload.id
      );

      if (transactionIndex === -1) return;

      state.items[transactionIndex] = action.payload;
    },

    removeTransaction(
      state,
      action: PayloadAction<string>
    ) {
      state.items = state.items.filter(
        (transaction) => transaction.id !== action.payload
      );
    },
  },
});

export const {
  initializeTransactions,
  setTransactions,
  addTransaction,
  updateTransaction,
  removeTransaction,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;