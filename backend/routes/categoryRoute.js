import express from "express"
const router = express.Router()
import multer from "multer";
import { createCategory, deleteCategoryById, getAllCategory, getCategoryById, updateCategoryById } from "../controller/categoryController.js";
import { verifyToken } from "../middleware/verifyToken.js";
const upload = multer({ dest: "uploads/" });

router.post("/", verifyToken, upload.single("imageurl"), createCategory)
router.get("/", getAllCategory)
router.get("/:id", getCategoryById)
router.patch("/:id",verifyToken, updateCategoryById)
router.delete("/:id", verifyToken, deleteCategoryById)

export default router




