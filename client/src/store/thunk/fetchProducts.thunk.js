// importing createAsyncThunk to make network requests
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
 
export const fetchProducts = createAsyncThunk("product/fetch", async ()=>{
  const {data} = await axios.get("http://127.0.0.1:8800/api/v1/products")
  return data.products;
})