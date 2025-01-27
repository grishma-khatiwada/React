import React from 'react'
import bannerImageOne from "../../public/banner1.png"
import bannerImageTwo from "../../public/banner2.png"


export default function BannerSection() {
  return (
    <div className='w-8/12 mx-auto grid grid-cols-2 gap-4 mt-24 '>

        <div className='relative h-64'>
            <img  src={bannerImageOne} alt="banner-one" />
            <div className='absolute top-8 left-8'>
                <p className='text-2xl font-semibold'>Fruits & Vegetables</p>
                <p>Get Upto 30% off</p>
                <button className='bg-black text-white px-4 py-2 rounded mt-2'>SHOP NOW</button>
            </div>
        </div>

        <div className='relative h-64'>
            <img src={bannerImageTwo} alt="banner-two" />
            <div className='absolute top-8 left-8'>
                <p className='text-2xl font-semibold'>Freshly Baked Buns</p>
                <p>Get Upto 25% off</p>
                <button className='bg-black text-white px-4 py-2 rounded mt-2'>SHOP NOW</button>
            </div>

        </div>



    </div>
  )
}
