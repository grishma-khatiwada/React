import { User } from "../schema/userSchema.js"


// Create User
export const registerUser = async (req,res) =>{}

// Login USer
export const loginUser = async (req,res) =>{}

// Get All User
export const getAllUser = async (req,res) =>{
    try {
        const allUsers = await User.find()
        return res.status(200).json({
            message:"All users fetched succesfully",
            data: allUsers,
        })
        
    } catch (error) {
        return res.status(500).json({
            message:"Eror in fetched",
            error: allUsers,
        })
    }
}





// Get User by Id
export const getUserById = async (req,res) =>{}

// Update User by Id
export const UpdateUserById = async (req,res) =>{}

// Delete User by Id
export const DeleteUserById = async (req,res) =>{}



