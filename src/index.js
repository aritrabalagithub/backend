//require.apply('dotenv').config({path:'./env'})
 import dotenv from "dotenv"
 import connectDB from "./db/index.js";
 import { app } from "./app.js";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";




dotenv.config({
  path: './env'
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT||8000,()=>{
    console.log(`server is running at port ${process.env.PORT}`)
  })
})
.catch((err) => {
  console.log("Mongo dB connectiion failed",err);
})






// import express from "express";
// const app=express()

// ;(async ()=>{
//     try{
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on("error",(error)=>{
//         console.log("Err:",error)
//         throw error
//       })
//       app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//       })
//     }
//     catch(error){
//         console.log(" Error:",error);
//         throw error
//     }
// })()