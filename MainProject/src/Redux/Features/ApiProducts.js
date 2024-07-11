import { Pending } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk("fetchProductData", () => {
  const record = axios({
    method: "get",
    url: "https://fakestoreapi.com/products",
  }).then((res) => {
    return res.json();
  });
});

const ProductReducer = createSlice({
  name: "Product",
  initialState: { products: [], Pending: false, error: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.products = action.payload.products;
      })
      .addCase(fetchData.pending, (state, action) => {
        state.Pending = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default ProductReducer;
