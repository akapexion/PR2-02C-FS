import mongoose from "mongoose";

const productImagesSchema = new mongoose.Schema({
    product_image: {
        type: "String",
        required: true
    }
});

const productImages = mongoose.model("productImage", productImagesSchema);

export default productImages;
