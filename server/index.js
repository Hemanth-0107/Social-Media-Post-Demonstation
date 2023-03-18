import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();
app.use(cors());

app.use(bodyParser.json({extended:true,limit:'30mb'}));
app.use(bodyParser.urlencoded({ limit: "30mb",extended: true }));
app.use('/posts', postRoutes); 

const CONNECTION_URL = "mongodb+srv://Hemanth1:12345@users.nfj0nqa.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection established");
    mongoose.set('strictQuery', true);
    app.listen(PORT, () => {
      console.log("BE started at port " + PORT);
    });
  })
  .catch((error) => {
    console.log("DB connection error" + error);
  });
