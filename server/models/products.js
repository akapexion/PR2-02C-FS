import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    product_name : {
        type : "String",
        required : true
    }
});

const product = mongoose.model("Product", productsSchema);

export default product;
