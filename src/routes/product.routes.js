import express from "express";
import productControllers from "../controllers/product.controllers.js";

const router = express.Router();

router.post("/", productControllers.createProduct);
router.get("/", productControllers.getProducts);
router.get("/:id", productControllers.getProductById);

export default router;