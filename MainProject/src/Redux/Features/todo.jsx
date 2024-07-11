import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todo: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteTodo: (state, action) => {
      //
      state.todo = state.todo.filter((item, i) => i !== action.payload);
    },
  },
});
export default todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;
