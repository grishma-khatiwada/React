import { LayoutDashboard, Menu } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";


export default function BottomNavbar() {
  return (
    <div className=" w-11/12 md:w-8/12 mx-auto items-center justify-between flex gap-8">
      <div className="flex items-center gap-8">
        <button className="flex gap-2 whitespace-nowrap bg-green-500 px-4 py-2 text-white rounded-md font-medium ">
          {" "}
          <LayoutDashboard /> All Departments
        </button>

        <div className="hidden lg:block">
        <div className=" flex items-center gap-8"> 
       <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/stores">Stores</NavLink>
        <NavLink to={"/megamenu"} className="whitespace-nowrap">Mega Menu</NavLink>
        <NavLink to={"/pages"}>Blogs</NavLink>
        <NavLink to={"/account"}>Account</NavLink>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
        <NavLink to={"/docs"} >Docs</NavLink>
       </div>
        </div>

       

      

      </div>

      <Menu className="block lg:hidden"/>

    </div>
  );
}
