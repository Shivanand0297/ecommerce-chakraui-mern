import express from "express";

//Our routes
import productRoutes from "./routes/product.routes.js";

// express app
const app = express();

/**@middlewares */
app.use(express.json()) // to accept json data from frontend
app.use(express.urlencoded({extended: true})) // to read nested json data

/**@routes */
app.use("/api/v1/products", productRoutes)







export default app;

