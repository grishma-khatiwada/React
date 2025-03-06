import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import myImage from "../../public/categories.jpeg";

export default function FeaturesCategoriesSection() {
  //Usestate Hook(utility function)
  // const[variable, setterFunction]=useState(initialValue)____> (setname can change the value of name)
  const [name, setName] = useState("Grishma ");
  console.log(name);

  const handleNameChange = () => {
    setName("Grishma Khatiwada Changed");
  };

  // useEffect Hook
  // UseEfferct runs only when the page reloads and when its dependency gets changed (Square bracket is dependency)
  // const a =7
  // useEffect(()=>{
  //   console.log("Hello")

  // }, [a])
  // fetch all categories function
  const [isLoading, setIsLoading] = useState(false);

  // npm axios- to fectch data
  const [allCategories, setAllCategories] = useState();

  const fetchAllCategories = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:4000/categories");
      setIsLoading(false);
      setAllCategories(response.data.data);
    } catch (error) {
      setIsLoading(false);
      console.log("Something Went Wrong", error);
    }
  };
  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <div className="w-11/12 md:w-8/12 mx-auto space-y-8 mt-24 ">
      {name}

      <button onClick={handleNameChange} className="bg-green-300">
        Change Name
      </button>
      <p className="text-2xl font-semibold">Featured Categories</p>
      {isLoading && <p>Loading....</p>}

      <div>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {allCategories?.map((eachItem, index) => (
            <SwiperSlide key={index}>
              <div className=" space-y-2 overflow-hidden border border-gray-300 rounded-2xl flex flex-col items-center justify-center hover:border-green-500 hover:shadow-2xl duration-500 ">
                <img className="h-40 w-40"
                src={eachItem.imageUrl} alt="" height={100} width={100} />
                <p className="font-semibold text-center">{eachItem.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
}
