import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logoLoop from "../../assets/image/LOOP-logo (2).png";
import {
  FaSearch,
  FaUserAlt,
} from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import "../../index.css";

const NavBar = () => {
  const products = useSelector((state: RootState) => state.loopStore.products);
  return (
<<<<<<< HEAD
    <header className="bg-[#EFECEC] body-font">
      <div className="mx-auto relative flex flex-wrap px-5 py-3 flex-col md:flex-row items-center border border-b-[#76885B]">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 md:mb-0"
        >
          <img src={logoLoop} className="w-[100px]" alt="" />
        </Link>
        <nav className="text-[16px] font-medium text-[#76885B] md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-[#FC6736]">
=======
    <header className="text-gray-600 body-font bg-[#76885B]">
      <div
        className="text-light mx-auto flex flex-wrap py-3 flex-col md:flex-row items-center "
        style={{ width: "90%" }}
      >
        <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
          <span className=" text-2xl fw-500 text-light">byLoop.</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-3 hover:text-gray-900">
>>>>>>> refs/remotes/origin/develop
            Home
          </Link>
          <Link to="/best-sellers" className="mr-5 hover:text-[#FC6736]">
            Best Sellers
          </Link>
          <Link to="/new-arrivals" className="mr-5 hover:text-[#FC6736]">
            Shop
          </Link>
          <Link to="/blog" className="mr-5 hover:text-[#FC6736]">
            Sale
          </Link>
          <Link to="/contact" className="mr-5 hover:text-[#FC6736]">
            Contact Us
          </Link>
        </nav>
        <div className="text-[24px] font-semibold text-[#76885B] flex flex-wrap items-center text-base justify-between">
          <Link to="/login">
            <FaUserAlt />
          </Link>
          <Link to="/" className="ml-4 mr-2">
            <FaSearch />
          </Link>
          <Link to="/cart">
            <div className="relative ">
              <div className="flex justify-center h-[40px] items-center">
                <HiMiniShoppingBag className="-translate-x-12 text-[28px] group-hover:translate-x-3 transition-transform duration-200" />

                <HiMiniShoppingBag className="-translate-x-3 text-[28px] group-hover:translate-x-12 transition-transform duration-200" />
              </div>
              {/* Assuming 'products' is an array containing items in the cart */}
              {/* Display the number of products in the cart */}
              {products.length > 0 && (
                <p className="absolute top-1 right-2 bg-[#FC6736] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                  {products.length}
                </p>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>

    // Old versions

    // <header className="text-gray-600 body-font">
    //   <div className="text-light mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center bg-[#76885B]">
    //     <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
    //       <span className="ml-3 text-2xl fw-500 text-light">byLoop.</span>
    //     </a>
    //     <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    //       <Link to="/" className="mr-3 hover:text-gray-900">
    //         Home
    //       </Link>
    //       <Link to="/best-sellers" className="mr-3 hover:text-gray-900">
    //         Best Sellers
    //       </Link>
    //       <Link to="/new-arrivals" className="mr-3 hover:text-gray-900">
    //         New Arrivals
    //       </Link>
    //       <Link to="/contact" className="mr-3 hover:text-gray-900">
    //         Contact Us
    //       </Link>
    //       <Link to="/blog" className="mr-3 hover:text-gray-900">
    //         Blog
    //       </Link>
    //     </nav>
    //     <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">
    //       Button
    //       <svg
    //         fill="none"
    //         stroke="currentColor"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         stroke-width="2"
    //         className="w-4 h-4 ml-1"
    //         viewBox="0 0 24 24"
    //       >
    //         <path d="M5 12h14M12 5l7 7-7 7"></path>
    //       </svg>
    //     </button>
    //   </div>
    // </header>
  );
};

export default NavBar;
