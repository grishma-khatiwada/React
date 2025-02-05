import React from "react";
import { NavLink } from "react-router-dom";

export default function Account() {
  return (
    <div className="flex flex-col items-center mt-10">
    
      <div className="space-y-4">
        <NavLink
          to={"/signin"}
          className="block px-4 py-2 bg-blue-500 text-white rounded-md text-center"
        >
          SignIn
        </NavLink>
        <NavLink
          to={"/signup"}
          className="block px-4 py-2 bg-green-500 text-white rounded-md text-center"
        >
          SignUp
        </NavLink>
      </div>
    </div>
  );
}
