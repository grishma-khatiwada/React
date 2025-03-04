import { User } from "../schema/userSchema.js"
import bcrypt from "bcrypt"
const saltRounds = 10;
// saltround is complexicity

import jwt from "jsonwebtoken"


// Create User
export const registerUser = async (req,res) =>{
    try {

        // Check if user already exist
        const userExists = await User.findOne({email: req.body.email})
        if(userExists){
            return res.status(409).json({
                message: "User already exists with this email please choose another email",
            })
        }

        // HASH the password before saving it to the database(Library-npm bcrypt)
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)
        console.log(hashedPassword)


        const newRegisteredUser = await new User({...req.body, password:hashedPassword}).save()
        return res.status(201).json({
            message: "User registered succesfully",
            data: newRegisteredUser,
        })
        
    } catch (error) {
        return res.status(500).json({
            message:"Error while registering user",
            error: error,
        })
        
    }
}



// Login USer
export const loginUser = async (req,res) =>{
    try {
        // check if user exists or not 
        const userExists = await User.findOne({email: req.body.email})
        if(!userExists){
            return res.status(409).json({
                message: "You are not registered yet, Please register before login",
            })
        }
// If user exist compare the password
       const isPasswordMatch = await bcrypt.compare (req.body.password, userExists.password)
       if(!isPasswordMatch){
        return res.status(409).json({
        message: "Incorrect Password"
    })
       }
    

    //    If password match then generate the jwt(json web token) token
    const myToken = jwt.sign({email: userExists.email}, "this_is_private_key",{ expiresIn: "24h" })
    console.log(myToken)
    return res.status(200).json({
        message:"User logged in succesfully",
        token: myToken,
        user: userExists,
    })

        
    } catch (error) {
        return res.status(500).json({
            message:"Error while registering user",
            error: error,
        })

        
    }
}








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



