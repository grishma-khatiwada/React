import { Clock, Gift, Package, RotateCcw } from 'lucide-react'
import React from 'react'

export default function PageOne() {
  const Facilities = [
    {
      icon: <Clock size={30} className="text-green-500" />,
      title: "10 minute grocery now",
      details: "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.",
    },
    {
      icon: <Gift size={30} className="text-green-500" />,
      title: "Best Prices & Offers",
      details: "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best prices & offers.",
    },
    {
      icon: <Package size={30} className="text-green-500" />,
      title: "Wide Assortment",
      details: "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.",
    },
    {
      icon: <RotateCcw size={30} className="text-green-500" />,
      title: "Easy Returns",
      details: "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.",
    },
  ];

  return (
    <div className='mt-24 w-8/12 mx-auto grid grid-cols-2 gap-4 bg-white'>
      {Facilities.map((eachItems, index) => (
        <div key={index} className='p-6 text-left'>
          {eachItems.icon}
          <h3 className='font-semibold text-l mt-4'>{eachItems.title}</h3>
          <p className='text-sm opacity-70 mt-2'>{eachItems.details}</p>
        </div>
      ))}
    </div>
  );
}
