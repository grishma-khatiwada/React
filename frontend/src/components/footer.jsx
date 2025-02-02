import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaShoppingCart,
} from "react-icons/fa";

export default function Footer() {
  const footerSections = [
    {
      title: "Categories",
      links: [
        "Vegetables & Fruits",
        "Breakfast & Instant Food",
        "Bakery & Biscuits",
        "Atta, Rice & Dal",
        "Sauces & Spreads",
        "Organic & Gourmet",
        "Baby Care",
        "Cleaning Essentials",
        "Personal Care",
        "Dairy, Bread & Eggs",
        "Cold Drinks & Juices",
        "Tea, Coffee & Drinks",
        "Masala, Oil & More",
        "Chicken, Meat & Fish",
        "Paan Corner",
        "Pharma & Wellness",
        "Home & Office",
        "Pet Care",
      ],
    },

    {
      title: "Get to Know Us",
      links: ["Company", "About", "Blog", "Help Center", "Our Value"],
    },
    {
      title: "For Consumers",
      links: [
        "Payments",
        "Shipping",
        "Product Returns",
        "FAQ",
        "Shop Checkout",
      ],
    },
    {
      title: "Become a Shopper",
      links: [
        "Shopper Opportunities",
        "Become a Shopper",
        "Earnings",
        "Ideas & Guides",
        "New Retailers",
      ],
    },
    {
      title: "FreshCart Programs",
      links: ["Gift Cards", "Promos & Coupons", "FreshCart Ads", "Careers"],
    },
  ];

  return (
    <div>
      <div className="w-11/12 md:w-8/12 mx-auto bg-gray-100 py-10 mt-10 ">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-800">{section.title}</h3>
                <ul className="mt-2 space-y-2 text-sm text-gray-600 ">
                  {section.links.map((link, i) => (
                    <li key={i} className="hover:text-gray-900 cursor-pointer">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <hr className=" text-gray-200 mt-10 " />
          {/* Payment & App Links */}
          <div className="mt-5 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4">
              <p className="font-bold">Payment Partners</p>

              <img
                src="../public/amazonpay.svg"
                alt="Amazon Pay"
                className="h-6"
              />
              <img
                src="../public/mastercard.svg"
                alt="MasterCard"
                className="h-6"
              />
              <img src="../public/paypal.svg" alt="PayPal" className="h-6" />
              <img src="../public/visa.svg" alt="Visa" className="h-6" />
            </div>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <p className="font-bold ">Get deleveries with FreshCart</p>
              <img
                src="../public/googleplay-btn.svg"
                alt="Google Play"
                className="h-8"
              />
              <img
                src="../public/appstore-btn.svg"
                alt="App Store"
                className="h-8"
              />
            </div>
          </div>
          <hr className=" text-gray-200 mt-5 " />

          {/* Social Links */}
          <div className=" flex justify-between items-center ">
            <p className="text-center text-sm text-gray-500 mt-4">
              © 2025 FreshCart eCommerce. Powered by{" "}
              <span className="text-green-500">Codescandy</span>.
            </p>
            <div className="mt-6 flex justify-center space-x-4 text-gray-600">
              <p className="text-sm text-gray-500">Follow Us on</p>
              <FaFacebook
                size={24}
                className="hover:text-gray-900 cursor-pointer"
              />
              <FaTwitter
                size={24}
                className="hover:text-gray-900 cursor-pointer"
              />
              <FaInstagram
                size={24}
                className="hover:text-gray-900 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-end mr-4">
        <button className="bg-black text-white px-6 py-2 rounded w-40  flex items-center justify-center space-x-2">
          <FaShoppingCart className="text-white" size={20} />
          <span>Buy Now</span>
        </button>
      </div>
      
    </div>
  );
}
