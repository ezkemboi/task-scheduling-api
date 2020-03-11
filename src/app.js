import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import routes from "./routes";

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log(`listening to http://localhost/${process.env.PORT}`);
});

module.exports = app;
