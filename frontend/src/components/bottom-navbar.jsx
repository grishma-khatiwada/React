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
       <p>Home</p>
        <p>Shop</p>
        <p>Stores</p>
        <p className="whitespace-nowrap">Mega Menu</p>
        <p>Pages</p>
        <p>Account</p>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
        <NavLink to="/docs" >Docs</NavLink>
       </div>
        </div>

       

      

      </div>

      <Menu className="block lg:hidden"/>

    </div>
  );
}
