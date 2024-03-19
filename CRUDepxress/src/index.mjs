import express, { json } from 'express'
import mongoose from 'mongoose'
import { indexRouter } from './routers/indexRouter.mjs';
import cors from 'cors'
import { upload } from './utils/middlewares.mjs';
import path, { dirname } from 'path';
import { URL, fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import { UserRegisterationMail } from './utils/emailpattern.mjs';

const app=express()
app.use(cors())
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// app.use(express.static(__dirname + '/public'));
app.use(express.static('public'))

// UserRegisterationMail()

const PORT=process.env.PORT || 3010
mongoose.connect('mongodb://127.0.0.1:27017/PizzaStore')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
app.use(express.json()) //to enable the Json object
app.use(indexRouter) //to the api we created

app.listen(PORT,()=>{
    console.log(`running successfully on ${PORT}`);
    console.log(__dirname);
})

