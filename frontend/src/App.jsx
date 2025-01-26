import React from "react";
import "./App.css";
import MiddleNavbar from "./components/middle-navbar";
import TopNavbar from "./components/top-navbar";
import BottomNavbar from "./components/bottom-navbar";
import HeroSsectionSlider from "./components/hero-section-slider";




export default function App() {
  return (
    <div className="space-y-4">
      <TopNavbar />
      <MiddleNavbar />
      <BottomNavbar/>
      <hr className="text-gray-200"/>
      <HeroSsectionSlider/>
    </div>
  );
}
