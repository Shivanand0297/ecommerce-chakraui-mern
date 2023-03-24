import { configureStore } from "@reduxjs/toolkit"
import { productReducer } from "./slice/product.slice"

export const store = configureStore({
  reducer: {
    products: productReducer
  },
})

export * from "./thunk/fetchProducts.thunk.js";

