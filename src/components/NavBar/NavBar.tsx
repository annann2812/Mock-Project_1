import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBg } from "../../../public/styled";
import { router } from "../../routes";

const NavBar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="text-light mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center bg-[#76885B]">
        <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
          <span className="ml-3 text-2xl fw-500 text-light">byLoop.</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-3 hover:text-gray-900">
            Home
          </Link>
          <Link to="/best-sellers" className="mr-3 hover:text-gray-900">
            Best Sellers
          </Link>
          <Link to="/new-arrivals" className="mr-3 hover:text-gray-900">
            New Arrivals
          </Link>
          <Link to="/contact" className="mr-3 hover:text-gray-900">
            Contact Us
          </Link>
          <Link to="/blog" className="mr-3 hover:text-gray-900">
            Blog
          </Link>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
