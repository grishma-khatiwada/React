import React from "react";
import "./App.css";
import { Heart, ShoppingBag, User } from "lucide-react";

export default function App() {
  return (
    <div>
      {/* Top Navbar */}
      <div className="bg-gray-200">
        <div className="flex justify-between  p-1 w-8/12 mx-auto font-medium opacity-60">
          <p>Super Value Deals - Save more with coupons</p>
          <p>English</p>
        </div>
      </div>

      {/* Middle Navbar */}
      <div className="flex justify-between">
        <div>1</div>
        <div>2</div>

        <div className="flex">
          <Heart />
          <User />
          <ShoppingBag />
        </div>
      </div>


    </div>
  );
}
