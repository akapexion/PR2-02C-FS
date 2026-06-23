import express from 'express';
import productImageController from '../controllers/productImageController.js';
import upload from '../middlewares/uploadMiddleware.js';
const app = express();
const productImageRoute = express.Router();

productImageRoute.post("/uploadImage", upload.single('image'), productImageController.addProductImage);

export default productImageRoute;
