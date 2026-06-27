import express from 'express';
import productImageController from '../controllers/productImageController.js';
import upload from '../middlewares/uploadMiddleware.js';

const productImageRoute = express.Router();

productImageRoute.post("/uploadProductImage", upload.single("image"),
    productImageController.addProductImage);

export default productImageRoute;

