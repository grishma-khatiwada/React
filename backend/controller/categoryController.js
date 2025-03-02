// Middleware(Multer)
import { Category } from "../schema/categorySchema.js";
import "dotenv/config";
import cloudinary from "../lib/cloudinaryConfig.js";



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

// GET category
export const getAllCategory =  async (req, res) => {
  try {
    const allCategories = await Category.find();
    return res.status(200).json({
      message: "All Product created succesfully",
      data: allCategories,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error,
    });
  }
};

export const getCategoryById =  async (req, res) => {
  try {
    const singleCategory = await Category.findById(req.params.id);

    if (!singleCategory) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    return res.status(200).json({
      message: "Single Category fetched succesfully",
      data: singleCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updateCategoryById = async (req, res) => {
  try {
    // find by id and update
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      message: "Category updated succesfully",
      data: updatedCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const deleteCategoryById = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) {
      return res.status(404).json({
        message: "Category not found",
      });
    }
    return res.status(200).json({
      message: "Category daleted succesfully",
      data: deletedCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
