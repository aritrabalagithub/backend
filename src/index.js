//require.apply('dotenv').config({path:'./env'})
 import dotenv from "dotenv"
 import connectDB from "./db";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";


connectDB()

dotenv.config({
  path: './env'
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