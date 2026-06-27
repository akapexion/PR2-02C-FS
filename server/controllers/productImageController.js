import productImages from "../models/productImages.js";
const productImageController = {
    addProductImage: async (req, res) => {
        try {
            await productImages.insertOne({ product_image: req.file.filename });
        }
        catch (err) {
            console.log(err);
        }
    }
}

export default productImageController;