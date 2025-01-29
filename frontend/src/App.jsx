import React from "react";
import "./App.css";
import MiddleNavbar from "./components/middle-navbar";
import TopNavbar from "./components/top-navbar";
import BottomNavbar from "./components/bottom-navbar";
import HeroSsectionSlider from "./components/hero-section-slider";
import FeaturesCategoriesSection from "./components/features-categories-section";
import BannerSection from "./components/banner-section";
import PopularProductsSection from "./components/popular-products-section";
import PageOne from "./components/page-one";
import PageTwo from "./components/page-two";




export default function App() {
  return (
    <div className="space-y-4">
      {/*
      
     
      */}
       <TopNavbar />
       <MiddleNavbar />
       <BottomNavbar/>
       <hr className="text-gray-200"/>
      <HeroSsectionSlider/>
       <FeaturesCategoriesSection/>
       <BannerSection/>
      <PopularProductsSection/>

     
      {/* <PageOne/>
      <PageTwo/> */}
    </div>
  );
}
