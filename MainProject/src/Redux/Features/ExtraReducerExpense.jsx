import { createSlice } from "@reduxjs/toolkit";

const Extra = createSlice({
  name: "AvailableAmount",
  initialState: {
    amount: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("Remaining-Amount", (state, action) => {
      state.amount = action.payload.budget;
    });
  },
});

export default Extra.reducer;
