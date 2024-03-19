import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

app.get('/', (req, res) => {
  console.log(req);
  return res.status(200).send('Welcome to MERN Stack tutorial');
});

app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`App is listening to port : ${PORT}`);
});