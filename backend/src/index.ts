import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import {connectDB} from './util/db'
import mongoose from "mongoose";
dotenv.config();

const app = express();

// connect to a MongoDB database
const MONGO_CONN_STR = process.env.MONGO_URL


app.listen( async() => {
    await connectDB(MONGO_CONN_STR)
    console.log("http://localhost:" + process.env.PORT);
  });

