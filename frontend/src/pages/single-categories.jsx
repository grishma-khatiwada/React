import React from "react";
import SingleProductCard from "../components/single-product-card";
import myImage from "../../public/categories.jpeg";

export default function SingleCategories() {
  const products = [
    {
      image: myImage,
      category: "snack And Munchins",
      name: "Haldiram Sev Bhujiya",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "snack And Munchins 1",
      name: "Haldiram Sev Bhujiya 1",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "snack And Munchins 2",
      name: "Haldiram Sev Bhujiya 2",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "snack And Munchins 3",
      name: "Haldiram Sev Bhujiya 4",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "snack And Munchins 5",
      name: "Haldiram Sev Bhujiya 6",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "snack And Munchins 7",
      name: "Haldiram Sev Bhujiya 7",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
    {
      image: myImage,
      category: "snack And Munchins 8",
      name: "Haldiram Sev Bhujiya 8",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "snack And Munchins 9",
      name: "Haldiram Sev Bhujiya 9",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "snack And Munchins 10",
      name: "Haldiram Sev Bhujiya 10",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "snack And Munchins 11",
      name: "Haldiram Sev Bhujiya 11 ",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "snack And Munchins 12",
      name: "Haldiram Sev Bhujiya 12",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "snack And Munchins 13",
      name: "Haldiram Sev Bhujiya 13",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
  ];

  return (
    <div className=" w-8/12 mx-auto">
      <div className=" bg-gray-300 py-24 text-5xl font-semibold text-center">
        Snacks and Munchines
      </div>
      
      {/*  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
        {products.map((eachItem, index) => (
          <SingleProductCard eachItem={eachItem} key={index} />   //props passing(parent's property acces by child)
        ))}
      </div>
    </div>
  );
}
