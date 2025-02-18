import express from "express"
import mongoose from "mongoose"


// configure the server
// all the express() is fall under app now (from here app is my server)
const app = express()
app.use(express.json())



// Connect to MongoDB Database

try { 
    mongoose.connect("mongodb+srv://grishmakhatiwada76:51wctfOI5wXU5sqv@cluster0.ltvtu.mongodb.net/ecommerce-db?retryWrites=true&w=majority&appName=Cluster0")
    console.log("MongoDB Connection Success")
    
} catch (error) {
    console.log("MongoDB Connection Error", error)
    
}

// Product Schema (items for the product table)
const productSchema = new mongoose.Schema({
    name: {type: String , required: true},
    description: {type: String, required: false},
    price: {type: Number, required: true},
    previousPrice: {type: Number, required: true},
    imageUrl: {type: String, required: true},
    category: {type: String , required: true},
})
// Make product table (MODEL)
const Product = mongoose.model("Product", productSchema)

// CRUD for product

// 1. Create a Product
app.post( "/products", async(req,res)=>{

    try {
        const newProduct = await new Product(req.body).save()
        console.log(newProduct)

        
    } catch (error) {
        console.log("Something Went Wrong", error)
        
    }

})
 
// ASYNC is permises // post mean to create something








app.get("/", (req,res)=>{
    res.send("server is working...")
})

app.get("/students", (req,res)=>{
    res.send("100 students here...")
    
    // check user
    // search database
    // send users
})

app.listen(4000, ()=>{
    console.log("Server started at http://localhost:4000")

})