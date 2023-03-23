import express from "express";

// express app
const app = express();

/**@middlewares */
app.use(express.json()) // to accept json data from frontend
app.use(express.urlencoded({extended: true})) // to read nested json data


export default app;

