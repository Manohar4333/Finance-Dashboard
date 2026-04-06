import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: "viewer",
  search: "",
  transactions: [
    { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
    { id: 2, date: "2026-04-02", amount: 1200, category: "Food", type: "expense" },
    { id: 3, date: "2026-04-03", amount: 800, category: "Transport", type: "expense" },
  ],
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
  },
});

export const { setRole, setSearch, addTransaction } = financeSlice.actions;

export const store = configureStore({
  reducer: {
    finance: financeSlice.reducer,
  },
});