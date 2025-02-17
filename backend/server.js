import express from "express"
import mongoose from "mongoose"


// configure the server
const app = express()

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