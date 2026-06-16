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

// POST Request
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
});

// GET Request
app.get("/getproducts", async(req, res) => {
    try{
        const products = await product.find();
        res.send({products});
        console.log("Fetched Successfully");
    }
    catch(err){
        res.send({message : err});
        console.log("Error Fetching", err);
    }
})

// PUT Request
app.put("/updateproduct/:id", async(req, res) => {
    try{
        await product.updateOne({_id: req.params.id}, {$set : {product_name: req.body.updateProductName}});

        res.send({message: "Product Updated Successfully"});
    }
    catch(err){
        res.send({message: err});
    }
})


app.listen(process.env.PORT || 5000, () => {
    console.log("Server running");
})