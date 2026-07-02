import express from 'express';
import authController from '../controllers/authController.js';
const app = express();
const authRoute = express.Router();

authRoute.post("/register", authController.register)
authRoute.post("/login", authController.login)

export default authRoute;

