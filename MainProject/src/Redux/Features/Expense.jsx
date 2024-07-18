import { createSlice } from "@reduxjs/toolkit";

const Expense = createSlice({
  name: "expense",
  initialState: {
    budget: 0,
    expenses: [],
  },
  reducers: {
    AddBudget: (state, action) => {
      state.budget = action.payload;
    },
    AddExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
  },
});

export default Expense.reducer;
export const { AddBudget, AddExpense } = Expense.actions;
