import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConfig from './config/dbConfig.js';
import productRoute from './routes/productRoute.js';
import productImageRoute from './routes/productImageRoute.js';
import authRoute from './routes/authRoute.js';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
dbConfig();

app.use(productRoute);
app.use(productImageRoute);
app.use(authRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running");
})