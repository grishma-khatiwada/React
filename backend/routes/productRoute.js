import express from "express"
const router= express.Router()
import multer from "multer";
import { createProduct, getAllProduct, getProductById, updateProductById } from "../controller/productController.js";
import { deleteCategoryById } from "../controller/categoryController.js";
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("imageUrl"), createProduct)
router.get("/", getAllProduct)
router.get("/:id", getProductById)
router.patch("/:id", upload.single("imageUrl"), updateProductById)
router.delete("/:id", deleteCategoryById)

export default router