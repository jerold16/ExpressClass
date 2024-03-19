import express from 'express'
import { router } from './routes/index.mjs';
import mongoose from "mongoose";
import cors from 'cors'
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/Expressconnection')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });



const PORT =process.env.PORT || 3000;
app.use(express.json())  // to enable the json data
app.use(router)
app.use(cors());
app.listen(PORT ,()=>{
    console.log(`Running successfully on the port ${PORT}`);
})