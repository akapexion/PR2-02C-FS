import productImages from "../models/productImages.js";

const productImageController = {
    addProductImage: async (req, res) => {
        const image = req.file.filename;
        console.log(req.file);

        try {
            await productImages.insertOne({
                product_image: image
            });

            res.send({ message: "Product Image Uploaded Successfully" });
        }
        catch (err) {
            console.log(err);
            res.send({ message: err });
        }
    }
}

export default productImageController;