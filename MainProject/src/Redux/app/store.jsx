import { configureStore } from "@reduxjs/toolkit";
import Counter from "../Features/Counter";
import Score from "../Features/Score";
import todo from "../Features/todo";
// import Budget from "../Features/Budget";
import Expense from "../Features/Expense";
import ExtraReducerExpense from "../Features/ExtraReducerExpense";

export const store = configureStore({
  reducer: {
    counterkey: Counter,
    scorekey: Score,
    todokey: todo,
    // budgetkey: Budget,
    expensekey: Expense,
    extrakey: ExtraReducerExpense,
  },
});
