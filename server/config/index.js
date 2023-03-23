import dotenv from "dotenv";

// loading .env content into process.env
dotenv.config();

// exporting by default config obj
const config = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT
}

export default config;