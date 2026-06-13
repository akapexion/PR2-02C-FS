import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import product from './models/products.js';
import dbConfig from './config/dbConfig.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());


dbConfig();


app.post("/addproduct", async(req, res) => {
    const { productName } = req.body;

    try{
         await product.insertOne({
            product_name : productName
         });

         res.send({message : "Product Added Successfully"});
    }
    catch(err){
        console.log(err);
        res.send({message : err});
    }


    console.log(req.body.productName);
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running");
})