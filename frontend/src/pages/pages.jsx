import React from "react";
import SingleBlogCard from "../components/single-blog-card";
import blogImageOne from "../../public/blog-img-1.jpg";
import blogImageTwo from "../../public/blog-img-2.jpg";
import blogImageThree from "../../public/blog-img-3.jpg";
import blogImageFour from "../../public/blog-img-4.jpg";
import blogImageFive from "../../public/blog-img-5.jpg";
import blogImageSix from "../../public/blog-img-6.jpg";



export default function Pages() {
  const blogs = [
    {
      title: "Harissa Chickpeas with Whipped Feta",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac erat ut neque bibendum egestas.",
      date: "22 April 2023",
      readTime: "12min",
      image: blogImageOne,
    },
    {
      title: "Healthy Salad Recipes to Try",
      description:
        "Discover delicious and nutritious salad recipes to elevate your mealsrat ut neque bibendum egestas. ",
      date: "15 May 2023",
      readTime: "8min",
      image: blogImageTwo,
    },
    {
      title: "Top 5 Superfoods for Energy Boost",
      description:
        "Stay energized throughout the day with these top superfoods.",
      date: "5 June 2023",
      readTime: "10min",
      image: blogImageThree,
    },
    {
      title: "Top 5 Superfoods for Energy Boost",
      description:
        "Stay energized throughout the day with these top superfoods.",
      date: "5 June 2023",
      readTime: "10min",
      image: blogImageFour,
    }, {
      title: "Top 5 Superfoods for Energy Boost",
      description:
        "Stay energized throughout the day with these top superfoods.",
      date: "5 June 2023",
      readTime: "10min",
      image: blogImageOne,
    }, {
      title: "Top 5 Superfoods for Energy Boost",
      description:
        "Stay energized throughout the day with these top superfoods.",
      date: "5 June 2023",
      readTime: "10min",
      image: blogImageOne,
    }, {
      title: "Top 5 Superfoods for Energy Boost",
      description:
        "Stay energized throughout the day with these top superfoods.",
      date: "5 June 2023",
      readTime: "10min",
      image: blogImageOne,
    }, {
      title: "Top 5 Superfoods for Energy Boost",
      description:
        "Stay energized throughout the day with these top superfoods.",
      date: "5 June 2023",
      readTime: "10min",
      image: blogImageOne,
    },
    {
      title: "Top 5 Superfoods for Energy Boost",
      description:
        "Stay energized throughout the day with these top superfoods.",
      date: "5 June 2023",
      readTime: "10min",
      image: blogImageOne,
    },
  ];

  return (
    <div className=" mt-8 w-8/12 mx-auto ">
      <h1 className="text-4xl font-bold mb-8">FreshCart Blog</h1>
      <div className="flex justify-between items-start space-x-6">
        <div className="w-500 rounded-xl overflow-hidden  ">
          <img
            className="w-full h-auto transform hover:scale-110 transition-all duration-400 object-cover"
            src={blogImageOne}
            alt=""
          />
        </div>
        <div className=" mt-4 ">
          <h2 className="text-2xl font-semibold">
            Harissa Chickpeas with Whipped Feta
          </h2>
          <p className="text-sm mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Minima, obcaecati?{" "}
          </p>
          <div className="flex justify-between text-xs mt-4 text-gray-500">
            <p>22 April 2023</p>
            <p>Read time: 12min</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        <div className="flex items-center gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((eachItem, index) => (
              <SingleBlogCard eachItem={eachItem} key={index} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
