import express from "express";
import cors from 'cors';
 import helmet from "helmet";
 import api from "./api"
require('dotenv').config();




const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send("In GET")
  });
app.use('/api/v1', api);


const PORT = process.env.PORT

app.listen(PORT,() => {
    console.log("http://localhost:" + PORT);
  });

