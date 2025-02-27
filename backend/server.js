import express from "express";
import mongoose from "mongoose";
import { Product } from "./schema/productSchema.js";
import { Category } from "./schema/categorySchema.js";
// Middleware
import multer from "multer";
const upload = multer({ dest: 'uploads/' })





// App configure
const app = express();

// Middleware (in uilt middleware)
app.use(express.json());

// Database Config
try {
  mongoose.connect(
  "mongodb+srv://grishmakhatiwada76:ZaSYLoR9QzazOZzV@cluster0.inn1u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  console.log("MongoDB connected syccesfully");
} catch (error) {
  console.log("Error in connecting to database", error);
}

// Product CRUD
// 1. create(post) a product
app.post("/products", async (req, res) => {
  try {
    // Check if product name already taken or not
    const productExist = await Product.findOne({ name: req.body.name });

    if (productExist) {
      return res.status(409).json({
        message: "Name already taken,Please choose different name",
      });
    }

    const newProduct = await new Product(req.body).save();
    return res.status(201).json({
      message: "Product created succefully",
      data: newProduct,
    });
  } catch (error) {
    console.log("Error in creating a product", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// Get all products
app.get("/products", async (req, res) => {
  try {
    const allProducts = await Product.find();
    return res.status(200).json({
      message: "All product fetched successfully",
      data: allProducts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// Get one products
app.get("/products/:id", async (req, res) => {
  try {
    const singleProduct = await Product.findById(req.params.id);
    return res.status(200).json({
      message: "Single Product fetched successfully",
      data: singleProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});


// Update a product
app.patch("/products/:id", async (req, res) => {
  try {

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body,{new: true})
if (!updatedProduct){
  return res.status(404).json({
    message: "Product not found"
  })
}

    return res.status(200).json({
      message: "Product updated successfully",
      data: updatedProduct,
    });
    
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error", error
    });
  }

});


// Delete a product
app.delete("/products/:id", async (req, res) => {
  try {
    const checkProduct = await Product.findById(req.params.id);
    if (!checkProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const deteletdProduct = await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: " Product Deleted successfully",
      data: deteletdProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});






// Category CURD

// Create a category
app.post("/categories", upload.single('imageUrl'), async(req,res)=>{
  try {
    console.log(req.file)

    // Check if category is already taken
    const categoryExist = await Category.findOne({name: req.body.name})

    if (categoryExist){
      return res.status(409).json({
        message:"Name is already taken, Please choose different name",
      })
    }

    const newCategory = await new Category(req.body).save()
    return res.status(201).json({
      message: "Category is created succesfully",
      data: newCategory,
    })
    
  } catch (error) {
    console.log("Error in creating a product", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }

})


// GET category
app.get("/categories", async(req,res)=>{
  try {


     // Handle the image upload before saving to database.


    const allCategories = await Category.find()
    return res.status(200).json({
      message:"All Product created succesfully",
      data: allCategories,
    })
    
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error", error
    });
    
  }
  
})


app.get("/categories/:id", async(req,res)=>{
  try { 
    const singleCategory = await Category.findById(req.params.id)

    if (!singleCategory){
      return res.status(404).json({
        message: "Category not found"
      })
    }

    return res.status(200).json({
      message: "Single Category fetched succesfully",
      data: singleCategory,
    })
    
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
  
})


app.patch("/categories/:id", async(req,res)=>{
  try { 
    // find by id and update 
    const updatedCategory = await Category.findByIdAndUpdate (req.params.id, req.body, {new:true})
    return res.status(200).json({
      message: "Category updated succesfully",
      data: updatedCategory,
    })
    
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
    
  } 
})


app.delete("/categories/:id", async(req,res)=>{
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id)
    if(!deletedCategory){
      return res.status(404).json({
        message: "Category not found"
      })
    }
    return res.status(200).json({
      message: "Category daleted succesfully",
      data: deletedCategory,
    })
    
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
})









app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
