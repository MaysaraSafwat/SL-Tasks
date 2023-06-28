import { MongoClient } from "mongodb";

export const connectDB= async(url:string)=> {
    const client = new MongoClient(url);
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  }