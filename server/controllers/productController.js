import product from "../models/products.js";

const productController = {
    addProduct: async (req, res) => {
        const { productName } = req.body;

        try {
            await product.insertOne({
                product_name: productName
            });

            res.send({ message: "Product Added Successfully" });
        }
        catch (err) {
            console.log(err);
            res.send({ message: err });
        }
    },

    getProducts: async (req, res) => {
        try {
            const products = await product.find();
            res.send({ products });
            console.log("Fetched Successfully");
        }
        catch (err) {
            res.send({ message: err });
            console.log("Error Fetching", err);
        }
    },
    updateProduct : async(req, res) => {
        try{
            await product.updateOne({_id: req.params.id}, {$set : {product_name: req.body.updateProductName}});
    
            res.send({message: "Product Updated Successfully"});
        }
        catch(err){
            res.send({message: err});
        }
    },

    deleteProduct : async(req, res) => {
        try{
            await product.deleteOne({_id : req.params.id});
    
            res.send({message: "Product Deleted Successfully"});
        }
        catch(err){
            res.send({message: err});
        }
    }
}

export default productController;