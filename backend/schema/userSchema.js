import mongoose from "mongoose";


// User schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required:true },
  });
  
  // catefory table(Category Model)
  export const User = mongoose.model("User", userSchema);