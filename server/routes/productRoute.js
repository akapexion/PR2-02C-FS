import express from 'express';
import productController from '../controllers/productController.js';
const app = express();
const productRoute = express.Router();

productRoute.post("/addproduct", productController.addProduct)
productRoute.get("/getproducts", productController.getProducts)
productRoute.put("/updateproduct/:id", productController.updateProduct)
productRoute.delete("/deleteproduct/:id", productController.deleteProduct);

export default productRoute;

