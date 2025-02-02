import React from 'react'
import myImage from "../../public/single.jpeg"
import ReactStars from "react-stars";


export default function ProductDescription() {
  return (
    <div className='w-8/12 mx-auto grid grid-cols-2'>
        <div>
            <img src={myImage} alt="" />
        </div>

        <div className='space-y-2'>
            <p className='text-xs text-green-500 font-semibold'>Snack & Munchines</p>
            <p className='text-3xl font-semibold'>Haldiram's Sev Bhujia</p>

            <div className='flex items-center gap-4'>
          <ReactStars count={5} size={16} value={4.5} color2={"#ffd700"} />
          <p className='text-xs font-semibold text-green-500'>(4 reviews)</p>
            </div>

            <hr />

            <div className='mt-8 space-x-4'>
                <span className='border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500 ' >250g</span>
                <span className='border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500 ' >500g</span>
                <span className='border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500 ' >1kg</span>


               
            </div>

        </div>
    </div>
  )
}
