import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());


app.post("/adduser", (req, res) => {
    res.send({message: "Request Received"});
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running");
})