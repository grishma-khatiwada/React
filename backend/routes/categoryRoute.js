// Middleware(Multer)
import multer from "multer";
import { app } from "../server.js";
import { Category } from "../schema/categorySchema.js";
const upload = multer({ dest: "uploads/" });
import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// CRUD CATEGORY
// Create a category
export const createCategory = async (req, res) => {
  try {
    // Check if category is already taken
    const categoryExist = await Category.findOne({ name: req.body.name });
    if (categoryExist) {
      return res.status(409).json({
        message: "Name is already taken, Please choose different name",
      });
    }

    // Handle the image upload before saving to database.
    // console.log(req.file)

    const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);
    //  console.log(cloudinaryResponse, "Hello its cloudinary exists")

    const newCategory = await new Category({
      ...req.body,
      imageUrl: cloudinaryResponse.secure_url,
    }).save();
    return res.status(201).json({
      message: "Category is created succesfully",
      data: newCategory,
    });
  } catch (error) {
    console.log("Error in creating a product", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// // GET category
// app.get("/categories", async (req, res) => {
//   try {
//     const allCategories = await Category.find();
//     return res.status(200).json({
//       message: "All Product created succesfully",
//       data: allCategories,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Internal server error",
//       error,
//     });
//   }
// });

// app.get("/categories/:id", async (req, res) => {
//   try {
//     const singleCategory = await Category.findById(req.params.id);

//     if (!singleCategory) {
//       return res.status(404).json({
//         message: "Category not found",
//       });
//     }

//     return res.status(200).json({
//       message: "Single Category fetched succesfully",
//       data: singleCategory,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// });

// app.patch("/categories/:id", async (req, res) => {
//   try {
//     // find by id and update
//     const updatedCategory = await Category.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     return res.status(200).json({
//       message: "Category updated succesfully",
//       data: updatedCategory,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// });

// app.delete("/categories/:id", async (req, res) => {
//   try {
//     const deletedCategory = await Category.findByIdAndDelete(req.params.id);
//     if (!deletedCategory) {
//       return res.status(404).json({
//         message: "Category not found",
//       });
//     }
//     return res.status(200).json({
//       message: "Category daleted succesfully",
//       data: deletedCategory,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// });
