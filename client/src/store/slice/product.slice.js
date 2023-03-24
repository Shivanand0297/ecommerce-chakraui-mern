import { createSlice } from "@reduxjs/toolkit"
import { fetchProducts } from "../thunk/fetchProducts.thunk";

const productSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    error: null,
    data: []
  },
  extraReducers: (builder) =>{
    // Note: for fetching products
    builder.addCase(fetchProducts.pending, (state, action)=>{
      state.isLoading = true;
    })
    builder.addCase(fetchProducts.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.data = action.payload; //coming from fetchProducts thunk
    })
    builder.addCase(fetchProducts.rejected, (state, action)=>{
      state.isLoading = false;
      state.error = action.error;
    })
  }
})

export const productReducer = productSlice.reducer;