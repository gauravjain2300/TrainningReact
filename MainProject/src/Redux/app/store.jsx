import { configureStore } from "@reduxjs/toolkit";
import Counter from "../Features/Counter";
import Score from "../Features/Score";
import todo from "../Features/todo";

export const store = configureStore({
  reducer: {
    counterkey: Counter,
    scorekey: Score,
    todokey: todo,
    productkey: Product,
  },
});
