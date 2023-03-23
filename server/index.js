// .env config obj
import config from "./config/index.js";
import app from "./app.js";
import connectToMongoDB from "./database/database.js";

(async ()=>{
  try {
    connectToMongoDB();

    // if something happens to app
    app.on("error", (error)=>{
      console.log("Error", error)
      throw error;
    })

    // Listening on port
    app.listen(config.PORT, ()=>{
      console.log(`Listening on port ${config.PORT}`)
    })
    
  } catch (err){
    console.log("Error", err)
    throw err;
  }
})()