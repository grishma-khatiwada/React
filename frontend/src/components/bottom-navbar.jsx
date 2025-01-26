import { LayoutDashboard } from "lucide-react";
import React from "react";

export default function BottomNavbar() {
  return (
    <div className=" w-8/12 mx-auto items-center justify-between flex gap-8">
      <div className="flex items-center gap-8">
        <button className="flex gap-2 whitespace-nowrap bg-green-500 px-4 py-2 text-white rounded-md font-medium ">
          {" "}
          <LayoutDashboard /> All Departments
        </button>
        <p>Home</p>
        <p>Shop</p>
        <p>Stores</p>
        <p className="whitespace-nowrap">Mega Menu</p>
        <p>Pages</p>
        <p>Account</p>
        <p>Dashboard</p>
        <p>Docs</p>
      </div>

      <div></div>
    </div>
  );
}
