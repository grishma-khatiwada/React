import React from "react";

export default function SingleBlogCard({ eachItem }) {
  return (
    <div className="mt-8 rounded-xl">
      <div className="w-full h-40 overflow-hidden rounded-md">
        <img 
          src={eachItem.image} 
          alt={eachItem.title} 
          className="w-full h-full object-cover transform hover:scale-110 transition-all duration-400"
        />
      </div>

      <h3 className="mt-4 text-lg font-bold">{eachItem.title}</h3>
      <p className="mt-4 text-sm text-gray-600">{eachItem.description}</p>

      <div className="flex justify-between text-xs mt-4 text-gray-500">
        <p>{eachItem.date}</p>
        <p>Read time: {eachItem.readTime}</p>
      </div>
    </div>
  );
}
