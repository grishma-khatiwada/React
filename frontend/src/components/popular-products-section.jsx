import React, { useEffect, useState } from "react";
import myImage from "../../public/categories.jpeg";
import ReactStars from "react-stars";
import SingleProductCard from "./single-product-card";
import axios from "axios";

export default function PopularProductsSection() {
  // const products = [
  //   {
  //     image: myImage,
  //     category: "snack And Munchins",
  //     name: "Haldiram Sev Bhujiya",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "snack And Munchins 1",
  //     name: "Haldiram Sev Bhujiya 1",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "snack And Munchins 2",
  //     name: "Haldiram Sev Bhujiya 2",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "snack And Munchins 3",
  //     name: "Haldiram Sev Bhujiya 4",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "snack And Munchins 5",
  //     name: "Haldiram Sev Bhujiya 6",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "snack And Munchins 7",
  //     name: "Haldiram Sev Bhujiya 7",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },
  //   {
  //     image: myImage,
  //     category: "snack And Munchins 8",
  //     name: "Haldiram Sev Bhujiya 8",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "snack And Munchins 9",
  //     name: "Haldiram Sev Bhujiya 9",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "snack And Munchins 10",
  //     name: "Haldiram Sev Bhujiya 10",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "snack And Munchins 11",
  //     name: "Haldiram Sev Bhujiya 11 ",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "snack And Munchins 12",
  //     name: "Haldiram Sev Bhujiya 12",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "snack And Munchins 13",
  //     name: "Haldiram Sev Bhujiya 13",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },
  // ];

  const [allProduts, setAllProducts] = useState(undefined)
  const fetchAllProducts = async ()=>{
    try {

      // npm axios
      const response= await axios.get("http://localhost:4000/products")
      console.log(response.data.data)
      setAllProducts (response.data.data)
      
    } catch (error) {
      console.log("Something Went Wrong", error)
      
    }
  }

  useEffect(()=>{
    fetchAllProducts()
  }, [])

  // Hooks(utility function)(usestate,useEffect,useRef, useContext)
  // 1. useState Hook(variable acces and change garcha)
  // // const [variable, setterFunction]=useState(initialValue)
  // const [name, setName] = useState("grishma khatiwada")
  // console.log(name)



  // const a=5
  // 2. useEffect Hook
  // (kati bela run hune)
  // Useeffect runs when the page reload or its dependency changes
  // useEffect(()=> {
  //   console.log("I am useEffect")
  // }, [a])
  // []---> This is dependency array


  return (
    <div className=" w-8/12 md:w-8/12 mx-auto mt-24  space-y-8">

      <button onClick={()=> setName("Grishma updated")}>
        Change Name
      </button>




      <p className="text-2xl font-semibold">Popular Products</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 ">
        {allProduts?.map((eachItem, index) => (
          <SingleProductCard eachItem={eachItem} key={index} />
        ))}
      </div>
    </div>
  );
}
