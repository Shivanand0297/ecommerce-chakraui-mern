// importing mongoose to connect to database
import mongoose from "mongoose";

// importing config obj
import config from "../config/index.js" 

const connectToMongoDB = async () =>{
  mongoose.set("strictQuery", false);

  try {
    // connecting to mongodb
    await mongoose.connect(config.MONGO_URI)
    console.log(`Connected to MongoDB: ${mongoose.connection.host}`)
  } catch (err) {
    console.log(`Error: ${err}`) 
    throw err;   
  }
}

export default connectToMongoDB;