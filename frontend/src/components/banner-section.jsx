import React from 'react'
import bannerImageOne from "../../public/banner1.png"
import bannerImageTwo from "../../public/banner2.png"


export default function BannerSection() {
  return (
    <div className='w-11/12 md:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-24 '>

        <div className='relative h-64'>
            <img  src={bannerImageOne} alt="banner-one" className='h-56 md:h-64 object-cover'/>
            <div className='absolute top-8 left-8 space-y-2 md:space-y-4'>
                <p className='text-lg md:text-3xl font-bold'>Fruits & Vegetables</p>
                <p className='font-semibold opacity-70'>Get Upto 30% off</p>
                <button className='bg-black text-white px-4 py-2 font-extrabold rounded-md'>SHOP NOW</button>
            </div>
        </div>

        <div className='relative h-64'>
            <img src={bannerImageTwo} alt="banner-two" className=' h-56 md:h-64 object-cover' />
            <div className='absolute top-8 left-8 space-y-2 md:space-y-4'>
                <p className='text-lg md:text-3xl font-bold'>Freshly Baked Buns</p>
                <p className=' font-semibold opacity-70'>Get Upto 25% off</p>
                <button className='bg-black text-white px-4 py-2 font-extrabold rounded-md'>SHOP NOW</button>
            </div>

        </div>



    </div>
  )
}
