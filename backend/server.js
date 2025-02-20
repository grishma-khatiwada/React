import express from "express";
import mongoose from "mongoose";

// App configure
const app = express();

// Middleware (in uilt middleware)
app.use(express.json());

// Database Config
try {
  mongoose.connect(
    "mongodb+srv://grishmakhatiwada76:ZaSYLoR9QzazOZzV@cluster0.inn1u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
} catch (error) {
  console.log("Error in connecting to database", error);
}

// Table Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  previousPrice: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

// Product CRUD
// 1. create(post) a product
app.post("/products", async (req, res) => {
  try {

    // Check if product name already taken or not
    const productExist = await Product.findOne({name:req.body.name})

    if(productExist){
        return res.status(409).json({
            message: "Name already taken,Please choose different name"
        })
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
        const allProducts = await Product.find()
        return res.status(200).json({
            message: "All product fetched successfully",
            data: allProducts,
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
        
    }
});

// Get one products
app.get("/products/:id", async (req, res) => {

    try {
        const singleProduct = await Product.findById(req.params.id)
        return res.status(200).json({
            message: "Single Product fetched successfully",
            data: singleProduct,
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    
    }


});













// Update a product
app.patch("/products/:id", async (req, res) => {});

// Delete a product
app.delete("/products/:id", async (req, res) => {
  try {

    const checkProduct = await Product.findById(req.params.id)
    if (!checkProduct){
      return res.status(404).json({
        message: "Product not found"
      })


    }




    const deteletdProduct = await Product.findByIdAndDelete(req.params.id)
    return res.status(200).json({
      message: " Product Deleted successfully",
      data: deteletdProduct,
  })
    
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error"
  })
  }
});




app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
