
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import myImage from "../../public/categories.jpeg"

export default function FeaturesCategoriesSection() {

    const categories =[
        {
            image: myImage,
            name: "biscutes1",
        },
        {
            image: myImage,
            name: "biscutes2",
        },
        {
            image: myImage,
            name: "biscutes3",
        },
        {
            image: myImage,
            name: "biscutes4",
        },
        {
            image: myImage,
            name: "biscutes5",
        },
        {
            image: myImage,
            name: "biscutes6",
        },
    ];



  return (
    <div className='w-8/12 mx-auto space-y-8 mt-24 '>
        <p className='text-2xl font-semibold'>Featured Categories</p>

        <div>
        <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">


            {
                categories.map((eachItem, index)=>(
             <SwiperSlide key={index}>
            <div className=' space-y-2 overflow-hidden border border-gray-300 rounded-2xl flex flex-col items-center justify-center hover:border-green-500 hover:shadow-2xl duration-500 '> 
            <img src={eachItem.image} alt=""  height={100} width={100}/>
            <p className='font-semibold text-center'>{eachItem.name}</p>
            </div>

        </SwiperSlide>

                ))
            }




        


      </Swiper>
        </div>
    </div>
  )
}
