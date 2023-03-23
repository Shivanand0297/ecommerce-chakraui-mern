import express from "express"
import Product from "../models/product.schema.js";
const productRoutes = express.Router();

productRoutes.get("/", async (req, res)=>{
  const products = await Product.find({});
  res.status(200).json({
    success: true,
    products
  })
})





export default productRoutes;