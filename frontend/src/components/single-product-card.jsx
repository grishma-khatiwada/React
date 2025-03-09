import React from "react";
import ReactStars from "react-stars";
import myImage from "../../public/categories.jpeg";
import { NavLink } from "react-router";

export default function SingleProductCard({eachItem}) {
  return (
    <div>
      <NavLink to={'/shop/${eachItem._id}'} className="border border-gray-300 rounded-md flex flex-col items-center justify-center p-4 space-y-1.5">
        <img className="h-30"
         src={eachItem.imageUrl} alt="" />
        <p className="font-semibold opacity-50 text-xs">{eachItem.category}</p>
        <p className="font-semibold text-sm">{eachItem.name}</p>

        <div className="flex items-center gap-2">
          <ReactStars count={5} size={16} value={4.5} color2={"#ffd700"} />
          {/* <p className="font-semibold opacity-75 text-sm">
            {" "}
            {eachItem.rating} (4)
          </p> */}
        </div>

        <div className="flex items-center justify-between w-full ">
          <p className="font-semibold">
            $21.6 <span className="opacity-70">{eachItem.previousPrice}</span>
          </p>
          <button className="bg-red-500 text-white font-semibold rounded-md px-4 py-1 text-xs ">
            ADD
          </button>
        </div>
      </NavLink>
    </div>
  );
}
