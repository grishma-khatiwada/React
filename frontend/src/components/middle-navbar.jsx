import React from "react";
import { Heart, MapPin, ShoppingBag, User } from "lucide-react";
import myLogo from "../../public/logo.svg";

export default function MiddleNavbar() {
  return (
    <div className="flex justify-between w-8/12 mx-auto">
      <div>
        <img src={myLogo} alt="logo" />
      </div>

      <div className="flex gap-8">
        <input
          className=" border border-green-500 rounded md w-80 pl-2"
          type="text"
          placeholder="Search Location"
        />
        <button className="flex gap-2 items-center border border-green-500 px-4 rounded-md hover:bg-gray-300 hover:cursor-pointer">
          <MapPin size={16} /> Location
        </button>
      </div>

      <div className="flex gap-4">
        <Heart />
        <User />
        <ShoppingBag />
      </div>
    </div>
  );
}
