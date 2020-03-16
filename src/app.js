import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import passport from "passport";
import cors from 'cors';
import routes from "./routes";
import "./config/passport";

dotenv.config();
const app = express();

app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log(`listening to http://localhost/${process.env.PORT}`);
});

module.exports = app;
