import express from "express"
import { deleteUserById,getAllUsers, getSingleUserById, loginUser, registerUser, updateUserById} from "../controller/userController.js"
const router = express.Router()


router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/", getAllUsers)
router.patch("/:id", getSingleUserById)
router.patch("/:id", updateUserById)
router.delete("/:id", deleteUserById)


export default router