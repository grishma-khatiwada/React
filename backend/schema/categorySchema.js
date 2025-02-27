import mongoose from "mongoose";


// category schema
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },
  });
  
  // catefory table(Category Model)
  export const Category = mongoose.model("Category", categorySchema);