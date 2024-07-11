import { createSlice } from "@reduxjs/toolkit";

const scoreReducer = createSlice({
  name: "score",
  initialState: { score: 0 },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("Counter/ic", (state, action) => {
      state.score += 50;
    });
  },
});

export default scoreReducer.reducer;
