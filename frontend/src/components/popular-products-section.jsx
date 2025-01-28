import React from "react";
import myImage from "../../public/categories.jpeg";
import ReactStars from "react-stars";

export default function PopularProductsSection() {
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
    <div className="w-8/12 mx-auto mt-24  space-y-8">
      <p className="text-2xl font-semibold">Popular Products</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 ">
        {products.map((eachItem, index) => (
          <div key={index} 
          className="border border-gray-300 rounded-md flex flex-col items-center justify-center p-4 space-y-1.5">
            <img src={myImage} alt="" />
            <p className="font-semibold opacity-50 text-xs">
              Snack and Munchains
            </p>
            <p className="font-semibold text-sm">Haldiram sav Bhujiya</p>

            <div className="flex items-center gap-2">
              <ReactStars count={5} size={16} value={4.5} color2={"#ffd700"} />
              <p className="font-semibold opacity-75 text-sm">4.3 (4)</p>
            </div>

            <div className="flex items-center justify-between w-full ">
              <p className="font-semibold">
                $21.6 <span className="opacity-70">$247</span>
              </p>
              <button className="bg-green-500 text-white font-semibold rounded-md px-4 py-1 text-xs ">
                ADD
              </button>
            </div>
          </div>


        ))}
      </div>

    </div>
  );
}
