import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.get("/", (req, res) => {
    res.status(200).send({
        message: "welcome to Task Scheduling"
    })
})

app.listen(process.env.PORT, () => {
    console.log(`listening to http://localhost/${process.env.PORT}`)
})

module.exports = app;
