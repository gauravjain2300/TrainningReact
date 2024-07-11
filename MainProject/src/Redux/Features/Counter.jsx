import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Counter",
  initialState: { count: 1000, username: "" },
  reducers: {
    ic: (state, action) => {
      state.count++;
    },
    dc: (state, action) => {
      state.count--;
    },
    inc_by_user: (state, action) => {
      console.log("action:", action);
      state.count += action.payload;
    },
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { ic, dc, inc_by_user, updateUsername } = counterSlice.actions;
