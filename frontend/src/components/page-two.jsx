import React from 'react';
import Bucket from "../../public/bucket.svg";
import bannerOne from "../../public/ad-banner-1.jpg";
import bannerTwo from "../../public/ad-banner-2.jpg";
import bannerThree from "../../public/ad-banner-3.jpg";

export default function PageTwo() {
  const Offer = [
    {
      title: <>
      10% cashback on <br /> personal care"</> ,
      details:<>Max cashback: $12 <br />Code: <span className='font-extrabold'>CARE12 </span></> ,
      image: bannerOne,
    },
    {
      title:<>
          Say yes to<br />
          season’s fresh
        </>,
      details: <>Refresh your day <br />the fruity way</>,
      image: bannerTwo,
    },
    {
      title: <>When in doubt,<br /> eat ice cream </>,
      details: <>Enjoy a scoop of <br /> summer today </> ,
      image: bannerThree,
    },
  ];

  return (
    <div className="w-8/12 mx-auto">
      <div className=" mt-24 flex items-center justify-between text-center bg-gray-100 rounded-lg p-8 w-full h-32">
        <div className="flex-shrink-0">
          <img src={Bucket} alt="bucket-image" />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="font-bold text-2xl">Welcome To FreshCart</h2>
          <p className="opacity-70">
            Download the app get free food & <span className="text-green-500">$30</span> off on your first order.
          </p>
        </div>
        <button className="mt-2 bg-black text-white px-4 py-2 rounded-lg">Download FreshCart App</button>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-24 ">
        {Offer.map((eachItem, index) => (
           <div key={index} className='relative border border-gray-300 rounded-md '>
                      <img  src={eachItem.image} height={500} width={500} alt="banner-one" />
                      <div className='absolute top-8 left-8 space-y-4'>
                          <p className='text-2xl font-bold'>{eachItem.title}</p>
                          <p className='font-semibold opacity-70'>{eachItem.details}</p>
                          <button className='bg-black text-white px-4 py-2 font-semibold rounded-md'>SHOP NOW</button>
                      </div>
                  </div>
        ))}
      </div>
      
    </div>
  );
}
