import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NavTop from "./NavTop";

const NavBar = () => {
 
  return (
    <Fragment>
      <NavTop />
      <nav className="bg-white border-gray-200 boder border-b dark:bg-gray-900">
        <div className="container max-w-screen- text-[#76885B]  flex px-5 py-2 text-center flex-wrap items-center justify-between mx-auto">
          <ul className="flex mx-auto font-medium  md:p-0 rounded-lg md:space-x-8">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-[#76885B] rounded hover:text-[#FC6736] md:bg-transparent md:p-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-items"
                className="block py-2 px-3 text-[#76885B] rounded  md:hover:bg-transparent hover:text-[#FC6736] md:p-0"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/sale"
                className="block py-2 px-3 text-[#76885B] rounded  md:hover:bg-transparent hover:text-[#FC6736] md:p-0"
              >
                Sale
              </Link>
            </li>
            <li>
              <Link
                to="/payment"
                className="block py-2 px-3 text-[#76885B] rounded  md:hover:bg-transparent hover:text-[#FC6736] md:p-0"
              >
                Payment
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-[#76885B] rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#FC6736] md:p-0"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
