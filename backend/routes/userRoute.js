import express from "express"
import { DeleteUserById, getAllUser, getUserById, loginUser, registerUser, UpdateUserById } from "../controller/userController.js"
const router = express.Router()


router.post("/register", registerUser)
router.get("/login", loginUser)
router.get("/", getAllUser)
router.patch("/:id", getUserById)
router.patch("/:id", UpdateUserById)
router.delete("/:id", DeleteUserById)


export default router




