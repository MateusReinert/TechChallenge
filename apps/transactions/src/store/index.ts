import { combineReducers, configureStore } from "@reduxjs/toolkit";

import transactionsReducer from "@/store/features/transactions/transactionsSlice";

const rootReducer = combineReducers({
  transactions: transactionsReducer,
});

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
