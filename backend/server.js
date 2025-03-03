import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";

// Middleware(Multer)

// cloudinary (Data storage)
// v2 as clodinary is like remaining v2 as cloudinary


// App configure
const app = express();

// Middleware (in uilt middleware)
app.use(express.json());

// Database Config
try {
  mongoose.connect( process.env.MONGODB_URI
  );
  console.log("MongoDB connected syccesfully");
} catch (error) {
  console.log("Error in connecting to database", error);
}

app.use("/categories", categoryRoute);
app.use("/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.APP_PORT, () => {
  console.log(`server is running on http://localhost:${process.env.APP_PORT}`);
});
